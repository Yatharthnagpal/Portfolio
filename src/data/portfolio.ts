// =============================================================================
// Portfolio Data — All content verified from existing site
// =============================================================================

export interface ChartBar {
  label: string;
  percentage: number;
  value: string;
}

export interface ChartNode {
  id: string;
  label: string;
  sub: string;
  type: "input" | "model" | "fusion" | "output";
}

export interface ArchitectureChart {
  nodes: ChartNode[];
  bars: ChartBar[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
  featured: boolean;
  gradient: string;
  architectureChart?: ArchitectureChart;
  pipelineMetrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  type: "work" | "education";
  role: string;
  organization: string;
  period: string;
  highlights: string[];
  technologies?: string[];
}

export interface SkillCategory {
  name: string;
  color: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface Achievement {
  title: string;
  context: string;
}

// ---------------------------------------------------------------------------
// Personal Info
// ---------------------------------------------------------------------------
export const personalInfo = {
  name: "Yatharth Nagpal",
  title: "AI & ML Systems Engineer",
  location: "New Delhi, India",
  email: "nagpalyatharth99@gmail.com",
  phone: "+91 7023045887",
  whatsapp: "https://wa.me/917023045887",
  github: "https://github.com/Yatharthnagpal",
  linkedin: "https://www.linkedin.com/in/yatharthnagpal",
  kaggle: "https://www.kaggle.com/yatharth22bce11044",
  leetcode: "https://leetcode.com/u/yatharthnagpal",
  codolio: "https://codolio.com/profile/yatharthnagpal",
  tagline:
    "I architect end-to-end AI & ML systems — fine-tuning LLMs, building RAG pipelines, deploying computer vision models, and engineering robust web backends.",
  availabilityBadge: "Available for AI / ML & Applied AI roles",
};

// ---------------------------------------------------------------------------
// Hero Stats
// ---------------------------------------------------------------------------
export const heroStats = [
  { value: "8+", label: "End-to-End AI & ML Models Shipped" },
  { value: "186th", label: "Global ML Rank (Zelestra × AWS)" },
  { value: "89%", label: "Peak Diagnostic Accuracy" },
  { value: "500K+", label: "ML Records Processed" },
];

// ---------------------------------------------------------------------------
// Typing Roles
// ---------------------------------------------------------------------------
export const typingRoles = [
  "AI & ML Engineer",
  "ML Systems Specialist",
  "RAG & LLM Developer",
  "Applied AI Technologist",
];

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const aboutParagraphs = [
  "Computer Science undergraduate specializing in Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision. Experienced in building multi-modal clinical decision support platforms, RAG-powered legal AI assistants, and high-throughput predictive data pipelines using Python, PyTorch, TensorFlow, FastAPI, and AWS.",
  "I focus on the complete AI engineering cycle — from data curation and fine-tuning transformer models (Legal-BERT, CNNs, LSTMs) to deploying explainable vector-search inference and building responsive full-stack web interfaces (React, Next.js, Node.js).",
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: "medai-pro",
    number: "01",
    title: "MedAI Pro",
    subtitle: "AI-Powered Clinical Decision Support System",
    category: "Healthcare AI & Deep Learning",
    period: "Jul 2025 – Nov 2025",
    description:
      "A multi-modal medical diagnostics platform integrating 5 independent diagnostic modules across brain MRI, chest X-ray, retinal scan, skin lesion, and ICU sepsis datasets.",
    highlights: [
      "Integrated VGG16, ResNet50, MobileNetV3, LSTM, XGBoost, and Random Forest for multi-modal clinical analysis.",
      "Achieved ~89% accuracy on brain tumor detection and ~82.7% on eye disease classification with ensemble learning.",
      "Engineered FastAPI inference with Grad-CAM heatmaps, CLAHE enhancement, JWT auth, and Docker-ready deployment.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "FastAPI",
      "OpenCV",
      "XGBoost",
      "React.js",
      "Docker",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Yatharthnagpal/MedAIPro-AI-Diagnostics" },
    ],
    architectureChart: {
      nodes: [
        { id: "n1", label: "Multi-Modal Input", sub: "DICOM / MRI / X-Ray", type: "input" },
        { id: "n2", label: "CNN Feature Extractor", sub: "ResNet50 + VGG16", type: "model" },
        { id: "n3", label: "Ensemble Classifier", sub: "XGBoost + Random Forest", type: "fusion" },
        { id: "n4", label: "Grad-CAM Heatmap API", sub: "FastAPI + Docker", type: "output" },
      ],
      bars: [
        { label: "CLAHE Preprocess", percentage: 15, value: "6ms" },
        { label: "CNN Feature Extraction", percentage: 55, value: "23ms" },
        { label: "Ensemble Voting", percentage: 20, value: "8ms" },
        { label: "Grad-CAM Overlay", percentage: 10, value: "5ms" },
      ],
    },
    pipelineMetrics: [
      { label: "Latency", value: "42ms" },
      { label: "Precision", value: "93.2%" },
    ],
    featured: true,
    gradient: "from-emerald-600/20 to-teal-900/30",
  },
  {
    id: "legal-ai",
    number: "02",
    title: "LegalAI",
    subtitle: "AI Legal Assistant for Contract Analysis & Drafting",
    category: "Legal Intelligence & NLP",
    period: "Jan 2026 – May 2026",
    description:
      "An AI-powered legal intelligence system with 29 contract analysis and drafting features for risk detection, compliance validation, and AI-assisted contract generation aligned with Indian legal frameworks.",
    highlights: [
      "Fine-tuned Legal-BERT and transformer models for 10+ tasks including 18-type clause classification and obligation extraction.",
      "Built document intelligence workflows supporting PDF, DOCX, text, and OCR-based inputs.",
      "Delivered automated summarization, editable draft generation, and legal insight extraction via FastAPI services.",
    ],
    technologies: [
      "Python",
      "Legal-BERT",
      "NLP",
      "FastAPI",
      "React.js",
      "OCR",
      "Tesseract",
      "pdfplumber",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Yatharthnagpal/LegalAI" },
    ],
    architectureChart: {
      nodes: [
        { id: "n1", label: "Multi-Format Ingestion", sub: "pdfplumber + OCR", type: "input" },
        { id: "n2", label: "Clause Segmenter", sub: "spaCy Legal Parser", type: "model" },
        { id: "n3", label: "Risk Classifier", sub: "Fine-Tuned Legal-BERT", type: "model" },
        { id: "n4", label: "RAG & Contract Draft API", sub: "FastAPI + Vector DB", type: "output" },
      ],
      bars: [
        { label: "Document Parsing", percentage: 25, value: "280ms" },
        { label: "Clause Classification", percentage: 45, value: "510ms" },
        { label: "Vector RAG Search", percentage: 20, value: "220ms" },
        { label: "Draft Generation", percentage: 10, value: "110ms" },
      ],
    },
    pipelineMetrics: [
      { label: "Features", value: "29 Active" },
      { label: "Parsing", value: "< 1.2s" },
    ],
    featured: true,
    gradient: "from-green-600/20 to-emerald-900/30",
  },
  {
    id: "gnn-fraud-detection",
    number: "03",
    title: "GNN Subsidy Fraud Detector",
    subtitle: "Graph Neural Network for Agriculture Subsidy Anomaly Detection",
    category: "Graph Neural Networks & ML",
    period: "Nov 2025 – Mar 2026",
    description:
      "A specialized Graph Neural Network (GCN / GraphSAGE) framework designed to detect complex collusive fraud patterns and illegal claims across agricultural subsidy distribution networks.",
    highlights: [
      "Constructed multi-relational entity graphs linking farmers, land records, claim histories, and payment disbursement nodes.",
      "Trained Graph Convolutional Networks (GCN) and GraphSAGE models to identify hidden syndicate rings and suspicious claim clusters.",
      "Outperformed tabular baseline classifiers by 24% in identifying non-linear collusive network anomalies.",
    ],
    technologies: [
      "Python",
      "PyTorch Geometric",
      "GNN / GCN",
      "NetworkX",
      "Scikit-learn",
      "Pandas",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Yatharthnagpal/Fraud-Detection-on-Agriculture-Subsidy-using-GNN" },
    ],
    architectureChart: {
      nodes: [
        { id: "n1", label: "Entity Graph Ingest", sub: "Farmer & Land Nodes", type: "input" },
        { id: "n2", label: "Spatial Embeddings", sub: "PyTorch Geometric", type: "model" },
        { id: "n3", label: "GNN Message Passing", sub: "GraphSAGE Aggregator", type: "fusion" },
        { id: "n4", label: "Syndicate Fraud Index", sub: "Anomaly Classifier", type: "output" },
      ],
      bars: [
        { label: "Graph Construction", percentage: 20, value: "45ms" },
        { label: "Edge Embeddings", percentage: 30, value: "68ms" },
        { label: "GNN Aggregation", percentage: 40, value: "90ms" },
        { label: "Anomaly Scoring", percentage: 10, value: "22ms" },
      ],
    },
    pipelineMetrics: [
      { label: "GNN Model", value: "GraphSAGE" },
      { label: "Gain", value: "+24% Prec." },
    ],
    featured: true,
    gradient: "from-teal-600/20 to-emerald-900/30",
  },
  {
    id: "ecomguard",
    number: "04",
    title: "EcomGuard Fraud Analytics",
    subtitle: "E-Commerce Intelligence & Fraud Detection Engine",
    category: "Financial AI & Risk Scoring",
    period: "Feb 2026 – May 2026",
    description:
      "An automated machine learning insights platform that analyzes daily e-commerce profits, product popularity trends, and identifies high-risk fraudulent transactions.",
    highlights: [
      "Trained XGBoost and Random Forest models on order transaction logs to assign real-time fraud probability scores.",
      "Engineered automated anomaly detection for sudden purchasing spikes, mismatched location flags, and suspicious velocity rules.",
      "Built interactive reporting pipelines visualizing revenue metrics and flagging suspect orders for manual review.",
    ],
    technologies: [
      "Python",
      "XGBoost",
      "Scikit-learn",
      "Pandas",
      "Plotly",
      "Jupyter",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Yatharthnagpal/EcomGuard-E-commerce-Insights-Fraud-Detection" },
    ],
    architectureChart: {
      nodes: [
        { id: "n1", label: "Order Ingestion Stream", sub: "REST Telemetry", type: "input" },
        { id: "n2", label: "Feature Matrix", sub: "Velocity & Geo Flags", type: "model" },
        { id: "n3", label: "Risk Classifier", sub: "XGBoost + Random Forest", type: "fusion" },
        { id: "n4", label: "Real-time Alert HUD", sub: "Plotly / React", type: "output" },
      ],
      bars: [
        { label: "Telemetry Ingest", percentage: 10, value: "2ms" },
        { label: "Feature Engineering", percentage: 35, value: "7ms" },
        { label: "XGBoost Scoring", percentage: 45, value: "9ms" },
        { label: "Alert Dispatch", percentage: 10, value: "2ms" },
      ],
    },
    pipelineMetrics: [
      { label: "Scoring", value: "Real-Time" },
      { label: "Engine", value: "XGBoost" },
    ],
    featured: true,
    gradient: "from-green-700/20 to-teal-950/30",
  },
  {
    id: "cyber-most-wanted",
    number: "05",
    title: "FBI Cyber Threat Intelligence Scraper",
    subtitle: "Automated Cyber Most Wanted Profiling & Data Pipeline",
    category: "Cyber Threat Intelligence & Scraping",
    period: "Sep 2025 – Dec 2025",
    description:
      "An automated threat intelligence scraper collecting detailed cybercriminal metadata from the FBI Cyber's Most Wanted directory for automated profile structuring and risk intelligence.",
    highlights: [
      "Built automated multi-threaded scrapers using Playwright and BeautifulSoup to navigate profile links and handle dynamic DOM rendering.",
      "Extracted structured physical traits, criminal charges, aliases, field offices, and vector profiles.",
      "Engineered automated data cleaning and export pipelines converting raw web data into normalized CSV/JSON intelligence feeds.",
    ],
    technologies: [
      "Python",
      "Playwright",
      "BeautifulSoup",
      "Pandas",
      "JSON / CSV Pipelines",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Yatharthnagpal/Cyber-Most-Wanted" },
    ],
    architectureChart: {
      nodes: [
        { id: "n1", label: "Playwright Crawler", sub: "Multi-Threaded Headless", type: "input" },
        { id: "n2", label: "DOM Extractor", sub: "BeautifulSoup4 HTML", type: "model" },
        { id: "n3", label: "Data Normalizer", sub: "Pandas / RegEx Cleaning", type: "fusion" },
        { id: "n4", label: "SIEM Intelligence Feed", sub: "Structured JSON / CSV", type: "output" },
      ],
      bars: [
        { label: "Headless Navigation", percentage: 40, value: "420ms" },
        { label: "DOM Extraction", percentage: 30, value: "310ms" },
        { label: "Data Cleaning", percentage: 20, value: "210ms" },
        { label: "JSON Export", percentage: 10, value: "100ms" },
      ],
    },
    pipelineMetrics: [
      { label: "Async", value: "Multi-Thread" },
      { label: "Export", value: "Clean JSON" },
    ],
    featured: false,
    gradient: "from-emerald-700/20 to-green-950/30",
  },
  {
    id: "ai-support-bot",
    number: "06",
    title: "AI Customer Support Bot",
    subtitle: "Intelligent Conversational Agent & Knowledge Retrieval",
    category: "Conversational AI & LLMs",
    period: "Aug 2025 – Oct 2025",
    description:
      "An automated AI support agent leveraging NLP intent recognition and RAG document embeddings to resolve complex user inquiries with contextual responses.",
    highlights: [
      "Designed RAG retrieval workflows over knowledge base documents for accurate response generation.",
      "Engineered fallback intent rules and API integrations for automated issue escalation and logging.",
    ],
    technologies: [
      "Python",
      "NLP",
      "FastAPI",
      "LangChain",
      "React.js",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Yatharthnagpal/AI-support-BOT" },
    ],
    architectureChart: {
      nodes: [
        { id: "n1", label: "User Support Stream", sub: "Query Ingestion", type: "input" },
        { id: "n2", label: "NLP Intent Router", sub: "Category Classifier", type: "model" },
        { id: "n3", label: "RAG Vector Search", sub: "LangChain Embeddings", type: "fusion" },
        { id: "n4", label: "FastAPI Agent Response", sub: "Contextual Synthesis", type: "output" },
      ],
      bars: [
        { label: "Intent Classification", percentage: 15, value: "18ms" },
        { label: "Cosine Vector Search", percentage: 50, value: "60ms" },
        { label: "Response Synthesis", percentage: 25, value: "30ms" },
        { label: "Fallback Check", percentage: 10, value: "12ms" },
      ],
    },
    pipelineMetrics: [
      { label: "Search", value: "Vector RAG" },
      { label: "Uptime", value: "99.9%" },
    ],
    featured: false,
    gradient: "from-teal-700/20 to-emerald-950/30",
  },
];

// ---------------------------------------------------------------------------
// Experience & Education
// ---------------------------------------------------------------------------
export const experiences: Experience[] = [
  {
    id: "galcare",
    type: "work",
    role: "Full Stack Developer (Freelance)",
    organization: "Galcare",
    period: "Jun 2026 – Aug 2026",
    highlights: [
      "Architected and developed a high-performance full-stack web platform for Galcare from scratch.",
      "Engineered dynamic UI components, responsive layouts, and interactive patient/client intake workflows.",
      "Built backend API services, database schemas, and optimized frontend asset delivery for peak performance.",
      "Managed full product lifecycle — from client requirements gathering to cloud deployment and SEO optimization.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "PostgreSQL",
    ],
  },
  {
    id: "loneknight",
    type: "work",
    role: "Data Science Intern",
    organization: "LoneKnight Productions",
    period: "Jan 2026 – Apr 2026",
    highlights: [
      "Designed and deployed 3+ end-to-end ML pipelines for predictive analytics using Python, Pandas, and Scikit-learn.",
      "Built 5+ interactive dashboards in Plotly and Dash, improving reporting efficiency and business visibility by ~20%.",
      "Automated ETL workflows with Apache Airflow and AWS, processing 500K+ records and cutting manual effort by ~40%.",
      "Ran EDA and feature engineering across large structured datasets, improving model performance by 18–25%.",
    ],
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Plotly",
      "Dash",
      "Apache Airflow",
      "AWS",
    ],
  },
  {
    id: "vit",
    type: "education",
    role: "B.Tech, Computer Science & Engineering",
    organization: "Vellore Institute of Technology",
    period: "Aug 2022 – May 2026",
    highlights: [
      "CGPA: 8.42 — coursework across machine learning, deep learning, artificial intelligence, computer vision, and cloud computing.",
      "Top 10 Finalist at Health4Hack Hackathon (IIIT Delhi) and Top 50 at the JustPay Hackathon.",
      "186th Global Rank in the Zelestra × AWS ML Ascend Challenge.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export const skillCategories: SkillCategory[] = [
  {
    name: "AI / ML & Applied Systems",
    color: "#4ade80",
    skills: [
      "PyTorch & Deep Neural Networks",
      "TensorFlow (MobileNet CNNs)",
      "LangChain & LlamaIndex (RAG Pipelines)",
      "ChromaDB & HuggingFace Models",
      "NLP & Computer Vision (OpenCV)",
      "Scikit-Learn & Pandas (Feature Engineering)",
      "Legal-BERT & Multi-Modal Diagnostic Models",
    ],
  },
  {
    name: "Backend, Async APIs & MLOps",
    color: "#34d399",
    skills: [
      "FastAPI & Python Async Pipelines",
      "Node.js & Express.js",
      "PostgreSQL & MySQL (SQL)",
      "MongoDB, Firebase, Supabase",
      "Cassandra & Redis",
      "WebSockets & RESTful APIs",
    ],
  },
  {
    name: "Cloud, DevOps & Data Engineering",
    color: "#22c55e",
    skills: [
      "AWS & Cloud Infrastructure",
      "Docker & Containerization",
      "PySpark & Databricks Lakehouse",
      "Apache Airflow (ETL Workflows)",
      "Playwright & BeautifulSoup Scraping",
      "Git & GitHub Version Control",
    ],
  },
  {
    name: "Frontend & Full Stack Systems",
    color: "#16a34a",
    skills: [
      "React.js & Next.js",
      "React Native (Cross-Platform / Offline-First)",
      "Tailwind CSS & TypeScript",
      "Responsive UI & Dynamic State Management",
    ],
  },
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
export const certifications: Certification[] = [
  { title: "AWS Academy Graduate — Cloud Foundations", issuer: "AWS" },
  { title: "NPTEL Certified — Cloud Computing", issuer: "NPTEL" },
  {
    title: "IBM Certified — Machine Learning & AI Engineering",
    issuer: "IBM",
  },
  {
    title: "IBM Certified — Computer Vision & Deep Learning",
    issuer: "IBM",
  },
];

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------
export const achievements: Achievement[] = [
  {
    title: "Top 10 Finalist — Health4Hack Hackathon",
    context: "IIIT Delhi",
  },
  {
    title: "186th Global Rank — Zelestra × AWS ML Ascend Challenge",
    context: "Global",
  },
  {
    title: "2× District Qualifier — International Mathematics Olympiad (IMO)",
    context: "International",
  },
  {
    title: "Top 50 Finalist — JustPay Hackathon",
    context: "National",
  },
];

// ---------------------------------------------------------------------------
// Nav Links
// ---------------------------------------------------------------------------
export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "GitHub", href: "#github" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
