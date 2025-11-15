'use client'

export default function CircuitBoard() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path
            d="M 20 50 L 100 50 L 100 80 M 100 50 L 180 50 M 50 20 L 50 100 L 80 100 M 50 100 L 20 100 M 150 20 L 150 180"
            className="circuit-trace"
          />
          <circle cx="100" cy="50" r="4" fill="#00D4FF" />
          <circle cx="50" cy="100" r="4" fill="#00D4FF" />
          <circle cx="150" cy="150" r="4" fill="#00D4FF" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  )
}
