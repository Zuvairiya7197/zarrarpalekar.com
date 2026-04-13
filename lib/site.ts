export const siteConfig = {
  name: "Zarrar Palekar",
  shortName: "ZP",
  logo: "https://lightgoldenrodyellow-fox-787789.hostingersite.com/wp-content/uploads/2026/04/cropped-LOGO.png",
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

const experienceStartYear = 2017;

export const experienceYears = new Date().getUTCFullYear() - experienceStartYear;

export const heroRoles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Tech Innovator",
  "MERN Stack Expert",
] as const;

export const trustStats = [
  { value: experienceYears, suffix: "+", label: "Years Experience" },
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
    subtitle: `${experienceYears}+ Year`,
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

export const aboutIntro = "Hi there! I am Zarrar Palekar." as const;

export const aboutParagraphs = [
  `With over ${experienceYears} years of dedicated experience in Full Stack Web Development, my passion lies in crafting elegant and intuitive web applications that provide seamless user experiences.`,
  `With over ${experienceYears} years of dedicated experience in Full Stack Web Development, I excel in utilizing the MERN stack (MongoDB, Express, React, Node.js) and stay up-to-date with the latest technologies and methodologies to deliver innovative, tailor-made solutions that align with clients’ specific needs.`,
  "From ideation to deployment, I prioritize delivering exceptional outcomes that surpass expectations. My attention to detail ensures visually appealing and functionally robust applications that drive business growth and enhance user engagement.",
  "Whether working independently or collaboratively, my commitment to excellence remains steadfast. I continuously expand my expertise to remain at the forefront of this dynamic industry.",
  "Let’s collaborate to turn your vision to reality and create something truly exceptional together!",
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      {
        name: "Bootstrap",
        icon: `${assetBase}/bootstrap.svg`,
      },
      {
        name: "React JS",
        icon: `${assetBase}/reactjs.svg`,
      },
      {
        name: "Redux",
        icon: `${assetBase}/redux.svg`,
      },
      {
        name: "React Router",
        icon: `${assetBase}/react-router.svg`,
      },
      {
        name: "HTML5",
        icon: `${assetBase}/html-5.svg`,
      },
      {
        name: "React Bootstrap",
        icon: `${assetBase}/react-bootstrap-1.svg`,
      },
      {
        name: "JavaScript",
        icon: `${assetBase}/javascript.svg`,
      },
      {
        name: "Sass",
        icon: `${assetBase}/sass.svg`,
      },
      {
        name: "Material UI",
        icon: `${assetBase}/material-ui-.svg`,
      },
      {
        name: "CSS3",
        icon: `${assetBase}/css3.svg`,
      },
      {
        name: ".Net",
        icon: `${assetBase}/net.png`,
      },
      {
        name: "styled components",
        icon: `${assetBase}/Styled-component-1.png`,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: `${assetBase}/Node-js-1.png`,
      },
      {
        name: "Express",
        icon: `${assetBase}/express-1.png`,
      },
    ],
  },
  {
    title: "Hosting Platform",
    items: [
      {
        name: "Heroku",
        icon: `${assetBase}/heroku.svg`,
      },
      {
        name: "Github",
        icon: `${assetBase}/github.png`,
      },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      {
        name: "Javascript",
        icon: `${assetBase}/javascript.svg`,
      },
      {
        name: "Typescript",
        icon: `${assetBase}/Type-Script.png`,
      },
    ],
  },
  {
    title: "Version Control",
    items: [
      {
        name: "GIT",
        icon: `${assetBase}/git-icon.svg`,
      },
      {
        name: "TortoiseSVN",
        icon: `${assetBase}/Tortoise-e1775477338512.png`,
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        name: "MS-SQL",
        icon: `${assetBase}/MSSQL.jpg`,
      },
      {
        name: "MongoDB",
        icon: `${assetBase}/MongoDB.png`,
      },
      {
        name: "PL\\SQL",
        icon: `${assetBase}/oracle.jpg`,
      },
    ],
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
    technologies: ["React JS", "Node JS", "Express JS", "MongoDB", "Redux", "JWT"],
    details: [
      "Lets you buy products with sandbox paypal",
      "Powered by React and Redux",
      "Responsive Design",
    ],
    sourceCode: "https://github.com/ZarrarPalekar/ProShop",
  },
  {
    title: "Dev Social App",
    date: "Nov-2020",
    description: "A Social Media App for developers.",
    image: `${assetBase}/1DevConnApp.webp`,
    technologies: ["React JS", "Node JS", "Express JS", "MongoDB", "Redux", "JWT"],
    details: [
      "Lets you connect with other people",
      "Powered by React and Redux Responsive Design",
      "With almost all social media functionalities.",
    ],
    sourceCode: "https://github.com/ZarrarPalekar/SocialDevApp",
  },
  {
    title: "Shopping List App",
    date: "Oct-2020",
    description: "This is a Shopping List App.",
    image: `${assetBase}/7MernShopList.webp`,
    technologies: ["React JS", "Node JS", "Express JS", "MongoDB", "Redux", "JWT"],
    details: [
      "Lets you maintain your shopping list",
      "Powered by React and Redux",
      "Responsive Design",
    ],
  },
  {
    title: "EJS Todo App",
    date: "Sep-2020",
    description: "An app based on EJS & used to maintain a todo list.",
    image: `${assetBase}/2ToDoApp.webp`,
    technologies: ["React JS", "Node JS", "Express JS", "MongoDB", "EJS"],
    details: [
      "Add To List",
      "Delete From List",
      "Make Your Own Custom List Just by typing in the name you want in the URL after the app url as a querystring",
    ],
  },
  {
    title: "My Blogs",
    date: "Sep-2020",
    description: "An app that allows users to see my blog posts.",
    image: `${assetBase}/My-blogs.webp`,
    technologies: ["HTML", "CSS", "Bootstrap", "MongoDB", "EJS"],
    details: [
      "Users can see my blog list and read more",
      "I have a admin panel to write my blogs",
    ],
  },
  {
    title: "My Newsletter",
    date: "Sep-2020",
    description: "An app that signs you up for my newsletter.",
    image: `${assetBase}/4SignUpNewsLetter.webp`,
    technologies: ["EJS", "Node JS", "Express JS", "Mailchimp API"],
    details: [
      "Register new user for newsletter",
      "Welcome mail to user",
      "Awesome monthly content to user",
    ],
  },
  {
    title: "Secrets App",
    date: "Aug-2020",
    description: "An app that posts secrets anonymously.",
    image: `${assetBase}/3Secrets.webp`,
    technologies: ["HTML", "CSS", "React JS", "MongoDB", "Google OAuth"],
    details: [
      "Post anonymous secrets",
      "See all anonymous secrets",
      "Google OAuth",
    ],
  },
  {
    title: "Portfolio Website",
    date: "Jul-2020",
    description: "This portfolio website.",
    image: `${assetBase}/pzjportfolio.webp`,
    technologies: ["React JS", "Styled Components", "Github Pages", "WhatsApp"],
    details: [
      "Powered by React",
      "Used WhatsApp API",
    ],
  },
  {
    title: "Tindog – Tinder for dogs",
    date: "Jun-2020",
    description: "Website is a clone of Tinder and its for your dogs.",
    image: `${assetBase}/TinDog.webp`,
    technologies: ["HTML", "CSS", "Bootstrap"],
    details: [
      "Tinder Clone for Dogs",
    ],
    sourceCode: "https://tindog.zarrarpalekar.com/",
  },
  {
    title: "My First Website",
    date: "Jun-2020",
    description: "This website is my earlier portfolio.",
    image: `${assetBase}/My-1st-Website.webp`,
    technologies: ["HTML", "CSS", "Bootstrap"],
    details: [
      "My Earlier CV",
    ],
    sourceCode: "https://oldcv.zarrarpalekar.com/",
  },
] as const;
