// All site content lives here. Wrap a phrase in **double asterisks** to
// render it as a highlighted metric.

export const profile = {
  name: "Winston Zhou",
  email: "zhouwinston1@gmail.com",
  linkedin: "https://www.linkedin.com/in/winston-zhou1",
  github: "https://github.com/zhouwinston1",
  school: "University of Waterloo",
  program: "Computer Science (Honours Co-op)",
  grad: "April 2028",
}

export const metrics = [
  { value: "3.5h → 5m", label: "end-to-end ingest time, after automating it" },
  { value: "400+", label: "users under Terraform-managed access" },
  { value: "30+", label: "Unity Catalog catalogs on one ABAC pattern" },
  { value: "1K+/day", label: "media uploads through S3 pipelines" },
]

export type Role = {
  title: string
  company: string
  location: string
  start: string
  end: string
  rating?: string
  stack: string[]
  points: string[]
}

export const experience: Role[] = [
  {
    title: "Data Software Engineer",
    company: "Scotiabank",
    location: "Toronto, ON",
    start: "May 2026",
    end: "Aug 2026",
    rating: "Excellent",
    stack: ["Terraform", "Databricks", "Unity Catalog", "SQL"],
    points: [
      "Spearheaded the first Terraform-based **Unity Catalog ABAC** implementation for the Databricks migration program, deploying a reusable policy and masking-function pattern across **30+ catalogs**.",
      "Developed and deployed a reusable **Databricks SQL masking UDF** using Notebooks and Jobs, automating sensitive-data masking and reducing manual handling by an estimated **40%**.",
      "Designed Terraform-managed catalog, schema, and function permissions for **400+ users**, enforcing least-privilege production access while retaining unmasked access for authorized support groups.",
    ],
  },
  {
    title: "Backend Software Engineer",
    company: "Scotiabank",
    location: "Toronto, ON",
    start: "Jan 2026",
    end: "Apr 2026",
    rating: "Excellent",
    stack: ["GCP Cloud Functions", "Java Spring", "BigQuery", "Scala", "Linux"],
    points: [
      "Engineered a serverless ingestion pipeline for **250+ CSV files** using GCP Cloud Functions and a Java Spring REST API, loading **millions of rows** into BigQuery staging tables.",
      "Maintained a Scala data-lineage pipeline running **100+ daily transformations**, and migrated it from Kubernetes/Airflow to on-prem Linux using cron with PAM-based secret management.",
      "Automated CSV validation, ingestion triggering, and BigQuery load verification, eliminating **4 manual steps** and cutting end-to-end processing from **~3.5 hours to 5 minutes**.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Levanta Labs",
    location: "Toronto, ON",
    start: "May 2025",
    end: "Aug 2025",
    rating: "Excellent",
    stack: ["Docker", "AWS Lambda", "ECR", "S3", "Redis"],
    points: [
      "Built and deployed **10+ backend services** by containerizing them with Docker, publishing images to AWS ECR, and running them on AWS Lambda with scripted rollout automation.",
      "Engineered a **Redis-backed session store** with persistent token caching, cutting repeated authentication calls by **40%+** and improving latency across external API requests.",
      "Implemented a **webhook-driven ETL pipeline** for real-time event processing, turning incoming payloads into structured records and aggregated analytics.",
      "Built media ingestion pipelines on AWS S3 supporting **1K+ uploads/day** with reliable storage, metadata persistence, and downstream integration.",
    ],
  },
]

export type Project = {
  name: string
  date: string
  tagline: string
  stack: string[]
  points: string[]
  visual: "dashboard" | { src: string; alt: string }
}

export const projects: Project[] = [
  {
    name: "Vantage",
    date: "Aug 2026",
    tagline: "Ask a dataset a question; get back a working dashboard.",
    stack: ["LangGraph", "Azure OpenAI", "React", "PostgreSQL", "Plotly"],
    visual: "dashboard",
    points: [
      "Noticed how slowly teams at Scotiabank explored internal datasets and built dashboards, then proposed and built a fix **outside the scope of my assigned internship work**.",
      "An agentic **LangGraph** workflow profiles datasets, interprets natural language, plans visualizations, and generates or edits interactive dashboards through **Azure OpenAI** function calling.",
      "Took dashboard creation from **hours to under 5 minutes**, and was presented to managers and ultimately **Scotiabank's Group Head and CIO**.",
    ],
  },
  {
    name: "Control Room",
    date: "Apr 2026",
    tagline: "Instant lineage and ownership lookup across an enterprise's data.",
    stack: ["React Flow", "FastAPI", "Pydantic", "Azure Cosmos DB"],
    visual: {
      src: "/control-room.png",
      alt: "Control Room Catalog features: data risk tags, bulk upload, domain explorer, lineage builder, data source tracking, schema versioning, and domain tree view",
    },
    points: [
      "Full-stack metadata platform that replaces manual data discovery with instant lineage and relationship lookup across schemas, sources, and ownership.",
      "Shipped **20+ features** including an interactive lineage graph; optimized multi-hop query execution, cutting latency on **10+ APIs by 60%**.",
      "Built in an Agile team and presented to **VP-level stakeholders**, supporting internal funding decisions and enterprise adoption.",
    ],
  },
]

export const archive = [
  {
    name: "TripIncento",
    blurb:
      "Rewards program for Brampton Transit that nudges riders toward sustainable trips and surfaces busy routes for city planners.",
    image: "/tripincento.png",
    href: "https://github.com/zhouwinston1/TripIncento-backend",
  },
  {
    name: "Neighbourhood Gems",
    blurb:
      "Local events marketplace for booking, reviewing, and discovering what's happening nearby.",
    image: "/temp.png",
    href: "https://github.com/zhouwinston1/Neighbourhood-Gems",
  },
  {
    name: "RoboCup Worlds",
    blurb:
      "Won the national title in the line-following league, then competed internationally at RoboCup Worlds with computer vision and firmware.",
    image: "/robocup.png",
    href: "https://github.com/zhouwinston1/RoboCup-Arduino-Line-Following-Bot",
  },
]

export const skills = [
  {
    group: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Scala", "C", "C++", "Dart", "Racket"],
  },
  {
    group: "Data & Infra",
    items: ["Databricks", "Spark", "Airflow", "BigQuery", "Terraform", "Docker", "Kubernetes", "Redis", "GCP", "AWS"],
  },
  {
    group: "Apps & AI",
    items: ["React", "Node", "Express", "Spring Boot", "FastAPI", "LangGraph", "Redux", "NLP"],
  },
  {
    group: "Practice",
    items: ["Git", "Linux", "Bash", "CI/CD", "Figma", "Agile"],
  },
]

export const sections = [
  { id: "work", label: "Work", index: "01" },
  { id: "builds", label: "Builds", index: "02" },
  { id: "stack", label: "Stack", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
]
