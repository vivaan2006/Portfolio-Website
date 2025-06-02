import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
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
  redux,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Engineering Intern",
    companyName: "Shop Online",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2025 - Present",
    points: [
      "Implemented new product-filtering features in a React + TypeScript frontend and Node.js + Express backend.",
      "Optimized MySQL queries to reduce page load times by 20% on high-traffic product pages.",
      "Collaborated with design and QA teams to ship two major sprints on-time, writing unit tests in Jest and integration tests with Cypress.",
      "Refactored legacy endpoints to use RESTful conventions and introduced caching strategies to improve API performance.",
    ],
  },
  {
    title: "Research Assistant",
    companyName: "Utah PLT Lab (University of Utah)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Fall 2024",
    points: [
      "Worked under Prof. Ben Greenman to design and execute over 100 microbenchmarks targeting Static Python.",
      "Analyzed profiling data with perf and gprof, identifying function-call optimizations that improved benchmark runtimes by 15%.",
      "Co-authored an internal report summarizing performance findings and proposed compiler tweaks to reduce overhead.",
      "Collaborated with graduate students to integrate benchmark harness into the CI pipeline for continuous performance regression testing.",
    ],
  },
  {
    title: "Hackathon Winner & Participant",
    companyName: "Various Events",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2024 - 2025",
    points: [
      "Educate! (UN Hackathon 2024): Developed a school-engagement web app using React and Firebase; awarded “Top Web Innovation.”",
      "Spirit Quest (FBLA Nationals 2024): Built a mobile-friendly school-spirit app in React Native and Firebase; won “Best UI/UX.”",
      "Wise Wanderer Buildathon (Georgia Tech Hackathon): Prototype travel recommendation features in 24 hours using Django and React.",
      "Participated in multiple Georgia Tech hackathons, creating Flask + React solutions focused on campus life and social good.",
    ],
  },
  {
    title: "Undergraduate Projects",
    companyName: "Personal",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Wise Wanderer (Django, React, PostgreSQL): Built a travel recommendation app integrating flight and weather APIs, deployed on Heroku.",
      "Twitch Clip Automation Tool (Python, ffmpeg): Automated daily scraping of top Twitch clips, batch-processed videos, and overlaid on-screen titles.",
      "Fake News Detector Chrome Extension (Flask, React, scikit-learn): Created real-time article classification using a Passive-Aggressive classifier; deployed backend to Heroku.",
      "UML Generator (Java, Swing): Parsed compiled .class files via reflection and rendered UML diagrams; implemented zoom and pan UI controls.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Vivaan’s work on Static Python benchmarks was meticulous and insightful. His benchmark suite identified performance gains we didn’t initially expect.",
    name: "Prof. Ben Greenman",
    designation: "Professor",
    company: "Utah PLT Lab, University of Utah",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "As a Shop Online intern, Vivaan navigated our codebase quickly, shipped new features, and improved our database queries. His dedication and code quality impressed the entire team.",
    name: "Senior Engineer",
    designation: "Software Engineer",
    company: "Shop Online",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    testimonial:
      "Vivaan’s Wise Wanderer project showcased full-stack development and API integration skills. He writes clean, production-ready code and collaborates effectively.",
    name: "Hackathon Teammate",
    designation: "Team Lead",
    company: "Wise Wanderer Buildathon",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Wise Wanderer",
    description:
      "A Django-powered travel recommendation app that integrates Skyscanner and OpenWeatherMap APIs to generate personalized itineraries, dynamic maps in React, and live weather updates.",
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
        name: "postgresql",
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
];

export { services, technologies, experiences, testimonials, projects };
