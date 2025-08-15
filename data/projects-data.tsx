export interface Project {
  name: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  status: string
}

export const featuredProjects: Project[] = [
  {
    name: "Muhammad Noman Portfolio",
    description: "A modern personal portfolio built using Next.js and Tailwind CSS to showcase my work and skills.",
    image: "/portfolio.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Email.js", "Framer Motion"],
    liveUrl: "https://nomanportfolio.vercel.app",
    githubUrl: "https://github.com/nomi6123/My-New-Portfolio.git",
    status: "Live",
  },
  {
    name: "Finexo Financial App",
    description: "A responsive financial dashboard app with charts, sliders, and modern UI built in Next.js.",
    image: "/finexo.png",
    technologies: ["Next.js", "Tailwind CSS", "Slick Slider", "Finance"],
    liveUrl: "https://finexo-pearl.vercel.app",
    githubUrl: "https://github.com/nomi6123/finexo",
    status: "Live",
  },
  {
    name: "Web Agency",
    description: "A web agency template designed with Tailwind CSS, animations, and responsive layout.",
    image: "/webing.png",
    technologies: ["Next.js", "API Integration", "Tailwind CSS", "Slick Slider"],
    liveUrl: "https://web-agency-brown.vercel.app",
    githubUrl: "https://github.com/nomi6123/web-agency",
    status: "Live",
  },
]

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    name: "Portfolio Website",
    description: "My first portfolio made with React.js and Tailwind CSS to display skills and completed work.",
    image: "/oldport.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React.js"],
    liveUrl: "https://mynomanweb.vercel.app",
    githubUrl: "https://github.com/nomi6123/my-portfolio.git",
    status: "Live",
  },
  {
    name: "Carint",
    description: "A complete transport service solution with a smooth UI, SEO integration, and animations.",
    image: "/carint.png",
    technologies: ["Next.js", "SEO", "React", "Slick Slider", "Transport"],
    liveUrl: "https://carint-transportservices.vercel.app",
    githubUrl: "https://github.com/nomi6123/carint",
    status: "In Progress",
  },
  {
    name: "Healet",
    description: "A luxury jewelry e-commerce platform featuring clean design, sliders, and elegant layout.",
    image: "/healet.png",
    technologies: ["Tailwind CSS", "E-commerce", "Slider", "React"],
    liveUrl: "https://healet-for-jewellry.vercel.app",
    githubUrl: "https://github.com/nomi6123/healet",
    status: "Live",
  },
  {
    name: "Car Industry",
    description: "A complete auto industry website with animation, product showcase, and smooth navigation.",
    image: "/car.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Slick Slider", "Animation"],
    liveUrl: "https://my-car-industry.vercel.app",
    githubUrl: "https://github.com/nomi6123/My-Car-Industry.git",
    status: "Live",
  },
  {
    name: "Matter js",
    description: "A physics-based interactive portfolio project using Matter.js, animations, and smooth UI.",
    image: "/matter js.png",
    technologies: ["Matter js", "Physics", "React", "Tailwind CSS", "Redis"],
    liveUrl: "https://matter-js-portfolio.vercel.app",
    githubUrl: "https://github.com/nomi6123/matter-js-portfolio",
    status: "Live",
  },
  {
    name: "Guards",
    description: "A Flutter-based mobile app for managing guard duties with health APIs and local storage.",
    image: "/guards.png",
    technologies: ["Flutter", "Dart", "SQLite", "Health APIs"],
    liveUrl: "https://my-guard.vercel.app",
    githubUrl: "https://github.com/nomi6123/My-Guard",
    status: "Live",
  },
  {
    name: "Alarm Clock",
    description: "A fully functional alarm clock app in React.js with AI support and alarm scheduling UI.",
    image: "/Alarm Clock.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Claude AI", "Alarm"],
    liveUrl: "https://alarm-clock-app-umber.vercel.app",
    githubUrl: "https://github.com/nomi6123/Alarm-Clock-APP.git",
    status: "Live",
  },
  {
    name: "Currency Converter App",
    description: "A real-time currency converter app built with React.js and APIs to exchange rates between multiple global currencies.",
    image: "/currency converter.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Exchange API"],
    liveUrl: "https://curr-exchange-pro.vercel.app",
    githubUrl: "https://github.com/nomi6123/CurrExchange-Pro.git",
    status: "Live",
  },
  {
    name: "Islamic Website",
    description: "An Islamic information site built with React and Tailwind CSS featuring daily duas, namaz timings, and learning resources.",
    image: "/islamic.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Prayer Times API"],
    liveUrl: "https://islamicmn.vercel.app",
    githubUrl: "https://github.com/nomi6123/IslamicMN-noman.git",
    status: "Live",
  },
  {
    name: "AI Powered Resume Checker",
    description: "An AI-based tool that analyzes resumes and gives instant feedback to help improve job application success chances.",
    image: "/resume-checker.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "AI Integration"],
    liveUrl: "https://ai-powered-resume-checker-boost-you.vercel.app",
    githubUrl: "https://github.com/nomi6123/AI-Powered-Resume-Checker-Boost-Your-Job-Chances-Instantly.git",
    status: "Live",
  }
]

// Add this line to export projects
export const projects = allProjects;