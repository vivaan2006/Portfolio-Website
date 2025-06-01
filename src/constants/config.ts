type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Vivaan Rajesh - Personal Portfolio",
    fullName: "Vivaan Rajesh",
    email: "vivaan.rajesh2006@gmail.com",
  },
  hero: {
    name: "Vivaan Rajesh",
    p: [
      "Computer Science student at Georgia Tech",
      "Building full-stack apps, 3D visuals, and automation tools",
    ],
  },
  contact: {
    p: "I’m open to SWE roles, internships, or collaborations—feel free to reach out!",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m a sophomore Computer Science major at Georgia Tech who loves building production-ready software. I’m currently interning at Shop Online, enhancing e-commerce features with React, TypeScript, Node.js, and MySQL. Previously, I served as a Research Assistant under Prof. Ben Greenman at the Utah PLT Lab, where I designed and ran over 100 microbenchmarks to optimize Static Python performance, achieving a 15% runtime improvement. My academic background includes Data Structures, Discrete Mathematics, and Web Development. Outside of class, I’ve built projects like Wise Wanderer (a Django travel recommendation app), a Twitch Clip Automation Tool (Python + ffmpeg), and a Fake News Detector Chrome Extension (Flask + React + machine learning). I’m passionate about 3D visuals with Three.js and creating seamless user experiences. Let’s work together to turn ideas into polished software!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
      content: `Software Engineering Intern – Shop Online (March 2025 – Present)
• Implemented product-filtering features in a React + TypeScript frontend and Node.js + Express backend.
• Optimized MySQL queries to reduce page load times by 20% on high-traffic product pages.
• Collaborated with design and QA teams to ship two major sprints on time, writing unit tests in Jest and integration tests with Cypress.
• Refactored legacy endpoints to follow RESTful conventions and implemented caching for performance improvements.

Research Assistant – Utah PLT Lab, University of Utah (Fall 2024)
• Worked under Prof. Ben Greenman to design and execute over 100 microbenchmarks targeting Static Python.
• Utilized perf and gprof to analyze profiling data and identify function-call optimizations that improved benchmark runtimes by 15%.
• Co-authored an internal report summarizing performance findings and proposed compiler tweaks to reduce overhead.
• Integrated the benchmark suite into the CI pipeline for continuous performance regression testing.

Hackathon Winner & Participant (2024 – 2025)
• Educate! (UN Hackathon 2024): Developed a web app to boost school engagement using React and Firebase; won “Top Web Innovation.”
• Spirit Quest (FBLA Nationals 2024): Built a mobile-friendly school-spirit app in React Native and Firebase; awarded “Best UI/UX.”
• Wise Wanderer Buildathon (Georgia Tech Hackathon): Prototyped travel recommendation features in 24 hours using Django and React.
• Participated in multiple Georgia Tech hackathons, creating Flask + React solutions focused on campus life and social good.`,
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
      content: `"Vivaan’s research on Static Python benchmarks was meticulous and insightful. His benchmark suite helped us uncover unexpected performance gains."
— Prof. Ben Greenman, Utah PLT Lab

“As a Shop Online intern, Vivaan quickly navigated our codebase, shipped new features, and improved database queries. His dedication and code quality impressed the entire engineering team.”
— Senior Software Engineer, Shop Online

“Vivaan’s Wise Wanderer project demonstrated exceptional full-stack development and API integration skills. His code is clean, well-documented, and production-ready.”
— Hackathon Teammate, Wise Wanderer Buildathon`,
    },
    works: {
      p: "My Work",
      h2: "Projects.",
content: `Here’s a selection of projects I’ve developed to sharpen my skills and apply what I’ve learned in real-world scenarios. These range from full-stack web apps to automation tools and machine learning integrations—each one reflecting my passion for building clean, functional, and scalable software.`,
    },
  },
};
