import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    if (typeof CSS !== "undefined" && CSS.supports("animation-timeline", "scroll()")) return;
    let frame = 0;
    let last = -1;
    const apply = () => {
      frame = 0;
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const next = max > 0 ? root.scrollTop / max : 0;
      if (Math.abs(next - last) < 0.004) return;
      last = next;
      el.style.transform = `scaleX(${next})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden>
      <div ref={bar} className="scroll-progress-bar" />
    </div>
  );
}
