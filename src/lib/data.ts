export const profile = {
  name: "Spandana Kintali",
  titles: [
    "Senior Product Manager",
    "Founding PM, AI Governance",
    "0-to-1 Product Builder",
    "Enterprise SaaS Leader",
  ],
  experienceYears: "11+ years of building enterprise products",
  status: "On an intentional career break — travelling, upskilling, and figuring out what's next.",
  location: "Hyderabad, Telangana, India",
  coordinates: { latitude: 17.385, longitude: 78.4867 },
  email: "spandanak.2010@gmail.com",
  linkedin: "https://www.linkedin.com/in/spandanakintali",
  github: "https://github.com/spandanakintali-curiouspm",
  whatsapp: "https://wa.me/917416191628",
  summary:
    "I love turning complex, ambiguous problems into products people actually enjoy using. As founding PM for ServiceNow's AI Control Tower, I helped shape enterprise AI governance from the ground up, filing a patent along the way for its core AI discovery capability. Earlier, I owned the 0-to-1 launch of Team Skills Intelligence within Manager Hub (~1,200 global customers) and the roadmap for a $70M ACV HR product serving 150+ enterprise customers. 11+ years into a career that started in engineering, I bring a Computer Science foundation and an ISB postgraduate in Strategy & Leadership to every product I build.",
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
      "Founding PM for AI Control Tower (AICT), ServiceNow's platform for enterprise AI governance — joined pre-launch and drove it from Early Access through General Availability, giving organizations visibility into their AI footprint and control over AI lifecycle and risk.",
    bullets: [
      "Partnered with 8 enterprise design partners across financial services, healthcare and other regulated industries to define AI governance personas and jobs-to-be-done, shaping AICT's first version.",
      "Orchestrated a single-release rollout of third-party model-provider controls across 6 teams and multiple products, enabling governance enforcement across regulated and non-regulated markets for ServiceNow's entire Pro Plus customer base.",
      "Drove execution of ServiceNow's Long-Term Stability (LTS) model strategy for financial services, coordinating 6 teams to translate strategy into AICT capabilities supporting a leadership-identified $300M upsell opportunity.",
      "Filed a patent application as named inventor for a CMDB-based AI asset inventory design underpinning AICT's core AI discovery capability.",
      "Advanced AICT's enterprise AI governance strategy by securing Snowflake and Hugging Face licensing approvals and translating platform ecosystem strategy into PRDs delivered through Service Graph Connectors.",
      "Owned the product experience for an AI agent that recommends missing asset details, evaluating source credibility and designing an inline, steward-approved recommendation flow to close gaps in the AI asset inventory.",
      "Served as Product Advisor for ServiceNow's Create UTG 2025 Hackathon, guiding teams to refine and pitch AI governance solutions.",
    ],
  },
  {
    company: "ServiceNow",
    title: "Senior Product Manager, HR Service Delivery Business Unit",
    dates: "November 2021 – July 2024 · 2 yrs 9 mos",
    location: "Hyderabad, Telangana, India",
    summary:
      "Owned two major HRSD workstreams: Manager Hub's team-skills intelligence and Employee Document Management, spanning 0-to-1 delivery and a $70M ACV product serving 150+ enterprise customers.",
    subBullets: [
      {
        heading:
          "Manager Hub – Team Skills Intelligence: Owned the 0-to-1 strategy and delivery giving managers visibility into team skill gaps and workforce development needs, shipping to General Availability in early 2024 and reaching ~1,200 global customers",
        points: [
          "Led a cross-functional team of 8 engineers, 1 UX designer and 1 visual designer from discovery through General Availability, driving product direction, execution and launch.",
          "Conducted customer research and competitive benchmarking against Fuel50, Eightfold AI and Hitch, translating fragmented, spreadsheet-based skill-tracking pain points into product vision and a differentiated roadmap.",
          "Partnered with Account Executives and Customer Success to position Team Skills Intelligence in renewal conversations, supporting renewal outcomes across multiple strategic HRSD accounts.",
          "Partnered with platform and product engineering to scope API dependencies and integrate skill data with Learning and Growth Plan applications, unifying the view of team-member development for managers.",
        ],
      },
      {
        heading:
          "Employee Document Management: Owned the strategic vision and product success of a $70M ACV product serving 150+ enterprise customers across the Hire-to-Retire HR lifecycle",
        points: [
          "Spearheaded product vision and roadmap across 4 major releases, achieving product-market fit and contributing to 40% growth in sales pipeline.",
          "Partnered with Sales, senior leadership and enterprise customers through tailored collateral, product demonstrations and executive presentations.",
          "Supported the closure of 10+ deals worth $30M+, contributing to expansion and upgrade opportunities across existing customers.",
        ],
      },
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
          "Launched Event Action Center, a code-free solution accelerator that executes automated actions from events triggered by leading systems",
        points: [
          "Facilitated acquisition of 10+ new customers with an intuitive, easy-to-configure automation engine.",
          "Improved admin productivity by 40%, cutting business-process configuration time from ~2 days to ~30 minutes.",
          "Negotiated business partnerships with CRM and ERP vendors, delivering 3 out-of-the-box integrations.",
        ],
      },
      {
        heading:
          "Owned the product roadmap for the enterprise collaboration module in Content Suite across 2 major releases",
        points: [
          "Increased module adoption by 60% by ideating and shipping a smart reminders widget, used by 80% of customers, paired with smart email notifications.",
          "Cut legacy-UI maintenance costs by migrating premium customers from Classic to Smart UI.",
        ],
      },
      {
        heading:
          "Conceptualised a one-stop solution to digitize and automate onboarding of prospective employees across organizations",
        points: [
          "Implemented the solution and won a $6.7M deal by liaising with Sales, Consulting and Engineering.",
        ],
      },
      {
        heading:
          "Managed stakeholder relationships across 20+ customers worldwide to resolve business requirements and cloud performance issues",
        points: [
          "Partnered with architects and the cloud team to fast-track health-monitoring dashboards that check server status.",
          "Cut severe-outage resolution time from ~2 hours to ~20 minutes, strengthening customer confidence and retention.",
          "Led a product team of 8 (with UX and VISD) across releases using Agile methodologies, and ran product breakout sessions for partners, customer support and sales.",
        ],
      },
    ],
  },
  {
    company: "Oracle",
    title: "Applications Developer II",
    dates: "January 2016 – February 2018 · 2 yrs 1 mo",
    location: "Hyderabad Area, India",
    bullets: [
      "Architected a smart cloud-based tool that identifies servers and restores and masks customer databases, institutionalised across 7 teams at Oracle.",
      "Automated 90% of the database-management workflow, saving $60K per year (1,000 man-days).",
      "Ideated a user-activity auditing feature to track workflow changes and ensure zero data breach during product migrations.",
      "Improved credibility of Unifier's data-management systems, preventing an estimated $10M in potential data-sanctity losses.",
    ],
  },
  {
    company: "Oracle",
    title: "Applications Developer",
    dates: "June 2014 – December 2015 · 1 yr 6 mos",
    location: "Hyderabad Area, India",
    bullets: [
      "Collaborated with cross-functional teams to develop the business logic of the cost management module in Primavera Unifier.",
      "Revamped the UI using OJET and successfully migrated 75% (150/200) of customers to the latest version of the product.",
      "Selected as one of 25 \"Future Leaders\" out of 700 employees across Oracle's Global Business Units as part of a mentorship program.",
    ],
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
    degree: "B.Tech, Computer Science & Engineering",
    dates: "2010 – 2014",
  },
];

export const skills = [
  "Product Management",
  "AI Governance",
  "Enterprise AI",
  "Platform Strategy",
  "0-to-1 Product Development",
  "Customer Experience",
  "Product Strategy",
  "Product Discovery",
  "Product Roadmap",
  "User Experience",
];

export const languages = [
  { name: "English", level: "Professional Working" },
  { name: "Hindi", level: "Professional Working" },
  { name: "Telugu", level: "Native or Bilingual" },
];

export const stats = [
  { value: "11+", label: "Years of Experience" },
  { value: "$70M+", label: "ACV Delivered" },
  { value: "150+", label: "Enterprise Customers" },
  { value: "4", label: "Companies" },
];

export const honors = [
  { title: "Named Inventor, Patent Application", issuer: "ServiceNow · CMDB-based AI asset inventory design" },
  { title: "National Runner-Up", issuer: "ISB Advaita Technovision 2018 · Agri-tech innovation challenge" },
  { title: "Spot Award", issuer: "OpenText · Strategic vision contribution" },
  { title: "Future Leaders Program", issuer: "Oracle · Top 25 of 700 employees" },
  { title: "2nd Rank, B.Tech CSE", issuer: "Amrita Vishwa Vidyapeetham · Top 0.53% of batch" },
  { title: "ISB Brand Ambassador", issuer: "Indian School of Business · Top 8% of cohort" },
  { title: "CSR Volunteer", issuer: "Oracle · Blood donation camps & NGO charity events" },
];
