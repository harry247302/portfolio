export const projects = [
  {
    slug: 'kamal-crm',
    title: 'Kamal CRM',
    subtitle: 'Real Estate CRM & Workforce Management Platform',
    description:
      'Enterprise Real Estate CRM and workforce management platform for managing leads, clients, employees, tasks, attendance, field locations and performance analytics. Implemented RBAC with role-specific dashboards and permissions across 20+ organizational roles, along with web and mobile application support.',
    seoDescription:
      'Kamal CRM is a real estate CRM and workforce management platform for managing leads, clients, employees, tasks, attendance, field operations and performance reporting with role-based access control.',
    features: [
      'Role-Based Access Control (RBAC)',
      'Employee management',
      'Lead & client management',
      'Task management',
      'Attendance management',
      'Employee location tracking',
      'Reporting & analytics',
      'Mobile application support',
      'Administrative features',
    ],
    highlightFeatures: ['Role-Based Access Control (RBAC)', 'Mobile application support'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    live: 'https://kamalcrm.com/',
    tags: [
      'Backend Development',
      'Full Stack Development',
      'Real Estate CRM',
      'RBAC',
      'REST APIs',
      'Employee Management',
      'Lead Management',
      'Task Management',
      'Attendance',
      'Reporting',
      'Mobile API',
    ],
    details: {
      overview:
        'Developed a comprehensive Real Estate CRM and workforce management platform for managing leads, clients, employees, sales operations, tasks, attendance, field locations, and performance reporting. Implemented role-based dashboards and permissions across multiple organizational roles, with web and mobile application support.',
      responsibilities: [
        'Built REST APIs for web and mobile application integration.',
        'Implemented RBAC with role-specific access and dashboards across 20+ organizational roles.',
        'Developed authentication, authorization, and database management for core business modules.',
        'Delivered lead management, employee management, task management, and attendance system workflows.',
        'Built reporting and analytics dashboards with search, filtering, and pagination.',
        'Integrated mobile API support for attendance, tasks, visitors, and profile management.',
      ],
      featureSections: [
        {
          title: 'Role-Based Access Control (RBAC)',
          items: [
            'Implemented role-specific access and dashboards.',
            'Supported 20+ organizational roles including Tele Caller, Sales Executive, Sales Head, HR, Accountant, Loan Executive, Developer, SEO Specialist, Digital Marketing Executive, Legal Executive, and others.',
          ],
        },
        {
          title: 'Employee Management',
          items: [
            'Employee onboarding and profile management.',
            'Department, branch, role, joining date, salary, experience and document management.',
            'Employee search, filtering, editing and deletion.',
          ],
        },
        {
          title: 'Lead & Client Management',
          items: [
            'Lead creation and assignment.',
            'Lead transfer between employees and sales teams.',
            'Client management and follow-up workflows.',
            'Walk-in client management.',
            'Visitor tracking and assignment.',
          ],
        },
        {
          title: 'Task Management',
          items: [
            'Create and assign tasks to employees.',
            'Task priority and deadline management.',
            'Task status tracking.',
            'Repeat task/frequency support.',
            'Task reporting and performance tracking.',
          ],
        },
        {
          title: 'Attendance Management',
          items: [
            'Employee attendance tracking.',
            'Present, absent, half-day and late status.',
            'Attendance reports and visual analytics.',
            'Monthly attendance reporting.',
          ],
        },
        {
          title: 'Employee Location Tracking',
          items: [
            'Employee location tracking.',
            'Map-based visualization of employee locations.',
            'Online/offline employee status monitoring.',
          ],
        },
        {
          title: 'Reporting & Analytics',
          items: [
            'Employee performance reports.',
            'Task reports.',
            'Attendance reports.',
            'Visitor/walk-in reports.',
            'Lead activity tracking.',
            'Search, filtering, pagination and report dashboards.',
            'Data visualization for operational metrics.',
          ],
        },
        {
          title: 'Mobile Application Support',
          items: [
            'Backend APIs consumed by the mobile application.',
            'Mobile features include attendance, tasks, visitors, employee information and profile management.',
          ],
        },
        {
          title: 'Administrative Features',
          items: [
            'Branch and department management.',
            'Bulk data upload.',
            'Employee document management.',
            'Multiple dashboard views based on user roles.',
          ],
        },
      ],
    },
  },
  {
    slug: 'searchmystudy',
    title: 'SearchMyStudy',
    subtitle: 'Dynamic Education Platform, CRM & AI',
    description:
      'Fully dynamic international education platform with country pages, course finder, university course management, webinars, blogs, and an integrated education CRM. Also integrated a locally hosted AI model for domain-specific conversational chat.',
    features: [
      'Dynamic country pages',
      'Course finder',
      'University & course management',
      'Webinar management',
      'Blog management',
      'Education CRM',
      'AI-powered conversational chat',
    ],
    highlightFeatures: ['AI-powered conversational chat', 'Education CRM'],
    tech: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'CRM', 'Local LLM', 'Generative AI'],
    github: '#',
    live: 'http://searchmystudy.com/',
    tags: [
      'Fully Dynamic Content Platform',
      'Dynamic Country Pages',
      'Course Finder',
      'University & Course Management',
      'Webinar Management',
      'Blog Management',
      'Education CRM',
      'Lead Management',
      'REST APIs',
      'Local LLM / Generative AI Chat',
    ],
    details: {
      overview:
        'Developed a fully dynamic international education platform with country-specific pages, course discovery, university course listings, webinars, blogs, and a dedicated CRM for managing leads and education operations. Built dynamic content management and backend APIs to manage courses, universities, countries, webinars, blogs, users, and leads.',
      responsibilities: [
        'Built a dynamic API-driven architecture with RESTful APIs and database-driven content management.',
        'Developed dynamic country pages, course finder, and university/course management modules.',
        'Implemented webinar and blog management with admin-controlled dynamic content.',
        'Built education CRM with lead management, assignment, and follow-up workflows.',
        'Integrated authentication, authorization, and admin management across the platform.',
        'Connected a locally hosted AI model for domain-specific conversational chat via backend integration.',
      ],
      featureSections: [
        {
          title: 'Dynamic Country Pages',
          items: [
            'Created dynamic country-based pages.',
            'Country content can be managed dynamically from the backend/admin system.',
            'Support for country-specific education information and course discovery.',
          ],
        },
        {
          title: 'Course Finder',
          items: [
            'Built a dynamic course finder system.',
            'Users can search and explore available courses.',
            'Course information is managed dynamically.',
            'Supports university/course relationships and education program data.',
          ],
        },
        {
          title: 'University & Course Management',
          items: [
            'University information managed dynamically.',
            'University courses and programs are dynamically displayed.',
            'Backend APIs manage universities, courses, programs and related information.',
            'Connected university and course data to the public website.',
          ],
        },
        {
          title: 'Webinar Management',
          items: [
            'Built webinar management functionality.',
            'Admin can create and manage webinars.',
            'Dynamic webinar information is displayed on the website.',
            'Supports webinar registration and lead collection.',
          ],
        },
        {
          title: 'Blog Management',
          items: [
            'Built dynamic blog management functionality.',
            'Admin can create, update and manage blog content.',
            'Dynamic blog pages are generated from backend data.',
            'Supports categories and content management.',
          ],
        },
        {
          title: 'Education CRM',
          items: [
            'Developed a CRM specifically for managing education-related leads and operations.',
            'Lead management and tracking.',
            'Lead assignment and follow-up workflows.',
            'User/lead information management.',
            'CRM dashboard and administrative management.',
            'Connect website leads with the CRM backend.',
          ],
        },
        {
          title: 'AI-Powered Conversational Assistant',
          description:
            'Integrated a locally hosted AI model into the education platform to provide domain-specific conversational assistance. The backend communicates with the local model and handles user conversations through the application.',
          items: [
            'Integrated a locally hosted AI model for conversational chat.',
            'AI provides domain-specific responses related to the education platform.',
            'Backend is integrated with the local LLM to process user conversations.',
          ],
        },
        {
          title: 'Backend & CRM',
          description:
            'Developed backend APIs and CRM functionality for managing users, leads, courses, universities, webinars, blogs and other education-platform content. Designed the system so that website content and CRM data could be managed dynamically rather than hardcoded.',
          items: [
            'Dynamic API-driven architecture.',
            'RESTful API development.',
            'Database-driven content management.',
            'CRM and lead management.',
            'Authentication and authorization.',
            'Admin management and dynamic routing.',
            'Local LLM integration and web/backend integration.',
          ],
        },
      ],
    },
  },
  {
    slug: 'admission-portal',
    title: 'Admission Portal',
    subtitle: 'Student Admission & Franchise Management System',
    description:
      'Admission management platform for managing student applications, admissions, enrollments, and documents, with a dedicated franchise management system for tracking applications and managing partner commissions.',
    features: [
      'Student admission management',
      'Student & document management',
      'Course & university management',
      'Franchise management',
      'Commission management',
      'Admin dashboard',
    ],
    highlightFeatures: ['Franchise management', 'Commission management'],
    tech: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'RBAC'],
    github: '#',
    live: 'https://admissionportals.in/',
    tags: [
      'Admission Management',
      'Student Management',
      'Franchise Management',
      'Commission Management',
      'REST APIs',
      'RBAC',
      'Backend Development',
      'Full Stack Development',
    ],
    details: {
      overview:
        'Developed an admission management platform for handling the student admission lifecycle, including applications, student information, documents, admissions and enrollments, along with franchise management and commission tracking.',
      responsibilities: [
        'Built RESTful APIs and database-driven workflows for admission operations.',
        'Implemented authentication, authorization, and role-based access control.',
        'Developed student and admission business logic across the full lifecycle.',
        'Built franchise and commission business logic with tracking and reporting.',
        'Created an admin dashboard with search, filtering, and operational management.',
      ],
      featureSections: [
        {
          title: 'Student Admission Management',
          items: [
            'Student registration and profile management.',
            'Student application management.',
            'Admission processing.',
            'Enrollment management.',
            'Application status tracking.',
          ],
        },
        {
          title: 'Student & Document Management',
          items: [
            'Student information management.',
            'Document collection and management.',
            'Application-related document tracking.',
            'Admin access to student records.',
          ],
        },
        {
          title: 'Course & University Management',
          items: [
            'Course management.',
            'University management.',
            'Connecting students/applications with courses and universities.',
            'Dynamic admission-related data.',
          ],
        },
        {
          title: 'Franchise Management',
          items: [
            'Franchise/partner management.',
            'Franchise-wise student and application tracking.',
            'Track admissions generated through franchises.',
            'Franchise-specific information and workflows.',
          ],
        },
        {
          title: 'Commission Management',
          items: [
            'Calculate and manage franchise commissions.',
            'Track commission against student admissions.',
            'Commission status management.',
            'Franchise-wise commission tracking.',
            'Commission reporting.',
          ],
        },
        {
          title: 'Admin Dashboard',
          items: [
            'Centralized admin dashboard.',
            'Application and admission monitoring.',
            'Student management.',
            'Franchise management.',
            'Search and filtering.',
            'Reporting and operational management.',
          ],
        },
        {
          title: 'Technical Implementation',
          items: [
            'RESTful API development.',
            'Database-driven workflows.',
            'Authentication and authorization.',
            'Role-based access control.',
            'Student and admission business logic.',
            'Franchise and commission business logic.',
            'Admin dashboard.',
            'Search, filtering and reporting.',
          ],
        },
      ],
    },
  },
  {
    slug: 'coursefinder-admin',
    title: 'CourseFinder Admin',
    description:
      'Admin management platform for managing courses, institutes, partners, franchises, and education platform content.',
    features: [
      'Admin dashboard',
      'Course management',
      'Institute management',
      'Franchise management',
      'Content management',
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind'],
    github: '#',
    live: 'http://admin.coursefinder.co.in/',
    details: {
      overview:
        'CourseFinder Admin is the backend management platform for the CourseFinder education ecosystem. It enables administrators to manage courses, institutes, partners, franchises, and platform content from a single dashboard.',
      responsibilities: [
        'Built admin dashboard with course and institute management modules.',
        'Implemented franchise and partner management workflows.',
        'Developed content management for platform-wide education data.',
        'Created REST APIs with PostgreSQL for data persistence and retrieval.',
      ],
    },
  },
  {
    slug: 'uni-admission-portal',
    title: 'Uni Admission Portal',
    description:
      'University-focused admission platform for managing applications, enrollments, and student admission workflows.',
    features: [
      'University admissions',
      'Application tracking',
      'Enrollment workflow',
      'Partner management',
      'Secure authentication',
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    github: '#',
    live: 'https://uni.admissionportals.in/',
    details: {
      overview:
        'Uni Admission Portal is a university-focused platform designed for higher-education admission processes. It handles application tracking, enrollment workflows, and partner management with secure authentication for all user roles.',
      responsibilities: [
        'Developed university-specific admission and application tracking modules.',
        'Built enrollment workflow automation for accepted students.',
        'Implemented partner management for affiliated institutions.',
        'Secured the platform with authentication and role-based authorization.',
      ],
    },
  },
  {
    slug: 'coursefinder',
    title: 'CourseFinder',
    description:
      'Education discovery platform that helps students explore courses and institutes across the education ecosystem.',
    features: [
      'Course discovery',
      'Institute search',
      'Program information',
      'Responsive design',
      'Secure authentication',
    ],
    tech: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'Tailwind'],
    github: '#',
    live: 'https://coursefinder.co.in/',
    details: {
      overview:
        'CourseFinder is a student-facing education discovery platform that helps users explore courses and institutes across the education ecosystem. It provides program information, institute search, and a responsive experience with secure user authentication.',
      responsibilities: [
        'Built course discovery and institute search interfaces with React and Vite.',
        'Developed program information pages and search functionality.',
        'Implemented responsive design with Tailwind CSS for mobile and desktop.',
        'Integrated secure authentication and backend APIs with PostgreSQL.',
      ],
    },
  },
  {
    slug: 'cosmicguruji',
    title: 'Cosmicguruji – Expert Session & Wellness Platform',
    description:
      'Backend system for an expert-session platform supporting user registration, session booking, payments, RBAC, and automated WhatsApp notifications.',
    features: [
      'User registration & authentication',
      'Expert & user management',
      'Live session booking & management',
      'Payment Gateway integration',
      'Role-Based Access Control (RBAC)',
      'WhatsApp API integration for automated notifications',
      'RESTful APIs',
    ],
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Payment Gateway', 'WhatsApp API', 'RBAC', 'REST APIs'],
    details: {
      overview:
        'Cosmicguruji is a backend-focused expert session and wellness platform. The system handles user registration, expert management, live session booking, payment processing, role-based access control, and automated WhatsApp notifications — all exposed through RESTful APIs.',
      responsibilities: [
        'Architected and built RESTful APIs with Node.js and Express.js.',
        'Implemented user registration, authentication, and RBAC for experts and clients.',
        'Developed live session booking and management workflows.',
        'Integrated payment gateway for session payments.',
        'Built WhatsApp API integration for automated booking and notification messages.',
      ],
    },
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
