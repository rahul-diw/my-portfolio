// src/data/portfolioData.js
export const portfolioData = {
  personalInfo: {
    name: "Rahul Diwakar",
    dsaStats: "240+ Problems Solved",
  },
  about: {
    description: "Full-Stack/Software Developer (MCA '24) with a unique, data-centric background bridging comprehensive analytics foundations with modern web systems. Proficient in building responsive frontend user experiences and designing performance-optimized backend models.",
    
    // ====== EDUCATION ARRAY (SAARE 4 ITEMS) ======
    education: [
      { 
        degree: "Master of Computer Applications", 
        institution: "AKTU", 
        year: "Present", 
        score: "CGPA: 6.86" 
      },
      { 
        degree: "Bachelor of Computer Applications", 
        institution: "DBRAU", 
        year: "2018 - 2022", 
        score: "CGPA: 6.84" 
      },
      { 
        degree: "Class 12th", 
        institution: "UP Board (RBIC)", 
        year: "2017 - 2018", 
        score: "Score: 60%" 
      },
      { 
        degree: "Class 10th", 
        institution: "UP Board (RBIC)", 
        year: "2015 - 2016", 
        score: "Score: 62%" 
      },
    ],
    
    // ====== JOURNEY ARRAY (SAARE 4 ITEMS) ======
    journey: [
      {
        year: "2023",
        title: "Started Coding Journey",
        description: "Bridged my background from data entry operations to software engineering, starting with core frontend workflows and algorithms."
      },
      {
        year: "2020",
        title: "Competitive Growth",
        description: "Selected for Smart India Hackathon (SIH) 2020: Developed a tech prototype under a strict 24-hour regional constraint at Hindustan College."
      },
      {
        year: "2025 - 2026",
        title: "First Full-Stack Build",
        description: "Built 'Smart Task Administration System' using Next.js (v14), Node.js, and MongoDB, integrating an interactive Kanban Board with dynamic workflows."
      },
      {
        year: "2026",
        title: "Current Mission",
        description: "Focused on full-stack mastery, competitive programming, and building secure, scalable systems that turn ambitious ideas into polished products."
      }
    ],
    
    highlights: [
      { text: "Selected for Smart India Hackathon (SIH) 2020 at Hindustan College, developing a functional tech prototype under a strict 24-hour regional constraint.", tag: "Competition" },
      { text: "Achieved top rank on the Elite Coders Winter of Code national leaderboard among competitive open-source contributors.", tag: "Achievement" },
      { text: "Architected a Multi-Warehouse Inventory Platform optimizing complex relational joins and SQL architectures, reducing database audit reconciliation loops by ~55%.", tag: "Engineering" },
    ]
  }
};