export const site = {
  name: "Rajab Rehan",
  email: "rajabrehan0@gmail.com",
  phone: "(647) 237-5456",
  location: "Toronto, ON",
  tagline:
    "Computer Science @ Toronto Metropolitan University · AI & full-stack · Seeking SWE & ML internships",
  summary:
    "Second-year B.Sc. Computer Science student with experience fine-tuning LLMs at Cohere, six hackathon wins, and community leadership across 6,000+ members. I build production-minded AI and web products—from misinformation detection to healthcare advocacy tools.",
  links: {
    linkedin: "https://www.linkedin.com/in/rajab-rehan/",
    github: "https://github.com/rajabrehan",
    devpost: "https://devpost.com/rajabrehan",
    resume: "/Rajab_Rehan_Resume.docx",
  },
  education: {
    school: "Toronto Metropolitan University",
    degree: "Bachelor of Science (B.Sc.), Computer Science",
    graduation: "Expected April 2027",
    courses:
      "Data Structures & Algorithms, Linear Algebra, Intro to SWE, Discrete Math, Statistics, Software Tools for Startups",
  },
  skills: {
    languages: "Python, SQL, Java, C, JavaScript, HTML, CSS, Bash",
    frameworks:
      "TensorFlow, React, Next.js, MongoDB, Flask, PyTorch, Supabase, OpenCV, Matplotlib, Pandas, Beautiful Soup",
    tools:
      "AWS, GCP, Firebase, Git, Tableau, Vercel, DigitalOcean, Postman, Notion, Kaggle, Excel, Figma, LaTeX, Bootstrap",
  },
} as const

export type Experience = {
  title: string
  company: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    title: "Senior Data Quality Specialist — Advanced Coding",
    company: "Cohere",
    period: "Jan 2024 — Jan 2025",
    bullets: [
      "Reranked ML datasets through debugging, generation, and QA across multiple programming languages.",
      "Improved Command R+ via prompt engineering and data analysis—benchmark gains over Claude 3 and GPT-4 Turbo at lower cost.",
      "Built internal Slack & Apps Script tooling and technical writing initiatives that improved team engagement.",
      "Contributed to RLHF workflows: labeling, red teaming, and auditing outputs for enterprise-grade AI alignment.",
    ],
  },
  {
    title: "Data Quality Specialist",
    company: "Cohere",
    period: "Aug 2023 — Jan 2024",
    bullets: [
      "Evaluated structured datasets and prompt completions to optimize LLMs across diverse domains.",
      "Produced training data for Command R and Command R+ (104B-parameter models).",
      "Partnered with the RAG team on web content categorization, scraping, and large-scale corpora such as Common Crawl.",
    ],
  },
]

export type Project = {
  title: string
  event: string
  date: string
  award?: string
  description: string
  tech: string
  href: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "TruthLens",
    event: "TreeHacks · Stanford",
    date: "Feb 2026",
    description:
      "Real-time news bias and narrative divergence platform with explainable 0–100 scores, Elasticsearch kNN clustering, and automated publisher scraping.",
    tech: "Next.js, TypeScript, Elasticsearch, Jina Embeddings, Bright Data, Tailwind, GCP",
    href: "https://devpost.com/software/truthlens-krn3q5",
    featured: true,
  },
  {
    title: "Caren AI",
    event: "TreeHacks · Stanford",
    date: "Feb 2025",
    award: "2nd Place — FlutterFlow",
    description:
      "Multimodal agentic assistant for disputing insurance denials via voice, with document-trained claim reasoning and mobile scheduling.",
    tech: "Gemini 2.0 Flash, FlutterFlow, ElevenLabs, Twilio, Firebase",
    href: "https://devpost.com/software/caren-ai",
    featured: true,
  },
  {
    title: "DementiaBuddy",
    event: "UofTHacks · Toronto",
    date: "Jan 2024",
    award: "Best Use of Auth0 — MLH",
    description:
      "Healthcare platform using computer vision and personalized video to help people with dementia recall memories.",
    tech: "OpenCV, TensorFlow, Next.js, React, Supabase, Auth0",
    href: "https://devpost.com/software/dementiabuddy",
    featured: true,
  },
  {
    title: "LocalEyes",
    event: "MapHacks 2",
    date: "Feb 2024",
    award: "1st Overall · Best Sustainable Travel",
    description:
      "Sustainable travel app surfacing local businesses with Mapbox navigation, Cohere-generated quizzes, and reward incentives.",
    tech: "Tailwind, MongoDB, Mapbox, Cohere, JavaScript",
    href: "https://devpost.com/software/tbd-p9xqhv",
  },
  {
    title: "Ripply",
    event: "MetHacks · Toronto",
    date: "Mar 2024",
    description:
      "Chatbot UI for XRP wallet management—transactions, balances, and NFT workflows through natural language.",
    tech: "Cohere, Voiceflow, XRPL, HTML, CSS",
    href: "https://devpost.com/software/tba-asjk6y",
  },
  {
    title: "MintBuddy",
    event: "MetHacks · Toronto",
    date: "Apr 2023",
    description:
      "Generative-AI chatbot that guides users through minting NFTs with Verbwire and Voiceflow—no Web3 expertise required.",
    tech: "Voiceflow, Verbwire, OpenAI, Blockchain",
    href: "https://devpost.com/software/tba-j1cbni",
  },
  {
    title: "VidTooBig",
    event: "Hackathon project",
    date: "2024",
    description:
      "Free, encrypted video sharing without restrictive file-size limits—built for simple, secure uploads.",
    tech: "Web, encryption, cloud storage",
    href: "https://devpost.com/rajabrehan",
  },
  {
    title: "ToBeeContinued",
    event: "uOttaHacks",
    date: "2023",
    description:
      "AI storyteller that turns user prompts into scripts and visuals, streamlining creative production.",
    tech: "GPT-3, DALL·E, Flask, Python, JavaScript",
    href: "https://github.com/rajabrehan/ToBeeContinued",
  },
  {
    title: "TXT811",
    event: "Hackathon project",
    date: "2023",
    description:
      "SMS-style medical inquiry assistant powered by Cohere NLP—more accessible than phone-based 811 lines.",
    tech: "Cohere, NLP, Python",
    href: "https://devpost.com/rajabrehan",
  },
  {
    title: "GarbageFlow",
    event: "Hackathon project",
    date: "2024",
    description: "Waste-sorting guidance tool to route materials to the correct disposal streams.",
    tech: "Web, ML",
    href: "https://devpost.com/rajabrehan",
  },
]

export type Leadership = {
  role: string
  org: string
  period: string
  bullets: string[]
}

export const leadership: Leadership[] = [
  {
    role: "Founder & Organizer",
    org: "SolutionHacks",
    period: "Aug 2024 — Present",
    bullets: [
      "Launched a 250-person SDG-themed hackathon in under one month with a $10,000 budget from sponsors.",
      "Led a 40-person organizing team across logistics, marketing, and partnerships.",
      "Built repeatable playbooks to grow SolutionHacks into an annual event.",
    ],
  },
  {
    role: "Founder & President",
    org: "Google Developer Groups on Campus · TMU",
    period: "Aug 2023 — Present",
    bullets: [
      "Grew the community from 0 to 6,000+ members across platforms within one year.",
      "Led 40+ organizers across seven sub-teams; hosted 17+ events with 2,000+ in-person attendees.",
      "Ran workshops on TensorFlow, Git, and career development with corporate partners.",
    ],
  },
  {
    role: "Year Representative",
    org: "Computer Science Course Union · TMU",
    period: "Oct 2022 — Present",
    bullets: [
      "Represented 500+ CS majors and increased engagement in faculty initiatives by ~400%.",
      "Organized career-focused events on internships, networking, and skill building.",
      "Re-elected for three consecutive terms.",
    ],
  },
]
