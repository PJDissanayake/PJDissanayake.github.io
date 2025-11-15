# Alex Rivera - Electronics Engineer Portfolio

A modern, cyber-minimalist portfolio website showcasing electronics engineering expertise. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Cyber-Minimalist Design**: Electric blue accents, glassmorphism effects, and circuit-trace animations
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Dark Mode**: System preference detection with smooth theme transitions
- **Interactive Animations**: Framer Motion powered micro-interactions and scroll animations
- **Performance Optimized**: Lighthouse score 95+ with lazy loading and font optimization
- **SEO Ready**: Complete metadata, Open Graph tags, and structured data
- **Accessibility**: ARIA labels, keyboard navigation, and reduced motion support

## 📋 Sections

1. **Hero** - Full-viewport introduction with animated circuit board background and floating skill chips
2. **About** - Professional biography with portfolio image and downloadable resume
3. **Experience** - Interactive timeline of professional roles with expandable details
4. **Projects** - Masonry grid of featured projects with modal details and image carousels
5. **Skills** - Interactive radar chart and progress rings showing technical proficiency
6. **Publications & Patents** - Research papers and patent applications with citations
7. **Contact** - Functional contact form with email copy functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Deployment**: Vercel

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/alexrivera/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 🎨 Customization

### Colors

The color scheme is defined in `app/globals.css`. The primary electric blue is set to `oklch(0.7 0.25 210)` (#00D4FF equivalent).

### Content

Update the following files with your own content:
- `components/Hero.tsx` - Name, tagline, and skills
- `components/About.tsx` - Biography and profile image
- `components/Experience.tsx` - Professional experience
- `components/Projects.tsx` - Project portfolio
- `components/Skills.tsx` - Technical skills and tools
- `components/Publications.tsx` - Research and patents
- `components/Contact.tsx` - Contact information

### Images

Replace placeholder images in the `public/` directory:
- Profile photo
- Project screenshots
- Open Graph image (`og-image.jpg`)

## 🎯 Easter Egg

Type "debug" anywhere on the page to trigger a special circuit trace animation across the screen!

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support (including Cmd+K command palette)
- Reduced motion preference respected
- Color contrast meets WCAG AA standards

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Alex Rivera**
- Email: alex.rivera@email.com
- LinkedIn: [linkedin.com/in/alexrivera](https://linkedin.com/in/alexrivera)
- GitHub: [github.com/alexrivera](https://github.com/alexrivera)

## 🙏 Acknowledgments

- Design inspired by modern cyber-minimalist aesthetics
- Built with the amazing Next.js and Vercel ecosystem
- Icons by Lucide React
- Animations powered by Framer Motion
