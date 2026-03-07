import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

interface ArticleCardProps {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
}

export function ArticleCard({ slug, title, description, date, tags }: ArticleCardProps) {
  return (
    <Link
      href={`/tutorials/${slug}`}
      className="glass-card block p-6 group"
    >
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <Calendar className="w-4 h-4" />
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-primary/15 border border-primary/40 rounded-full text-xs font-mono text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
        Read article <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  )
}
