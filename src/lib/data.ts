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
    "I love turning complex, ambiguous problems into products people actually enjoy using. As founding PM for ServiceNow's AI Control Tower, I helped shape enterprise AI governance from the ground up, filing a patent application along the way for its core AI discovery capability. Earlier, I owned the 0-to-1 launch of Team Skills Intelligence within Manager Hub (~1,200 global customers) and the roadmap for a $70M ACV HR product serving 150+ enterprise customers. 11+ years into a career that started in engineering, I bring a Computer Science foundation and an ISB postgraduate in Strategy & Leadership to every product I build.",
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

export interface CaseStudy {
  title: string;
  problem: string;
  whoItsFor?: string;
  challenge?: {
    heading: string;
    description: string;
  };
  role: string;
  insight?: {
    heading: string;
    examples: { label: string; description: string }[];
  };
  decisions: { label: string; description: string }[];
  outcome: string;
  nextSteps?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Turning incomplete AI records into trustworthy ones, one field at a time",
    problem:
      "AI Control Tower keeps an inventory of an enterprise's AI agents, use cases, and models, each with metadata across many fields, such as description, provider, and model card. Rule-based detection flagged records with missing fields, but a flag doesn't tell a steward what belongs in the field. Governance is only as good as the inventory behind it, so every gap in a record was a gap in oversight.",
    role:
      "I owned the product experience: which fields to enrich, how each one gets filled, how recommendations appear, and how they're approved. Engineering built the agent on ServiceNow's existing agent framework.",
    insight: {
      heading:
        "With this many fields, one approach couldn't fit all of them. I sorted fields by where a trustworthy answer can come from. Three examples show the range:",
      examples: [
        {
          label: "Description",
          description: "generated internally from the name of the agent or use case. No outside lookup is needed.",
        },
        {
          label: "Provider",
          description: "retrieved from public AI directories and aggregators such as OpenRouter and There's An AI For That.",
        },
        {
          label: "Model card",
          description: "retrieved from the provider's own website, the primary source.",
        },
      ],
    },
    decisions: [
      {
        label: "Match the method to the field.",
        description:
          "Generating a description, identifying a provider, and locating a model card are different problems with different failure modes, so each got its own approach.",
      },
      {
        label: "Choose sources on accuracy, breadth, and depth of information.",
        description:
          "Where no authoritative internal source exists, the agent relies on well-known public directories like OpenRouter and There's An AI For That. For model cards, it goes straight to the provider.",
      },
      {
        label: "Recommend, don't auto-apply.",
        description:
          "Suggestions appear inline on the asset record, and a steward approves them before anything is written. This keeps a person accountable for what enters the inventory, and it's the safeguard for sources that are good but imperfect.",
      },
    ],
    outcome: "Shipped to General Availability.",
    nextSteps:
      "Had I continued on the product, my next step would be handling conflicting results across sources. Rather than having the agent pick a winner, I'd show the conflicts side by side with their sources and let the steward decide the best course.",
  },
  {
    title: "Giving enterprises control over which AI models run their AI systems",
    problem:
      "ServiceNow's out-of-the-box skills, agents, and agentic workflows were opening up to four model providers (ServiceNow, Claude, Google, and Microsoft Azure), so customers could choose a model per AI system. Choice creates compliance risk. Rules on where data can be processed and which providers are permitted differ by country and keep changing. Without controls, a developer could deploy an AI system on a provider the organization's compliance team never approved.",
    whoItsFor:
      "AI stewards and AI centers of excellence set the policy. Developers and admins who build and deploy AI systems have to stay within it.",
    challenge: {
      heading: "One policy, six teams.",
      description:
        "A control only works if it holds everywhere an AI system can be activated. Six teams each owned part of that path: the control surface, the service that manages available providers, the infrastructure that routes model calls, and the three build and admin surfaces where AI systems get activated. A steward shouldn't have to set the same policy in several places, because gaps between them would be compliance gaps.",
    },
    role:
      "I coordinated the six teams around a single set of cross-product requirements, so the policy a steward set would mean the same thing on every surface. I also worked with design on the UX patterns. Engineering teams owned the architecture and the build.",
    decisions: [
      {
        label: "Set policy once, enforce it everywhere.",
        description:
          "Stewards configure allowed providers in AI Control Tower. That setting flows to every surface that activates AI systems, and each one enforces it.",
      },
      {
        label: "Build market rules into the controls.",
        description:
          "Provider availability depends on country and routing. Where in-country processing applies, routing is fixed and fewer providers are available. Elsewhere, regional routing opens up all four. Stewards only choose from what's actually available in their market.",
      },
      {
        label: "Show the impact before a policy takes effect.",
        description:
          "When a steward changes allowed providers or routing, an impact summary shows how many AI systems stay supported, how many would fall back to a provider that's no longer allowed (and become non-compliant), and how many couldn't activate. A matrix then lists each AI system with its provider status. This translates a policy, which is a rule, into a concrete outcome on real systems before anything changes, so stewards, developers, and admins can understand the impact intuitively and decide the next step.",
      },
    ],
    outcome:
      "Built across April–June 2025 and made available to all Pro Plus customers in July 2025. It covers skills, agents, and agentic workflows, for both regulated and non-regulated markets, and kept improving in later releases.",
  },
  {
    title: "Helping managers see and grow their team's skills",
    problem:
      "Managers are expected to develop their teams, but most have no reliable view of what skills their team actually has. In my customer interviews, one manager of eight described keeping it all in a spreadsheet, and others asked for a dashboard that showed skills, proficiency levels, and gaps in one place.",
    whoItsFor:
      "Managers, who need to understand their team's strengths and gaps and support their people's development. Employees and HR benefit indirectly, because the skills data feeds their learning and growth plans.",
    challenge: {
      heading: "Trustworthy skills data across several teams.",
      description:
        "A skills dashboard is only as good as the data behind it. Skills were partly self-reported, so scores built on them would mislead. The feature also depended on several teams: skill profiles and job architecture on the platform side, and learning and growth plans on the development side. If those pieces didn't connect, managers would see numbers with no way to act on them.",
    },
    role:
      "I led a team of 8 engineers, 1 UX designer, and 1 visual designer from discovery through General Availability. I ran manager interviews with our research team, benchmarked competitors, wrote the use cases, and defined the dependencies with the platform and Employee Growth & Development teams.",
    decisions: [
      {
        label: "Start at the team, then drill down.",
        description:
          "I benchmarked Fuel50, Eightfold AI, and Hitch. The strongest tools paired team-level insight with a way to drill into individuals, so I designed three levels: a team overview of strengths, growth areas, and skill distribution; a matrix of skills across team members; and a detailed view per employee.",
      },
      {
        label: "Score only what the manager has validated.",
        description:
          "The skill match score counts only manager-validated skills, and the number of unvalidated skills appears alongside it as a prompt to validate. Because validating one skill at a time doesn't scale, managers can validate all of a person's skills, or all team members for one skill, in a single action.",
      },
      {
        label: "Connect skills to development.",
        description:
          "For each skill, managers see ongoing and past learning and growth-plan activity, can assign learning directly, and can jump to the related growth plan. This took a dependency on the learning team to map content to skills.",
      },
      {
        label: "Be explicit about what value depends on.",
        description:
          "The widgets only populate if skills are implemented, employees add proficiencies, and managers validate. I wrote this into the customer adoption guidance so customers knew what to set up first.",
      },
    ],
    outcome:
      "Shipped to General Availability in early 2024 as part of Manager Hub, which is deployed across ~1,200 global customers.",
  },
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
