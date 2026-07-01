import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/motion-wrapper"

interface SectionHeaderProps {
  badge?: string
  title: string
  highlight?: string
  description?: string
  className?: string
  align?: "center" | "left"
}

export function SectionHeader({
  badge,
  title,
  highlight,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <FadeIn className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      {badge && (
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-white">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
        {title}{" "}
        {highlight && <span className="text-highlight">{highlight}</span>}
      </h2>
      {description && (
        <p className="max-w-2xl text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </FadeIn>
  )
}
