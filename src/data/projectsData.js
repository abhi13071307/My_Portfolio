const projects = [
  {
    title: "Store Rater",
    slug: "store-rater-full-stack",
    summary:
      "A full-stack web application that allows users to rate and review stores based on their experiences. Implements role-based authentication for users and admins, with seamless frontend–backend communication.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "REST API",
      "JWT Authentication",
      "Tailwind CSS",
      "Vite"
    ],
    repo: "https://github.com/abhi13071307/Store_rater_Full_Stack",
    details: {
      overview:
        "Store Rater is a full-stack platform where users can rate and review registered stores. It features a secure authentication system, an admin dashboard for managing stores and reviews, and a clean responsive interface built with React and Tailwind CSS.",
      features: [
        "Role-based authentication (user & admin)",
        "RESTful APIs for CRUD operations",
        "PostgreSQL database with Prisma ORM",
        "Responsive frontend built with React and Tailwind CSS",
        "Protected routes and token-based login system"
      ],
      challenges: [
        "Implementing secure JWT authentication flow",
        "Synchronizing store–user data across frontend and backend",
        "Designing efficient database schema for store–review relationships"
      ],
      outcomes: [
        "Improved understanding of full-stack development pipeline",
        "Hands-on experience with PostgreSQL and Prisma ORM",
        "Implemented modular backend architecture using Express.js"
      ]
    }
  },
  {
    title: "Workflow Automation with AI Agent",
    slug: "upthrust-assignment",
    summary:
      "A workflow automation platform powered by an AI agent that automates data processing and integrates real-time weather insights. Designed as a modular backend system with a clean React frontend.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Large Language Models",
      "Generative AI",
      "OpenAI API",
      "Weather API Integration",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Tailwind CSS"
    ],
    repo: "https://github.com/abhi13071307/Upthrust_Assignment",
    details: {
      overview:
        "This project demonstrates a smart workflow automation system that leverages an AI agent to manage, process, and analyze real-time data. It includes weather API integration and automatic task execution to streamline repetitive backend operations.",
      features: [
        "AI agent integration using OpenAI API",
        "Dynamic weather data fetching and analysis",
        "Scalable backend architecture with Express.js and MongoDB",
        "Modular and reusable REST API endpoints",
        "Clean UI with Tailwind CSS and responsive layout"
      ],
      challenges: [
        "Building a reliable communication layer between the AI agent and REST endpoints",
        "Handling asynchronous API calls efficiently",
        "Structuring scalable and readable backend modules"
      ],
      outcomes: [
        "Developed a real-time AI-powered automation pipeline",
        "Enhanced understanding of API orchestration and async data flows",
        "Delivered a stable, extensible project demonstrating AI-based backend design"
      ]
    }
  },
  {
    title: "Hedging & Backtesting Toolkit",
    slug: "hedging-py",
    summary:
      "A Python-based hedging and backtesting toolkit for financial strategies — includes data ingestion, strategy simulation, risk metrics, and visual reports to evaluate hedging performance.",
    tech: [
      "Python",
      "pandas",
      "NumPy",
      "matplotlib",
      "backtrader",
      "scikit-learn",
      "Jupyter Notebook",
      "CSV / OHLC data"
    ],
    repo: "https://github.com/abhi13071307/Hedging-py",
    details: {
      overview:
        "Hedging & Backtesting Toolkit is a research-friendly Python project that helps design and evaluate hedging strategies. It supports historical data ingestion, signal generation, portfolio simulation, and visualization of P&L and risk metrics.",
      features: [
        "Data ingestion & cleaning from CSV / market sources",
        "Strategy implementation and backtesting (position sizing, slippage, fees)",
        "Risk metrics: drawdown, Sharpe ratio, volatility analysis",
        "Visual reports and charts using matplotlib",
        "Interactive research via Jupyter notebooks"
      ],
      challenges: [
        "Ensuring numerical stability and proper handling of missing market data",
        "Modeling realistic transaction costs and slippage in simulations",
        "Designing extensible backtesting hooks for different strategies"
      ],
      outcomes: [
        "Faster iteration on hedging strategies through reusable backtest modules",
        "Improved ability to quantify strategy risk and performance",
        "Practical exposure to time-series data processing and financial metrics"
      ]
    }
  },
  {
    title: "Instant Feedback System using Facial Recognition",
    slug: "instant-feedback-system-using-facial-recognition",
    summary:
      "An AI-powered feedback analysis system that captures facial expressions through CCTV footage to classify customer emotions as positive, negative, or neutral — providing real-time insights into user satisfaction.",
    tech: [
      "Python",
      "OpenCV",
      "DeepFace",
      "TensorFlow",
      "Keras",
      "Face Detection",
      "Emotion Recognition",
      "Computer Vision"
    ],
    repo: "https://github.com/abhi13071307/Instant-Feedback-System-using-Facial-Recognition",
    details: {
      overview:
        "This project implements an advanced computer vision pipeline for real-time emotion recognition. It analyzes video frames from CCTV cameras to detect faces, classify emotions, and compute aggregate customer experience scores.",
      features: [
        "Real-time facial detection and emotion recognition",
        "Integration with CCTV video feed for continuous monitoring",
        "Classification of emotions into positive, negative, and neutral categories",
        "Automated feedback computation for customer experience analytics",
        "Modular and scalable Python design for future improvements"
      ],
      challenges: [
        "Ensuring accurate emotion detection across lighting and angles",
        "Processing real-time video streams efficiently",
        "Optimizing model inference speed for continuous emotion tracking"
      ],
      outcomes: [
        "Created a production-ready emotion detection system using OpenCV and DeepFace",
        "Demonstrated practical integration of AI models with live CCTV data",
        "Enhanced experience in computer vision and applied AI model deployment"
      ]
    }
  },
  {
    title: "Kitchen Chicken 3D",
    slug: "kitchenchicken-fullgame-3d",
    summary:
      "A 3D cooking and food delivery simulation game built in Unity. Players prepare dishes, manage kitchen orders, and deliver meals on time while navigating a dynamic 3D environment.",
    tech: [
      "Unity",
      "C#",
      "Blender",
      "Physics Engine",
      "NavMesh AI",
      "3D Modeling",
      "Animation",
      "Game Design Patterns"
    ],
    repo: "https://github.com/abhi13071307/KitchenChicken-FullGame-3D",
    details: {
      overview:
        "Kitchen Chicken 3D is a full-fledged Unity game project where players step into a fast-paced kitchen environment. The gameplay focuses on cooking correct recipes, fulfilling customer orders, and managing deliveries efficiently within a time limit.",
      features: [
        "Fully interactive 3D environment with realistic physics",
        "Player-controlled cooking, ingredient management, and delivery",
        "Recipe-based gameplay with real-time scoring and time constraints",
        "AI-powered customer order system using Unity’s NavMesh agents",
        "Polished UI and smooth animations for an engaging experience"
      ],
      challenges: [
        "Balancing performance and visual fidelity for 3D scenes",
        "Creating realistic object physics and responsive controls",
        "Implementing order management logic within Unity's event system"
      ],
      outcomes: [
        "Developed a fully functional 3D Unity game from concept to completion",
        "Improved understanding of C# scripting and Unity physics systems",
        "Gained practical experience in game loop design and optimization"
      ]
    }
  }
];
export default projects;
