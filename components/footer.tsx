import Link from "next/link"

const footerLinks = [
  { href: "mailto:dkpjdissanayaka@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/pathum-j-dissanayake/", label: "LinkedIn" },
  { href: "https://github.com/PJDissanayake", label: "GitHub" },
  { href: "https://www.youtube.com/@ElectrixLab", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-secondary py-8 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <p className="text-muted-foreground mb-4">
          © {new Date().getFullYear()} Pathum Dissanayake
        </p>
        <div className="flex gap-8 justify-center flex-wrap">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="text-primary transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
