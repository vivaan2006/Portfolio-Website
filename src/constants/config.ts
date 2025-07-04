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
      "Building full-stack apps, machine learning models, and automation tools",
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
      content: `I’m a Computer Science major at Georgia Tech who loves building production-ready software. I’m currently interning at Shop Online, enhancing e-commerce features with React, TypeScript, Node.js, and MySQL. Previously, I served as a Research Assistant under Prof. Ben Greenman at the Utah PLT Lab, where I designed and ran over 100 microbenchmarks to optimize Static Python performance, achieving a 15% runtime improvement. My academic background includes Data Structures, Discrete Mathematics, and Web Development. Outside of class, I’ve built projects like a Twitch Clip Automation Tool (Python + ffmpeg), and a Fake News Detector Chrome Extension (Flask + React + machine learning) and so many more! Let’s work together to turn basic ideas into polished and profitable software!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
content: `Software Engineering Intern – Shop Online (Summer 2025)
• Worked on the core e-commerce platform using React, TypeScript, Node.js, and MySQL.
• Shipped product filtering features and UI improvements to enhance search performance and user flow.
• Contributed to both the frontend and backend while collaborating closely with senior engineers and designers.
• Learned how to write clean, scalable code and deploy features in a production environment serving real users.

Research Assistant – Utah PLT Lab (Remote, 2024)
• Worked under Prof. Ben Greenman on Static Python, a type-specialized version of CPython aimed at performance gains.
• Designed and ran over 100 microbenchmarks to evaluate the compiler’s runtime behavior across workloads.
• Identified optimization opportunities and summarized key findings in a performance report for the lab.
• Helped integrate benchmark tooling into CI and participated in lab meetings and performance discussions.

Hackathons & Competitions (2024 – Present)
• Built *Educate!* at the UN Hackathon — a React + Firebase web app to help schools drive student engagement. Won “Top Web Innovation.”
• Placed at FBLA Nationals with a PyQt5-based AI productivity app focused on time-blocking and smart scheduling.
• Regularly participate in Georgia Tech hackathons, building Flask + React tools that solve student-life and productivity problems.
• I use hackathons to rapidly prototype ideas, explore new APIs, and learn by shipping fast.`,
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
