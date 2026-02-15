# App Discovery Platform

A modern, animated web application built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ Smooth Framer Motion animations
- 🎨 Webflow-inspired design
- 📱 Fully responsive layout
- ⚡ Next.js 14 with App Router
- 🎭 Interactive hover effects and micro-interactions
- 🌈 Beautiful gradient backgrounds
- 💎 Modern card-based UI
- 🔍 Search functionality
- 📊 Stats section with animated counters
- 🏷️ Category browsing

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Kaung31/APP_2.git
cd APP_2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file if you need any environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with extended animations. Check `tailwind.config.js` for details.

## 🎨 Design Philosophy

This project follows Webflow's design principles:
- Clean, modern aesthetics
- Smooth, meaningful animations
- Intuitive user interactions
- Professional typography
- Cohesive color schemes
- Mobile-first approach

## 📁 Project Structure

```
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with navigation
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Import your repository in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. Vercel will automatically:
   - Install dependencies
   - Build your project
   - Deploy to production

### Manual Deployment

```bash
npm run build
npm start
```

## 🐛 Troubleshooting

### Common Issues

**Issue:** Framer Motion errors
```bash
npm install framer-motion
```

**Issue:** Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Issue:** TypeScript errors
- Check your `tsconfig.json`
- Ensure all types are properly imported

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to customize your color palette:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Animations
Modify animation variants in `page.tsx`:
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from Webflow
- Built with Next.js and Framer Motion
- Icons and images from various sources

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

Made with ❤️ using Next.js 14
