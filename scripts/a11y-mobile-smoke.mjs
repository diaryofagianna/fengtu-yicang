
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
      viewport: {
        width: viewport.width,
        height: viewport.height,
      },
      isMobile: viewport.isMobile,
      hasTouch: viewport.hasTouch,
      deviceScaleFactor: viewport.isMobile ? 2 : 1,
    });

    const page = await context.newPage();
    const pageErrors = [];

    page.on("pageerror", (error) => {
      pageErrors.push(String(error?.message ?? error));
    });

    await page.goto(url.toString(), {
      waitUntil: "domcontentloaded",
      timeout: 45000,
    });

    await page.locator("#granaries").waitFor({
      state: "visible",
      timeout: 20000,
    });

    await page.locator(
  '#granaries[data-hydrated="true"]'
).waitFor({
  state: "visible",
  timeout: 20000,
});

    // 1. Responsive layout and accessible control checks
    const layout = await page.evaluate(() => {
      const root = document.documentElement;

      const buttons = [
        ...document.querySelectorAll("#granaries button"),
      ];

      const gridButtons = [
        ...document.querySelectorAll("#granaries .vault-grid-cell"),
      ];

      const mapButtons = [
        ...document.querySelectorAll(
          '#granaries .vault-map-cell[role="button"]'
        ),
      ];

      const gridLabels = new Set(
        gridButtons.map((button) => button.getAttribute("aria-label"))
      );

      const mapButtonsWithoutEquivalent = mapButtons
        .filter(
          (button) =>
            !gridLabels.has(button.getAttribute("aria-label"))
        )
        .map((button) => button.getAttribute("aria-label"));

      const undersized = buttons
        .map((el) => {
          const rect = el.getBoundingClientRect();

          return {
            label:
              el.getAttribute("aria-label") ||
              el.textContent?.trim() ||
              el.tagName,
            width: Math.round(rect.width * 10) / 10,
            height: Math.round(rect.height * 10) / 10,
          };
        })
        .filter(
          (target) => target.width < 24 || target.height < 24
        );

      const shortGridTargets = gridButtons
        .map((el) =>
          Math.round(el.getBoundingClientRect().height * 10) / 10
        )
        .filter((height) => height < 44);

      return {
        viewportWidth: window.innerWidth,
        documentWidth: root.scrollWidth,
        clientWidth: root.clientWidth,
        horizontalOverflow:
          root.scrollWidth > root.clientWidth + 1,

        mapCellCount: mapButtons.length,
        gridButtonCount: gridButtons.length,
        mapButtonsWithoutEquivalent,

        mapKeyboardTabStops: mapButtons.filter(
          (button) => button.tabIndex === 0
        ).length,

        gridTabStops: gridButtons.filter(
          (button) => button.tabIndex === 0
        ).length,

        undersizedTargets: undersized,
        gridTargetsBelow44px: shortGridTargets,
      };
    });

    assert.equal(
      layout.horizontalOverflow,
      false,
      `${viewport.name}: horizontal page overflow`
    );

    assert.equal(
      layout.mapCellCount,
      58,
      `${viewport.name}: expected 58 map controls`
    );

    assert.equal(
      layout.gridButtonCount,
      58,
      `${viewport.name}: expected 58 equivalent grid controls`
    );

    assert.deepEqual(
      layout.mapButtonsWithoutEquivalent,
      [],
      `${viewport.name}: every compact SVG target must have an equivalent labelled grid control`
    );

    assert.equal(
      layout.mapKeyboardTabStops,
      1,
      `${viewport.name}: the SVG map should expose one roving keyboard tab stop`
    );

    assert.equal(
      layout.gridTabStops,
      58,
      `${viewport.name}: each equivalent numbered button should remain reachable by keyboard`
    );

    assert.deepEqual(
      layout.undersizedTargets,
      [],
      `${viewport.name}: a granary control is below WCAG 24×24 CSS px`
    );

    assert.deepEqual(
      layout.gridTargetsBelow44px,
      [],
      `${viewport.name}: a granary grid target is below the 44px design goal`
    );

    // 2. Keyboard focus visibility and sticky bar checks
    await page.locator("#granaries h2").evaluate((element) => {
      element.setAttribute("tabindex", "-1");
      element.focus();
    });

    await page.keyboard.press("Tab");

    const focusReport = await page.evaluate(() => {
      const element = document.activeElement;

      if (!element || element === document.body) {
        return null;
      }

      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();

      const sticky = document.querySelector(".pin-bar");
      const stickyRect = sticky?.getBoundingClientRect();

      const stickyVisible = Boolean(
        stickyRect &&
        stickyRect.width > 0 &&
        stickyRect.height > 0
      );

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

    assert.ok(
      focusReport?.focusVisible,
      `${viewport.name}: keyboard focus is not reported as :focus-visible`
    );

    assert.notEqual(
      focusReport.outlineStyle,
      "none",
      `${viewport.name}: first keyboard target has no focus outline`
    );

    assert.ok(
      Number.parseFloat(focusReport.outlineWidth) >= 2,
      `${viewport.name}: focus outline is thinner than 2px`
    );

    assert.equal(
      focusReport.hiddenBySticky,
      false,
      `${viewport.name}: keyboard target is fully obscured by the sticky bar`
    );


    // 3. Horizontal tab keyboard navigation
    const tabSelector =
      '#granaries [role="tab"]';

    const firstTab = page.locator(
      `${tabSelector}[aria-selected="true"]`
    );

    const oldTabId = await firstTab.getAttribute("id");

    const tabIds = await page.locator(tabSelector).evaluateAll(
      (tabs) => tabs.map((tab) => tab.id)
    );

    const oldIndex = tabIds.indexOf(oldTabId);

    assert.ok(
      oldIndex >= 0,
      `${viewport.name}: selected tab was not found`
    );

    const expectedTabId =
      tabIds[(oldIndex + 1) % tabIds.length];

    // Locator.press automatically focuses the tab and sends ArrowRight.
    await firstTab.press("ArrowRight");

    // First check whether React selected the next tab.
    try {
      await page.waitForFunction(
        (expectedId) => {
          const selected = document.querySelector(
            '#granaries [role="tab"][aria-selected="true"]'
          );

          return selected?.id === expectedId;
        },
        expectedTabId,
        { timeout: 5000 }
      );
    } catch (error) {
      const state = await page.evaluate(() => ({
        activeTabId: document.activeElement?.id ?? null,
        selectedTabId:
          document.querySelector(
            '#granaries [role="tab"][aria-selected="true"]'
          )?.id ?? null,
      }));

      throw new Error(
        `${viewport.name}: ArrowRight did not change the selected tab. ` +
        `Expected: ${expectedTabId}. ` +
        `Actual: ${JSON.stringify(state)}. ` +
        `Original error: ${error.message}`
      );
    }

    // Then independently verify keyboard focus.
    const nextTabId = await page.evaluate(
      () => document.activeElement?.id ?? ""
    );

    assert.equal(
      nextTabId,
      expectedTabId,
      `${viewport.name}: tab selection changed but keyboard focus did not move. ` +
      `Expected: ${expectedTabId}; actual: ${nextTabId}`
    );



    // 4. SVG map keyboard navigation
    const selectedMapCell = page.locator(
      "#granaries .vault-map-cell[aria-pressed='true']"
    );

    const currentMapId = await selectedMapCell.getAttribute("id");

    assert.ok(
      currentMapId,
      `${viewport.name}: no selected SVG map cell found`
    );

    const currentNumber = Number(
      currentMapId.replace("vault-map-cell-", "")
    );

    assert.ok(
      Number.isInteger(currentNumber) &&
      currentNumber >= 1 &&
      currentNumber <= 58,
      `${viewport.name}: invalid selected SVG map cell ID: ${currentMapId}`
    );

    const expectedNumber =
      currentNumber === 58 ? 1 : currentNumber + 1;

    const expectedMapId = `vault-map-cell-${expectedNumber}`;

    await selectedMapCell.focus();
    await page.keyboard.press("ArrowRight");

    try {
      await page.waitForFunction(
        (expectedId) => {
          const active = document.activeElement;

          const selected = document.querySelector(
            "#granaries .vault-map-cell[aria-pressed='true']"
          );

          return (
            active?.id === expectedId &&
            selected?.id === expectedId
          );
        },
        expectedMapId,
        { timeout: 5000 }
      );
    } catch (error) {
      const debug = await page.evaluate(() => {
        const active = document.activeElement;

        const selected = document.querySelector(
          "#granaries .vault-map-cell[aria-pressed='true']"
        );

        const mapCells = [
          ...document.querySelectorAll(
            "#granaries .vault-map-cell[role='button']"
          ),
        ];

        return {
          activeElement: {
            tag: active?.tagName ?? null,
            id: active?.id ?? null,
            role: active?.getAttribute("role") ?? null,
            tabIndex: active?.getAttribute("tabindex") ?? null,
          },

          selectedCell: {
            id: selected?.id ?? null,
            tabIndex: selected?.getAttribute("tabindex") ?? null,
          },

          keyboardTabStops: mapCells
            .filter((cell) => cell.tabIndex === 0)
            .map((cell) => cell.id),

          totalMapCells: mapCells.length,
        };
      });

      throw new Error(
        `${viewport.name}: SVG ArrowRight navigation failed. ` +
        `Expected ${expectedMapId}. ` +
        `Actual state: ${JSON.stringify(debug)}. ` +
        `Original error: ${error.message}`
      );
    }

    const mapFocusStyle = await page.evaluate(() => {
      const rect = document.activeElement?.querySelector("rect");

      return rect
        ? getComputedStyle(rect).strokeWidth
        : "0";
    });

    assert.ok(
      Number.parseFloat(mapFocusStyle) >= 3,
      `${viewport.name}: focused SVG map cell has no visible focus treatment`
    );

    // 5. Touch interaction checks on mobile
    if (viewport.hasTouch) {
      const gridTarget = page.locator(
        "#granaries .vault-grid-cell"
      ).nth(11);

      await gridTarget.tap();

      assert.equal(
        await gridTarget.getAttribute("aria-pressed"),
        "true",
        `${viewport.name}: touch did not select a grid item`
      );

      const postTapOverflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth + 1
      );

      assert.equal(
        postTapOverflow,
        false,
        `${viewport.name}: horizontal overflow appeared after touch interaction`
      );
    }

    // 6. Browser runtime error checks
    assert.deepEqual(
      pageErrors,
      [],
      `${viewport.name}: uncaught browser errors`
    );

    results.push({
      viewport: viewport.name,
      size: `${viewport.width}×${viewport.height}`,
      ...layout,
      keyboardFocus: "visible",
      tabArrowNavigation: "passed",
      svgMapKeyboardNavigation: "passed",
      svgTargetEquivalentControls: "58 labelled 44px grid buttons",
      touchSelection: viewport.hasTouch
        ? "passed"
        : "not applicable",
      pageErrors,
    });

    await context.close();
  }
} finally {
  await browser.close();
}

// 7. Final test report
console.log(
  JSON.stringify(
    {
      ok: true,
      url: url.toString(),
      results,
    },
    null,
    2
  )
);
