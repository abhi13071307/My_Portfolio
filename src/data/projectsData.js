// src/data/projectsData.js
// Static project data (populated from resume)
const projects = [
  {
    slug: "ecommerce-api-payments",
    title: "E-commerce API with Payments",
    date: "2024-06-01",
    summary: "Scalable backend using NestJS, PostgreSQL and Stripe integration for secure payments.",
    description:
      `Designed and implemented a scalable backend using NestJS, PostgreSQL, and Prisma ORM, with Stripe API for secure payment integration.
      Developed RESTful APIs with Swagger documentation, implemented authentication, authorization and role-based access. Built robust error handling and transactional flows for payments and order processing.`,
    tech: ["NestJS", "PostgreSQL", "Prisma", "Stripe", "Swagger"],
    repo: "https://github.com/abhi13071307/ecommerce-api",
    live: null,
  },
  {
    slug: "blog-management-system",
    title: "Blog Management System",
    date: "2023-11-01",
    summary: "MERN blog app with JWT authentication and optimized backend.",
    description:
      `Built a MERN stack blog app supporting creation, editing and deletion of posts. Integrated JWT auth for secure sessions, designed MongoDB schemas for efficient queries, and used Express middleware for validation and rate-limiting.`,
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    repo: "https://github.com/abhi13071307/blog-management",
    live: null,
  },
  {
    slug: "gaming-platform-ui",
    title: "Gaming Platform UI (Stake-inspired)",
    date: "2023-07-01",
    summary: "Responsive frontend for a gaming platform with reusable components.",
    description:
      `Built a modern, responsive frontend for a gaming platform using React.js. Created reusable components (Header, Nav, Banner, Footer), implemented mobile-first design and optimized performance across devices. Focused on accessibility and fast interactions.`,
    tech: ["React", "CSS3", "HTML5"],
    repo: "https://github.com/abhi13071307/gaming-ui",
    live: null,
  },
  {
    slug: "patient-sentiment-analysis",
    title: "Patient Sentiment Analysis from CCTV",
    date: "2022-10-01",
    summary: "ML pipeline using OpenCV and machine learning to detect facial sentiment.",
    description:
      `Created a system to analyze facial expressions from CCTV frames to detect positive, negative, or neutral sentiments. Used OpenCV for face detection, built ML pipelines for emotion classification, and exported insights for improving customer experience.`,
    tech: ["Python", "OpenCV", "Machine Learning"],
    repo: null,
    live: null,
  },
];

export default projects;
