# cutesite

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Emotion](https://img.shields.io/badge/Emotion-DD005A?style=for-the-badge&logo=emotion&logoColor=white)](https://emotion.sh/)
[![MUI](https://img.shields.io/badge/MUI-0081CB?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=green)](https://supabase.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Lucide](https://img.shields.io/badge/Lucide-181818?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![Gray--Matter](https://img.shields.io/badge/gray--matter-4455AA?style=for-the-badge)](https://www.npmjs.com/package/gray-matter)
[![React Markdown](https://img.shields.io/badge/React_Markdown-000000?style=for-the-badge)](https://github.com/remarkjs/react-markdown)
[![React Pro Sidebar](https://img.shields.io/badge/Pro_Sidebar-61DAFB?style=for-the-badge)](https://www.npmjs.com/package/react-pro-sidebar)

### Project Description 📝

`cutesite` is a highly performant, aesthetically refined digital portfolio and content platform engineered using the latest Next.js App Router architecture. Designed for both developer efficiency and user experience, this repository serves as a professional hub for showcasing technical projects, managing a content-rich blog via Markdown files, and presenting visual galleries. The application adheres to modern software engineering standards, utilizing TypeScript across the entire stack to ensure type safety, robust maintainability, and enhanced developer tooling.

The front-end styling is a hybrid system leveraging the utility-first approach of Tailwind CSS augmented by the expressive power of styled components via `@emotion/react` and `@emotion/styled`. This combination allows for rapid prototyping alongside deep customization of UI elements. Sophisticated interactions and a highly polished user experience are delivered through integration with Framer Motion, enabling subtle yet professional element transitions and animations.

Data management and scalability are addressed through the integration of Supabase, providing a robust, enterprise-grade foundation for potential backend services, authentication, and database interaction. By utilizing `gray-matter` for parsing front-matter in the blog section, `cutesite` offers an intuitive, file-based content management system (CMS) that remains decoupled from complex external services, ensuring speed and deployment simplicity.

### Key Features ✨
- **Full-Stack Next.js Architecture:** Built on the latest stable version of Next.js using the App Router for optimal routing, caching, and server component performance.
- **Markdown-Driven Blogging:** Integrated essay/blog system (`app/blog/[slug]`) powered by `gray-matter` for metadata extraction and `react-markdown` for secure content rendering.
- **Advanced State & UI:** Utilizes a component-based strategy (`ProjectCard.tsx`, `GalleryCard.tsx`) with sophisticated styling managed by `@emotion` and utility styling via Tailwind CSS.
- **Fluid Micro-Interactions:** Smooth and professional transitions, layout animations, and visual effects achieved through the comprehensive `motion` library (Framer Motion).
- **Type Safety & Reliability:** Entire codebase written in TypeScript, ensuring high stability, predictability, and reduced runtime errors.
- **Scalable Component Libraries:** Includes production-ready component libraries like `@mui/material` and `react-pro-sidebar` for quick development of complex navigation and UI elements.
- **Modular Iconography:** Leverages `lucide-react` for a lightweight, highly customizable set of vector icons, ensuring visual consistency across all components.
- **Supabase Ready:** Pre-configured scaffolding for integrating Supabase for database interactions, user authentication, and real-time features.

### Installation & Running Locally 🚀

This project requires Node.js (v18+) and npm installed globally.

**1. Clone the repository:**

```bash
git clone https://github.com/your-username/cutesite.git
```

```bash
cd cutesite
```

**2. Install dependencies:**

```bash
npm install
```

**3. Configure Environment Variables:**

Create a `.env.local` file in the root directory and populate it with necessary configurations. While the app is functional locally without a database, a typical setup requires:

```
# Example .env.local content
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

**4. Start the development server:**

```bash
npm run dev
```

The application will now be running and accessible at `http://localhost:3000`.

### How to Contribute 🤝

Contributions are welcome! If you find a bug, have a feature suggestion, or wish to improve the documentation, please follow these steps:

1.  **Fork the repository.**
2.  **Create a new feature branch:**
    ```bash
    git checkout -b feature/amazing-new-feature
    ```
3.  **Commit your changes:** Ensure your commits adhere to standard conventional commit guidelines.
    ```bash
    git commit -m 'feat: Add amazing new feature or fix'
    ```
4.  **Push the branch to your Fork:**
    ```bash
    git push origin feature/amazing-new-feature
    ```
5.  **Open a Pull Request** against the main branch of this repository. Ensure all CI checks (linting and type checks) pass before requesting a review.