import {
  Heart,
  BookOpen,
  Users,
  Flame,
  Sprout,
  Crown,
  Star,
  Cross,
  Brain,
  Target,
  Plane,
  Music,
  Smile,
  Send,
  Code2,
  BarChart3,
  Rocket,
  FileText,
  Linkedin,
  Play,
  Github,
  Youtube,
  Mail,
  ChartNoAxesColumn,
  PencilRuler,
} from "lucide-react";

export const links = [
  { id: 1, href: "/home", text: "home" },
  { id: 2, href: "/about", text: "about me" },
  { id: 3, href: "/resume", text: "what i do" },
  //   { id: 4, href: "#projects", text: "projects" },
  { id: 5, href: "/vlog", text: "vlog" },
  { id: 6, href: "#inspiration", text: "inspiration" },
  { id: 7, href: "/resources", text: "resources" },
  { id: 8, href: "#contact", text: "contact" },
];

export const purposeCards = [
  {
    icon: Heart,
    title: "Encourage",
    text: "Speak life and truth to help you grow in faith and confidence.",
    iconBg: "bg-[#fde8dc]",
    iconColor: "text-[#f08f52]",
  },
  {
    icon: BookOpen,
    title: "Teach",
    text: "Share biblical wisdom and practical principles for everyday living.",
    iconBg: "bg-[#efe7fb]",
    iconColor: "text-[#7b4bb7]",
  },
  {
    icon: Users,
    title: "Empower",
    text: "Equip you to walk boldly in your calling and fulfill your God-given purpose.",
    iconBg: "bg-[#e5f6f3]",
    iconColor: "text-[#0f7f87]",
  },
  {
    icon: Flame,
    title: "Inspire",
    text: "Motivate you to overcome challenges and live with hope and joy.",
    iconBg: "bg-[#fff0e6]",
    iconColor: "text-[#f08f52]",
  },
];

export const topics = [
  {
    icon: Sprout,
    title: "Faith That Works",
    text: "Building a strong relationship with God that transforms daily life.",
    iconColor: "text-[#7b4bb7]",
  },
  {
    icon: Cross,
    title: "Purpose & Calling",
    text: "Discovering your God-given purpose and walking in it confidently.",
    iconColor: "text-[#7b4bb7]",
  },
  {
    icon: Crown,
    title: "Mindset & Growth",
    text: "Renewing your mind and building habits that lead to success.",
    iconColor: "text-[#7b4bb7]",
  },
  {
    icon: Heart,
    title: "Overcoming",
    text: "Rising above challenges through faith, resilience, and God’s strength.",
    iconColor: "text-[#f08f52]",
  },
  {
    icon: Users,
    title: "Identity in Christ",
    text: "Understanding who you are in Christ and living in that truth.",
    iconColor: "text-[#7b4bb7]",
  },
  {
    icon: Star,
    title: "Encouragement",
    text: "Uplifting messages to strengthen your heart and your walk.",
    iconColor: "text-[#b56be0]",
  },
];

export const growthWays = [
  {
    image: "/bible-small.png",
    title: "Blog & Encouragement",
    text: "Faith-filled articles and devotionals to encourage you on your journey.",
  },
  {
    image: "/prayer.png",
    title: "Prayer & Support",
    text: "You’re not alone. I believe in the power of prayer and standing in faith together.",
  },
  {
    image: "/bible-writing.png",
    title: "Resources & Guides",
    text: "Practical tools and faith-based resources to help you grow and thrive.",
  },
  {
    image: "/vlog-thumb.png",
    title: "Vlog & Messages",
    text: "Watch uplifting messages, behind-the-scenes, and real conversations about faith and life.",
  },
];

export const miniValues = [
  { icon: Cross, label: "Faith" },
  { icon: Heart, label: "Purpose" },
  { icon: Send, label: "Growth" },
  { icon: Star, label: "Impact" },
];

export const descriptorCards = [
  {
    icon: Cross,
    title: "Faith-Driven",
    text: "My relationship with Christ is the foundation of everything I do.",
    color: "text-[#0f7f87]",
  },
  {
    icon: Heart,
    title: "Purpose-Led",
    text: "I live with intention and build with eternal impact in mind.",
    color: "text-[#f08f52]",
  },
  {
    icon: Users,
    title: "People-Focused",
    text: "I love empowering others and helping them grow.",
    color: "text-[#0f7f87]",
  },
  {
    icon: Brain,
    title: "Growth-Minded",
    text: "I’m always learning, evolving, and stepping into more.",
    color: "text-[#0f7f87]",
  },
  {
    icon: Star,
    title: "Creative Problem Solver",
    text: "I enjoy turning complex challenges into simple, smart solutions.",
    color: "text-[#f08f52]",
  },
  {
    icon: Target,
    title: "Committed to Excellence",
    text: "I give my best in every project and every relationship.",
    color: "text-[#f08f52]",
  },
];

export const hobbies = [
  {
    image: "/hobby-journaling.png",
    title: "Journaling &\nBible Study",
  },
  {
    image: "/hobby-puzzles.png",
    title: "Puzzles",
  },
  {
    image: "/hobby-reading.png",
    title: "Reading",
  },
  {
    image: "/hobby-travel.png",
    title: "Traveling &\nExploring",
  },
  {
    image: "/hobby-tech.png",
    title: "Learning New\nTechnologies",
  },
  {
    image: "/hobby-mentoring.png",
    title: "Mentoring &\nEncouraging Others",
  },
  {
    image: "/hobby-health.png",
    title: "Health &\nWellness",
  },
  {
    image: "/hobby-worship.png",
    title: "Worship &\nMusic",
  },
];

export const funFacts = [
  {
    icon: Heart,
    text: "I love peaceful mornings, hot tea, and great conversations.",
  },
  {
    icon: Plane,
    text: "I’ve traveled to new places to experience different cultures and perspectives.",
  },
  {
    icon: Music,
    text: "Gospel music is my heartbeat — it keeps me grounded and inspired.",
  },
  {
    icon: BookOpen,
    text: "I have a soft spot for personal growth books and entrepreneur stories.",
  },
  {
    icon: Smile,
    text: "I believe laughter is good medicine and joy is a spiritual strategy!",
  },
];

export const skillColumns = [
  {
    icon: Code2,
    title: "Technical",
    color: "text-[#0f7f87]",
    bg: "bg-[#eef8f7]",
    items: [
      "React / Next.js",
      "TypeScript / JavaScript",
      "Tailwind / ShadCN UI",
      "SQL & Data Modeling",
      "API Integrations",
      "Responsive UI Development",
    ],
  },
  {
    icon: ChartNoAxesColumn,
    title: "Business & Strategy",
    color: "text-[#f08f52]",
    bg: "bg-[#fcf2ec]",
    items: [
      "Business Intelligence",
      "Power BI / Python",
      "Data Analysis & Visualization",
      "Process Optimization",
      "KPI Development",
      "Stakeholder Reporting",
    ],
  },
  {
    icon: PencilRuler,
    title: "Creative & Leadership",
    color: "text-[#7b4bb7]",
    bg: "bg-[#f5effb]",
    items: [
      "UI/UX Thinking",
      "Brand Development",
      "Content Strategy",
      "Problem Solving",
      "Mentorship",
      "Cross-Functional Collaboration",
    ],
  },
];

export const experienceItems = [
  {
    years: "2025 – Present",
    title: "Creative Strategist & Developer",
    subtitle: "Freelance / Remote",
    accent: "bg-[#7b4bb7]",
    points: [
      "Improved client websites using customer behavior data, increasing engagement and time on page.",
      "Built automated reporting workflows that reduced manual reporting work by 40%.",
      "Created modern website layouts and tools that helped clients understand visitor behavior and make smarter decisions.",
      "Worked with marketing teams to track content performance and improve targeting and ROI.",
    ],
  },
  {
    years: "2023 – 2024",
    title: "Business Intelligence Analyst",
    subtitle: "Bombardier Recreational Products (BRP)",
    accent: "bg-[#f4ba97]",
    points: [
      "Built 15+ Power BI dashboards using Python and SQL to improve real-time decision-making.",
      "Automated reporting workflows, reducing manual prep time by 60% and improving data quality.",
      "Integrated dashboards and reporting into enterprise systems, improving data availability.",
      "Created validation scripts and test dashboards that improved reporting accuracy and defect tracking.",
    ],
  },
  {
    years: "2021 – 2023",
    title: "Software Developer / Technical Engineer",
    subtitle: "Infosys / BRP",
    accent: "bg-[#0f7f87]",
    points: [
      "Developed enterprise applications, APIs, and analytics-ready UI components.",
      "Improved data flow between systems and reduced dashboard load times.",
      "Resolved data inconsistencies and improved production reliability through better monitoring and support logic.",
      "Used SQL and Python to streamline troubleshooting and improve uptime across production workflows.",
    ],
  },
  {
    years: "2004 – 2021",
    title: "Special Education Teacher & Evaluator",
    subtitle: "Educational Institutions",
    accent: "bg-[#e8d7fb]",
    points: [
      "Led weekly data review meetings using student performance metrics to shape individualized learning plans.",
      "Built and analyzed school-level data models that improved placement decisions.",
      "Presented insights to multidisciplinary teams to align support strategies and interventions.",
      "Specialized in differentiated instruction, progress monitoring, and inclusive practices.",
    ],
  },
];

export const projects = [
  {
    image: "/project-codered.png",
    title: "Code Red SSI",
    text: "A platform focused on school safety solutions, communication, and strategic partnerships.",
    link: "coderedssi.org",
  },
  {
    image: "/project-maxresume.png",
    title: "MaxResumeBuilder",
    text: "An AI-powered resume builder helping job seekers create optimized, ATS-friendly resumes.",
    link: "smartcareeros.com",
  },
  {
    image: "/project-formquill.png",
    title: "FormQuill",
    text: "A smart AI form builder designed for efficiency, clarity, and better user experience.",
    link: "formbuilder.com",
  },
];

export const education = [
  "MBA, Business Intelligence & Analytics Management — Keller Graduate School of Management",
  "BA, Educational Studies — Clark Atlanta University",
  "Google UX Design Specialization — Coursera",
  "Data Analytics & Visualization Post Grad Certification — Georgia Tech",
];

export const certifications = [
  "Google Data Analytics / UX Design Training",
  "Power BI / Dashboard Reporting",
  "Frontend Development with React, TypeScript, and Tailwind",
  "ADA / Accessible Design Practices",
  "Georgia Educator Certificate — Standard Professional",
];

export const serviceCards = [
  {
    icon: Brain,
    title: "AI Consulting",
    text: "Helping businesses integrate AI tools and automation to streamline operations.",
  },
  {
    icon: Code2,
    title: "Web Development",
    text: "Building fast, responsive, and scalable web applications that users love.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    text: "Turning raw data into clear insights for smarter, data-driven decisions.",
  },
  {
    icon: Rocket,
    title: "Product Strategy",
    text: "From idea to launch — I help you build products that solve real problems.",
  },
];

export const featuredProjects = [
  {
    image: "/project-codered.png",
    title: "Code Red SSI",
    text: "A platform helping individuals understand SSI and maximize benefits.",
  },
  {
    image: "/project-maxresume.png",
    title: "MaxResumeBuilder",
    text: "AI-powered resume builder that helps jobseekers stand out and get hired.",
  },
  {
    image: "/project-formquill.png",
    title: "FormQuill",
    text: "Smart form builder with AI assistance for effortless form creation.",
  },
];

export const latestVideos = [
  {
    image: "/video-thumb-1.png",
    title: "Faith Over Fear",
    text: "Trusting God in uncertain times",
    meta: "May 5, 2024 • 8:45",
  },
  {
    image: "/video-thumb-2.png",
    title: "Purpose Over Pressure",
    text: "How to stay focused on your calling",
    meta: "April 28, 2024 • 10:12",
  },
  {
    image: "/video-thumb-3.png",
    title: "Building in Alignment",
    text: "Creating what God called you to build",
    meta: "April 21, 2024 • 9:31",
  },
];

export const socialLinks = [
  { icon: FileText, label: "Resume", href: "/resume" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email Me", href: "#contact" },
];

export const featuredPicks = [
  {
    type: "Video",
    title: "Faith Over Fear",
    description:
      "A message to help you trust God in uncertain seasons and keep moving forward.",
    image: "/resources/featured-video.jpg",
    href: "#videos",
    icon: Play,
    color: "text-[#0f7f87]",
  },
  {
    type: "Book",
    title: "Shameless Persistence",
    description:
      "A reminder to keep showing up, growing through the process, and walking in purpose.",
    image: "/resources/featured-book.jpg",
    href: "#books",
    icon: BookOpen,
    color: "text-[#f08f52]",
  },
  {
    type: "Music",
    title: "Songs for Strength",
    description:
      "Music that centers your heart, lifts your spirit, and helps you stay grounded.",
    image: "/resources/featured-music.jpg",
    href: "#music",
    icon: Music,
    color: "text-[#7b4bb7]",
  },
];

export const videos = [
  {
    title: "Faith Over Fear",
    description: "Trusting God in seasons of uncertainty and waiting.",
    topic: "Faith",
    image: "/resources/video-1.jpg",
    href: "#",
  },
  {
    title: "Purpose Over Pressure",
    description:
      "How to stay aligned with your calling and not just the noise.",
    topic: "Purpose",
    image: "/resources/video-2.jpg",
    href: "#",
  },
  {
    title: "Healing & Restoration",
    description: "Encouragement for those walking through pain and rebuilding.",
    topic: "Healing",
    image: "/resources/video-3.jpg",
    href: "#",
  },
];

export const books = [
  {
    title: "Shameless Persistence",
    author: "Monicah Cloud",
    description:
      "A faith-centered reminder to stay committed, rise stronger, and walk boldly in purpose.",
    topic: "Purpose",
    image: "/bookcover.png",
    href: "#",
  },
  {
    title: "The Vision",
    author: "Priscilla Shirer",
    description:
      "A powerful resource on prayer, spiritual strategy, and standing firm in faith.",
    topic: "Faith",
    image: "/resources/book-2.jpg",
    href: "#",
  },
  {
    title: "The Mountain Is You",
    author: "Brianna Wiest",
    description:
      "A strong recommendation for mindset, self-sabotage, healing, and inner growth.",
    topic: "Mindset",
    image: "/resources/book-3.jpg",
    href: "#",
  },
];

export const movies = [
  {
    title: "The Forge",
    description:
      "A story about discipleship, growth, and becoming who God has called you to be.",
    topic: "Faith",
    image: "/resources/movie-1.jpg",
    href: "#",
  },
  {
    title: "War Room",
    description:
      "A reminder of the power of prayer, spiritual discipline, and fighting from faith.",
    topic: "Prayer",
    image: "/resources/movie-2.jpg",
    href: "#",
  },
  {
    title: "The Pursuit of Happyness",
    description:
      "A moving story of perseverance, fatherhood, and pressing through hardship.",
    topic: "Resilience",
    image: "/resources/movie-3.jpg",
    href: "#",
  },
];

export const musicList = [
  {
    title: "Jireh",
    artist: "Elevation Worship & Maverick City",
    description:
      "A worship song for remembering that God is enough and will provide.",
    topic: "Faith",
    image: "/resources/music-1.jpg",
    href: "#",
  },
  {
    title: "Firm Foundation",
    artist: "Maverick City Music",
    description:
      "A grounding anthem for seasons where you need peace, stability, and confidence in God.",
    topic: "Encouragement",
    image: "/resources/music-2.jpg",
    href: "#",
  },
  {
    title: "Believe For It",
    artist: "CeCe Winans",
    description:
      "A song to stir your faith and remind you that nothing is impossible with God.",
    topic: "Faith",
    image: "/resources/music-3.jpg",
    href: "#",
  },
];
