#!/usr/bin/env node
import assert from "node:assert/strict";
import { chromium } from "playwright";

const rawUrl = process.env.A11Y_BASE_URL ?? "http://127.0.0.1:8080/";
const url = new URL(rawUrl);
const loopbackHosts = new Set(["127.0.0.1", "localhost", "::1", "[::1]"]);

if (!["http:", "https:"].includes(url.protocol) || !loopbackHosts.has(url.hostname)) {
  throw new Error("A11Y_BASE_URL must be an http(s) loopback URL (localhost or 127.0.0.1).");
}

const viewports = [
  { name: "desktop", width: 1280, height: 800, isMobile: false, hasTouch: false },
  { name: "phone", width: 393, height: 852, isMobile: true, hasTouch: true },
  { name: "narrow-phone", width: 320, height: 740, isMobile: true, hasTouch: true },
];

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const results = [];

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      isMobile: viewport.isMobile,
      hasTouch: viewport.hasTouch,
      deviceScaleFactor: viewport.isMobile ? 2 : 1,
    });
    const page = await context.newPage();
    const pageErrors = [];

    page.on("pageerror", (error) => pageErrors.push(String(error?.message ?? error)));
    await page.goto(url.toString(), { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.locator("#granaries").waitFor({ state: "visible", timeout: 20000 });

    const layout = await page.evaluate(() => {
      const root = document.documentElement;
      const buttons = [...document.querySelectorAll("#granaries button")];
      const gridButtons = [...document.querySelectorAll("#granaries .vault-grid-cell")];
      const mapButtons = [...document.querySelectorAll("#granaries .vault-map-cell[role="button"]")];
      const gridLabels = new Set(gridButtons.map((button) => button.getAttribute("aria-label")));
      const mapButtonsWithoutEquivalent = mapButtons
        .filter((button) => !gridLabels.has(button.getAttribute("aria-label")))
        .map((button) => button.getAttribute("aria-label"));
      const undersized = buttons
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            label: el.getAttribute("aria-label") || el.textContent?.trim() || el.tagName,
            width: Math.round(rect.width * 10) / 10,
            height: Math.round(rect.height * 10) / 10,
          };
        })
        .filter((target) => target.width < 24 || target.height < 24);
      const shortGridTargets = gridButtons
        .map((el) => Math.round(el.getBoundingClientRect().height * 10) / 10)
        .filter((height) => height < 44);
      return {
        viewportWidth: window.innerWidth,
        documentWidth: root.scrollWidth,
        clientWidth: root.clientWidth,
        horizontalOverflow: root.scrollWidth > root.clientWidth + 1,
        mapCellCount: mapButtons.length,
        gridButtonCount: gridButtons.length,
        mapButtonsWithoutEquivalent,
        mapKeyboardTabStops: mapButtons.filter((button) => button.tabIndex === 0).length,
        gridTabStops: gridButtons.filter((button) => button.tabIndex === 0).length,
        undersizedTargets: undersized,
        gridTargetsBelow44px: shortGridTargets,
      };
    });

    assert.equal(layout.horizontalOverflow, false, `${viewport.name}: horizontal page overflow`);
    assert.equal(layout.mapCellCount, 58, `${viewport.name}: expected 58 map controls`);
    assert.equal(layout.gridButtonCount, 58, `${viewport.name}: expected 58 equivalent grid controls`);
    assert.deepEqual(layout.mapButtonsWithoutEquivalent, [], `${viewport.name}: every compact SVG target must have an equivalent labelled grid control`);
    assert.equal(layout.mapKeyboardTabStops, 1, `${viewport.name}: the SVG map should expose one roving keyboard tab stop`);
    assert.equal(layout.gridTabStops, 58, `${viewport.name}: each equivalent numbered button should remain reachable by keyboard`);
    assert.deepEqual(layout.undersizedTargets, [], `${viewport.name}: a granary control is below WCAG 24×24 CSS px`);
    assert.deepEqual(layout.gridTargetsBelow44px, [], `${viewport.name}: a granary grid target is below the 44px design goal`);

    await page.locator("#granaries h2").evaluate((element) => {
      element.setAttribute("tabindex", "-1");
      element.focus();
    });
    await page.keyboard.press("Tab");
    const focusReport = await page.evaluate(() => {
      const element = document.activeElement;
      if (!element || element === document.body) return null;
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      const sticky = document.querySelector(".pin-bar");
      const stickyRect = sticky?.getBoundingClientRect();
      const stickyVisible = Boolean(stickyRect && stickyRect.width > 0 && stickyRect.height > 0);
      const hiddenBySticky =
        stickyVisible &&
        sticky !== null &&
        !sticky.contains(element) &&
        rect.width > 0 &&
        rect.height > 0 &&
        rect.top >= stickyRect.top &&
        rect.left >= stickyRect.left &&
        rect.bottom <= stickyRect.bottom &&
        rect.right <= stickyRect.right;
      return {
        tag: element.tagName,
        role: element.getAttribute("role"),
        focusVisible: element.matches(":focus-visible"),
        outlineStyle: style.outlineStyle,
        outlineWidth: style.outlineWidth,
        hiddenBySticky,
      };
    });
    assert.ok(focusReport?.focusVisible, `${viewport.name}: keyboard focus is not reported as :focus-visible`);
    assert.notEqual(focusReport.outlineStyle, "none", `${viewport.name}: first keyboard target has no focus outline`);
    assert.ok(Number.parseFloat(focusReport.outlineWidth) >= 2, `${viewport.name}: focus outline is thinner than 2px`);
    assert.equal(focusReport.hiddenBySticky, false, `${viewport.name}: keyboard target is fully obscured by the sticky bar`);

    const firstTab = page.locator('#granaries [role="tab"][aria-selected="true"]');
    const oldTabId = await firstTab.getAttribute("id");
    await firstTab.focus();
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => {
      const active = document.activeElement;
      return active?.getAttribute("role") === "tab" && active.getAttribute("aria-selected") === "true";
    });
    const nextTabId = await page.evaluate(() => document.activeElement?.id ?? "");
    assert.notEqual(nextTabId, oldTabId, `${viewport.name}: ArrowRight did not advance the selected tab`);

    const selectedMapCell = page.locator("#granaries .vault-map-cell[aria-pressed='true']");
    const currentMapId = await selectedMapCell.getAttribute("id");
    const currentNumber = Number(currentMapId?.replace("vault-map-cell-", ""));
    const expectedNumber = currentNumber === 58 ? 1 : currentNumber + 1;
    await selectedMapCell.focus();
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction((expectedId) => {
      const active = document.activeElement;
      return active?.id === expectedId && active.getAttribute("aria-pressed") === "true";
    }, `vault-map-cell-${expectedNumber}`);
    const mapFocusStyle = await page.evaluate(() => {
      const rect = document.activeElement?.querySelector("rect");
      return rect ? getComputedStyle(rect).strokeWidth : "0";
    });
    assert.ok(Number.parseFloat(mapFocusStyle) >= 3, `${viewport.name}: focused SVG map cell has no visible focus treatment`);

    if (viewport.hasTouch) {
      const gridTarget = page.locator("#granaries .vault-grid-cell").nth(11);
      await gridTarget.tap();
      assert.equal(await gridTarget.getAttribute("aria-pressed"), "true", `${viewport.name}: touch did not select a grid item`);
      const postTapOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      );
      assert.equal(postTapOverflow, false, `${viewport.name}: horizontal overflow appeared after touch interaction`);
    }

    assert.deepEqual(pageErrors, [], `${viewport.name}: uncaught browser errors`);
    results.push({
      viewport: viewport.name,
      size: `${viewport.width}×${viewport.height}`,
      ...layout,
      keyboardFocus: "visible",
      tabArrowNavigation: "passed",
      horizontalTabDownArrowUnmodified: "by APG pattern (not intercepted)",
      svgMapKeyboardNavigation: "passed",
      svgTargetEquivalentControls: "58 labelled 44px grid buttons",
      touchSelection: viewport.hasTouch ? "passed" : "not applicable",
      pageErrors,
    });
    await context.close();
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify({ ok: true, url: url.toString(), results }, null, 2));
