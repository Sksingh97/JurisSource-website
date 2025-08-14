# JurisSource Law Firm Website

A modern, professional, responsive marketing and informational website for JurisSource Law Firm built with Next.js, React, and TailwindCSS.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **SEO Optimized**: Built-in SEO optimization with proper metadata
- **Performance Optimized**: Fast loading times with Next.js optimization
- **Mobile Friendly**: Fully responsive across all devices
- **Interactive Components**: Contact forms, testimonial carousel, and more
- **API Integration**: Ready to connect with FastAPI backend

## Tech Stack

- **Frontend**: React.js + Next.js 14
- **Styling**: TailwindCSS
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **TypeScript**: Full TypeScript support

## Pages

1. **Home Page** - Hero section, services preview, testimonials, contact form
2. **About Us** - Firm history, team profiles, mission & values
3. **Services** - Practice areas with detailed descriptions
4. **Blog** - Legal articles and insights (with search/filter)
5. **Testimonials** - Client reviews and ratings
6. **Contact** - Contact form, office info, and FAQ

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy `.env.local` and update the values as needed
   - Configure API endpoints, contact information, etc.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## API Integration

The website is designed to integrate with the FastAPI backend. The API service (`src/lib/api.ts`) handles:

- Services data fetching
- Blog articles retrieval
- Testimonials display
- Contact form submissions

### API Endpoints Expected

- `GET /api/services` - Legal services list
- `GET /api/services/{id}` - Individual service details
- `GET /api/articles` - Blog articles (with pagination)
- `GET /api/articles/{slug}` - Individual article
- `GET /api/testimonials` - Client testimonials
- `POST /api/contact` - Contact form submission

## Configuration

### Environment Variables

- `NEXT_PUBLIC_API_URL`: Backend API URL (default: http://localhost:8000)
- `NEXT_PUBLIC_SITE_URL`: Website URL
- Contact information variables for easy updates

### Customization

1. **Styling**: Modify `tailwind.config.js` and `src/app/globals.css`
2. **Content**: Update fallback data in components
3. **Images**: Add images to `public/images/` directory
4. **SEO**: Update metadata in page components

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Traditional hosting with Node.js

## Features in Detail

### Contact Form
- Form validation with Zod schema
- Email and phone validation
- Success/error handling
- Integration with backend API

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation

### SEO Features
- Proper HTML semantics
- Meta tags and Open Graph
- Structured data ready
- Fast loading performance

### Accessibility
- ARIA labels and roles
- Keyboard navigation
- Screen reader friendly
- Color contrast compliance

## Development

### Project Structure

```
src/
├── app/              # Next.js 14 App Router pages
├── components/       # Reusable React components
├── lib/             # Utility functions and API client
├── types/           # TypeScript type definitions
└── styles/          # Global styles and Tailwind config
```

### Adding New Pages

1. Create page component in `src/app/[page]/page.tsx`
2. Add navigation link in `Header.tsx`
3. Update footer links if needed

### Modifying Styles

- Global styles: `src/app/globals.css`
- Component styles: Use TailwindCSS classes
- Custom colors/fonts: Update `tailwind.config.js`

## Support

For questions or support regarding the website:

1. Check the documentation
2. Review component code and comments
3. Contact the development team

## Future Enhancements

Potential features for future versions:
- Blog search and advanced filtering
- Newsletter subscription
- Live chat integration
- Client portal login
- Multi-language support
- Advanced analytics integration

---

Built with ❤️ using Next.js and TailwindCSS
