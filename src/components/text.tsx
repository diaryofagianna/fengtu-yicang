import type { Bi } from "@/data/museum";
import { cn } from "@/lib/cn";
import { useMuseum, type Lang } from "@/lib/museum-store";

export function T({
  vi,
  zh,
  block,
  className,
  zhClassName,
}: Bi & { block?: boolean; className?: string; zhClassName?: string }) {
  const { lang } = useMuseum();
  if (lang === "vi") return <span className={className}>{vi}</span>;
  if (lang === "zh") return <span className={cn(className, "font-serif")}>{zh}</span>;
  return (
    <span className={cn(block ? "block" : "inline", className)}>
      <span className={block ? "block" : undefined}>{vi}</span>
      <span className={cn(block ? "mt-1 block text-ink/70" : "text-ink/70", zhClassName)}>
        {block ? zh : ` · ${zh}`}
      </span>
    </span>
  );
}

export function pick(lang: Lang, text: Bi) {
  if (lang === "zh") return text.zh;
  return text.vi;
}
