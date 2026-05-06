# Rohan Ghodke - Portfolio Website

A modern, responsive portfolio website showcasing Data Analysis, Power BI, and AI/ML expertise.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Mode** - Toggle between light and dark themes
- **Smooth Animations** - Framer Motion for elegant transitions
- **Project Showcase** - Display projects with GitHub links and descriptions
- **Contact Form** - Integrated email functionality
- **SEO Optimized** - Meta tags and semantic HTML
- **Performance** - Optimized for fast loading

## 🛠 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: EmailJS (configured in utils)
- **Language**: TypeScript

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🎯 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure EmailJS (Optional)

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update these values in `lib/emailService.ts`:
   - `SERVICE_ID`
   - `TEMPLATE_ID`
   - `PUBLIC_KEY`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   ├── Navigation.tsx       # Navigation bar
│   ├── Footer.tsx          # Footer
│   ├── ThemeToggle.tsx      # Dark mode toggle
│   └── RootLayoutClient.tsx # Theme provider
├── lib/
│   ├── resume-data.ts      # Resume content
│   └── emailService.ts     # Email configuration
└── public/                 # Static assets
```

## 🎨 Customization

### Update Resume Data

Edit `lib/resume-data.ts` to update:
- Personal information
- Skills and experience
- Projects and certifications
- Contact information

### Customize Colors

Update colors in `tailwind.config.js`:
- Primary: `#1F4E79` (Deep Blue)
- Accent: `#2E75B6` (Teal)

### Add Resume PDF

Place your resume in the `public` folder and update the path in `lib/resume-data.ts`:
```typescript
resumeUrl: "/your-resume.pdf"
```

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

Configure `next.config.js` for static export and push to your repository.

## 📝 Environment Variables

Create a `.env.local` file for sensitive data (if needed):

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key_here
```

## 🤝 Contributing

Feel free to fork and customize this portfolio for your needs!

## 📄 License

MIT License - feel free to use this template for your portfolio.

## 📧 Support

For questions or issues, contact: rohanghodke9890@gmail.com

---

Built with ❤️ by Rohan Ghodke
