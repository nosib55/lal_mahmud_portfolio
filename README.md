# 🚀 Shukur Mahmud - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my skills, projects, and experience as a Full-Stack Developer.

![Portfolio Preview](https://i.postimg.cc/ZnRTbmzJ/Desktop.png)

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎭 **Smooth Animations** - Powered by Framer Motion and GSAP
- 🎠 **Project Carousel** - Interactive Swiper.js carousel for projects
- 📧 **Contact Form** - Functional contact form with FormSubmit integration
- 🌙 **Dark Mode** - Eye-friendly dark theme
- ⚡ **Fast Performance** - Optimized with Vite
- 🎯 **Smooth Scrolling** - Seamless navigation between sections

## 🛠️ Built With

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **Carousel:** Swiper.js
- **Icons:** React Icons
- **Marquee:** React Fast Marquee
- **Form Handling:** FormSubmit

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── SkillsMarquee.jsx
│   │   ├── Skills.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── netlify.toml
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/mahmud014/Portfolio.git
```

2. Navigate to project directory
```bash
cd Portfolio
```

3. Install dependencies
```bash
npm install
```

4. Start development server
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## 🌐 Deployment

This project is configured for easy deployment on Netlify.

### Deploy to Netlify
- Live link- https://shukur-portfolio.vercel.app/

## 📧 Contact Form Setup

The contact form uses FormSubmit. To activate:

1. Submit the form once after deployment
2. Check email: anik955720@gmail.com
3. Click the activation link from FormSubmit
4. Update the `_next` URL in `Contact.jsx` with your deployed site URL

## 🎨 Color Scheme

- **Primary:** `#0D2426` (Dark Teal)
- **Secondary:** `#AEFF72` (Bright Green)
- **Accent:** `#00C6FF` (Cyan)
- **Background Light:** `#F3F4F6`
- **Background Dark:** `#0D2426`

## 📱 Sections

1. **Hero** - Introduction with animated profile image
2. **Skills Marquee** - Scrolling banner of technologies
3. **About** - Personal information and background
4. **Skills** - Detailed skill cards with proficiency levels
5. **Projects** - Interactive carousel showcasing projects
6. **Contact** - Functional contact form with social links
7. **Footer** - Quick links and additional information

## 🔧 Customization

### Update Personal Information

Edit the following files to customize with your information:

- `src/components/Hero.jsx` - Name, title, description
- `src/components/About.jsx` - About text, contact info
- `src/components/Skills.jsx` - Your skills and proficiency levels
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Email address
- `src/components/Footer.jsx` - Social media links

### Update Colors

Modify `tailwind.config.js`:
```javascript
colors: {
  primary: "#0D2426",
  secondary: "#AEFF72",
  accent: "#00C6FF",
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shukur Mahmud**

- GitHub: [@mahmud014](https://github.com/mahmud014)
- LinkedIn: [shukurmahmud](https://www.linkedin.com/in/shukurmahmud/)
- Twitter: [@MdShukurMahmud3](https://x.com/MdShukurMahmud3)
- Email: anik955720@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://greensock.com/gsap/)
- Form handling by [FormSubmit](https://formsubmit.co/)

## 📸 Screenshots

### Desktop View
![Desktop View](https://i.postimg.cc/ZnRTbmzJ/Desktop.png)

### Mobile View
![Mobile View](https://i.postimg.cc/W1mxHyxG/Mobile.png)

---

⭐ **If you like this project, please give it a star!** ⭐

Made with ❤️ by Shukur Mahmud
