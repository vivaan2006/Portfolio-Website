import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  python,
  django,
  flask,
  springboot,
  redis,
  celery,
  maven,
  bazel,
  fastapi,
  googlecloud,
  firebase,
  splunk,
  aws,
  mysql,
  salesforce,
  cardStartupSpotter,
  cardAtomiq,
  cardSpiritQuest,
  cardEducate,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Software Engineer",
    icon: web,
  },
  {
    title: "Machine Learning & AI Developer",
    icon: backend,
  },
  {
    title: "Creative Automation & Tools Builder",
    icon: creator,
  },
  {
    title: "Startup-Driven Product Developer",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Celery",
    icon: celery,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Google Cloud",
    icon: googlecloud,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Maven",
    icon: maven,
  },
  {
    name: "Bazel",
    icon: bazel,
  },
  {
    name: "Splunk",
    icon: splunk,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Engineering Intern",
    companyName: "Salesforce",
    icon: salesforce,
    iconBg: "#ffffff",
    date: "May 2026 – August 2026",
    points: [
      "Built the FastTrack path inside High Scale Flow (HSF), Salesforce's high-traffic multi-tenant flow engine, letting developers upload a connector JAR as a Static Resource and run it natively in a sandboxed environment (Java, Spring Boot, gRPC), cutting connector verification from a multi-week onboarding cycle down to under 5 minutes.",
      "Reverse-engineered and reimplemented Salesforce Core's connector-resolution logic off-core in Java, then validated behavioral parity against Core's production logic, backed by 200+ unit and integration tests at 90%+ coverage.",
      "Designed a 2-call REST discovery pipeline (cheap metadata list, then selective download) and built a tenant-scoped Caffeine cache with sandboxed execution (Java Isolates) ensuring connectors from different orgs never cross-contaminate on a shared JVM at scale.",
      "Implemented event-driven cache invalidation by wiring FastTrack into Salesforce's internal event bus, coordinating across 4 teams to keep records of uploaded connectors continuously fresh.",
    ],
  },
  {
    title: "Software Engineering Intern",
    companyName: "Shop Online New York",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2025 – July 2025",
    points: [
      "Architected high-traffic checkout workflows using React Hooks, Context API, and Firebase Authentication, cutting checkout page render time by over 30% under peak concurrent load.",
      "Optimized product listing and search over a Firebase backend serving a 2000+ item catalog, improving overall search relevance and end-to-end product purchase flow.",
    ],
  },
  {
    title: "Research Assistant",
    companyName: "University of Utah / Brown University — PLT Research",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "December 2022 – August 2024",
    points: [
      "Conducted performance analysis and benchmarking on Static Python, a type-specialized subset of CPython, by designing and executing 100+ microbenchmarks to uncover optimization opportunities in the runtime.",
      "Implemented type inference improvements directly in CPython internals using Python and Pytest, achieving a 15% speedup in targeted execution paths.",
    ],
  },
{
  title: "Chief Technology Officer & Web Developer",
  companyName: "Silverline Educational Advisory Services",
  icon: tesla, 
  iconBg: "#E6DEDD",
  date: "March 2023 – December 2023",
  points: [
    "Led a team of 12 web developers to successfully deliver a dynamic, production-ready website using React.js and Tailwind CSS.",
    "Oversaw the entire web development department, handling task allocation, code review, and project coordination.",
    "Reviewed pull requests to maintain consistent coding standards and ensure overall code quality across the team.",
    "Individually contributed to core features and UI improvements to enhance website performance and user experience.",
    "Built responsive, modern interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Angular.",
  ],
},
  {
    title: "Independent Projects",
    companyName: "Personal Work",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2023 – Present",
    points: [
      "Atomiq (Python): Built an MCP proxy that derives a deterministic semantic idempotency key for every mutating agent tool call, deduplicating side effects when agents retry or restore from checkpoints. Implemented a crash-safe SQLite side-effect ledger and a compensation engine, verified exactly-once re-execution across 20 SIGKILL crash-injection tests with zero duplicate or lost side effects.",
      "Startup Spotter (React, TypeScript, Tailwind, FastAPI): Multi-agent RAG system using Google ADK and Vertex AI to generate data-driven microbusiness recommendations, combining Vector Search over MongoDB Atlas with Google Maps/Search MCP integrations for real-time market analysis, deployed on Google Cloud Run.",
      "Wise Wanderer (Django, React): Full-stack travel recommendation app fusing live flight, weather, and scraped travel data from multiple third-party APIs; decoupled real-time ingestion using Celery and Redis job queues for sub-second itinerary generation.",
      "Twitch Clip Automation Tool (Python, ffmpeg): Automatically downloads, processes, and formats Twitch clips for TikTok using ffmpeg and the Twitch API.",
      "Fake News Detector Chrome Extension (Flask, React, scikit-learn): Chrome extension with real-time ML article classification; backend deployed on Heroku.",
    ],
  },
];

const projects: TProject[] = [
    {
    name: "Atomiq",
    description:
    "A Python MCP proxy that derives a deterministic semantic idempotency key for every mutating agent tool call, deduplicating side effects when agents retry or restore from checkpoints and eliminating double-charge/send failures for agentic frameworks. Includes a crash-safe SQLite side-effect ledger and a compensation engine with an \"atomiq undo\" CLI that replays declared inverse actions in reverse order, verified exactly-once re-execution across 20 SIGKILL crash-injection tests with zero duplicate or lost side effects.",
    tags: [
      {
        name: "MCP",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "reliability engineering",
        color: "pink-text-gradient",
      },
    ],
    image: cardAtomiq,
    sourceCodeLink: "https://github.com/vivaan2006/Atomiq",
  },
    {
    name: "Startup Spotter",
    description:
    "A multi-agent RAG system using Google ADK and Vertex AI to generate data-driven microbusiness recommendations from user-provided budget, location, and interest inputs, combining NLP-based signal extraction with Vector Search over MongoDB Atlas (U.S. Census demographic data) and Google Maps/Search MCP integrations for real-time competitor and market analysis. Full-stack architecture (React, TypeScript, Tailwind, FastAPI) deployed on Google Cloud Run.",
    tags: [
      {
        name: "Google ADK",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB Vector Search",
        color: "pink-text-gradient",
      },
    ],
    image: cardStartupSpotter,
    sourceCodeLink: "https://github.com/vivaan2006/Startup-Spotter",
  },
    {
    name: "Spirit Quest",
    description:
    "An application that aims to boost high school spirit activity by incentivizing participation, later on integrated within my high school. The application was initally built using Java Swing, however, it was transformed into a Python PyQT5 application powered by a Sqlite database, and many more libraries such as Numpy, openAI, Sklearn, pytorch and many more. The product featured a live announcement system, public groupchat, dynamic rewards center, a AI powered spirit assistant that helped users pick events or even prizes based on their stored interests.",
    tags: [
      {
        name: "Python PyQT5",
        color: "blue-text-gradient",
      },
      {
        name: "Sqlite",
        color: "green-text-gradient",
      },
      {
        name: "PyTorch",
        color: "pink-text-gradient",
      },
    ],
    image: cardSpiritQuest,
    sourceCodeLink: "https://github.com/vivaan2006/Spirit-Quest",
  },
  {
    name: "Wise Wanderer",
    description:
      "A full-stack travel recommendation system (Django, React) that fuses live flight, weather, and scraped travel data from multiple third-party APIs into a unified AI-driven itinerary generator, reconciling inconsistent schemas and source latency. Decoupled real-time data ingestion from the request lifecycle using Celery and Redis job queues, enabling sub-second itinerary generation despite variable third-party API latency.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "celery/redis",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/vivaan2006/Wise-Wanderer",
  },
  {
    name: "Twitch Clip Automation Tool",
    description:
      "Automates daily scraping of top Twitch clips via the Twitch API, processes video files with ffmpeg (batch cropping, adding on-screen titles), and formats for TikTok/Reels.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ffmpeg",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/vivaan2006/Twitch-Clip-Bot",
  },
  {
    name: "Fake News Detector",
    description:
      "A Chrome extension (React) backed by a Flask API hosting a Passive-Aggressive scikit-learn classifier trained on news data for real-time article verification. Deployed to Heroku.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "ml",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/rishabram/FakeNews",
  },

    {
    name: "Educate!",
    description:
    "Built at the UN Hackathon — a React + Firebase web app to help schools drive student engagement, winner of \"Top Web Innovation.\"",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "hackathon winner",
        color: "pink-text-gradient",
      },
    ],
    image: cardEducate,
    sourceCodeLink: "",
  },
];

export { services, technologies, experiences, projects };
