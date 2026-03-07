import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-center max-w-5xl mx-auto">
          <div className="animate-float mx-auto md:mx-0">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <Image
                src="/profile.jpg"
                alt="Pathum Dissanayake"
                fill
                className="object-cover rounded-2xl border-3 border-primary shadow-[0_0_50px_oklch(0.75_0.18_195_/_0.5),0_0_100px_oklch(0.65_0.15_220_/_0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_70px_oklch(0.75_0.18_195_/_0.7),0_0_120px_oklch(0.65_0.15_220_/_0.4)]"
              />
            </div>
          </div>

          <div className="glass-card p-8">
            <p className="text-lg leading-relaxed mb-6">
              Final-year BSc (Hons){" "}
              <span className="text-primary font-semibold">
                Electrical & Electronic Engineering
              </span>{" "}
              student at South Eastern University of Sri Lanka. Currently
              working as a part-time{" "}
              <span className="text-primary font-semibold">
                Associate Electronics Engineer
              </span>{" "}
              at Vega Innovations.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Expert in{" "}
              <span className="text-primary font-semibold">
                embedded systems
              </span>
              , C/C++, embedded Linux, and{" "}
              <span className="text-primary font-semibold">
                EV fast-charging systems
              </span>
              . Passionate about bare-metal programming, real-time systems, and
              building robust firmware for next-generation electric vehicle
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
