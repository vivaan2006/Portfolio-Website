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
      "Building reliable backend systems, AI agent infrastructure, and full-stack products",
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
      content: `I'm a Computer Science major at Georgia Tech (Threads: Intelligence & People) who loves building software that has to stay correct under real pressure, not just work in a demo. This past summer, I interned at Salesforce, where I built FastTrack, a verification and caching system inside Salesforce's high-traffic, multi-tenant flow engine, cutting connector verification time from weeks to under 5 minutes. Before that, I interned at Shop Online New York, architecting high-traffic checkout workflows. I've also spent time as a Research Assistant with the University of Utah / Brown University PLT lab, running 100+ microbenchmarks on a type-specialized CPython runtime and shipping a 15% speedup. Outside of internships, I build my own systems: Atomiq, a reliability layer that guarantees AI agent actions execute exactly once even under a mid-task crash, and Startup Spotter, a multi-agent RAG system that turns noisy real-world signals into ranked business recommendations. Let's work together to turn hard problems into software people can actually depend on!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
content: `Software Engineering Intern – Salesforce (May 2026 – August 2026)
• Built FastTrack inside High Scale Flow, Salesforce's high-traffic multi-tenant flow engine, cutting connector verification from a multi-week onboarding cycle to under 5 minutes.
• Reverse-engineered and reimplemented Salesforce Core's connector-resolution logic, validated with 200+ tests at 90%+ coverage.
• Built a tenant-scoped cache with sandboxed execution and event-driven invalidation, coordinating across 4 teams.

Software Engineering Intern – Shop Online New York (April 2025 – July 2025)
• Architected high-traffic checkout workflows using React Hooks, Context API, and Firebase Authentication, cutting render time by 30%+.
• Optimized product listing and search over a Firebase backend serving a 2000+ item catalog.

Research Assistant – University of Utah / Brown University PLT Research (December 2022 – August 2024)
• Designed and executed 100+ microbenchmarks on Static Python, a type-specialized subset of CPython.
• Implemented type inference improvements in CPython internals, achieving a 15% speedup in targeted execution paths.

Hackathons & Competitions
• Built *Educate!* at the UN Hackathon — a React + Firebase web app to help schools drive student engagement. Won "Top Web Innovation."
• FBLA Coding and Programming National Champion; GNEC Hackathon winner; USACO Silver.
• I use hackathons to rapidly prototype ideas, explore new APIs, and learn by shipping fast.`,
    },
    works: {
      p: "My Work",
      h2: "Projects.",
content: `Here’s a selection of projects I’ve developed to sharpen my skills and apply what I’ve learned in real-world scenarios. These range from full-stack web apps to automation tools and machine learning integrations—each one reflecting my passion for building clean, functional, and scalable software.`,
    },
  },
};
