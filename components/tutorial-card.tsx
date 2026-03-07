import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

interface TutorialCardProps {
  videoId: string
  title: string
  meta: string
  description: string
}

export function TutorialCard({ videoId, title, meta, description }: TutorialCardProps) {
  return (
    <Link
      href={`https://youtu.be/${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card block overflow-hidden group"
    >
      <div className="relative h-56 overflow-hidden rounded-t-xl">
        <Image
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
            <Play className="w-8 h-8 text-primary-foreground ml-1" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{meta}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </Link>
  )
}
