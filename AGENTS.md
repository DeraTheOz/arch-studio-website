# AGENTS.md

## Project Overview

Production-grade multi-page architecture studio website built with:

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Hook Form
- Zod
- Zustand
- Sanity CMS (optional but preferred)

Goal:
Build a scalable, SEO-optimized, accessible, portfolio-worthy application following real-world frontend engineering standards.

---

# Core Engineering Principles

- Prefer Server Components by default.
- Use Client Components only when interactivity is required.
- Keep components small, composable, and single-purpose.
- Separate UI, business logic, validation, and data access.
- Prioritize accessibility, SEO, and performance.
- Avoid unnecessary global state.
- Maintain strict type safety.
- Follow semantic naming and scalable architecture.

---

# Recommended Stack

| Concern          | Tool                  |
| ---------------- | --------------------- |
| Framework        | Next.js App Router    |
| Language         | TypeScript            |
| Styling          | Tailwind CSS v4       |
| Animations       | Framer Motion         |
| Forms            | React Hook Form + Zod |
| State Management | Zustand               |
| CMS              | Sanity                |
| Icons            | Lucide                |
| Maps             | Leaflet               |
| Testing          | Vitest + Playwright   |
| Deployment       | Vercel                |

---

# Rendering Strategy

## Default

Use Server Components.

## Use `"use client"` ONLY for:

- Forms
- Sliders
- Mobile navigation
- Animations
- Maps
- Interactive UI

Avoid unnecessary client-side rendering.

---

# State Management

## Local State

Use component state for:

- Mobile menu
- Tabs
- Modals
- Carousels
- Form UI

## Global State (Zustand)

Use ONLY for:

- Shared UI state
- Theme state
- Cross-page UI coordination

Do NOT use Redux.

Avoid Context API overuse.

---

# SEO Requirements

Every route MUST include metadata.

Use:

- Metadata API
- Dynamic metadata
- OpenGraph tags
- Structured data
- Sitemap
- Robots.txt

## Required SEO Features

- Semantic heading hierarchy
- Descriptive alt text
- Canonical URLs
- Dynamic page titles
- JSON-LD schema
- Optimized images using `next/image`

---

# Accessibility Requirements

Always:

- Use semantic HTML
- Use proper landmark elements
- Ensure keyboard accessibility
- Maintain focus visibility
- Add aria labels where needed
- Preserve heading hierarchy

Never sacrifice accessibility for visuals.

---

# Folder Conventions

Folders & files

- Use kebab-case

---

# Component Architecture

## components/ui

Pure reusable UI primitives.

Examples:

- button
- input
- container
- section
- heading

Must contain no business logic.

## features/\*

Feature-specific logic.

Examples:

- validation
- services
- actions
- types
- business logic

---

# Styling Rules

- Use Tailwind utilities first.
- Extract reusable patterns into components.
- Avoid arbitrary values unless necessary.
- Use consistent spacing scale.
- Keep responsive behavior mobile-first.

---

# Forms

Use:

- React Hook Form
- Zod validation

Validation flow:

schema → form → server validation

All forms must validate on both client and server.

---

# Performance Standards

Required:

- Lazy loading
- Dynamic imports
- Optimized images
- Route-level loading states
- Minimal client bundles
- Font optimization

Avoid:

- Large client components
- Unnecessary re-renders
- Over-fetching
- Animations

Use Framer Motion sparingly.

Preferred usage:

- Page transitions
- Hero transitions
- Reveal animations
- Mobile navigation

Avoid excessive animation.

---

# CMS Architecture

Preferred CMS:

### Sanity

Content types:

- Projects
- Team members
- Office locations
- Testimonials

Portfolio pages should use dynamic routing:

- /portfolio/[slug]

---

# TypeScript Rules

- Strict mode enabled.
- Avoid any.
- Prefer inferred types when clear.
- Share reusable types in /types.
- Keep component props explicitly typed.
- Data Fetching

Prefer:

- Server-side fetching
- Async Server Components
- Cached fetches where appropriate

Avoid unnecessary client fetching.

# File Structure

```txt
app/
components/
├── ui/
├── layout/
├── home/
├── about/
├── portfolio/
└── contact/

features/
hooks/
lib/
stores/
styles/
types/
content/
public/
```

---

# App Router Structure

```txt
# app/
├── (marketing)/
│   ├── about/
│   ├── contact/
│   ├── portfolio/
│   │   └── [slug]/
│   ├── layout.tsx
│   └── page.tsx
│
├── api/
│   └── contact/
│
├── favicon.ico
├── globals.css
├── layout.tsx
├── sitemap.ts
└── robots.ts
```
