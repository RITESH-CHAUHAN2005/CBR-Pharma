# 🏥 CBR Pharma - Clinical Based Remedies

<div align="center">

![CBR Pharma](https://img.shields.io/badge/CBR-Pharma-0ea5e9?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, professional pharmaceutical company website built with cutting-edge web technologies**

[Live Demo](https://cbrpharm.com) • [Report Bug](https://github.com/yourusername/cbr-pharma/issues) • [Request Feature](https://github.com/yourusername/cbr-pharma/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [UI Components](#ui-components)
- [Pages Overview](#pages-overview)
- [SEO & Performance](#seo--performance)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About The Project

**CBR Pharma** is a comprehensive pharmaceutical company website that showcases healthcare products, services, and company information in a modern, user-friendly interface. The website is designed to provide a seamless experience for healthcare professionals, distributors, and patients looking for quality pharmaceutical solutions.

### 🌟 Why This Project?

- ✅ **Professional Healthcare Platform** - Tailored specifically for the pharmaceutical industry
- ✅ **Modern User Experience** - Clean, intuitive design with smooth animations
- ✅ **SEO Optimized** - Built-in SEO components for better search engine visibility
- ✅ **Fully Responsive** - Perfect display on all devices (mobile, tablet, desktop)
- ✅ **Performance First** - Optimized for speed and efficiency
- ✅ **Accessible** - Following WCAG accessibility guidelines

---

## ✨ Key Features

### 🏠 Homepage

- Hero section with compelling call-to-action
- Statistics showcase (25+ years experience, 500+ products, 1000+ partners)
- Core values presentation with icons
- Medicine categories grid with beautiful imagery
- Healthcare services overview
- Customer testimonials with real profile images
- Contact CTA section

### 💼 Services Page

- Comprehensive medicine categories (Tablets, Syrups, Injections, Ayurvedic)
- Detailed healthcare services sections
- Quality certifications display (WHO-GMP, ISO, FDA)
- Feature highlights for each category
- Professional service descriptions

### 📖 About Page

- Company history and story
- Mission and vision statements
- Core values with detailed descriptions
- Company timeline/milestones
- Team information

### 📞 Contact Page

- Interactive contact form with WhatsApp integration
- Contact information cards (Email, Phone, Address, Hours)
- Embedded Google Maps location
- Healthcare-focused FAQ section
- Professional inquiry handling

### 📱 Additional Features

- Privacy Policy page
- Terms & Conditions page
- SEO-optimized meta tags for all pages
- WhatsApp floating button for instant contact
- Smooth scroll-to-top functionality
- Custom preloader animation
- Responsive header and footer
- 404 Error page

---

## 🛠 Tech Stack

### Frontend Framework

- **React 18.3.1** - Latest React with concurrent features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 5.4.19** - Lightning-fast build tool and dev server

### UI & Styling

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful, consistent icon set
- **Tailwind Animate** - Animation utilities

### Routing & State

- **React Router DOM 6.30.1** - Client-side routing
- **TanStack Query 5.83.0** - Server state management

### Form Handling

- **React Hook Form 7.61.1** - Performant form validation
- **Zod 3.25.76** - TypeScript-first schema validation
- **@hookform/resolvers** - Form resolver integration

### Additional Libraries

- **React Helmet Async** - Document head management for SEO
- **Sonner** - Toast notifications
- **Recharts** - Charting library (if needed)
- **date-fns** - Modern date utility library
- **clsx & tailwind-merge** - Conditional className utilities

### Development Tools

- **ESLint 9.32.0** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite Plugin React SWC** - Fast refresh with SWC
- **PostCSS & Autoprefixer** - CSS processing

---

## 📁 Project Structure

```
CBR-Pharma/
├── public/
│   ├── robots.txt           # SEO robots configuration
│   └── sitemap.xml          # Site structure for search engines
│
├── src/
│   ├── assets/              # Images, icons, and static files
│   │   ├── hero-pharma.jpg
│   │   ├── medicines-*.jpg
│   │   └── service-*.jpg
│   │
│   ├── components/          # Reusable React components
│   │   ├── ui/              # shadcn/ui components (40+ components)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   └── ... (and more)
│   │   │
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Preloader.tsx    # Loading animation
│   │   ├── ScrollToTop.tsx  # Scroll to top button
│   │   ├── SEOHead.tsx      # SEO meta tags component
│   │   └── WhatsAppButton.tsx # Floating WhatsApp button
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile detection hook
│   │   └── use-toast.ts     # Toast notification hook
│   │
│   ├── lib/                 # Utility libraries
│   │   └── utils.ts         # Helper functions
│   │
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx     # Main landing page
│   │   ├── AboutPage.tsx    # About company
│   │   ├── ServicesPage.tsx # Services & products
│   │   ├── ContactPage.tsx  # Contact form & info
│   │   ├── PrivacyPage.tsx  # Privacy policy
│   │   ├── TermsPage.tsx    # Terms & conditions
│   │   └── NotFound.tsx     # 404 error page
│   │
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles & Tailwind imports
│   └── vite-env.d.ts        # Vite type definitions
│
├── Configuration Files
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App-specific TS config
├── tsconfig.node.json       # Node-specific TS config
├── vite.config.ts           # Vite build configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Dependencies & scripts
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** or **bun** - Package manager
- **Git** - Version control

Check your installations:

```bash
node --version  # Should be v18+
npm --version   # Should be v9+
git --version
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/yourusername/cbr-pharma.git

# Or using SSH
git clone git@github.com:yourusername/cbr-pharma.git

# Navigate to project directory
cd cbr-pharma
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using bun
bun install
```

This will install all required dependencies including React, TypeScript, Tailwind CSS, and all UI components.

---

## 💻 Development

### Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173/` with:

- ⚡ Hot Module Replacement (HMR)
- 🔄 Instant updates on file changes
- 🎨 Tailwind CSS JIT compilation

### Development Commands

```bash
# Start development server
npm run dev

# Run ESLint for code quality
npm run lint

# Type checking
npx tsc --noEmit

# Preview production build locally
npm run preview
```

---

## 🏗 Build & Deployment

### Production Build

```bash
# Create optimized production build
npm run build

# Build output will be in the 'dist' folder
```

### Build Features

- ✅ Code splitting for optimal loading
- ✅ Asset optimization (images, CSS, JS)
- ✅ Tree shaking to remove unused code
- ✅ Minification and compression
- ✅ Source maps for debugging

### Deployment

The built `dist` folder can be deployed to:

**Vercel** (Recommended)

```bash
npm i -g vercel
vercel --prod
```

**Netlify**

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages**

```bash
npm run build
# Push dist folder to gh-pages branch
```

Other platforms: AWS S3, Cloudflare Pages, Railway, Render, etc.

---

## 🎨 UI Components

This project uses **shadcn/ui** - a collection of re-usable components built with Radix UI and Tailwind CSS.

### Available Components (40+)

| Component | Usage               | Component | Usage                 |
| --------- | ------------------- | --------- | --------------------- |
| Accordion | Collapsible content | Alert     | Notification messages |
| Avatar    | User profile images | Badge     | Status indicators     |
| Button    | Interactive actions | Card      | Content containers    |
| Checkbox  | Selection inputs    | Dialog    | Modal windows         |
| Dropdown  | Menu selections     | Form      | Input validation      |
| Input     | Text fields         | Label     | Form labels           |
| Select    | Dropdown selects    | Table     | Data tables           |
| Tabs      | Content switching   | Toast     | Notifications         |
| Tooltip   | Helpful hints       | ...       | And 20+ more!         |

### Component Customization

All components are:

- 📝 Fully customizable with Tailwind classes
- ♿ Accessible (ARIA compliant)
- 🎨 Themeable with CSS variables
- 📱 Responsive out of the box

---

## 📄 Pages Overview

### 🏠 Home Page (`/`)

**Purpose**: Main landing page showcasing company overview

- Hero section with value proposition
- Key statistics and achievements
- Core values presentation
- Medicine categories
- Services preview
- Customer testimonials
- CTA sections

### 📋 Services Page (`/services`)

**Purpose**: Detailed product and service information

- Medicine categories with features
- Healthcare service descriptions
- Quality certifications
- Service highlights
- Contact CTA

### ℹ️ About Page (`/about`)

**Purpose**: Company information and values

- Company history
- Mission & vision
- Core values
- Timeline/milestones
- Team information

### 📞 Contact Page (`/contact`)

**Purpose**: Customer inquiry and support

- Contact form with WhatsApp integration
- Contact information cards
- Google Maps integration
- FAQ section
- Business hours

### 📜 Additional Pages

- **Privacy Policy** (`/privacy`) - Data protection information
- **Terms & Conditions** (`/terms`) - Usage terms
- **404 Page** - Custom error page

---

## 🔍 SEO & Performance

### SEO Features

✅ **Dynamic Meta Tags** - Using React Helmet Async
✅ **Semantic HTML** - Proper heading hierarchy
✅ **Sitemap.xml** - Search engine sitemap
✅ **Robots.txt** - Crawler instructions
✅ **Open Graph Tags** - Social media previews
✅ **Structured Data** - Schema.org markup ready

### Performance Optimizations

⚡ **Vite Build** - Fast bundling and optimization
⚡ **Code Splitting** - Lazy loading routes
⚡ **Image Optimization** - Responsive images
⚡ **CSS Purging** - Unused CSS removal
⚡ **Minification** - Compressed assets
⚡ **Caching Strategy** - Browser caching headers

### Lighthouse Scores Target

- 🟢 Performance: 90+
- 🟢 Accessibility: 95+
- 🟢 Best Practices: 95+
- 🟢 SEO: 100

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test your changes thoroughly
- Ensure no TypeScript errors

---

## 📝 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 📧 Contact

**CBR Pharma**

- 📧 Email: abhishek@cbrpharm.com
- 📱 Phone: +91 9555559919
- 🌐 Website: [cbrpharm.com](https://cbrpharm.com)
- 📍 Location: CBR Hospitals, Multispeciality Hospital & Trauma Centre

**Developer**

- 👨‍💻 Developer: Ritesh Chauhan
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - The library for web and native user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons
- [Unsplash](https://unsplash.com/) - Free high-quality images

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**Made with ❤️ by Ritesh Chauhan**

![Thank You](https://img.shields.io/badge/Thank%20You-For%20Visiting-ff69b4?style=for-the-badge)

</div>
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**Made with ❤️ by Ritesh Chauhan**

![Thank You](https://img.shields.io/badge/Thank%20You-For%20Visiting-ff69b4?style=for-the-badge)

</div>
