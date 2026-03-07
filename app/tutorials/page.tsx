import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TutorialCard } from "@/components/tutorial-card"
import { ArticleCard } from "@/components/article-card"
import Link from "next/link"
import { Youtube, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Tutorials | Pathum Dissanayake",
  description: "Video tutorials and technical articles on embedded systems, STM32, Raspberry Pi, and more.",
}

const navLinks = [
  { href: "#videos", label: "Videos" },
  { href: "#articles", label: "Articles" },
]

const youtubeVideos = [
  {
    videoId: "brKJn_MMjGk",
    title: "How to Interface OLED Display with STM32",
    meta: "STM32f103c8 MCU • SSD1306 OLED Display",
    description: "Learn how to connect and program an SSD1306 OLED display with STM32 microcontrollers using I2C communication.",
  },
  {
    videoId: "AFeb4m-Gl-4",
    title: "STM32 ADC Tutorial | Poll for Conversion & DMA Mode",
    meta: "Setting up the STM32 ADC • Polling for conversion method",
    description: "Complete guide to configuring and using the ADC peripheral on STM32 microcontrollers with both polling and DMA methods.",
  },
  {
    videoId: "2ZdaP9IP9OA",
    title: "STM32 PWM Tutorial | Normal Mode & DMA Mode with STM32F1",
    meta: "Configuring PWM in Normal Mode • Implementing PWM using DMA Mode",
    description: "Step-by-step tutorial on generating PWM signals with STM32 timers using both normal and DMA modes.",
  },
  {
    videoId: "-ZdFLRIujAU",
    title: "Raspberry Pi Zero 2W Setup | Install Raspbian OS & VNC Tutorial",
    meta: "How to install Raspbian OS • How to configure SSH and VNC",
    description: "Complete setup guide for Raspberry Pi Zero 2W including OS installation, SSH configuration, and VNC remote access.",
  },
]

const articles = [
  {
    slug: "cross-compile-raspberry-pi",
    title: "Windows to Raspberry Pi Remote C++ Cross-Compilation with Eclipse",
    description: "Step-by-step guide to setting up a Windows environment to cross-compile C++ code for Raspberry Pi using Eclipse IDE. Covers installing the GCC cross-compiler, configuring Eclipse, setting up CMake, and debugging with GDB.",
    date: "2025",
    tags: ["C++", "Raspberry Pi", "Eclipse", "Cross-Compilation"],
  },
]

export default function TutorialsPage() {
  return (
    <main className="min-h-screen">
      <Navigation links={navLinks} showBackToHome />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Tutorials & Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge through video tutorials and technical content on embedded systems, STM32, Raspberry Pi, and more.
          </p>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section id="videos" className="py-16 px-4 sm:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold gradient-text flex items-center gap-3">
              <Youtube className="w-8 h-8 text-primary" />
              Video Tutorials
            </h2>
            <Link
              href="https://www.youtube.com/@ElectrixLab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary text-primary rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Visit Channel
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {youtubeVideos.map((video) => (
              <TutorialCard key={video.videoId} {...video} />
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
            <FileText className="w-8 h-8 text-primary" />
            Technical Articles
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
