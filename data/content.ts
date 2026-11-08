// All site copy lives here. Edit this file to update the website.
// Sources: resume screenshot in the project folder and resume-9.pdf.

export const profile = {
  name: "Elijah Arulandu",
  headline: "Applied Mathematics · Master of Business and Technology Student at Purdue",
  tagline:
    "I work where math, data and products meet: regional climate simulations on supercomputers, computational number theory, and a sports analytics platform I founded and grew.",
  location: "Valparaiso, IN",
  email: "elijah.arulandu@gmail.com",
  schoolEmail: "eruland@purdue.edu",
  linkedin: "https://www.linkedin.com/in/elijaharulandu",
  github: "https://github.com/earulandu",
};

export const about = [
  "I'm a Master of Business and Technology student at Purdue University's Mitch Daniels School of Business. Before that, I earned a B.S. in Applied Mathematics with a minor in Economics at Indiana University.",
  "My research has covered regional climate modeling, automata theory, random walks and machine learning for geophysical data. Outside the lab, I founded diestats.app, worked in operations for a professional football team in Berlin, and have run client work for a local lawn care business since 2019.",
];

export const education = [
  {
    school: "Purdue University, Mitch Daniels School of Business",
    degree: "Master of Business and Technology",
    place: "West Lafayette, IN",
    date: "Dec 2027",
    details: [],
  },
  {
    school: "Indiana University",
    degree: "B.S. Applied Mathematics, Minor in Economics",
    place: "Bloomington, IN",
    date: "May 2026",
    details: [
      "Coursework: Real Analysis, Complex Analysis, Probability Theory, Game Theory, Differential Equations, Programming",
      "Activities: William Lowell Putnam Competition ('23, '24, '25), IU Lab of Geometry, Physics Club",
    ],
  },
];

export const experience = [
  {
    org: "diestats.app",
    role: "Founder & Developer",
    place: "Bloomington, IN",
    date: "Jan 2024 – Present",
    points: [
      "Built a full-stack sports analytics platform with React and Node.js to collect, process and visualize real-time play-by-play data.",
      "Managed end-to-end product development, deployment, hosting and revenue-generating features.",
    ],
  },
  {
    org: "European League of Football: Berlin Thunder",
    role: "Operations and Management Intern",
    place: "Berlin, Germany",
    date: "May – Jul 2024",
    points: [
      "Audited and reconciled payment logs and cash flow records across multiple departments.",
      "Identified and implemented process improvements that reduced overall operations expenditures by more than 3%.",
      "Worked with coaching staff, logistics and front-office teams to streamline day-to-day operations.",
    ],
  },
  {
    org: "Moraine Lawn Care",
    role: "General Laborer",
    place: "Valparaiso, IN",
    date: "Jan 2019 – Present",
    points: [
      "Built and kept strong client relationships, resulting in repeat business and referrals.",
    ],
  },
];

export type Research = {
  title: string;
  advisor: string;
  date: string;
  tech: string[];
  points: { label: string; text: string }[];
};

export const research: Research[] = [
  {
    title: 'RegCM5 Climate Modeling for "Corn Sweat"',
    advisor: "Travis O'Brien",
    date: "Spring 2026",
    tech: ["Python", "Fortran", "RegCM5", "NetCDF", "HPC"],
    points: [
      {
        label: "Regional Climate Simulation",
        text: "Configured and executed ensemble RegCM5 simulations across two domains to analyze mesoscale weather patterns and humidity dynamics in the Great Plains.",
      },
      {
        label: "Parameterization Analysis",
        text: "Applied land-surface and boundary-layer parameterization schemes to quantify the impact of crop-driven evapotranspiration on regional heat index and convective weather.",
      },
      {
        label: "HPC Pipeline",
        text: "Developed a Python pipeline for ensemble averaging, time-series analysis and visualization on IU's high-performance computing cluster, and presented the findings at the Crossroads Undergraduate Research Conference.",
      },
    ],
  },
  {
    title: "Divisibility Properties of Automaton-Based Constant Term Sequences",
    advisor: "Nadav Kohen",
    date: "Spring 2025",
    tech: ["Python", "SageMath", "Walnut"],
    points: [
      {
        label: "Computational Number Theory",
        text: "Investigated polynomial mappings over finite fields using automata theory and symbolic computation to uncover emergent divisibility patterns.",
      },
      {
        label: "Conjecture Formulation",
        text: "Formulated and computationally verified a conjecture linking prime structure with upper bounds on finite state machine complexity and zero-distribution.",
      },
    ],
  },
  {
    title: "Random Walks in Two and Three Dimensional Environments",
    advisor: "Maximillian Newman",
    date: "Fall 2024",
    tech: ["Python", "NumPy", "Matplotlib"],
    points: [
      {
        label: "Stochastic Simulation",
        text: "Designed and executed large-scale Monte Carlo simulations of random walks in lattice environments to study recurrence and transience properties.",
      },
      {
        label: "Branching Process Analysis",
        text: "Provided empirical evidence supporting recurrence in three-dimensional random walks under branching process conditions, extending classical Pólya recurrence results.",
      },
    ],
  },
  {
    title: "Machine Learning for Geophysical Data",
    advisor: "Kapil Chawla",
    date: "Spring 2023",
    tech: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
    points: [
      {
        label: "Predictive Modeling",
        text: "Developed and benchmarked supervised learning models (regression, neural networks) to solve geophysical inverse problems in multiple dimensions.",
      },
      {
        label: "Ice Sheet Depth Prediction",
        text: "Trained models on NASA's Operation IceBridge radar dataset to predict Greenland Ice Sheet depth, achieving improved accuracy with synthetically degraded data.",
      },
    ],
  },
];

export type Project = {
  title: string;
  date: string;
  tech: string[];
  points: { label: string; text: string }[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: "Die Stats: Full-Stack Web Application and Mobile App",
    date: "Ongoing",
    tech: ["TypeScript", "JavaScript", "React", "HTML/CSS", "Node.js"],
    points: [
      {
        label: "Performance Analytics Platform",
        text: "Architected and deployed a full-stack web application to track, visualize and analyze play-by-play performance data in real time.",
      },
      {
        label: "User Growth & Monetization",
        text: "Scaled the platform to hundreds of active users and implemented revenue-generating features, managing end-to-end deployment and hosting.",
      },
    ],
    link: { label: "diestats.app", href: "https://diestats.app" },
  },
  {
    title: "Atmospheric Data Forecasting",
    date: "Fall 2023",
    tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    points: [
      {
        label: "Time-Series Forecasting",
        text: "Built machine learning pipelines for atmospheric data prediction, including feature engineering, model selection and trend analysis to benchmark critical climate milestones.",
      },
    ],
  },
];

export const awards = [
  {
    title: "William Lowell Putnam Mathematical Competition",
    detail: "Competitor",
    date: "2023, 2024, 2025",
  },
  {
    title: "Crossroads Undergraduate Research Conference",
    detail: "Presenter, RegCM5 climate modeling research",
    date: "2026",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "HTML/CSS", "Fortran"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "Node.js", "Next.js", "NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "Matplotlib", "SageMath"],
  },
  {
    group: "Data & Scientific Tools",
    items: ["Microsoft Excel", "Tableau", "RegCM5", "NetCDF", "Walnut", "High-Performance Computing"],
  },
  {
    group: "DevOps & Cloud",
    items: ["Git & GitHub", "Docker", "Google Cloud Run", "Cloud Build", "AI-assisted development"],
  },
  {
    group: "Mathematics",
    items: ["Real Analysis", "Complex Analysis", "Probability Theory", "Game Theory", "Differential Equations", "Stochastic Simulation"],
  },
];

export const contact = {
  intro:
    "I'm always happy to talk about research, data and software projects, or opportunities at the intersection of business and technology. Email is the fastest way to reach me.",
};
