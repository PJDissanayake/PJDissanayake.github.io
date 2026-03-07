import Image from "next/image"
import Link from "next/link"
import { Play, Youtube, FileText } from "lucide-react"

const featuredTutorials = [
  {
    videoId: "brKJn_MMjGk",
    title: "How to Interface OLED Display with STM32",
    meta: "STM32f103c8 MCU • SSD1306 OLED Display",
  },
  {
    videoId: "AFeb4m-Gl-4",
    title: "STM32 ADC Tutorial | Poll for Conversion & DMA Mode",
    meta: "Setting up the STM32 ADC • Polling for conversion method",
  },
]

const featuredArticles = [
  {
    slug: "cross-compile-raspberry-pi",
    title: "Windows to Raspberry Pi Remote C++ Cross-Compilation with Eclipse",
    description: "Step-by-step guide to set up cross-compilation environment for Raspberry Pi using Eclipse IDE on Windows.",
  },
]

export function TutorialsPreview() {
  return (
    <section id="tutorials-preview" className="py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Tutorials & Articles
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Sharing knowledge through video tutorials and technical content
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Videos */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <Youtube className="w-5 h-5" />
              Featured Videos
            </h3>
            <div className="space-y-6">
              {featuredTutorials.map((tutorial) => (
                <Link
                  key={tutorial.videoId}
                  href={`https://youtu.be/${tutorial.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card block overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <Image
                      src={`https://img.youtube.com/vi/${tutorial.videoId}/maxresdefault.jpg`}
                      alt={tutorial.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {tutorial.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{tutorial.meta}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Featured Articles
            </h3>
            <div className="space-y-6">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/tutorials/${article.slug}`}
                  className="glass-card block p-6 group"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-muted-foreground">{article.description}</p>
                  <span className="inline-block mt-4 text-primary text-sm font-medium">
                    Read more →
                  </span>
                </Link>
              ))}
              <div className="glass-card p-6 bg-primary/5">
                <p className="text-muted-foreground text-center">
                  More articles coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_oklch(0.75_0.18_195_/_0.7)]"
          >
            <Youtube className="w-5 h-5" />
            View All Tutorials
          </Link>
        </div>
      </div>
    </section>
  )
}
