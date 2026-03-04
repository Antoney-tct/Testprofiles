export const siteConfig = {
  name: "Antoney Ouko",
  title: "Business IT Specialist, Designer, Analyst & Creative Developer",
  email: "aouko178@gmail.com",
  phone: "+254 768 343 558",
  location: "Nairobi, Kenya",
  website: "www.antoneyouko.com",
  social: {
    linkedin: "https://www.linkedin.com/in/antoney-ouko-91b220369",
    github: "https://github.com/Antoney-tct",
    facebook: "https://web.facebook.com/antoney.ouko.5/",
    instagram: "https://www.instagram.com/antoneytct?igsh=amxya2o3NmZsdXY0",
    tiktok: "https://www.tiktok.com/@antoney62",
  },
}

export const skills = [
  {
    icon: "Code",
    title: "Web Development",
    color: "blue" as const,
    items: [
      { name: "HTML5/CSS3", level: "Expert" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "PHP & MySQL", level: "Intermediate" },
      { name: "Bootstrap 5", level: "Learning" },
      { name: "React Basics", level: "Learning" },
    ],
  },
  {
    icon: "Paintbrush",
    title: "Design & Creative",
    color: "red" as const,
    items: [
      { name: "Adobe Photoshop", level: "Advanced" },
      { name: "Canva Pro", level: "Expert" },
      { name: "UI/UX Design", level: "Intermediate" },
      { name: "Figma Prototyping", level: "Intermediate" },
      { name: "Video Editing", level: "Intermediate" },
    ],
  },
  {
    icon: "TrendingUp",
    title: "IT & Business",
    color: "blue" as const,
    items: [
      { name: "QA Testing", level: "Advanced" },
      { name: "Networking (Cisco)", level: "Intermediate" },
      { name: "Database Management", level: "Intermediate" },
      { name: "IT Support", level: "Advanced" },
      { name: "Project Management", level: "Intermediate" },
    ],
  },
  {
    icon: "PieChart",
    title: "Data Analysis",
    color: "red" as const,
    items: [
      { name: "Python (Pandas)", level: "Intermediate" },
      { name: "Tableau", level: "Advanced" },
      { name: "Data Cleaning", level: "Advanced" },
      { name: "Statistical Analysis", level: "Intermediate" },
      { name: "Excel (Advanced)", level: "Expert" },
    ],
  },
  {
    icon: "Shield",
    title: "Cloud & Security",
    color: "blue" as const,
    items: [
      { name: "Cybersecurity Basics", level: "Intermediate" },
      { name: "Cloud (AWS/Azure)", level: "Learning" },
      { name: "Linux Admin", level: "Intermediate" },
      { name: "Network Security", level: "Intermediate" },
      { name: "Backup Solutions", level: "Advanced" },
    ],
  },
  {
    icon: "Megaphone",
    title: "Digital Marketing",
    color: "red" as const,
    items: [
      { name: "SEO Optimization", level: "Intermediate" },
      { name: "Social Media Mkt", level: "Advanced" },
      { name: "Content Strategy", level: "Intermediate" },
      { name: "Google Analytics", level: "Intermediate" },
      { name: "Email Marketing", level: "Advanced" },
    ],
  },
  {
    icon: "ListTodo",
    title: "Project Management",
    color: "blue" as const,
    items: [
      { name: "Jira Software", level: "Advanced" },
      { name: "Agile/Scrum Method", level: "Advanced" },
      { name: "Task Prioritization", level: "Expert" },
      { name: "Backlog Grooming", level: "Intermediate" },
      { name: "Reporting & Sprints", level: "Advanced" },
    ],
  },
]

export const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full development of a responsive e-commerce website with shopping cart, payment integration, and admin dashboard.",
    fullDescription: "A fully functional e-commerce platform built to handle high traffic and secure transactions. Features include user authentication, product catalog management, shopping cart functionality, and Stripe payment integration. The admin dashboard allows for real-time inventory tracking and order management.",
    category: "web",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    client: "Retail Solutions Ltd",
    date: "August 2023",
    link: "https://github.com/Antoney-tct",
  },
  {
    id: 2,
    title: "Brand Identity Suite",
    description: "Complete brand identity design including logos, business cards, social media kits, and marketing materials.",
    fullDescription: "A comprehensive brand identity package for a tech startup. The project involved creating a modern logo, defining the color palette and typography, and designing business cards, letterheads, and social media assets.",
    category: "design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Adobe Photoshop", "Canva", "Branding", "Social Media"],
    client: "Nexus Startups",
    date: "June 2023",
  },
  {
    id: 3,
    title: "E-commerce QA Testing",
    description: "Comprehensive manual testing for a live e-commerce platform including functional, regression, and cross-browser testing.",
    fullDescription: "Executed a rigorous QA testing process for a client's e-commerce website before launch. Performed functional testing, cross-browser testing, and regression testing after bug fixes. Documented over 50 bugs and verified their resolution.",
    category: "qa",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["QA Testing", "Manual Testing", "Bug Tracking", "Test Cases"],
    client: "Kiwami Tech",
    date: "October 2023",
  },
  {
    id: 7,
    title: "Enterprise Network Simulation",
    description: "Complex network topology design and simulation using Cisco Packet Tracer, featuring VLANs, OSPF routing, and DHCP configuration.",
    fullDescription: "A comprehensive network simulation project using Cisco Packet Tracer. Designed a multi-branch office network with VLAN segmentation, OSPF routing, DHCP servers, and NAT configuration.",
    category: "it",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Cisco Packet Tracer", "Networking", "Simulation"],
    client: "Academic Project",
    date: "March 2024",
  },
  {
    id: 8,
    title: "Website Testing Reports",
    description: "Detailed bug reports, test execution logs, and performance metrics from a comprehensive website testing cycle.",
    fullDescription: "Conducted extensive manual testing on a client's new landing page. Deliverables included a detailed bug report spreadsheet categorizing issues by severity, test execution logs, and usability feedback.",
    category: "qa",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Bug Reports", "Excel", "JIRA", "Test Logs"],
    client: "Freelance Client",
    date: "April 2024",
  },
  {
    id: 4,
    title: "Data Analysis Dashboard",
    description: "Analyzed large datasets to identify trends and created interactive visualizations using Tableau to optimize marketing strategy.",
    fullDescription: "Analyzed large datasets to identify trends in customer behavior. Cleaned and processed raw data using Python, performed statistical analysis, and created interactive visualizations using Tableau.",
    category: "Da",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Tableau", "Data Cleaning", "Visualization"],
    client: "FinTech Corp",
    date: "December 2023",
  },
  {
    id: 5,
    title: "Corporate Network Setup",
    description: "Designed and implemented a secure local area network (LAN) for a mid-sized office, including firewall configuration and VPN access.",
    fullDescription: "Designed and implemented a secure local area network (LAN) for a mid-sized office. Configured Cisco routers and switches, set up VLANs for different departments, and implemented firewall rules.",
    category: "it",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Networking", "Cisco", "Security", "Hardware"],
    client: "MidSize Logistics",
    date: "January 2024",
  },
  {
    id: 6,
    title: "Travel App UI Kit",
    description: "Modern user interface design for a travel booking application, focusing on user experience and accessibility.",
    fullDescription: "Designed a modern and intuitive user interface for a travel booking mobile application. Created wireframes, high-fidelity prototypes, and a comprehensive design system.",
    category: "design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Figma", "UI/UX", "Prototyping", "Mobile Design"],
    client: "Wanderlust Inc",
    date: "February 2024",
  },
  {
    id: 9,
    title: "Agile Project Management",
    description: "Managed a software development lifecycle using Jira, creating sprints, tracking user stories, and generating velocity reports.",
    fullDescription: "Led a project team using Agile methodologies, managed through Jira. Responsibilities included setting up the Jira project, creating and managing the product backlog, planning sprints, running daily stand-ups.",
    category: "pm",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Jira", "Agile", "Scrum", "Reporting"],
    client: "Internal Team Project",
    date: "May 2024",
  },
]

export const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development",
    date: "Mar 15, 2024",
    category: "Web Dev",
    excerpt: "Exploring the latest trends in frontend frameworks, the rise of AI in coding, and what it means for developers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: [
      {
        type: "paragraph" as const,
        text: "Exploring the latest trends in frontend frameworks, the rise of AI in coding, and what it means for developers. The web development landscape is in a constant state of flux, and staying ahead of the curve is crucial for any developer.",
      },
      {
        type: "heading" as const,
        text: "The Rise of AI-Powered Tools",
      },
      {
        type: "paragraph" as const,
        text: "Tools like GitHub Copilot and ChatGPT are changing how we write code. They can generate boilerplate, suggest solutions, and even help debug complex problems. While they aren't replacing developers, they are becoming indispensable assistants that boost productivity and allow us to focus on higher-level architectural decisions.",
      },
      {
        type: "heading" as const,
        text: "Next-Gen Frameworks",
      },
      {
        type: "paragraph" as const,
        text: "While React, Vue, and Angular still dominate, newer frameworks like Svelte and SolidJS are gaining traction. They offer innovative approaches to reactivity and performance by shifting work from the browser at runtime to the compiler at build time. This results in faster, more efficient applications.",
      },
      {
        type: "heading" as const,
        text: "The Importance of Core Skills",
      },
      {
        type: "paragraph" as const,
        text: "Despite the new tools and frameworks, a strong foundation in HTML, CSS, and vanilla JavaScript is more important than ever. Understanding the fundamentals allows developers to adapt to new technologies more easily and write more efficient, maintainable code.",
      },
    ],
  },
  {
    id: "2",
    title: "Why Manual Testing Still Matters",
    date: "Feb 28, 2024",
    category: "QA Testing",
    excerpt: "In an age of automation, human intuition in software testing remains irreplaceable for user experience.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: [
      {
        type: "paragraph" as const,
        text: "In an age of automation, human intuition in software testing remains irreplaceable for user experience. While automated tests are excellent for regression and performance checks, they can't replicate the nuanced, exploratory, and often unpredictable behavior of a real user.",
      },
      {
        type: "heading" as const,
        text: "The User's Perspective",
      },
      {
        type: "paragraph" as const,
        text: "A manual tester can evaluate an application's usability, accessibility, and overall feel in a way that an automated script cannot. They can spot confusing UI elements, awkward workflows, and other issues that, while not technically \"bugs,\" severely impact the user experience.",
      },
      {
        type: "heading" as const,
        text: "Exploratory Testing",
      },
      {
        type: "paragraph" as const,
        text: "Manual testing allows for \"exploratory testing,\" where the tester uses their creativity and intuition to try and break the application in unexpected ways. This can uncover edge cases and critical bugs that a predefined test script would miss. It's about asking \"what if?\" and following a hunch, a uniquely human skill.",
      },
    ],
  },
  {
    id: "3",
    title: "Minimalism in UI Design",
    date: "Jan 10, 2024",
    category: "Design",
    excerpt: "How stripping away the unnecessary can lead to more intuitive and effective user interfaces.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: [
      {
        type: "paragraph" as const,
        text: "How stripping away the unnecessary can lead to more intuitive and effective user interfaces. Minimalism isn't just about using less; it's about making every element count. The goal is to create a clean, focused, and uncluttered experience for the user.",
      },
      {
        type: "heading" as const,
        text: "Clarity and Focus",
      },
      {
        type: "paragraph" as const,
        text: "By removing visual noise, minimalist design helps users focus on the most important content and actions. It improves readability and reduces cognitive load, making the interface easier to understand and navigate. Each element on the screen should have a clear purpose.",
      },
      {
        type: "heading" as const,
        text: "The Power of White Space",
      },
      {
        type: "paragraph" as const,
        text: "Negative space, or white space, is a key component of minimalist design. It's not \"empty\" space; it's an active element that helps to group related items, create visual hierarchy, and guide the user's eye through the content. Proper use of white space can make a design feel more elegant and professional.",
      },
    ],
  },
  {
    id: "4",
    title: "A Guide to Effective Project Management",
    date: "Apr 05, 2024",
    category: "Productivity",
    excerpt: "Learn the key principles and tools for managing projects successfully, from planning to execution.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: [
      {
        type: "paragraph" as const,
        text: "Effective project management is the backbone of any successful initiative. It's about more than just deadlines; it's about communication, planning, and adapting to change.",
      },
      {
        type: "heading" as const,
        text: "Key Principles",
      },
      {
        type: "paragraph" as const,
        text: "Start with a clear scope and defined goals. Break down large tasks into smaller, manageable chunks. Regular communication with stakeholders is non-negotiable to ensure everyone is aligned.",
      },
      {
        type: "heading" as const,
        text: "Tools of the Trade",
      },
      {
        type: "paragraph" as const,
        text: "Tools like Jira, Trello, and Asana can be invaluable for tracking progress and managing tasks. However, the tool is only as good as the process behind it. Choose a methodology like Agile or Scrum that fits your team's workflow and stick to its principles.",
      },
    ],
  },
]

export const testimonials = [
  {
    text: "Antoney delivered our e-commerce platform ahead of schedule. His attention to detail in QA testing saved us from potential launch day disasters. Highly recommended!",
    name: "James Wilson",
    role: "CEO, Retail Solutions Ltd",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    project: "E-commerce",
    rating: 5,
  },
  {
    text: "The brand identity suite Antoney designed for our startup was exactly what we needed. He captured our vision perfectly and the assets are beautiful.",
    name: "Tanya Jenkins",
    role: "Founder, COMO Hotels & Restaurants",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    project: "Branding",
    rating: 5,
  },
  {
    text: "His data analysis skills helped us uncover trends we had completely missed. The dashboard he built is now a daily tool for our marketing team.",
    name: "David Okoth",
    role: "Director, FinTech Corp",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    project: "Data Analysis",
    rating: 5,
  },
]

export const filterCategories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Development" },
  { value: "design", label: "Graphic Design" },
  { value: "qa", label: "QA & Testing" },
  { value: "Da", label: "Data Analysis" },
  { value: "it", label: "IT & Networking" },
  { value: "pm", label: "Project Management" },
]
