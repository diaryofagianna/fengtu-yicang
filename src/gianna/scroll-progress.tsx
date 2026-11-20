import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [fallback, setFallback] = useState<number | null>(null);

  useEffect(() => {
    if (typeof CSS !== "undefined" && CSS.supports("animation-timeline", "scroll()")) return;
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setFallback(max > 0 ? root.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden>
      <div className="scroll-progress-bar" style={fallback == null ? undefined : { transform: `scaleX(${fallback})` }} />
    </div>
  );
}
