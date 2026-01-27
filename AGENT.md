# AGENT.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Astro. It features a clean, minimal design with support for posts, categories, and RSS feeds.

## Tech Stack

- **Framework**: Astro 4.11.1
- **Language**: TypeScript 5.5.2
- **Styling**: UnoCSS (Atomic CSS engine)
- **Package Manager**: pnpm 9.6.0 (required)
- **Markdown**: markdown-it with sanitize-html for sanitization
- **RSS**: @astrojs/rss
- **Sitemap**: @astrojs/sitemap

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Create a new post
pnpm new-post

# Update theme
pnpm update-theme

# TypeScript check
pnpm astro check
```

## Project Structure

```
src/
├── components/      # Astro components (Header, Footer, Post, etc.)
├── content/
│   └── posts/       # Markdown blog posts (content layer)
├── layouts/         # Page layouts
├── pages/           # Astro pages and routes
│   ├── index.astro           # Home page
│   ├── archive.astro         # Archive page
│   ├── about.astro           # About page
│   ├── categories/           # Category pages
│   ├── posts/[...slug].astro # Individual post pages
│   └── posts/page/           # Pagination pages
├── styles/          # CSS files (Heti typography)
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── i18n.ts          # Internationalization
├── middleware.ts    # Astro middleware
└── theme.config.ts  # Theme configuration
```

## Code Principles

- Use `.md` files in `src/content/posts/` for blog posts
- Follow frontmatter format: title, date, description, categories, etc.
- Keep components modular and reusable
- Use UnoCSS utility classes for styling
- Prefer content collections for type-safe content management

## Important Notes

- Posts are written in Markdown with frontmatter
- The blog uses `@astrojs/rss` for RSS feed generation
- `@astrojs/sitemap` generates sitemap.xml automatically
- `astro-robots-txt` handles robots.txt
- `astro-seo` manages SEO metadata
