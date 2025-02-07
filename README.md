# Blog Application

A modern, responsive blog application built with Next.js and TypeScript, featuring dynamic blog posts, contact functionality, and a clean design.

## 🚀 Features

- **Blog Management**
  - Dynamic blog posts listing
  - Detailed blog post views
  - Random date generation
  - Responsive image handling

- **Contact System**
  - Form validation using Zod
  - Success notifications
  - Optional description field

- **User Interface**
  - Responsive design
  - Clean modern layout
  - Interactive navigation

## 🛠️ Tech Stack

- **Frontend Framework**
  - [Next.js](https://nextjs.org/) - React framework
  - [TypeScript](https://www.typescriptlang.org/) - Type safety
  - [React](https://reactjs.org/) - UI library

- **Styling & UI**
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
  - [class-variance-authority](https://cva.style/docs) - Component variants
  - [clsx](https://github.com/lukeed/clsx) - Class names management

- **Additional Features**
  - [SweetAlert2](https://sweetalert2.github.io/) - Beautiful alerts
  - [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
  - [Zod](https://zod.dev/) - Schema validation

## 📁 Project Structure

<pre style="background-color: #1a1a1a; color: #fff; padding: 15px; border-radius: 5px; font-family: 'Consolas', monospace;">
project-root/
├── app/                                <span style="color: #888"># Next.js app directory</span>
│   ├── blog/                          <span style="color: #888"># Blog pages</span>
│   │   └── [id]/                      <span style="color: #888"># Dynamic blog routes</span>
│   ├── contact/                       <span style="color: #888"># Contact page</span>
│   ├── layout.tsx                     <span style="color: #888"># Root layout</span>
│   └── page.tsx                       <span style="color: #888"># Home page</span>
│
├── components/                         <span style="color: #888"># React Components</span>
│   ├── blog-details/                  <span style="color: #888"># Blog detail components</span>
│   │   ├── details-header.tsx
│   │   └── blogs-content/
│   ├── contact-us/                    <span style="color: #888"># Contact components</span>
│   │   └── contact-form.tsx
│   ├── home/                          <span style="color: #888"># Home page sections</span>
│   │   ├── header-section.tsx
│   │   ├── blog-post-section.tsx
│   │   └── blogs-section/
│   ├── navbar/                        <span style="color: #888"># Navigation components</span>
│   │   └── navbar.tsx
│   └── footer/                        <span style="color: #888"># Footer components</span>
│       └── footer.tsx
│
├── api/                               <span style="color: #888"># API integration</span>
│   ├── request.ts                     <span style="color: #888"># Axios configuration</span>
│   ├── routes/                        <span style="color: #888"># API endpoints</span>
│   └── types/                         <span style="color: #888"># TypeScript interfaces</span>
│
├── lib/                               <span style="color: #888"># Utility functions</span>
│   └── utils.ts
│
└── public/                            <span style="color: #888"># Static assets</span>
    └── images/                        <span style="color: #888"># Image assets</span>
</pre>

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/blog-app.git
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
