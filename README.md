# Juris Source Website

A modern, professional website for Juris Source law firm built with Next.js 14, TypeScript, and TailwindCSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to the project:**
   ```bash
   cd website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
website/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── practice-areas/  # Practice area pages
│   │   └── contact/         # Contact page
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   └── ui/             # UI components
│   └── styles/
│       └── globals.css      # Global styles
├── public/                  # Static assets
├── package.json            # Dependencies
├── tailwind.config.js      # TailwindCSS config
├── tsconfig.json          # TypeScript config
└── next.config.js         # Next.js config
```

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run export       # Generate static HTML files
npm run lint         # Run ESLint
```

## 📄 Pages Created

- Home page with hero section and services overview
- About page with firm information
- Practice area detail pages for all 11 services
- Contact page structure
- Professional responsive design

## 🎨 Design Features

- Modern blue and gold color scheme
- Responsive mobile-first design
- Professional typography
- Smooth animations and transitions
- Accessible and SEO-optimized

## 📞 Contact Information

**Juris Source**
- Address: 37, Ground Floor, Site II, Vikas Puri, New Delhi- 110018
- Phone: +91-83689 80930
- Email: jurissource@gmail.com

## 🌐 Deployment

For static hosting, run:
```bash
npm run export
```

This creates a `out/` folder that can be uploaded to any static hosting service.

   npm run devThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

   ```

## Learn More

3. **Build for Production**

   ```bashTo learn more about Next.js, take a look at the following resources:

   npm run build

   npm start- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

   ```- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



## Website StructureYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



### Pages## Deploy on Vercel

- **Home (/)** - Hero section, practice areas overview, about section, testimonials

- **About (/about)** - Company history, team, philosophy, principlesThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- **Practice Areas (/practice-areas)** - Complete list of legal services

- **Individual Practice Areas (/practice-areas/[slug])** - Detailed service pages for:Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

  - Debt Recovery
  - Arbitration
  - Taxation
  - Commercial Dispute
  - Civil Litigation
  - Contract Management
  - Insolvency and Bankruptcy
  - Intellectual Property
  - Real Estate
  - Banking and Finance
  - Armed Force Tribunal
- **Contact (/contact)** - Contact forms, office locations, consultation booking

### Key Features
- Modern, professional design with legal industry aesthetics
- Fully responsive across all devices
- SEO optimized with proper meta tags
- Fast loading with Next.js optimization
- Accessible design following WCAG guidelines
- Contact forms with validation
- Professional color scheme (Primary blue, Gold accents, Clean whites)

### Design System
- **Primary Colors**: Professional blues (#0ea5e9 range)
- **Accent Colors**: Gold (#f59e0b range) for CTAs and highlights  
- **Typography**: Inter for body text, Georgia for headings
- **Components**: Reusable cards, buttons, forms, navigation

### Content Integration
All content has been migrated from the original website including:
- Practice area descriptions and expertise details
- Company information and founder details
- Contact information for both Delhi and Greater Noida offices
- Legal disclaimers and Bar Council compliance
- Office hours and consultation booking

### Performance Features
- Static generation for fast loading
- Optimized images and assets
- Minimal JavaScript for better performance
- SEO-friendly URL structure
- Mobile-first responsive design

## Development Notes

The website maintains all original content while providing:
- Better user experience with modern navigation
- Improved mobile responsiveness
- Professional visual hierarchy
- Clear call-to-actions for consultations
- Enhanced accessibility features

## Deployment

The website is configured for static export and can be deployed to any hosting platform:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Traditional web hosting

Run `npm run build` to generate the static files in the `out` directory.