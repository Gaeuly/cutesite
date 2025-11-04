export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export const allProjects: Project[] = [
  {
    id: 1,
    slug: 'moonveil-bot',
    title: 'Moonveil',
    description:
      'An advanced all-in-one Discord bot packed with powerful features, designed for both utility and entertainment.',
    longDescription:
      'Moonveil is a modern all-in-one Discord bot developed to provide a seamless and feature-rich experience for Discord communities. It combines moderation, utility commands, server statistics, fun features, and advanced automation — all in one elegant package. Built using Discord.js, MongoDB, JavaScript, Supabase, and Shell scripting, Moonveil is designed for stability, scalability, and smooth performance. With real-time data sync and modular command handling, it ensures easy maintenance and fast updates, making it perfect for managing both small and large servers.',
    technologies: ['Discord.js', 'MongoDB', 'JavaScript', 'Shell', 'Supabase'],
    image: '/project/moonveil.webp',
    githubUrl: 'https://github.com/Gaeuly/',
    liveUrl: 'https://moonveil.cyou/',
  },
  {
    id: 2,
    slug: 'discord-website-bot',
    title: 'Discord Website Bot',
    description:
      'A comprehensive Discord bot with advanced moderation, custom commands, and community engagement features.',
    longDescription:
      'A comprehensive Discord bot built with Discord.js featuring advanced moderation tools, custom commands, music playback, and community engagement features. Includes role management, automated moderation, and detailed logging systems.',
    technologies: ['Discord.js', 'Node.js', 'MongoDB'],
    image: '/project/discord.webp',
    githubUrl: 'https://github.com/Gaeuly',
    liveUrl: 'https://moonveil.cyou',
  },
  {
    id: 3,
    slug: 'minecraft-server-manager',
    title: 'Minecraft Server Manager',
    description:
      'A modern web-based control panel for managing Minecraft servers. Features real-time monitoring, player management, plugin configuration, and detailed server analytics. Built with a React frontend and a Node.js backend for robust performance.',
    longDescription:
      'A modern web-based control panel for managing Minecraft servers. Features real-time monitoring, player management, plugin configuration, and server analytics. Built with React frontend and Node.js backend.',
    technologies: ['React', 'Node.js', 'Socket.io'],
    image: '/project/minecraft.webp',
    githubUrl: 'https://github.com/Gaeuly',
    liveUrl: '#',
  },
  {
    id: 4,
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'My personal portfolio website with animations.',
    longDescription:
      'A sleek, modern portfolio website built with React and Framer Motion. Features smooth animations, dark/light mode toggle, custom cursor interactions, and responsive design. Showcases projects and skills with an elegant neo-brutalism aesthetic.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/project/portfolio.webp',
    githubUrl: 'https://github.com/Gaeuly',
    liveUrl: 'https://gaeuy.xyz',
  },
  {
    id: 5,
    slug: 'hosting-service',
    title: 'Hosting Service',
    description:
      'A modern web hosting solution designed for deploying and managing Discord Bots, Minecraft Servers, VPS, & Lavalink. It supports static sites and dynamic applications with automatic SSL, custom domains, and a global CDN built for performance and scalability.',
    longDescription:
      'A modern web hosting solution designed to make deploying and managing Bot Discord, Minecraft Game, VPS, & Lavalink. Supports static sites and dynamic applications with automatic SSL, custom domains, and global CDN. Built for performance, scalability, and simplicity.',
    technologies: [
      'Typescript',
      'Next.Js',
      'Express',
      'Javascript',
      'Firebase',
      'MySQL',
    ],
    image: '/project/hosting.webp',
    githubUrl: 'https://github.com/Gaeuly',
    liveUrl: 'https://codexcloud-hosting.vercel.app',
  },
  {
    id: 6,
    slug: 'discord-quest-bot',
    title: 'Discord Quest Bot',
    description:
      'An automation bot built to complete Discord quests, helping users effortlessly earn avatar decorations.',
    longDescription:
      'An automation bot built to complete Discord quests without the need to play games or watch videos. Designed to help users effortlessly earn avatar decorations by simulating quest completions. Works similarly to a selfbot but focuses on safe and efficient automation. Ideal for users who want to fast-track their Discord rewards with minimal effort.',
    technologies: ['Javascript', 'Typescript', 'MongoDB'],
    image: '/project/discord-quest.webp',
    githubUrl: 'https://github.com/Gaeuly',
    liveUrl: 'https://discord.gg/FnEe7xcYZQ',
  },
  {
    id: 7,
    slug: 'readme-generator',
    title: 'Readme Generator',
    description:
      'A simple tool to generate professional README files for your GitHub projects quickly.',
    longDescription:
      'A web-based tool designed to help developers create clean and professional README.md files. This generator provides templates and markdown shortcuts to streamline the process of documenting projects, ensuring clarity and a great first impression.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/project/readme.webp',
    githubUrl: 'https://github.com/Gaeuly/generator-readme',
    liveUrl: 'https://generator-readme.netlify.app/',
  },
  {
    id: 8,
    slug: 'nimenation',
    title: 'Nimenation',
    description:
      'Nimenation is a modern and dynamic web platform built to help Discord communities showcase their servers in an elegant and interactive way. It offers a sleek landing interface, real-time server information, community stats, and easy access for new members — all wrapped in a clean, futuristic design optimized for both desktop and mobile users.',
    longDescription:
      'Nimenation is a powerful and modern web platform designed to provide an elegant hub for Discord server communities. It allows server owners to showcase their server’s identity through interactive sections, custom branding, and dynamic features that highlight community activities. Built using TypeScript, Angular, Vite, JavaScript, Firebase, and Supabase, Nimenation focuses on performance, scalability, and a seamless user experience.',
    technologies: [
      'TypeScript',
      'Vite',
      'Angular',
      'JavaScript',
      'Firebase',
      'Supabase',
    ],
    image: '/project/nimenation.webp',
    githubUrl: 'https://github.com/Gaeuly/nimenation',
    liveUrl: 'https://nimenation.vercel.app/',
  },
];