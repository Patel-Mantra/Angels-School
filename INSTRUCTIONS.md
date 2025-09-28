# Stellar Haven Academy - Project Instructions

## 📋 Table of Contents
1. [Quick Start Guide](#quick-start-guide)
2. [Project Overview](#project-overview)
3. [File Structure & Connections](#file-structure--connections)
4. [Page Components](#page-components)
5. [Shared Components](#shared-components)
6. [UI Components](#ui-components)
7. [Development Workflow](#development-workflow)
8. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (version 18 or higher)
- pnpm package manager

### Installation & Setup

1. **Extract the Project**
   ```bash
   # Extract the stellar-haven.zip file to your desired location
   # Navigate to the extracted folder
   cd stellar-haven
   ```

2. **Install Dependencies**
   ```bash
   # Install pnpm globally if you don't have it
   npm install -g pnpm
   
   # Install project dependencies
   pnpm install
   ```

3. **Type Check (Optional)**
   ```bash
   # Verify TypeScript compilation
   pnpm typecheck
   ```

4. **Start Development Server**
   ```bash
   # Start the development server on port 8080
   pnpm dev --port 8080
   ```

5. **Open in Browser**
   ```
   http://localhost:8080
   ```

---

## 📁 Project Overview

**Stellar Haven Academy** is a comprehensive school management system built with:
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS 3 + Radix UI
- **Backend**: Express.js (integrated)
- **Package Manager**: pnpm

---

## 🗂️ File Structure & Connections

### Root Configuration Files
```
stellar-haven/
├── package.json              # Project dependencies and scripts
├── vite.config.ts            # Vite configuration for frontend
├── vite.config.server.ts     # Vite configuration for server integration
├── tailwind.config.ts        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
├── components.json           # shadcn/ui configuration
├── index.html                # Main HTML template
└── INSTRUCTIONS.md           # This file
```

### Application Entry Points
```
client/
├── App.tsx                   # Main application entry point with routing
├── global.css               # Global styles and TailwindCSS imports
└── vite-env.d.ts            # TypeScript declarations for Vite
```

**Key Connections:**
- `App.tsx` → All page components via React Router
- `global.css` → Applied globally across all components
- `index.html` → Loads the React application

---

## 📄 Page Components

### Main Pages (`client/pages/`)

#### 🏠 **Index.tsx** - Homepage
- **Purpose**: Landing page with hero section and feature overview
- **Connected to**: 
  - `Layout.tsx` (wrapper)
  - `AIChat.tsx` (floating chat widget)
- **Route**: `/`

#### 🏫 **AboutUs.tsx** - About School Page
- **Purpose**: School information, mission, staff directory
- **Connected to**:
  - `Layout.tsx` (wrapper)
  - Various UI components (Card, Button, etc.)
- **Route**: `/about`

#### 📚 **AcademicsWorking.tsx** - Academic Programs
- **Purpose**: Course catalog, academic standards, curriculum info
- **Connected to**:
  - `Layout.tsx` (wrapper)
  - `AcademicStandards.tsx` component
- **Route**: `/academics`

#### 🎓 **Admissions.tsx** - Admissions Process
- **Purpose**: Application process, requirements, tours
- **Connected to**:
  - `Layout.tsx` (wrapper)
  - `ApplicationStatusPortal.tsx`
  - `CampusTourBooking.tsx`
  - `TuitionCalculator.tsx`
- **Route**: `/admissions`

#### 🏃 **StudentLife.tsx** - Student Activities
- **Purpose**: Clubs, sports, wellness, extracurriculars
- **Connected to**:
  - `Layout.tsx` (wrapper)
  - `ExtracurricularHub.tsx`
  - `StudentWellness.tsx`
  - `AchievementRecognition.tsx`
- **Route**: `/student-life`

#### 📰 **NewsEvents.tsx** - News & Events Hub
- **Purpose**: Latest news, event calendar, communications
- **Connected to**:
  - `Layout.tsx` (wrapper)
  - `NewsManagement.tsx`
  - `EventCalendar.tsx`
  - `SocialIntegration.tsx`
  - `Communications.tsx`
  - `CommunityEngagement.tsx`
- **Route**: `/news`

#### 🔐 **Portals.tsx** - Secure Access Hub
- **Purpose**: Role-based portals for students, parents, teachers, admin
- **Connected to**:
  - `Layout.tsx` (wrapper)
  - `StudentPortal.tsx`
  - `ParentPortal.tsx`
  - `TeacherPortal.tsx`
  - `AdminPortal.tsx`
  - `SecurityAuth.tsx`
- **Route**: `/portals`
- **Features**: Authentication system with demo credentials

#### 📞 **Contact.tsx** - Communication Hub
- **Purpose**: Multi-channel contact system, appointments, support
- **Connected to**:
  - `Layout.tsx` (wrapper)
  - All UI components (Calendar, Forms, etc.)
- **Route**: `/contact`
- **Features**: 6 comprehensive tabs with full functionality

#### ❌ **NotFound.tsx** - 404 Page
- **Purpose**: Error page for invalid routes
- **Route**: `*` (catch-all)

#### 🔧 **Placeholder.tsx** - Template Page
- **Purpose**: Template for future pages
- **Used by**: Routes not yet implemented

---

## 🧩 Shared Components

### Layout Components (`client/components/layout/`)

#### **Layout.tsx** - Main Layout Wrapper
- **Purpose**: Provides consistent layout structure for all pages
- **Connected to**:
  - `SiteHeader.tsx` (navigation)
  - `SiteFooter.tsx` (footer)
  - `AIChat.tsx` (floating chat)
- **Used by**: All page components

#### **SiteHeader.tsx** - Navigation Header
- **Purpose**: Main navigation, mobile menu, dark mode toggle
- **Connected to**: All pages via Layout
- **Features**: Responsive navigation with mobile hamburger menu

#### **SiteFooter.tsx** - Site Footer
- **Purpose**: Footer links, contact info, branding
- **Connected to**: All pages via Layout

### Miscellaneous Components (`client/components/misc/`)

#### Portal System Components
- **StudentPortal.tsx**: Student dashboard with grades, assignments, schedule
- **ParentPortal.tsx**: Parent dashboard with multi-child support
- **TeacherPortal.tsx**: Teacher tools and grade management
- **AdminPortal.tsx**: Administrative oversight and analytics
- **SecurityAuth.tsx**: Authentication and security features

#### Academic Components
- **AcademicStandards.tsx**: Course listings and academic requirements
- **ApplicationStatusPortal.tsx**: Admissions application tracking
- **CampusTourBooking.tsx**: Campus tour scheduling system
- **TuitionCalculator.tsx**: Dynamic tuition calculation tool

#### Student Life Components
- **ExtracurricularHub.tsx**: Clubs and activities management
- **StudentWellness.tsx**: Health and wellness resources
- **AchievementRecognition.tsx**: Student awards and recognition

#### News & Communication Components
- **NewsManagement.tsx**: News article system with search/filter
- **EventCalendar.tsx**: Interactive event calendar
- **SocialIntegration.tsx**: Social media feeds and integration
- **Communications.tsx**: Newsletter and communication tools
- **CommunityEngagement.tsx**: Community interaction features

#### Utility Components
- **AIChat.tsx**: Floating AI assistant chat widget
- **InteractiveCommunity.tsx**: Community interaction features

---

## 🎨 UI Components (`client/components/ui/`)

### Core UI Library
Built with Radix UI primitives and styled with TailwindCSS:

- **accordion.tsx**: Collapsible content sections
- **alert.tsx**: Notification and alert messages
- **badge.tsx**: Status indicators and labels
- **button.tsx**: Interactive buttons with variants
- **calendar.tsx**: Date picker and calendar widget
- **card.tsx**: Content containers with headers
- **dialog.tsx**: Modal dialogs and popups
- **form.tsx**: Form components and validation
- **input.tsx**: Text input fields
- **select.tsx**: Dropdown selection menus
- **sheet.tsx**: Side panel overlays
- **tabs.tsx**: Tabbed navigation interface
- **table.tsx**: Data tables with sorting
- **textarea.tsx**: Multi-line text input
- **toast.tsx**: Notification toasts
- **tooltip.tsx**: Hover information displays

### Utility Files
- **use-toast.ts**: Toast notification hook
- **utils.ts**: Common utility functions

---

## 🔄 Development Workflow

### Available Scripts
```bash
# Development server
pnpm dev --port 8080

# Type checking
pnpm typecheck

# Production build
pnpm build

# Start production server
pnpm start

# Run tests
pnpm test
```

### Key Development Features
- **Hot Module Replacement**: Changes reflect instantly
- **TypeScript**: Full type safety across the application
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Component Library**: Consistent UI with Radix UI components

---

## 🔌 Component Connections Map

### Page → Component Relationships

```
Index.tsx
└── Layout.tsx
    ├── SiteHeader.tsx
    ├── SiteFooter.tsx
    └── AIChat.tsx

AboutUs.tsx
└── Layout.tsx + UI Components

AcademicsWorking.tsx
└── Layout.tsx
    └── AcademicStandards.tsx

Admissions.tsx
└── Layout.tsx
    ├── ApplicationStatusPortal.tsx
    ├── CampusTourBooking.tsx
    └── TuitionCalculator.tsx

StudentLife.tsx
└── Layout.tsx
    ├── ExtracurricularHub.tsx
    ├── StudentWellness.tsx
    └── AchievementRecognition.tsx

NewsEvents.tsx
└── Layout.tsx
    ├── NewsManagement.tsx
    ├── EventCalendar.tsx
    ├── SocialIntegration.tsx
    ├── Communications.tsx
    └── CommunityEngagement.tsx

Portals.tsx
└── Layout.tsx
    ├── StudentPortal.tsx
    ├── ParentPortal.tsx
    ├── TeacherPortal.tsx
    ├── AdminPortal.tsx
    └── SecurityAuth.tsx

Contact.tsx
└── Layout.tsx + All UI Components
```

---

## 🌐 Server Integration

### Backend Structure (`server/`)
- **index.ts**: Express server setup and API routes
- **routes/**: API endpoint handlers
- **routes/demo.ts**: Example API implementation

### API Integration
- Development: Single port (8080) serves both frontend and backend
- API endpoints are prefixed with `/api/`
- Hot reload for both client and server code

---

## 🎯 Key Features by Page

### Homepage (Index.tsx)
- Hero section with animated background
- Feature showcase grid
- Responsive design with mobile optimization

### Portals (Portals.tsx)
- **Demo Credentials Available:**
  - Student: `username: student, password: demo123`
  - Parent: `username: parent, password: demo123`
  - Teacher: `username: teacher, password: demo123`
  - Admin: `username: admin, password: demo123`

### Contact (Contact.tsx)
- **6 Main Tabs:**
  1. Directory - Staff and department search
  2. Contact - Dynamic forms and appointment booking
  3. Location - Interactive campus map and transportation
  4. Community - Social media and volunteer opportunities
  5. Support - Response times and feedback system
  6. FAQ - Knowledge base with search functionality

### News & Events (NewsEvents.tsx)
- **6 Content Areas:**
  1. Latest News - Overview and quick stats
  2. Event Calendar - Interactive calendar system
  3. Social Feed - Social media integration
  4. Communications - Newsletter management
  5. Community - Engagement features
  6. Archive - Historical content access

---

## 🛠️ Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Use a different port
   pnpm dev --port 3000
   ```

2. **TypeScript Errors**
   ```bash
   # Check for compilation issues
   pnpm typecheck
   ```

3. **Missing Dependencies**
   ```bash
   # Reinstall dependencies
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

4. **Build Issues**
   ```bash
   # Clean build
   pnpm build
   ```

### Development Tips
- Use the browser developer tools for debugging
- Check the console for JavaScript errors
- Use the Network tab to monitor API calls
- The application is fully responsive - test on different screen sizes

---

## 📱 Mobile Responsiveness

The application is built with mobile-first design:
- **Breakpoints**: `sm:`, `md:`, `lg:`, `xl:` (TailwindCSS)
- **Navigation**: Hamburger menu on mobile devices
- **Components**: All components are responsive by default
- **Touch-friendly**: Buttons and interactive elements are appropriately sized

---

## 🔒 Security Features

- **Authentication**: Role-based access system in Portals
- **Validation**: Form validation throughout the application
- **Type Safety**: TypeScript prevents runtime errors
- **Sanitization**: Input sanitization in forms

---

## 📈 Performance

- **Lazy Loading**: Components load on demand
- **Code Splitting**: Automatic code splitting with Vite
- **Optimized Images**: Responsive image handling
- **Caching**: Browser caching for static assets

---

## 🤝 Contributing

1. Make sure TypeScript compiles: `pnpm typecheck`
2. Test the application: `pnpm dev --port 8080`
3. Follow the existing code patterns
4. Use the provided UI components for consistency

---

## 📞 Support

For technical issues or questions about the codebase:
1. Check this documentation first
2. Review the component code for implementation details
3. Test with the demo credentials provided
4. Ensure all dependencies are properly installed

---

**Happy Coding! 🎉**

The Stellar Haven Academy application is ready to use and fully functional. Follow the Quick Start Guide to get up and running in minutes!