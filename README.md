# Portfolio Website

A modern, responsive portfolio website built with Next.js and TypeScript, featuring a bilingual interface (Arabic/English), dark/light theme support, and interactive animations to showcase projects and professional experience.

## 🚀 Features

- **Bilingual Support**

  - Complete Arabic and English language support
  - RTL/LTR layout switching
  - Localized content and UI elements

- **Theme System**

  - Dark/Light theme support
  - Smooth theme transitions
  - Custom color schemes
  - Animated cursor effects

- **Project Showcase**

  - Interactive project cards
  - Detailed project descriptions
  - Live demo links
  - Technology stack display

- **User Interface**
  - Responsive design for all devices
  - Dark/Light theme support
  - Interactive animations
  - Intuitive navigation

## 🛠️ Tech Stack

- **Frontend Framework**

  - [Next.js](https://nextjs.org/) - React framework
  - [TypeScript](https://www.typescriptlang.org/) - Type safety
  - [React](https://reactjs.org/) - UI library

- **Styling & UI**

  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
  - [shadcn/ui](https://ui.shadcn.com/) - Component library
  - [Framer Motion](https://www.framer.com/motion/) - Animations

- **Internationalization**

  - [i18next](https://www.i18next.com/) - Translation management
  - [react-i18next](https://react.i18next.com/) - React bindings

- **Additional Features**
  - [Three.js](https://threejs.org/) - 3D graphics
  - [React Animated Cursor](https://www.npmjs.com/package/react-animated-cursor)
  - [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee)

## 📁 Project Structure

<pre style="background-color: #1a1a1a; color: #fff; padding: 15px; border-radius: 5px; font-family: 'Consolas', monospace;">
project-root/
├── app/                                <span style="color: #888"># Application source</span>
│   ├── [locale]/                      <span style="color: #888"># Localized routes</span>
│   │   ├── page.tsx                   <span style="color: #888"># Main page component</span>
│   │   ├── layout.tsx                 <span style="color: #888"># Root layout</span>
│   │   └── globals.css                <span style="color: #888"># Global styles</span>
│   │
│   ├── components/                    <span style="color: #888"># React Components</span>
│   │   ├── common/                    <span style="color: #888"># Shared components</span>
│   │   │   ├── logo.tsx
│   │   │   ├── main-button.tsx
│   │   │   ├── custom-cursor.tsx
│   │   │   ├── breath-animation.tsx
│   │   │   ├── come-from-sides-animation.tsx
│   │   │   ├── image-hover.tsx
│   │   │   ├── reveal-animation.tsx
│   │   │   ├── section-description.tsx
│   │   │   └── section-title.tsx
│   │   │
│   │   ├── home/                     <span style="color: #888"># Home page sections</span>
│   │   │   ├── header-section/
│   │   │   │   └── header-section.tsx
│   │   │   ├── projects-section/
│   │   │   │   ├── components/
│   │   │   │   │   └── shown-cards.tsx
│   │   │   │   └── projects-section.tsx
│   │   │   ├── tech-section/
│   │   │   │   └── tech-section.tsx
│   │   │   ├── experience-section/
│   │   │   │   └── experience-section.tsx
│   │   │   └── contact-section/
│   │   │       └── contact-section.tsx
│   │   │
│   │   ├── icons/                    <span style="color: #888"># Icon components</span>
│   │   │   ├── axiosIcon.tsx
│   │   │   ├── wavesImage.tsx
│   │   │   └── whatsAppIcon.tsx
│   │   │
│   │   ├── interfaces/               <span style="color: #888"># TypeScript interfaces</span>
│   │   │   ├── experience.ts
│   │   │   ├── local.props.interface.ts
│   │   │   ├── navbar.ts
│   │   │   └── project.ts
│   │   │
│   │   ├── loading/                  <span style="color: #888"># Loading components</span>
│   │   │   └── loading-animation.tsx
│   │   │
│   │   ├── constants/                <span style="color: #888"># Constants and data</span>
│   │   │   ├── home-projects.tsx
│   │   │   ├── others-projects.tsx
│   │   │   ├── experience.ts
│   │   │   └── resume-link.ts
│   │   │
│   │   ├── ui/                       <span style="color: #888"># UI components</span>
│   │   │   ├── accordion.tsx
│   │   │   └── badge.tsx
│   │   │
│   │   ├── navbar/                   <span style="color: #888"># Navigation components</span>
│   │   │   └── navbar.tsx
│   │   │
│   │   └── footer/                   <span style="color: #888"># Footer components</span>
│   │       └── footer.tsx
│   │
│   ├── locales/                      <span style="color: #888"># Translation files</span>
│   │   ├── ar/                       <span style="color: #888"># Arabic translations</span>
│   │   │   ├── fields.json
│   │   │   └── navigation.json
│   │   └── en/                       <span style="color: #888"># English translations</span>
│   │       ├── fields.json
│   │       └── navigation.json
│   │
│   ├── providers/                    <span style="color: #888"># Context Providers</span>
│   │   └── query-provider.tsx
│   │
│   ├── store/                        <span style="color: #888"># State management</span>
│   │   └── products.ts
│   │
│   ├── i18n/                         <span style="color: #888"># i18n configuration</span>
│   │   └── index.ts
│   │
│   ├── lib/                          <span style="color: #888"># Utility libraries</span>
│   │   └── utils.ts
│   │
│   └── utils/                        <span style="color: #888"># Utility functions</span>
│       └── generate-metadata.ts
│
├── public/                           <span style="color: #888"># Static assets</span>
│   ├── images/                       <span style="color: #888"># Image assets</span>
│   │   ├── portfolio.webp
│   │   ├── itqan.webp
│   │   ├── car-proffesionals.webp
│   │   ├── e-commerce-techno.webp
│   │   └── movie-time.webp
│   │
│   ├── favicon.ico
│   └── apple-icon.png
│
├── components.json                   <span style="color: #888"># ShadCN UI config</span>
├── i18nConfig.js                    <span style="color: #888"># i18n configuration</span>
├── package.json                     <span style="color: #888"># Project dependencies</span>
├── tailwind.config.ts               <span style="color: #888"># Tailwind configuration</span>
├── postcss.config.js                <span style="color: #888"># PostCSS configuration</span>
└── tsconfig.json                    <span style="color: #888"># TypeScript configuration</span>
</pre>

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/baseldiab/portfolio.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## 🌐 Internationalization

Create translation files in the locales directory:

```env
app/locales/
├── ar/          # Arabic translations
│   ├── fields.json
│   └── navigation.json
└── en/          # English translations
    ├── fields.json
    └── navigation.json
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Developed with ❤️ by [Basel Diab](https://github.com/baseldiab)

---
