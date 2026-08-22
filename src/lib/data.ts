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
  summary?: string;
  bullets?: ExperienceBullet[];
  subBullets?: { heading: string; points: string[] }[];
}

export const experience: ExperienceRole[] = [
  {
    company: "ServiceNow",
    title: "Senior Product Manager, Platform",
    dates: "August 2024 – April 2026 · 1 yr 9 mos",
    location: "Hyderabad, Telangana, India",
    summary:
      "Built a Zero-to-One AI Control Tower (AICT) giving enterprises complete visibility into their AI footprint, enabling them to manage the full lifecycle of AI assets while identifying and mitigating risks associated with AI investments.",
    bullets: [
      "Conducted user, domain and competitive research to capture governance process and key personas.",
      "Led successful delivery of 3P controls in AICT, integrating third-party model provider strategies & empowering customers with data-driven compliance insights for AI systems across Zurich, Australia, and Brazil markets.",
      "Drove the Long-Term Stability (LTS) model strategy for the financial services sector, enabling customer choice for stable AI models and coordinating cross-team efforts to resolve implementation gaps and align product priorities.",
      "Established and managed an audit framework for AICT, enabling customers to efficiently handle internal and external audits by capturing comprehensive audit histories and change chains for AI system deployments.",
      "Championed exception management frameworks for AI model providers and datasets, enhancing the governance framework and compliance posture for companies implementing AICT.",
      "Spearheaded observability initiatives in AICT, developing proof-of-concept solutions to surface actionable insights on AI system health and enable proactive recommendations for product owners and builders.",
      "Recognized for leadership and strategic vision with multiple kudos from cross-functional stakeholders; served as Product Advisor during the Create UTG 2025 Hackathon, guiding teams to refine and pitch AI governance solutions.",
    ],
  },
  {
    company: "ServiceNow",
    title: "Senior Product Manager, HR Service Delivery Business Unit",
    dates: "November 2021 – July 2024 · 2 yrs 9 mos",
    location: "Hyderabad, Telangana, India",
    summary:
      "Managed the strategic vision and success of the Employee Document Management product for the HR domain — generating $70M ACV across 150+ enterprise customers.",
    bullets: [
      "Spearheaded strategic vision and product roadmap for the enterprise document manager module of the HRSD product across 4 major releases, achieving product-market fit across the complete Hire-to-Retire HR lifecycle and growing the sales pipeline by 40%.",
      "Collaborated with sales, senior leadership & clients, providing strategic support with tailored collateral, product demos and presentations.",
      "Helped successfully close 10+ deals over $30M, further contributing to multiple upgrade deals and business growth.",
      "Engaged with product leadership & industry leaders to ensure roadmap alignment and incorporate market feedback into the product.",
    ],
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
