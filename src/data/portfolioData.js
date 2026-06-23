export const portfolioData = {
  personalInfo: {
    name: "Rahul Diwakar",
    title: "Full-Stack / Software Developer",
    location: "Agra, Uttar Pradesh",
    email: "diwakarr135@gmail.com",
    phone: "+91 7037119579",
    github: "https://github.com/rahul-diw", // Aap apna real link badal sakte ho
    linkedin: "https://www.linkedin.com/in/rahul-diwakar-7420072b0/",
    dsaStats: "240+ Problems Solved on GeeksforGeeks",
  },
  
  // portfolioData.js ke andar 'about' check karein:
about: {
  description: "Full-Stack/Software Developer (MCA '24) with a unique, data-centric background bridging comprehensive analytics foundations with modern web systems. Proficient in building responsive frontend user experiences and designing performance-optimized backend models.",
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "RBS Management Technical Campus, Agra",
      duration: "2022 - 2024",
      score: "CGPA: 6.86"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Raja Balwant Singh College, Agra",
      duration: "2018 - 2022",
      score: "CGPA: 6.50"
    }
  ],
  // YE WALA FORMAT HONA CHAHIYE (Objects with text and tag):
  highlights: [
    {
      text: "Selected for Smart India Hackathon (SIH) 2020 at Hindustan College, developing a functional tech prototype under a strict 24-hour regional constraint.",
      tag: "hackathon"
    },
    {
      text: "Achieved top rank on the Elite Coders Winter of Code national leaderboard among competitive open-source contributors.",
      tag: "competition"
    },
    {
      text: "Architected a Multi-Warehouse Inventory Platform optimizing complex relational joins and SQL architectures, reducing database audit reconciliation loops by ~55%.",
      tag: "engineering"
    },
    {
      text: "Served as a Volunteer Web Development Instructor, mentoring online learners in core frontend workflows and clean code architectural paradigms.",
      tag: "leadership"
    },
    {
      text: "Verified Advanced SQL query profiling capabilities by clearing the industry standard HackerRank Technical Certification.",
      tag: "certification"
    }
  ]
},

  projects: [
    {
      title: "Smart Task Administration System",
      role: "Full-Stack Developer",
      duration: "2026",
      stack: ["Next.js (v14)", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "JWT"],
      bullets: [
        "Architected a dark-themed project coordination application featuring an interactive Kanban Board with drag-and-drop states.",
        "Implemented Workflow Analytics via data visualization (Donut Charts) and a custom Deadline Calendar, reducing monitoring overhead by ~40%.",
        "Engineered a file attachment pipeline using Multer/Cloudinary, reducing manual document-sharing loops.",
        "Developed secure infrastructure with JWT Authentication and real-time Activity Log Drawer for 100% audit visibility."
      ],
      image: "/smart-task-dashboard.png" // Ye images baad mein public folder mein dalenge
    },
    {
      title: "Multi Warehouse Inventory Platform",
      role: "Backend & Database Engineer",
      duration: "2026",
      stack: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
      bullets: [
        "Architected a full-stack supply ecosystem to manage product workflows and stock tracking across multiple geographic locations.",
        "Optimized database architecture with advanced SQL queries and dynamic joins, reducing audit reconciliation time by ~55%.",
        "Engineered comprehensive modules for stock tracking, low-supply alerts, and automated reorder triggers to eliminate manual errors by 70%.",
        "Integrated secure, role-based JWT authentication to enforce strict access control."
      ],
      image: "/warehouse-dashboard.png"
    },
    {
      title: "Online Web Gallery Application",
      role: "Software Engineer",
      duration: "2025",
      stack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Cloudinary", "MongoDB"],
      bullets: [
        "Designed a high-performance web gallery optimized for fluid image layout distributions and seamless media rendering.",
        "Implemented instant search bars and advanced multi-category filtering mechanisms, cutting navigation time by ~50%.",
        "Integrated encrypted cloud storage pipelines with Cloudinary for media auto-compression and lazy-loading, improving page load speeds by ~35%."
      ],
      image: "/gallery-dashboard.png"
    }
  ],
  skills: {
    languages: ["JavaScript (ES6+)", "Python", "C", "C++"],
    frontend: ["React.js", "HTML5", "CSS3", "Component-Driven Design", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs", "MySQL", "Advanced SQL", "MongoDB"],
    tools: ["VS Code", "Git", "GitHub", "Postman", "Microsoft Power BI", "Excel"]
  },
  certifications: [
    "Advanced SQL Certification - Verified by HackerRank",
    "Data Science & Analytics Foundations - Granted by HP LIFE, Cisco, and Google",
    "Enterprise Data & BI Simulations - PwC Switzerland (Power BI), Tata Group, BCG",
    "Python Programming Core - Certified by Infosys and Cisco"
  ]
};