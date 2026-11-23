// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Shadab",
  fullName: "Shadab Shaikh",
  role: "Full Stack Developer",
  location: "Delhi, India",
  email: "shadab.shaikh.tech@gmail.com",
  phone: "+91 9310874216",
  github: "https://github.com/harry247302",
  linkedin: "https://www.linkedin.com/", // TODO: replace with your LinkedIn profile URL
  resume: "/resume.pdf", // put your resume PDF in /public/resume.pdf
  roles: [
    "Full Stack Developer",
    "CRM & Admin Panel Builder",
    "AI / LLM Integrator",
    "API & Database Optimizer",
  ],
  summary:
    "Full Stack Developer with 3 years of industry experience building React.js web applications, CMS, CRM systems and business portals, with Python/Node.js backends. I work end to end — from database schema and REST APIs to polished front-ends — and I've built an LLM-powered admission chatbot using tool calling, embeddings and database-grounded responses. Improved API response times by 30% and website performance by 25%.",
};

export const stats = [
  { value: 3, suffix: "+", label: "Years building for the web" },
  { value: 30, suffix: "%", label: "Faster API response times" },
  { value: 25, suffix: "%", label: "Better website performance" },
  { value: 8, suffix: "+", label: "Products shipped to production" },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Kamal Associates",
    period: "01/2025 — Present",
    place: "Delhi",
    points: [
      "Develop and maintain backend services and RESTful APIs for the company's software.",
      "Work with mobile developers to integrate APIs into the web + app CRM.",
      "Partner with UI/UX designers to ship user-friendly workflows.",
      "Integrate third-party APIs and services to extend the products.",
      "Lead team members — delegating tasks and coordinating delivery on time.",
      "Designed and maintained backend services and RESTful APIs consumed by both web and mobile applications.",
    ],
  },
  {
    role: "Senior Web Developer",
    company: "National Marketing Project Inc.",
    period: "09/2024 — 12/2025",
    place: "Delhi",
    points: [
      "Guided a team of three developers across project deliverables.",
      "Built responsive web applications and improved site performance by up to 25%.",
      "Designed database schemas, business logic and database operations.",
      "Gathered requirements directly with clients and delivered to their business needs.",
      "Worked with DevOps on servers, CI/CD and production deployments.",
      "Designed database schemas and optimized queries, improving API response times by 30%.",
      "Built responsive React/Next.js applications for better performance and user experience.",
    ],
  },
];

export const projectFilters = ["All", "Platforms & CRM", "Websites", "AI & Backend"];

export const projects = [
  {
    title: "SearchMyStudy",
    url: "https://searchmystudy.com",
    category: "Platforms & CRM",
    blurb:
      "Fully dynamic course-discovery website where students explore courses and universities — powered by a full admin panel and CRM that manages the entire site.",
    tags: ["Dynamic Website", "Admin Panel", "CRM", "Education"],
    extra: [{ label: "Admin / CRM", url: "https://admin.coursefinder.co.in/" }],
    accent: "from-acid/30 to-emerald-500/10",
    featured: true,
  },
  {
    title: "Kamal CRM",
    url: "https://kamalcrm.com",
    category: "Platforms & CRM",
    blurb:
      "CRM application available on both web and mobile app, used to manage leads, teams and day-to-day operations.",
    tags: ["CRM", "Web + Mobile App", "REST APIs"],
    demo: "Demo login — Mobile: 8292417430 · OTP: 1234",
    accent: "from-iris/40 to-fuchsia-500/10",
    featured: true,
  },
  {
    title: "Cosmic Guruji",
    url: "https://cosmicguruji.com",
    category: "Platforms & CRM",
    blurb:
      "Dynamic platform for selling spiritual courses and onboarding registered experts, with a dedicated CRM to run the business.",
    tags: ["E-learning", "Expert Registration", "CRM"],
    extra: [{ label: "CRM", url: "https://crm.cultcoder.com" }],
    accent: "from-amber-400/30 to-orange-600/10",
  },
  {
    title: "Kamal Housing",
    url: "https://kamalhousing.com",
    category: "Websites",
    blurb: "Real-estate website for listing and showcasing properties for sale.",
    tags: ["Real Estate", "Listings", "Dynamic Website"],
    accent: "from-sky-400/30 to-blue-700/10",
  },
  {
    title: "GarvikStay",
    url: "https://garvikstay.com",
    category: "Websites",
    blurb: "Hotel booking platform for browsing stays and booking rooms online.",
    tags: ["Booking Platform", "Hotels", "Dynamic Website"],
    accent: "from-rose-400/30 to-pink-700/10",
  },
  {
    title: "NutriAfghan",
    url: "https://www.nutriafghan.com/",
    category: "Websites",
    blurb: "Business website built from the ground up in PHP.",
    tags: ["PHP", "Business Website"],
    accent: "from-lime-300/30 to-yellow-700/10",
  },
  {
    title: "AI Admission Counsellor",
    category: "AI & Backend",
    period: "05/2025 — 11/2025",
    blurb:
      "LLM-powered chatbot (PERN stack) that uses tool calling to pull university, course, fee and eligibility data from the database, and recommends universities from a student's profile, location and budget — grounded in real data to cut hallucinations. Backed by a Python FastAPI service handling LLM calls, tool calling and retrieval; embeddings of university, course and eligibility data live in a vector database and semantic search supplies context to the LLM. Keeps conversational context and collects student preferences across multi-turn chats. Deployed on AWS with Docker, Nginx and CI/CD (GitHub Actions).",
    tags: ["LLM", "Tool Calling", "RAG", "PostgreSQL", "PERN", "FastAPI", "Python", "Vector DB", "Embeddings", "AWS", "Docker", "CI/CD"],
    accent: "from-iris/40 to-acid/10",
  },
  {
    title: "EMS — Employee Management System",
    category: "AI & Backend",
    period: "10/2023 — 11/2024",
    blurb:
      "Backend and schema for a multi-role CRM with secure auth and role-based access for Admin, HR, Sales and Operations — plus mobile call tracking, where call logs from the app are stored via backend APIs.",
    tags: ["Backend", "RBAC", "Schema Design", "Call Tracking"],
    accent: "from-teal-400/30 to-cyan-700/10",
  },
];

export const skillGroups = [
  { title: "Frontend", items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Python", "FastAPI", "RESTful APIs"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { title: "AI & LLM", items: ["LLM APIs", "Tool Calling", "RAG", "Embeddings", "Vector Databases", "Conversational AI", "Prompt Engineering"] },
  { title: "CMS & E-commerce", items: ["WordPress", "WP Customization", "E-commerce", "PHP"] },
  { title: "DevOps", items: ["Docker", "Nginx", "PM2", "CI/CD", "GitHub Actions", "AWS", "VPS Management"] },
  { title: "Tools", items: ["GitHub", "Cloudinary", "Payment Gateways", "Third-party APIs", "Role-Based Access Control"] },
  { title: "AI-Assisted Dev", items: ["Claude", "ChatGPT", "GitHub Copilot", "Cursor"] },
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Mangalayatan University", note: "Pursuing" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "IGNOU, Delhi", note: "Completed" },
];
