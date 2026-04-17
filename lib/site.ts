export const siteConfig = {
  name: "Zarrar Palekar",
  shortName: "ZP",
  logo: "/red-zp-logo.png",
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
    { label: "Testimonials", href: "#testimonials" },
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
  "I excel in utilizing the MERN stack (MongoDB, Express, React, Node.js) and stay up-to-date with the latest technologies and methodologies to deliver innovative, tailor-made solutions that align with clients' specific needs.",
  "From ideation to deployment, I prioritize delivering exceptional outcomes that surpass expectations. My attention to detail ensures visually appealing and functionally robust applications that drive business growth and enhance user engagement.",
  "Whether working independently or collaboratively, my commitment to excellence remains steadfast. I continuously expand my expertise to remain at the forefront of this dynamic industry.",
  "Let's collaborate to turn your vision to reality and create something truly exceptional together!",
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
        name: "React",
        icon: `${assetBase}/reactjs.svg`,
      },
      {
        name: "Next.js",
        icon: "/Images/nextjs.svg",
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
        name: "HTML",
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
        name: "CSS / Tailwind CSS",
        icon: "/Images/tailwindcss.svg",
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
      {
        name: "MongoDB",
        icon: `${assetBase}/MongoDB.png`,
      },
      {
        name: "MS SQL",
        icon: `${assetBase}/MSSQL.jpg`,
      },
      {
        name: ".NET",
        icon: `${assetBase}/net.png`,
      },
      {
        name: "Oracle",
        icon: `${assetBase}/oracle.jpg`,
      },
    ],
  },
  {
    title: "Hosting Platform",
    items: [
      {
        name: "Heroku",
        icon: "/Images/heroku.svg",
      },
      {
        name: "Github",
        icon: `${assetBase}/github.png`,
      },
      {
        name: "Vercel",
        icon: "/Images/vercel.svg",
      },
      {
        name: "Hostinger",
        icon: "/Images/hostinger.svg",
      },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      {
        name: "JavaScript",
        icon: `${assetBase}/javascript.svg`,
      },
      {
        name: "TypeScript",
        icon: `${assetBase}/Type-Script.png`,
      },
      {
        name: "HTML",
        icon: `${assetBase}/html-5.svg`,
      },
      {
        name: "CSS / Tailwind CSS",
        icon: "/Images/tailwindcss.svg",
      },
      {
        name: "Node.js",
        icon: `${assetBase}/Node-js-1.png`,
      },
      {
        name: "React",
        icon: `${assetBase}/reactjs.svg`,
      },
      {
        name: "Next.js",
        icon: "/Images/nextjs.svg",
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

export const testimonials = [
  {
    name: "Swapnil Patil",
    image: "/Images/swapnil%20patil.jpeg",
    headline:
      "Sr Software Developer @ Azul Arc | Technical Architecture, Prompt Engineering, Product Development, AI feature integration",
    date: "August 25, 2025",
    relationship: "Swapnil reported to Zarrar directly",
    quote:
      "I had the privilege of working with Zarrar, who seamlessly balances his role as a Team Lead and Scrum Master while also being an AI enthusiast constantly exploring ways to bring innovation into our projects.\n\nAs a leader, Zarrar stands out for his ability to foster collaboration, encourage open communication, and guide the team with clarity and purpose. He has an exceptional knack for breaking down complex challenges into achievable steps, ensuring that everyone stays aligned and motivated.\n\nWhat truly sets him apart is his passion for AI and emerging technologies. He actively shares insights, experiments with new ideas, and inspires the team to think beyond conventional solutions. This forward-thinking mindset has helped us improve processes, deliver smarter solutions, and stay ahead of the curve.",
  },
  {
    name: "Sadaf Mirza",
    image: "/Images/Sadaf%20Mirza.jpeg",
    headline:
      "Senior Software Engineer @AzulArc | exLTIM | MERN & MEAN Stack Developer | PERN | AWS accredited | DSA Enthusiast",
    date: "August 21, 2025",
    relationship: "Sadaf reported to Zarrar directly",
    quote:
      "I’ve had the privilege of working with Zarrar as my team lead, and it has truly been an enriching experience. From the very beginning, Zarrar has been very supportive and approachable, always ready to lend a hand or share his insights whenever needed. His straightforward approach makes communication clear and effective, while also creating a space where ideas and opinions can be freely expressed.\n\nWhat stands out the most about Zarrar is not only his impressive skill set and professionalism but also his genuine willingness to help others grow. He takes the time to guide, mentor, and ensure the team feels supported in every challenge. His ability to balance technical expertise with empathy and encouragement has had a huge impact on my own growth and confidence at work.\n\nZarrar is more than just a great leader, he’s someone who inspires trust, collaboration, and continuous learning within the team. I feel grateful to work under his guidance and would highly recommend him to anyone looking for a strong, supportive, and impactful leader.",
  },
  {
    name: "Nihar Makwana",
    image: "/Images/Nihar%20Makwana.jpeg",
    headline: "Sr. Software Developer at AzulArc",
    date: "August 21, 2025",
    relationship: "Nihar reported to Zarrar directly",
    quote:
      "I've had the pleasure of working with Zarrar for nearly three years, first as a peer and later as a member of his team. Throughout this time, I've seen firsthand that Zarrar is not only a highly skilled and intelligent engineer but also a natural leader.\n\nAs a team leader, Zarrar excels at creating an environment where everyone can thrive. He consistently supported our team, advocated for our needs, and encouraged us to grow while also ensuring we maintained a healthy work-life balance. His approachability and willingness to help made him an incredibly effective leader; I never felt intimidated, and it was always easy to seek his guidance.\n\nIn my seven years of professional experience, Zarrar stands out as the best colleague and team leader I've had the honor of working with. His commitment to both the team's success and individual well-being makes him an exceptional asset.",
  },
  {
    name: "Premraj Tripute",
    image: "/Images/Premraj%20Tripute.jpeg",
    headline: "Full stack developer | NodeJs | Express | ReactJs | Angular 2+ | AWS",
    date: "August 20, 2025",
    relationship: "Premraj reported to Zarrar directly",
    quote:
      "I'm incredibly fortunate to be working alongside Zarrar! As a colleague at Azul Arc, they've proven to be a truly exceptional leader and a master of project management.\n\nTheir deep knowledge of software development, especially with the PERN stack and DevOps, is a huge asset to our team. They've been instrumental in guiding our projects, and their expertise in agile practices ensures we consistently stay on track and deliver high-quality work.\n\nWhat truly sets Zarrar apart is his fantastic approach to team management. They foster a collaborative and positive environment, always providing clear direction and empowering everyone to do their best work. Their ability to lead, mentor, and motivate makes our team incredibly effective.",
  },
  {
    name: "Nikhil Joshi",
    image: "/Images/Nikhil%20Joshi.jpeg",
    headline: "International Business Development | Sales | Partnerships | Strategic Alliances",
    date: "March 8, 2024",
    relationship: "Nikhil worked with Zarrar but on different teams",
    quote:
      "During the time of working alongside Zarrar at Euclid, I was instantly awed by his unwavering zest to go deep into requirements, his working on the problems encountered and coming out with a solution. A curious self learner that he is and technical brilliance that he brought to the table, resonates well with the progress he has done till date and definitely way to go. Onward and Upwards.",
  },
  {
    name: "Shir Avidan",
    image: "/Images/Shir%20Avidan.jpeg",
    headline: "Sr. Software Product Manager",
    date: "February 26, 2024",
    relationship: "Shir managed Zarrar directly",
    quote:
      "Zarrar has skillfully navigated through the project's most challenging aspects. His effective communication and proactive problem-solving reflect his strong commitment to excellence and delivering results. Zarrar's hard work and dedication have greatly contributed to the ongoing success of our organization.",
  },
  {
    name: "Shubham Singh",
    image: "/Images/Shubham%20Singh.jpeg",
    headline: "Senior Software Engineer at SponsorCloud",
    date: "February 27, 2022",
    relationship: "Shubham worked with Zarrar on the same team",
    quote:
      "Zarrar is very passionate and has a great vision for his work. His focus keeps everything moving smoothly, he makes sure all the deadlines are met and makes sure that whatever project he is working on meets the highest standards. His helping nature to other colleagues makes him a more loving employee and person.",
  },
] as const;
