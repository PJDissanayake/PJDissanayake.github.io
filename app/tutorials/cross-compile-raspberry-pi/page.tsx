import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Windows to Raspberry Pi Remote C++ Cross-Compilation with Eclipse | Pathum Dissanayake",
  description: "Step-by-step guide to setting up a Windows environment to cross-compile C++ code for Raspberry Pi using Eclipse IDE.",
}

const navLinks = [
  { href: "/tutorials", label: "Tutorials" },
  { href: "#prerequisites", label: "Prerequisites" },
  { href: "#installation", label: "Installation" },
  { href: "#configuration", label: "Configuration" },
]

export default function CrossCompileArticle() {
  return (
    <main className="min-h-screen">
      <Navigation links={navLinks} showBackToHome />

      <article className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tutorials
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight">
              Windows to Raspberry Pi Remote C++ Cross-Compilation with Eclipse
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                15 min read
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["C++", "Raspberry Pi", "Eclipse", "Cross-Compilation", "CMake", "GDB"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/15 border border-primary/40 rounded-full text-xs font-mono text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <section className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                This guide provides step-by-step instructions for setting up a Windows environment to cross-compile C++ code for Raspberry Pi using Eclipse IDE. It covers installing the GCC cross-compiler, configuring Eclipse, setting up CMake, and debugging with GDB.
              </p>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Prerequisites</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Windows PC (32-bit or 64-bit)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Raspberry Pi with Raspbian OS (e.g., Bookworm, Bullseye, or Buster)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Internet connection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Git installed for cloning repositories
                </li>
              </ul>
            </section>

            {/* Step 1 */}
            <section id="installation" className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Install the GCC Cross-Compiler</h2>
              <p className="text-muted-foreground mb-4">
                Download and install the GCC cross-compiler based on your Windows OS and target Raspberry Pi OS:
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">For 32-bit Windows</h3>
              <p className="text-muted-foreground mb-2">
                Download from{" "}
                <Link
                  href="http://gnutoolchains.com/raspberry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent inline-flex items-center gap-1"
                >
                  gnutoolchains.com/raspberry <ExternalLink className="w-3 h-3" />
                </Link>
              </p>
              <ul className="space-y-1 text-muted-foreground mb-6 ml-4">
                <li>• Raspbian GNU/Linux 12 (Bookworm): <code className="text-primary bg-secondary px-2 py-0.5 rounded">raspberry-gcc12.2.0-r2.exe</code> (399 MB)</li>
                <li>• Raspbian GNU/Linux 11 (Bullseye): <code className="text-primary bg-secondary px-2 py-0.5 rounded">raspberry-gcc10.2.1-r2.exe</code> (408 MB)</li>
                <li>• Raspbian GNU/Linux 10 (Buster): <code className="text-primary bg-secondary px-2 py-0.5 rounded">raspberry-gcc8.3.0-r4.exe</code> (761 MB)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">For 64-bit Windows</h3>
              <p className="text-muted-foreground mb-2">
                Download from{" "}
                <Link
                  href="https://gnutoolchains.com/raspberry64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent inline-flex items-center gap-1"
                >
                  gnutoolchains.com/raspberry64 <ExternalLink className="w-3 h-3" />
                </Link>
              </p>
              <ul className="space-y-1 text-muted-foreground mb-6 ml-4">
                <li>• Raspbian GNU/Linux 12 (Bookworm): <code className="text-primary bg-secondary px-2 py-0.5 rounded">raspberry64-gcc12.2.0.exe</code> (409 MB)</li>
                <li>• Raspbian GNU/Linux 11 (Bullseye): <code className="text-primary bg-secondary px-2 py-0.5 rounded">raspberry64-gcc10.2.1.exe</code> (702 MB)</li>
              </ul>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-foreground">
                  <strong>Installation Path:</strong> Install the toolchain to <code className="text-primary bg-secondary px-2 py-0.5 rounded">C:\SysGCC\raspberry</code> (32-bit) or <code className="text-primary bg-secondary px-2 py-0.5 rounded">C:\SysGCC\raspberry64</code> (64-bit).
                </p>
              </div>
            </section>

            {/* Step 2 */}
            <section className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Install SmarTTY</h2>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono">1.</span>
                  Download SmarTTY from{" "}
                  <Link
                    href="https://sysprogs.com/SmarTTY/download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent inline-flex items-center gap-1"
                  >
                    sysprogs.com/SmarTTY/download <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono">2.</span>
                  Install to <code className="text-primary bg-secondary px-2 py-0.5 rounded">C:\Program Files (x86)\Sysprogs\SmarTTY</code>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono">3.</span>
                  Synchronize the Raspberry Pi sysroot
                </li>
              </ol>

              <div className="mt-4 bg-card rounded-lg p-4 border border-border overflow-x-auto">
                <p className="text-sm text-muted-foreground mb-2">For 32-bit:</p>
                <pre className="text-primary font-mono text-sm">
{`"C:\\Program Files (x86)\\Sysprogs\\SmarTTY\\SmarTTY.exe" /UpdateSysroot:C:\\SysGCC\\raspberry\\arm-linux-gnueabihf\\sysroot`}
                </pre>
              </div>

              <div className="mt-4 bg-card rounded-lg p-4 border border-border overflow-x-auto">
                <p className="text-sm text-muted-foreground mb-2">For 64-bit:</p>
                <pre className="text-primary font-mono text-sm">
{`"C:\\Program Files (x86)\\Sysprogs\\SmarTTY\\SmarTTY.exe" /UpdateSysroot:C:\\SysGCC\\raspberry64\\aarch64-linux-gnu\\sysroot`}
                </pre>
              </div>
            </section>

            {/* Step 3 */}
            <section className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Clone the Project Repository</h2>
              <p className="text-muted-foreground mb-4">
                Clone your project repository to your local machine:
              </p>
              <div className="bg-card rounded-lg p-4 border border-border overflow-x-auto">
                <pre className="text-primary font-mono text-sm">git clone &lt;your-repository-url&gt;</pre>
              </div>
            </section>

            {/* Step 4 */}
            <section id="configuration" className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Configure Eclipse IDE</h2>
              
              <ol className="space-y-4 text-muted-foreground">
                <li>
                  <span className="text-primary font-semibold">1. Open Eclipse IDE for Embedded C/C++ Developers</span>
                </li>
                <li>
                  <span className="text-primary font-semibold">2. Import the project:</span>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Go to <code className="text-primary bg-secondary px-2 py-0.5 rounded">File → Import... → C/C++ → Existing Code as Makefile Project</code></li>
                    <li>• Select the cloned project directory and name the project</li>
                  </ul>
                </li>
                <li>
                  <span className="text-primary font-semibold">3. Configure the toolchain:</span>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Go to <code className="text-primary bg-secondary px-2 py-0.5 rounded">Project → Properties → C/C++ Build → Builder Settings</code></li>
                    <li>• Check &quot;Generate Makefiles automatically&quot; but do not apply yet</li>
                    <li>• Go to <code className="text-primary bg-secondary px-2 py-0.5 rounded">C/C++ Build → Settings</code></li>
                    <li>• Set the cross-toolchain prefix to <code className="text-primary bg-secondary px-2 py-0.5 rounded">arm-linux-gnueabihf-</code> (32-bit) or <code className="text-primary bg-secondary px-2 py-0.5 rounded">aarch64-linux-gnu-</code> (64-bit)</li>
                    <li>• Set the toolchain binaries path, e.g., <code className="text-primary bg-secondary px-2 py-0.5 rounded">C:\SysGCC\raspberry\bin</code></li>
                    <li>• Return to Builder Settings and uncheck &quot;Generate Makefiles automatically&quot;</li>
                  </ul>
                </li>
                <li>
                  <span className="text-primary font-semibold">4. Configure the Build Output Parser:</span>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Go to <code className="text-primary bg-secondary px-2 py-0.5 rounded">Window → Preferences → C/C++ → Build → Settings → Discovery Tab → CDT GCC Build Output Parser</code></li>
                    <li>• Set the compiler pattern to <code className="text-primary bg-secondary px-2 py-0.5 rounded">{`(.*gcc)|(.*g\\+\\+)|(clang)`}</code></li>
                  </ul>
                </li>
                <li>
                  <span className="text-primary font-semibold">5. Configure SSH connection:</span>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Go to <code className="text-primary bg-secondary px-2 py-0.5 rounded">Debug → Debug Configurations → Connection → New Connection → SSH</code></li>
                    <li>• Set up the connection and browse the remote file path on the Raspberry Pi</li>
                  </ul>
                </li>
              </ol>
            </section>

            {/* Step 5 */}
            <section className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Build and Test</h2>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono">1.</span>
                  Build the project: <code className="text-primary bg-secondary px-2 py-0.5 rounded">Project → Build Project</code>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono">2.</span>
                  SSH into the Raspberry Pi and run the executable:
                </li>
              </ol>
              <div className="mt-4 bg-card rounded-lg p-4 border border-border overflow-x-auto">
                <pre className="text-primary font-mono text-sm">
{`chmod +x your_executable
./your_executable`}
                </pre>
              </div>
            </section>

            {/* Step 6 */}
            <section className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Debug with GDB</h2>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono">1.</span>
                  Go to <code className="text-primary bg-secondary px-2 py-0.5 rounded">Run → Debug Configurations → C_-Hello-World Debug → Debugger tab</code>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono">2.</span>
                  Set the GDB debugger to:
                </li>
              </ol>
              <div className="mt-4 bg-card rounded-lg p-4 border border-border overflow-x-auto">
                <p className="text-sm text-muted-foreground mb-2">For 32-bit:</p>
                <pre className="text-primary font-mono text-sm">C:\SysGCC\raspberry\bin\arm-linux-gnueabihf-gdb.exe</pre>
              </div>
              <div className="mt-4 bg-card rounded-lg p-4 border border-border overflow-x-auto">
                <p className="text-sm text-muted-foreground mb-2">For 64-bit:</p>
                <pre className="text-primary font-mono text-sm">C:\SysGCC\raspberry64\bin\aarch64-linux-gnu-gdb.exe</pre>
              </div>
              <p className="text-muted-foreground mt-4">Apply and test the connection.</p>
            </section>

            {/* Step 7 */}
            <section className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Set Up CMake</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Install cmake4eclipse plugin</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Go to <code className="text-primary bg-secondary px-2 py-0.5 rounded">Help → Eclipse Marketplace</code></li>
                <li>• Search for &quot;cmake4eclipse&quot;, select the plugin, and install. Restart Eclipse.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Add toolchain to PATH</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Right-click <code className="text-primary bg-secondary px-2 py-0.5 rounded">This PC → Properties → Advanced system settings → Environment Variables</code></li>
                <li>• Under System Variables, find <code className="text-primary bg-secondary px-2 py-0.5 rounded">Path</code>, click Edit, and add the toolchain path</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Install Ninja</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Download <code className="text-primary bg-secondary px-2 py-0.5 rounded">ninja.exe</code> from{" "}
                  <Link
                    href="https://github.com/ninja-build/ninja/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent inline-flex items-center gap-1"
                  >
                    github.com/ninja-build/ninja/releases <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>• Place it in <code className="text-primary bg-secondary px-2 py-0.5 rounded">C:\Ninja</code> and add to system Path</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Install CMake</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Download the latest <code className="text-primary bg-secondary px-2 py-0.5 rounded">.msi</code> installer from{" "}
                  <Link
                    href="https://cmake.org/download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent inline-flex items-center gap-1"
                  >
                    cmake.org/download <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>• Install and add CMake to the system Path</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Example CMakeLists.txt</h3>
              <div className="bg-card rounded-lg p-4 border border-border overflow-x-auto">
                <pre className="text-primary font-mono text-sm">
{`cmake_minimum_required(VERSION 3.10)
project(ExampleProject)
set(CMAKE_CXX_STANDARD 11)
add_executable(your_executable main.cpp)`}
                </pre>
              </div>
            </section>

            {/* Additional Resources */}
            <section className="glass-card p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Additional Resources</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="https://stackoverflow.com/questions/27180771/how-to-configure-a-particular-gcc-cross-toolchain-in-eclipse-cdt/27180772#27180772"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent inline-flex items-center gap-1"
                  >
                    StackOverflow: Configure GCC Cross-Toolchain in Eclipse <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_oklch(0.75_0.18_195_/_0.7)]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tutorials
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
