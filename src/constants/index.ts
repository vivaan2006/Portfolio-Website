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
    date: "Summer 2025",
    points: [
      "Worked on the core e-commerce platform using React, TypeScript, Node.js, and MySQL.",
      "Shipped product filtering features and UI enhancements that improved user flow and performance.",
      "Debugged across the stack and collaborated with senior engineers and designers in an agile environment.",
      "Gained production experience writing clean, scalable code and deploying to a live user base.",
    ],
  },
  {
    title: "Research Assistant",
    companyName: "Utah PLT Lab (University of Utah)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Fall 2024",
    points: [
      "Worked with Prof. Ben Greenman on Static Python, a type-specialized CPython fork focused on performance.",
      "Created and executed over 100 custom benchmarks to evaluate runtime behavior and optimization potential.",
      "Identified bottlenecks and summarized key findings in a report shared with the PLT community.",
      "Helped integrate the benchmarking suite into the lab’s continuous integration pipeline for regression tracking.",
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
      "Wise Wanderer (Django, React, PostgreSQL): Travel recommendation app integrating Skyscanner and OpenWeatherMap APIs; deployed to Heroku.",
      "Twitch Clip Automation Tool (Python, ffmpeg): Automatically downloads, processes, and formats Twitch clips for TikTok using ffmpeg and the Twitch API.",
      "Fake News Detector Chrome Extension (Flask, React, scikit-learn): Chrome extension with real-time ML article classification; backend deployed on Heroku.",
      "UML Generator (Java, Swing): Visualized `.class` file structure by parsing reflection data and rendering interactive UML diagrams with zoom/pan support.",
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
    name: "M.D Istaik",
    designation: "Product Owner",
    company: "Shop Online",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    testimonial:
      "Vivaan’s Wise Wanderer project showcased full-stack development and API integration skills. He writes clean, production-ready code and collaborates effectively.",
    name: "Aadil Khond",
    designation: "Scrum Master",
    company: "Wise Wanderer Partner",
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
