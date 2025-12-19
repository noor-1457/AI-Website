import { FaSearch, FaBrain, FaRocket, FaChartLine, FaShoppingCart, FaHeartbeat, FaGraduationCap, FaBuilding, FaStore, FaAward, } from "react-icons/fa";

export const steps = [
    {
      icon: <FaSearch size={30} />,
      title: "Business Analysis",
      description:
        "We start by understanding your business goals, challenges, and workflows to identify automation opportunities.",
    },
    {
      icon: <FaBrain size={30} />,
      title: "AI Model & Workflow Design",
      description:
        "Our team designs customized AI workflows and automation models tailored to your business needs.",
    },
    {
      icon: <FaRocket size={30} />,
      title: "Deployment & Integration",
      description:
        "We deploy the AI solution and integrate it smoothly with your existing systems and tools.",
    },
    {
      icon: <FaChartLine size={30} />,
      title: "Monitoring & Optimization",
      description:
        "We continuously monitor performance and optimize the system to ensure maximum efficiency and results.",
    },
  ];

export const caseStudies = [
        {
        id: "ecommerce-automation",    
        title: "E-commerce Automation",
        company: "StyleHub Fashion",
        industry: "E-commerce",
        problem: "Manual order processing took 50+ hours weekly with 15% error rate in shipping.",
        solution: "AI-powered automated order processing system with real-time inventory sync.",
        results: [
            { label: "Processing Time", value: "85% faster" },
            { label: "Error Rate", value: "Reduced to 2%" },
            { label: "Cost Savings", value: "$45,000/year" }
        ],
        metrics: [
            { icon: 'time', value: '50 hrs', label: 'Weekly Saved' },
            { icon: 'revenue', value: '30%', label: 'Sales Increase' },
            { icon: 'cost', value: '40%', label: 'Cost Reduced' }
        ]
        },
        {
        id: "heathcare-appointment",
        title: "Healthcare Appointment System",
        company: "MediCare Hospitals",
        industry: "Healthcare",
        problem: "30% no-show rate causing revenue loss and inefficient scheduling.",
        solution: "AI scheduling with automated reminders and predictive analytics.",
        results: [
            { label: "No-show Rate", value: "Down to 8%" },
            { label: "Patient Satisfaction", value: "90%" },
            { label: "Staff Efficiency", value: "Increased 2x" }
        ],
        metrics: [
            { icon: 'time', value: '200+ hrs', label: 'Monthly Saved' },
            { icon: 'revenue', value: '$80K', label: 'Revenue Gain' },
            { icon: 'cost', value: '35%', label: 'Cost Reduced' }
        ]
        },
        {
        id: "realestate-automation",
        title: "Real Estate Lead Management",
        company: "Urban Properties",
        industry: "Real Estate",
        problem: "60% lead loss due to slow follow-up and manual processes.",
        solution: "AI chatbot for instant lead qualification and automated CRM.",
        results: [
            { label: "Lead Response Time", value: "From 24h to 2min" },
            { label: "Conversion Rate", value: "Increased 250%" },
            { label: "Lead Cost", value: "Reduced 55%" }
        ],
        metrics: [
            { icon: 'time', value: 'Instant', label: 'Response Time' },
            { icon: 'revenue', value: '250%', label: 'More Conversions' },
            { icon: 'cost', value: '55% ↓', label: 'Per Lead Cost' }
        ]
        }
    ];

export const solutionsData = [
  {
    title: "AI Chatbots",
    problem:
      "Businesses waste time and resources answering repeated customer questions manually.",
    solution:
      "AI chatbots automatically answer customer queries 24/7 without human intervention.",
    benefits: [
      "Faster response time",
      "Less human effort",
      "Better customer satisfaction",
    ],
  },
  {
    title: "Workflow Automation",
    problem: "Manual workflows slow down operations and increase errors.",
    solution:
      "AI automates repetitive workflows like approvals, task assignment, and data handling.",
    benefits: [
      "Time saving",
      "Reduced operational cost",
      "Improved productivity",
    ],
  },
  {
    title: "CRM Automation",
    problem: "Customer data and follow-ups are difficult to manage manually.",
    solution:
      "AI-powered CRM systems automatically manage leads, follow-ups, and customer data.",
    benefits: [
      "Better lead management",
      "Improved customer relationships",
      "Higher sales efficiency",
    ],
  },
  {
    title: "Marketing Automation",
    problem: "Marketing campaigns require too much manual effort and time.",
    solution:
      "AI automates email marketing, ads, and social media campaigns based on customer behavior.",
    benefits: [
      "Higher conversion rates",
      "Lower marketing cost",
      "Data-driven marketing decisions",
    ],
  },
  {
    title: "Data Analytics",
    problem: "Businesses struggle to understand large amounts of raw data.",
    solution:
      "AI analyzes data and provides insights, trends, and predictive analytics.",
    benefits: [
      "Smarter decision making",
      "Real-time insights",
      "Competitive advantage",
    ],
  },
];
export const industries = [
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: FaShoppingCart,
    accent: "text-indigo-300 bg-indigo-500/10",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
    problem: "Manual order handling and constant customer queries slow delivery and support.",
    automation: "AI chatbots plus automated order routing, inventory sync, and proactive shipping updates.",
    result: "Faster order cycles, higher CSAT, and fewer support tickets per purchase.",
    plays: [
      "24/7 product Q&A with upsell prompts",
      "Abandoned-cart recovery flows",
      "Auto-label creation + carrier selection",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: FaHeartbeat,
    accent: "text-rose-200 bg-rose-500/10",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    problem: "High no-show rates and manual intake eat staff time and reduce billable visits.",
    automation:
      "AI scheduling with smart reminders, digital intake, and eligibility checks before arrival.",
    result: "Lower no-shows, smoother front-desk operations, and more time for patient care.",
    plays: [
      "SMS + voice reminders with reschedule links",
      "Pre-visit form capture synced to EHR",
      "Post-visit follow-ups and care-plan nudges",
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: FaGraduationCap,
    accent: "text-amber-200 bg-amber-500/10",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    problem:
      "Manual enrollment support and uneven learner engagement create drop-offs mid-program.",
    automation:
      "AI onboarding assistants, adaptive study plans, and automated progress nudges for cohorts.",
    result: "Higher course completion, faster support responses, and happier students.",
    plays: [
      "24/7 enrollment + financing FAQs",
      "Personalized study paths by performance",
      "Auto-grading with instant feedback",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: FaBuilding,
    accent: "text-emerald-200 bg-emerald-500/10",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    problem: "Leads slip through due to slow follow-up and manual tour coordination.",
    automation:
      "AI lead qualification, instant responses, and automated tour scheduling across agents.",
    result: "Minutes-to-seconds response times, higher conversions, and fuller pipelines.",
    plays: [
      "Lead scoring + routing to best agent",
      "Auto-scheduling property tours with reminders",
      "Listing Q&A chat with neighborhood data",
    ],
  },
  {
    id: "smb",
    name: "Small Businesses",
    icon: FaStore,
    accent: "text-cyan-200 bg-cyan-500/10",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1400&q=80",
    problem: "Owners juggle support, invoicing, and ops—making growth activities suffer.",
    automation:
      "AI assistants for support, billing workflows, and repeatable ops checklists that run themselves.",
    result: "Recovered founder time, predictable cash flow, and consistent customer follow-up.",
    plays: [
      "Smart help desk that drafts replies",
      "Automated invoicing + payment reminders",
      "Ops checklists triggered by events",
    ],
  },
];
export const carouselSlides = [
  {
    id: "slide-ecommerce",
    title: "E-commerce automation",
    caption: "Smart routing, proactive shipping updates, and 24/7 product guidance.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "slide-healthcare",
    title: "Healthcare experience",
    caption: "Automated scheduling, reminders, and pre-visit intake to cut no-shows.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "slide-education",
    title: "Education journeys",
    caption: "Adaptive learning nudges and instant enrollment assistance.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "slide-realestate",
    title: "Real estate velocity",
    caption: "Instant lead qualification and automated tour scheduling.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "slide-smb",
    title: "Small business control",
    caption: "Hands-free invoicing, support replies, and repeatable ops checklists.",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1400&q=80",
  },
];

export const kpis = [
  { label: "Response time", value: "x12 faster", desc: "Lead + support handling" },
  { label: "Ops time saved", value: "35-60%", desc: "Manual workflows removed" },
  { label: "Conversion uplift", value: "2-3.5x", desc: "Qualified, warmed leads" },
  { label: "Error reduction", value: "70%+", desc: "Data entry + scheduling" },
];

export const playbook = [
  {
    title: "Map industry workflows",
    body: "Identify repetitive tasks, SLAs, and customer touchpoints to automate first.",
  },
  {
    title: "Pilot fast, scale safely",
    body: "Launch in weeks with guardrails, then expand to adjacent processes.",
  },
  {
    title: "Measure and tune",
    body: "Track response times, CSAT, cost per ticket, and revenue lift per journey.",
  },
];

export const visualSnapshots = [
  {
    title: "AI assistant for retail",
    tag: "E-commerce",
    blurb: "Guides customers, routes orders, and surfaces upsells automatically.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    features: ["24/7 availability", "Multi-channel support", "Smart recommendations"],
    accent: "from-indigo-500 to-purple-500",
  },
  {
    title: "Smart scheduling desk",
    tag: "Healthcare",
    blurb: "Predicts demand, books appointments, and reminds patients proactively.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    features: ["Predictive analytics", "Auto-reminders", "Demand forecasting"],
    accent: "from-rose-500 to-pink-500",
  },
  {
    title: "Lead routing console",
    tag: "Real Estate",
    blurb: "Scores, qualifies, and books tours while syncing with your CRM.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    features: ["Lead scoring", "CRM integration", "Auto-booking"],
    accent: "from-emerald-500 to-teal-500",
  },
];

export const playlistSlides = [
  {
    title: "Intent-aware chat",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    caption: "Routes conversations to sales or success with smart actions.",
    tag: "E-commerce",
  },
  {
    title: "Predictive scheduling",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80",
    caption: "Balances provider load and keeps utilization high.",
    tag: "Healthcare",
  },
  {
    title: "Adaptive learning nudges",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    caption: "Drives completion rates with AI-powered assistance.",
    tag: "Education",
  },
  {
    title: "Tour auto-booking",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    caption: "Instant tour confirmations and reminders for every lead.",
    tag: "Real Estate",
  },
  {
    title: "Ops co-pilot",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1400&q=80",
    caption: "Automates billing, support, and repeatable checklists.",
    tag: "SMB",
  },
];

export const reviews = [
  {
    name: "Alina Perez",
    title: "COO, Urban Properties",
    quote:
      "Lead response time dropped from 24h to under 2 minutes. Pipeline efficiency is night and day. The automation platform integrates seamlessly with our existing tools.",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    industry: "Real Estate",
    metric: "250% conversion increase",
  },
  {
    name: "Marcus Lee",
    title: "VP Operations, MediCare",
    quote:
      "Automated reminders and intake cut no-shows by two thirds within the first month. Our staff can focus on patient care instead of admin tasks.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    industry: "Healthcare",
    metric: "67% no-show reduction",
  },
  {
    name: "Priya Desai",
    title: "Head of CX, StyleHub",
    quote:
      "Support tickets deflected by 40% while CSAT went up. The AI is on-brand and fast. Customer satisfaction scores are at an all-time high.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    industry: "E-commerce",
    metric: "40% ticket reduction",
  },
  {
    name: "Daniel Weber",
    title: "Founder, Northwind Learning",
    quote:
      "Adaptive nudges boosted course completion and freed up our instructors to focus on quality. Student engagement is through the roof.",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    industry: "Education",
    metric: "85% completion rate",
  },
];

export const achievements = [
  {
    title: "Top AI Automation Partner 2025",
    detail: "Awarded by CloudScale Alliance",
    description: "Recognized for innovation and excellence in enterprise automation solutions",
    icon: FaAward,
    year: "2025",
    accent: "from-yellow-500 to-amber-500",
  },
  {
    title: "ISO 27001 Certified",
    detail: "Security-first delivery for regulated teams",
    description: "Enterprise-grade security standards ensuring data protection and compliance",
    icon: FaAward,
    year: "2024",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    title: "99.9% Uptime SLA",
    detail: "Monitored, redundant pipelines for critical ops",
    description: "Reliable infrastructure with comprehensive monitoring and failover systems",
    icon: FaAward,
    year: "Ongoing",
    accent: "from-emerald-500 to-teal-500",
  },
];

export const faqs = [
  {
    q: "How fast can we launch?",
    a: "Most pilots go live in 3-4 weeks with guardrails and measurable KPIs.",
  },
  {
    q: "Do you integrate with our stack?",
    a: "Yes—CRM, helpdesk, calendars, comms, and data warehouses via APIs and iPaaS.",
  },
  {
    q: "How do you ensure security?",
    a: "Least-privilege access, audit logs, data encryption, and SOC2-aligned practices.",
  },
];

export const blogPosts = [
  {
    title: "Designing AI playbooks for revenue teams",
    tag: "Article",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    link: "#",
    excerpt: "Learn how top revenue teams structure automation playbooks to accelerate sales cycles and improve conversion rates.",
    author: "Sarah Chen",
    date: "March 15, 2025",
    readTime: "8 min read",
  },
  {
    title: "Automation guardrails for regulated industries",
    tag: "Guide",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80&sat=-50",
    link: "#",
    excerpt: "Comprehensive guide to implementing automation in healthcare, finance, and other highly regulated sectors.",
    author: "Michael Torres",
    date: "March 8, 2025",
    readTime: "12 min read",
  },
  {
    title: "How to measure AI impact in 30 days",
    tag: "Playbook",
    image:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1400&q=80",
    link: "#",
    excerpt: "A step-by-step framework for quantifying ROI and business impact of AI automation initiatives.",
    author: "Emily Rodriguez",
    date: "March 1, 2025",
    readTime: "10 min read",
  },
];

export const team = [
  {
    name: "Ava Thompson",
    role: "Head of Automation",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    bio: "Led automation initiatives for Fortune 500 companies, reducing operational costs by 40%+ across 50+ deployments.",
    expertise: ["Workflow Design", "AI Integration", "Process Optimization"],
    achievement: "300+ automations deployed",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    name: "Liam Patel",
    role: "Lead Solutions Architect",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "10+ years architecting scalable automation platforms. Previously at AWS and Microsoft, specializing in enterprise AI systems.",
    expertise: ["System Architecture", "Cloud Infrastructure", "API Design"],
    achievement: "5M+ API calls/month",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sofia Martinez",
    role: "AI Product Strategist",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    bio: "Expert in translating business needs into AI solutions. Built product strategies that drove $50M+ in efficiency gains.",
    expertise: ["Product Strategy", "AI Ethics", "User Experience"],
    achievement: "95% client satisfaction",
    accent: "from-cyan-500 to-emerald-500",
  },
];
