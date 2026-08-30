# Solvevo Agency

A modern, high-performance web application and dashboard built for Solvevo Agency. It features a premium design aesthetic, complex micro-interactions, dark/light mode support, and a fully functional internal dashboard.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Animations:** [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 📂 Folder Structure

This project follows a feature-driven architecture to keep code scalable and maintainable.

```text
solvevo-agency/
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── app/                # Next.js App Router (Pages & Layouts)
│   │   ├── (landing)/      # Public landing pages
│   │   └── dashboard/      # Protected dashboard pages
│   ├── components/         # Global reusable React components
│   │   ├── shared/         # Shared UI elements (Navbars, Footers)
│   │   └── ui/             # Shadcn UI primitives
│   ├── config/             # Site configuration and navigation constants
│   ├── features/           # Feature-based modules (Domain-driven)
│   │   ├── dashboard/      # Dashboard feature components & data
│   │   └── landing/        # Landing page feature components & data
│   ├── layouts/            # Reusable layout wrappers
│   ├── lib/                # Utility functions and helpers
│   ├── providers/          # Global context providers (Theme, Query, Redux)
│   └── store/              # Redux store and slices
├── .github/
│   └── workflows/          # CI/CD GitHub Actions pipelines
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
└── package.json            # Dependencies and scripts
```

## 💻 Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🚢 CI/CD Deployment

This project uses an automated CI/CD pipeline via GitHub Actions.
- **CI**: Runs linting and builds the project on every push and on pull requests to `main` and `dev`.
- **CD**: Automatically deploys the application to the production VPS via SSH when changes are merged into the `main` branch.

### Note: Next Steps for You:
Before pushing these changes to GitHub, ensure you have set up the following secrets in **GitHub → Repo → Settings → Secrets and variables → Actions**:

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`
- `VPS_PORT`
- `VPS_DEPLOY_PATH`
