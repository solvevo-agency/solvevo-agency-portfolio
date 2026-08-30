<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Structure

```text
.
├── AGENTS.md
├── CLAUDE.md
├── components.json
├── eslint.config.mjs
├── .gitignore
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── images
│   │   └── solvevo.jpg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   ├── app
│   │   ├── dashboard
│   │   │   ├── (auth)
│   │   │   │   └── login
│   │   │   │       ├── layout.tsx
│   │   │   │       └── page.tsx
│   │   │   └── (protected)
│   │   │       ├── blogs
│   │   │       │   └── page.tsx
│   │   │       ├── layout.tsx
│   │   │       ├── messages
│   │   │       │   └── page.tsx
│   │   │       ├── page.tsx
│   │   │       └── projects
│   │   │           └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── (landing)
│   │   │   ├── about
│   │   │   │   └── page.tsx
│   │   │   ├── blogs
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── projects
│   │   │       └── page.tsx
│   │   └── layout.tsx
│   ├── components
│   │   ├── shared
│   │   │   ├── dashboard-navbar.tsx
│   │   │   ├── dashboard-sidebar.tsx
│   │   │   ├── landing-footer.tsx
│   │   │   ├── landing-navbar.tsx
│   │   │   ├── logo.tsx
│   │   │   └── theme-toggle.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── skeleton.tsx
│   │       ├── sonner.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       └── tooltip.tsx
│   ├── config
│   │   ├── nav.config.ts
│   │   └── site.config.ts
│   ├── features
│   │   ├── dashboard
│   │   │   ├── components
│   │   │   │   ├── auth
│   │   │   │   │   └── login-view.tsx
│   │   │   │   ├── blogs
│   │   │   │   │   └── blogs-view.tsx
│   │   │   │   ├── messages
│   │   │   │   │   └── messages-view.tsx
│   │   │   │   ├── overview
│   │   │   │   │   └── overview-view.tsx
│   │   │   │   └── projects
│   │   │   │       └── projects-view.tsx
│   │   │   ├── static-data
│   │   │   │   ├── blogs.data.ts
│   │   │   │   ├── messages.data.ts
│   │   │   │   ├── overview.data.ts
│   │   │   │   └── projects.data.ts
│   │   │   └── types
│   │   │       └── index.ts
│   │   └── landing
│   │       ├── components
│   │       │   ├── about
│   │       │   │   └── about-page-view.tsx
│   │       │   ├── blogs
│   │       │   │   ├── blog-card.tsx
│   │       │   │   ├── blogs-page-view.tsx
│   │       │   │   └── blogs-section.tsx
│   │       │   ├── contact
│   │       │   │   └── contact-section.tsx
│   │       │   ├── faq
│   │       │   │   └── faq-section.tsx
│   │       │   ├── hero
│   │       │   │   └── hero-section.tsx
│   │       │   ├── projects
│   │       │   │   ├── project-card.tsx
│   │       │   │   ├── projects-page-view.tsx
│   │       │   │   └── projects-section.tsx
│   │       │   ├── reviews
│   │       │   │   ├── review-card.tsx
│   │       │   │   └── reviews-section.tsx
│   │       │   ├── services
│   │       │   │   └── services-section.tsx
│   │       │   └── stats
│   │       │       └── stats-section.tsx
│   │       ├── static-data
│   │       │   ├── blogs.data.ts
│   │       │   ├── faq.data.ts
│   │       │   ├── projects.data.ts
│   │       │   ├── reviews.data.ts
│   │       │   ├── services.data.ts
│   │       │   └── stats.data.ts
│   │       ├── types
│   │       │   ├── blog.types.ts
│   │       │   ├── faq.types.ts
│   │       │   ├── project.types.ts
│   │       │   ├── review.types.ts
│   │       │   ├── service.types.ts
│   │       │   └── stat.types.ts
│   │       └── validations
│   │           └── contact.schema.ts
│   ├── layouts
│   │   ├── dashboard-layout.tsx
│   │   └── landing-layout.tsx
│   ├── lib
│   │   └── utils.ts
│   ├── providers
│   │   ├── query-provider.tsx
│   │   ├── redux-provider.tsx
│   │   └── theme-provider.tsx
│   └── store
│       ├── hooks.ts
│       ├── slices
│       │   ├── auth.slice.ts
│       │   └── ui.slice.ts
│       └── store.ts
└── tsconfig.json
```

## Design Guidelines

When implementing new features or UI components, ALWAYS adhere to the following design patterns to maintain a modern, professional, and consistent aesthetic:

1. **Global Variables & Theming**: All core colors and radius variables must be managed globally in `src/app/globals.css`. Do not hardcode specific hex colors or random radius values into individual components.
2. **Component Reusability**: Use and extend the existing Shadcn UI components (e.g., `src/components/ui/button.tsx`, `input.tsx`) rather than building raw HTML elements. 
3. **Modern Aesthetics**:
   - Ensure interactive elements like Buttons have sufficient click areas (e.g., `h-11`, `px-6` for default buttons).
   - Use micro-interactions (`active:scale-[0.98]`, `transition-all`, smooth hover effects) for better user feedback.
   - Use bold typography (`font-semibold`) on primary actions.
   - Ensure inputs and textareas have clear focus rings (`focus-visible:ring-primary/20 focus-visible:border-primary`) and comfortable padding (`h-12`, `px-4 py-3`).
   - Use subtle shadows (`shadow-sm`) to create depth for cards, inputs, and buttons against dark backgrounds.
