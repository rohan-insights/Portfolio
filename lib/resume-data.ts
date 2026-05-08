export const resumeData = {
  name: "Rohan Ghodke",
  email: "rohanghodke9890@gmail.com",
  phone: "+91 9322843993",
  location: "Beed, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/ghodkerohan",
  github: "https://github.com/rohan-insights",
  resumeUrl: "/Rohan_G_Resume.pdf",

  objective:
    "Detail-oriented and analytical Data Analyst with hands-on experience in SQL, Power BI and Python. Skilled in data cleaning, ETL processes, EDA, and dashboard development. Strong ability to transform raw data into actionable business insights.",

  experience: [
    {
      role: "Data Analyst",
      company: "Abira Technologies Pvt. Ltd.",
      duration: "Feb 2026 - Present",
      highlights: [
        "Developed interactive and dynamic dashboards in Power BI for monitoring hospital performance and key metrics.",
        "Performed data extraction, cleaning, and transformation using Power Query.",
        "Designed and implemented efficient data models and relationships for optimized reporting.",
        "Created advanced DAX measures and KPIs for operational efficiency tracking.",
        "Collaborated with stakeholders to gather requirements and translate business needs into dashboards.",
      ],
    },
    {
      role: "Data Analytics Job Simulation",
      company: "Deloitte Australia (Forage)",
      duration: "Nov 2025",
      highlights: [
        "Completed data analysis and forensic technology simulation.",
        "Built interactive dashboard using Tableau.",
        "Used Excel to classify data and derive business conclusions.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science (B.Sc.)",
      institution: "BAMU University, Chhatrapati Sambhajinagar",
      year: "2025",
      score: "73.20%",
    },
    {
      degree: "Intermediate",
      institution: "Maharashtra State Board",
      year: "2022",
      score: "63.83%",
    },
  ],

  certifications: [
    {
      name: "Full Stack Data Science and Generative AI",
      issuer: "Naresh I Technologies",
      duration: "Jun 2025 - Dec 2025",
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia (Forage)",
      duration: "Nov 2025",
    },
  ],

  powerBIDashboards: [
    {
      title: "Sales & Returns Dashboard",
      description: "Interactive dashboard integrating Orders, Returns, and Users data to analyze sales performance, customer behavior, and return trends.",
      category: "Business Analytics",
      tools: ["Power BI", "DAX", "Power Query", "SQL"],
      keyMetrics: ["Total Sales", "Return Rate", "Customer Lifetime Value", "Average Order Value"],
      insights: "Real-time sales monitoring with drill-through capabilities for detailed analysis",
      image: "/dashboards/sales-returns.png",
    },
    {
      title: "Hospital Performance Dashboard",
      description: "Comprehensive dashboard for monitoring hospital operations, patient metrics, and departmental performance.",
      category: "Healthcare Analytics",
      tools: ["Power BI", "DAX", "SQL Server"],
      keyMetrics: ["Patient Census", "ER Wait Time", "Bed Occupancy Rate", "Staff Utilization"],
      insights: "KPI tracking for operational efficiency and resource optimization",
      image: "/dashboards/hospital-performance.png",
    },
    {
      title: "Financial Metrics Dashboard",
      description: "Executive dashboard tracking key financial indicators, revenue trends, and expense analysis.",
      category: "Financial Analytics",
      tools: ["Power BI", "DAX", "Excel Integration"],
      keyMetrics: ["Revenue", "Profit Margin", "Cash Flow", "Budget Variance"],
      insights: "Dynamic filters for real-time financial insights and forecasting",
      image: "/dashboards/financial-metrics.png",
    },
    {
      title: "Customer Analytics Dashboard",
      description: "360-degree customer view dashboard with segmentation, behavior analysis, and churn prediction.",
      category: "Customer Analytics",
      tools: ["Power BI", "DAX", "Python"],
      keyMetrics: ["Customer Acquisition Cost", "Retention Rate", "NPS Score", "Customer Segment Value"],
      insights: "Behavioral patterns and predictive analytics for customer retention",
      image: "/dashboards/customer-analytics.png",
    },
  ],

  skills: {
    programming: ["Python", "SQL"],
    biAnalysis: [
      "EDA",
      "Data Cleaning",
      "ETL",
      "Feature Engineering",
      "KPI Tracking",
      "Dashboard Development",
    ],
    visualization: ["Power BI", "Matplotlib", "Seaborn", "Tableau"],
    databases: ["MySQL", "SQL Server"],
    ml: ["Regression", "Classification", "Model Evaluation", "GridSearchCV"],
    deepLearning: ["CNN", "Transfer Learning", "Transformers", "LLMs"],
    libraries: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Hugging Face",
    ],
    tools: [
      "Excel (Pivot Tables, VLOOKUP)",
      "Power Query",
      "SSIS",
      "GitHub Copilot",
    ],
    ai: ["MCP (Model Context Protocol)", "GitHub Copilot", "Generative AI"],
  },

  softSkills: ["Logical Thinking", "Data Sensitivity", "Cross-Functional Communication"],

  projects: [
    {
      title: "MCP Server + Power BI + Copilot Integration",
      type: "Capstone Project",
      description:
        "Designed architecture integrating MCP Server with Power BI. Enabled AI-driven query generation using LLM prompts and implemented Copilot-assisted DAX generation.",
      tools: ["MCP", "Power BI", "Python", "LLMs", "Copilot"],
      keyOutcomes: [
        "Integrated MCP Server with Power BI",
        "Enabled AI-driven query generation",
        "Implemented Copilot-assisted DAX generation",
      ],
      github: "https://github.com/rohan-insights",
      demo: "#",
    },
    {
      title: "Power BI Sales & Returns Dashboard",
      type: "Dashboard Project",
      description:
        "Designed an interactive Power BI dashboard integrating Orders, Returns, and Users data to analyze sales performance, customer behavior, and return trends.",
      tools: ["Power BI", "DAX", "Power Query", "SQL"],
      keyOutcomes: [
        "Interactive dashboard with KPIs",
        "Drill-through pages for detailed analysis",
        "Dynamic filters for real-time insights",
      ],
      github: "https://github.com/rohan-insights",
      demo: "#",
    },
    {
      title: "Wine Quality Analysis & Prediction",
      type: "Machine Learning",
      description:
        "Performed EDA and feature engineering on wine dataset. Built classification models using Logistic Regression, Random Forest, and SVM.",
      tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      keyOutcomes: [
        "Improved model accuracy through feature engineering",
        "Evaluated multiple algorithms",
        "Delivered performance metrics",
      ],
      github: "https://github.com/rohan-insights",
      demo: "#",
    },
    {
      title: "Heart Disease Risk Analysis",
      type: "Healthcare Analytics",
      description:
        "Analyzed patient health data to identify risk factors. Applied machine learning models and optimized performance using GridSearchCV.",
      tools: ["Python", "Scikit-learn", "Pandas", "GridSearchCV"],
      keyOutcomes: [
        "Identified key risk factors",
        "Optimized model performance",
        "Delivered actionable healthcare insights",
      ],
      github: "https://github.com/rohan-insights",
      demo: "#",
    },
    {
      title: "Content-Based Movie Recommendation System",
      type: "NLP Project",
      description:
        "Built NLP-based recommendation system using TF-IDF and cosine similarity. Deployed using Streamlit for real-time recommendations.",
      tools: ["Python", "NLP", "TF-IDF", "Streamlit"],
      keyOutcomes: [
        "Built recommendation engine",
        "Deployed with Streamlit",
        "Real-time personalized recommendations",
      ],
      github: "https://github.com/rohan-insights",
      demo: "#",
    },
    {
      title: "Language Translator (Seq2Seq LSTM)",
      type: "Deep Learning",
      description:
        "Developed sequence-to-sequence LSTM model using TensorFlow and Keras. Deployed with Streamlit for real-time translation.",
      tools: ["TensorFlow", "Keras", "LSTM", "Streamlit"],
      keyOutcomes: [
        "Implemented Seq2Seq architecture",
        "Real-time translation capability",
        "Web deployment with Streamlit",
      ],
      github: "https://github.com/rohan-insights",
      demo: "#",
    },
  ],
};
