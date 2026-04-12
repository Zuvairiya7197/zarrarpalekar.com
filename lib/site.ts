export const siteConfig = {
  name: "Zarrar Palekar",
  shortName: "ZP",
  title: "Zarrar Palekar | Full Stack Developer | MERN Stack Developer",
  description:
    "Full Stack Developer & MERN Stack Developer building modern, scalable web applications that solve real-world problems with clean and efficient code.",
  url: "https://zarrarpalekar.com",
  location: "Mumbai, India",
  email: "meetzarrarpalekar@gmail.com",
  phone: "+91 9867363215",
  calendlyUrl: "https://calendly.com/meetzarrar/30min",
  whatsappUrl:
    "https://api.whatsapp.com/send?phone=+919867363215&text=Hi%20Zarrar%21%20I%20came%20here%20from%20your%20portfolio%20website.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/ZarrarPalekar" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zarrarpalekar" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/palekarzarrar/?hl=en",
    },
  ],
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

const assetBase =
  "https://lightgoldenrodyellow-fox-787789.hostingersite.com/wp-content/uploads/2026/04";

export const heroRoles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Tech Innovator",
  "MERN Stack Expert",
] as const;

export const trustStats = [
  { value: 9, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Project Completed" },
  { value: 25, suffix: "+", label: "Technical Skills" },
] as const;

export const aboutHighlights = [
  {
    title: "Full Stack",
    subtitle: "MERN & .Net",
    image: `${assetBase}/Full-stack-1-e1775234110648.png`,
  },
  {
    title: "Performance",
    subtitle: "Speed & Efficiency",
    image: `${assetBase}/peformance-1-e1775234494456.png`,
  },
  {
    title: "Experience",
    subtitle: "9+ Year",
    image: `${assetBase}/experience-1-e1775235240646.png`,
  },
  {
    title: "Clean Code",
    subtitle: "Solutions",
    image: `${assetBase}/Code-1-e1775234222308.png`,
  },
  {
    title: "UI\\UX",
    subtitle: "Focused",
    image: `${assetBase}/UX-1-e1775234427944.png`,
  },
  {
    title: "Scalable",
    subtitle: "Solutions",
    image: `${assetBase}/Scalable-1-e1775234763931.png`,
  },
] as const;

export const aboutParagraphs = [
  "Hi there! I am Zarrar Palekar.",
  "With over 9 years of dedicated experience in Full Stack Web Development, my passion lies in crafting elegant and intuitive web applications that provide seamless user experiences.",
  "From ideation to deployment, I prioritize delivering exceptional outcomes that surpass expectations.",
  "Whether working independently or collaboratively, my commitment to excellence remains steadfast.",
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "Bootstrap",
      "React JS",
      "Redux",
      "React Router",
      "HTML5",
      "React Bootstrap",
      "JavaScript",
      "Sass",
      "Material UI",
      "CSS3",
      ".Net",
      "styled components",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    title: "Hosting Platform",
    items: ["Heroku", "Github"],
  },
  {
    title: "Programming Languages",
    items: ["Javascript", "Typescript"],
  },
  {
    title: "Version Control",
    items: ["GIT", "TortoiseSVN"],
  },
  {
    title: "Database",
    items: ["MS-SQL", "MongoDB", "PL\\SQL"],
  },
] as const;

export const experiences = [
  {
    company: "Azul Arc",
    title: "Sr. Software Developer",
    specialization: "MERN Full Stack Developer",
    logo: `${assetBase}/Azul-Arc.webp`,
    technologies: ["MERN", "Context API"],
    start: "2022-10-01",
    end: "present",
    points: [
      "Developing various React based applications with Context API.",
      "Interacting with the clients directly.",
    ],
  },
  {
    company: "Syndication Pro",
    title: "Software Engineer L2",
    specialization: "MERN Full Stack Developer",
    logo: `${assetBase}/Syndication-pro.jpg`,
    technologies: ["MERN Stack", "Redux", "GraphQL", "Apollo"],
    start: "2021-06-01",
    end: "2022-10-01",
    points: ["Learning & Implementing React based applications with Apollo GraphQL."],
  },
  {
    company: "Euclid – Tenders Info",
    title: "Senior Software Developer",
    specialization: ".Net Full Stack Developer",
    logo: `${assetBase}/Euclid.jpg`,
    technologies: [".NET", "C#", "MS-SQL"],
    start: "2019-04-01",
    end: "2021-06-01",
    points: [
      "Developed & enhanced multiple features for our web based CRM & CMS Systems.",
      "Developed automated mailer applications as well as JSON based Web APIs for the clients.",
      "Created from scratch many small modules which used to come to us as manual tasks daily so as to reduce our manual task load.",
    ],
  },
  {
    company: "Tech Mahindra",
    title: "Software Engineer",
    specialization: ".Net Full Stack Developer",
    logo: `${assetBase}/techmahindra.svg`,
    technologies: [".NET", "C#", "Oracle PL/SQL"],
    start: "2017-03-01",
    end: "2019-04-01",
    points: [
      "Developed & enhanced multiple features for our web based CRM & CMS Systems.",
      "Developed Web APIs for the clients other UI projects.",
    ],
  },
] as const;

export const projects = [
  {
    title: "E-Shop App",
    date: "Mar-2021",
    description: "This is a MERN Full Stack E-Commerce App.",
    image: `${assetBase}/eshopapp.webp`,
  },
  {
    title: "Dev Social App",
    date: "Nov-2020",
    description: "A Social Media App for developers.",
    image: `${assetBase}/1DevConnApp.webp`,
  },
  {
    title: "Shopping List App",
    date: "Oct-2020",
    description: "This is a Shopping List App.",
    image: `${assetBase}/7MernShopList.webp`,
  },
  {
    title: "EJS Todo App",
    date: "Sep-2020",
    description: "An app based on EJS & used to maintain a todo list.",
    image: `${assetBase}/2ToDoApp.webp`,
  },
  {
    title: "My Blogs",
    date: "Sep-2020",
    description: "An app that allows users to see my blog posts.",
    image: undefined,
  },
  {
    title: "My Newsletter",
    date: "Sep-2020",
    description: "An app that signs you up for my newsletter.",
    image: undefined,
  },
  {
    title: "Secrets App",
    date: "Aug-2020",
    description: "An app that posts secrets anonymously.",
    image: undefined,
  },
  {
    title: "Portfolio Website",
    date: "Jul-2020",
    description: "This portfolio website.",
    image: undefined,
  },
  {
    title: "Tindog – Tinder for dogs",
    date: "Jun-2020",
    description: "Website is a clone of Tinder and its for your dogs.",
    image: undefined,
  },
  {
    title: "My First Website",
    date: "Jun-2020",
    description: "This website is my earlier portfolio.",
    image: undefined,
  },
] as const;
