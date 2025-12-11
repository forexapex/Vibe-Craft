# IPEORG - Esports Tournament Platform

## Overview

IPEORG is a modern esports tournament platform built for Mobile Legends: Bang Bang (MLBB) and other competitive gaming titles. The platform enables teams to register for tournaments, provides an admin dashboard for tournament management, and features a visually striking cyberpunk-themed UI with 3D elements.

The application follows a full-stack TypeScript architecture with React on the frontend and Express on the backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom cyberpunk/gaming theme
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and micro-interactions
- **3D Graphics**: React Three Fiber with Three.js for background effects
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Design**: RESTful endpoints under `/api/*`
- **Build Tool**: esbuild for production bundling, Vite for development

### Data Storage
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured via `DATABASE_URL` environment variable)
- **Schema Location**: `shared/schema.ts` - contains users and registrations tables
- **Current Storage**: MemStorage class provides in-memory fallback when database unavailable

### Key Design Decisions

**Shared Schema Pattern**: The `shared/` directory contains types and schemas used by both frontend and backend, ensuring type safety across the full stack. Zod schemas generated from Drizzle are used for runtime validation.

**Component Architecture**: UI components are organized in `client/src/components/ui/` using the shadcn/ui pattern - each component is a separate file that can be customized. Custom components like `Navbar` and `ThreeBackground` are in `client/src/components/`.

**Page Structure**: Each route has its own page component in `client/src/pages/`. Pages include: Home, Registration, Login, AdminDashboard, About, Contact, Privacy, Terms, Cookies, Rules, and FAQ.

**Authentication**: Simple prototype authentication with hardcoded admin credentials (admin/admin) stored in localStorage. Production implementation would require proper session management.

## External Dependencies

### Third-Party Services
- **Database**: PostgreSQL via `DATABASE_URL` environment variable
- **Email** (planned): Contact form references `ipeorgofficial@zohomail.in`
- **Discord** (planned): Notification integration mentioned in registration flow

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `drizzle-orm` / `drizzle-kit`: Database ORM and migrations
- `@react-three/fiber` / `@react-three/drei`: 3D graphics
- `framer-motion`: Animations
- `zod`: Schema validation
- `react-hook-form`: Form handling
- `sonner`: Toast notifications

### Development Tools
- Vite for development server with HMR
- Custom Replit plugins for dev experience (`@replit/vite-plugin-*`)
- TypeScript with strict mode enabled

### Build & Deployment
- Production build outputs to `dist/` directory
- Client assets bundled to `dist/public/`
- Server compiled to `dist/index.cjs`
- Database migrations stored in `migrations/` directory