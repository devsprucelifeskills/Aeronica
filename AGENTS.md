<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Aeronica Website

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design System
- Fonts: Space Grotesk (headings), Inter (body) — loaded via `next/font/google` in `src/app/layout.tsx`
- Colors: midnight (#091B33), electric (#00A3FF), neon (#00E5FF), graphite (#2B2D31), steel (#6B7280), silver (#B8C2CC), light (#F2F4F7)
- Card radius: 20px, shadow: 0 10px 30px rgba(0,0,0,0.08)
- Button radius: 12px, primary: bg-electric (#00A3FF), hover: #0089D9

## Structure
- `src/app/` - Next.js App Router pages and layout
- `src/components/` - Section components (all "use client" for Framer Motion)
- All sections are single-page sections with id anchors for smooth scrolling
