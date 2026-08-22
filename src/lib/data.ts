export const profile = {
  name: "Spandana Kintali",
  tagline: "Product Management | ISB | Ex-ServiceNow, OpenText, Oracle",
  status: "On an intentional career break — travelling, upskilling, and figuring out what's next.",
  location: "Hyderabad, Telangana, India",
  coordinates: { latitude: 17.385, longitude: 78.4867 },
  email: "spandanak.2010@gmail.com",
  linkedin: "https://www.linkedin.com/in/spandanakintali",
  summary:
    "Passionate about building enterprise products that help businesses execute processes through intuitive, easy-to-use interfaces. Highly motivated product manager with strong business acumen and experience across the product life-cycle — positioning, user experience, marketing, strategy and development.",
};

export type ExperienceBullet = string;

export interface ExperienceRole {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets?: ExperienceBullet[];
  subBullets?: { heading: string; points: string[] }[];
}

export const experience: ExperienceRole[] = [
  {
    company: "ServiceNow",
    title: "Senior Product Manager",
    dates: "November 2021 – April 2026 · 4 yrs 6 mos",
    location: "India",
  },
  {
    company: "Zenoti",
    title: "Senior Product Manager",
    dates: "April 2021 – October 2021 · 7 mos",
    location: "Hyderabad, Telangana, India",
    bullets: [
      "Built a SaaS product helping small businesses in the beauty & wellness industry manage day-to-day operations.",
      "Conceptualised & implemented product flows spanning sign-up to on-boarding across iOS & Web for the MVP launch.",
      "Created KPIs and dashboards to actively track user metrics from acquisition and engagement through to retention.",
      "Devised and implemented a user communication strategy that reduced sign-up abandonment by 20%.",
      "Collaborated with 2 product teams, UX & VISD, and cross-functional marketing and sales teams for product launch.",
    ],
  },
  {
    company: "OpenText",
    title: "Product Manager",
    dates: "May 2019 – April 2021 · 2 yrs",
    location: "Hyderabad Area, India",
    subBullets: [
      {
        heading:
          "Launched Event Action Center, a solution accelerator executing actions from events triggered by leading systems with 3 out-of-the-box integrations",
        points: [
          "Led a team of 8 to productise the feature set across multiple releases using Agile methodologies.",
          "Collaborated with UX and VISD to build an intuitive solution for Rule editors and Action plan editors.",
        ],
      },
      {
        heading:
          "Conceptualised a solution for onboarding prospective client employees using the Enterprise Content Management platform",
        points: [
          "Devised a GTM strategy to acquire customers reliant on capture solutions to process information from multiple users.",
          "Integrated in-house offerings and facilitated cross-selling opportunities for the Global Sales team.",
        ],
      },
      {
        heading:
          "Managed the product roadmap for enterprise collaboration features in the Content Suite platform across 2 major releases",
        points: [
          "Led a team of 6 to deliver features and resolve escalations, driving customer retention and renewal of premium licenses.",
        ],
      },
    ],
  },
  {
    company: "Oracle",
    title: "Applications Developer II",
    dates: "December 2015 – February 2018 · 2 yrs 3 mos",
    location: "Hyderabad Area, India",
    bullets: [
      "Designed an innovative tool to automate Database Management activities for handling critical issues.",
      "Led a team of 4 to develop the tool, later adopted organisation-wide across multiple products.",
      "Reduced team effort by 70% in maintaining highly confidential customer data through automation.",
      "Developed new features for Primavera Unifier and collaborated with global teams using Scrum.",
      "Awarded \"Employee of the Month\" for the productivity gains driven by the automation initiative.",
    ],
  },
  {
    company: "Oracle",
    title: "Applications Developer",
    dates: "July 2014 – November 2015 · 1 yr 5 mos",
    location: "Hyderabad Area, India",
    bullets: [
      "Worked on core functionality of Primavera Unifier, a scalable cloud-based Project Life Cycle Management solution.",
      "Resolved highly critical issues, debugging and delivering code fixes for customers.",
      "Designed server architecture to host customer databases and developed secured systems to maintain data.",
      "Awarded \"Employee of the Month\" for handling escalations and delivering fixes on time.",
    ],
  },
  {
    company: "ECIL-Rapiscan Limited",
    title: "Project Trainee",
    dates: "June 2012 – July 2012 · 2 mos",
    location: "Hyderabad Area, India",
    bullets: ["Completed a 1-month industrial (implant) training program in Java application development."],
  },
];

export const education = [
  {
    school: "Indian School of Business",
    degree: "PGP, Specialization: Strategy & Leadership, Marketing",
    dates: "2018 – 2019 · Co'19",
  },
  {
    school: "Amrita Vishwa Vidyapeetham",
    degree: "B.Tech, Computer Science",
    dates: "2010 – 2014",
  },
];

export const skills = ["Product Management", "Customer Experience", "Strategy"];

export const languages = [
  { name: "English", level: "Professional Working" },
  { name: "Hindi", level: "Professional Working" },
  { name: "Telugu", level: "Native or Bilingual" },
];

export const honors = ["Employee of the Month", "Employee of the Month", "University Topper"];
