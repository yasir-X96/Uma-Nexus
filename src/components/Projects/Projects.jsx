import { useState } from 'react';
import {
  Globe,
  ShoppingCart,
  BarChart3,
  Database,
  Bot,
  Cpu,
  Layers,
  CheckCircle2,
  ExternalLink,
  X,
  Sparkles,
  Code2,
  GitBranch,
  Rocket
} from 'lucide-react';
import './Projects.css';

export const Projects = () => {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      category: 'Frontend & Personal Branding',
      icon: <Globe size={26} />,
      iconClass: 'p-icon-blue',
      description: 'A sleek, mobile-responsive developer portfolio website showcasing your skills, deployed applications, resume download, and interactive contact form.',
      technologies: ['HTML5', 'CSS3', 'React.js', 'Vite', 'Responsive Design'],
      deliverables: [
        'Component-driven modern UI with dark/light themes',
        'Lighthouse 95+ performance score & SEO optimization',
        'Showcase of GitHub projects & automated resume download',
        'Live hosting on Vercel / Netlify with custom domain support'
      ]
    },
    {
      id: 2,
      title: 'E-Commerce Web App',
      category: 'Full Stack Web Development',
      icon: <ShoppingCart size={26} />,
      iconClass: 'p-icon-purple',
      description: 'Full-featured online store with product filtering, dynamic cart management, user authentication, checkout flow, and REST API backend.',
      technologies: ['Python', 'Django / Flask', 'React.js', 'PostgreSQL', 'REST APIs'],
      deliverables: [
        'JWT-based secure user authentication and order tracking',
        'Product search, category filtering, and inventory status',
        'Persistent cart state and mock payment integration',
        'Admin dashboard to manage products, categories, and customers'
      ]
    },
    {
      id: 3,
      title: 'Data Analysis Dashboard',
      category: 'Data Analytics & Visualization',
      icon: <BarChart3 size={26} />,
      iconClass: 'p-icon-teal',
      description: 'Interactive analytical web dashboard converting millions of raw business records into actionable metrics, time-series charts, and KPI widgets.',
      technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'Streamlit / Plotly'],
      deliverables: [
        'Data cleaning, exploratory data analysis (EDA), and outlier removal',
        'Interactive drill-down metrics, filters, and dynamic aggregations',
        'Automated scheduled report generation and CSV/PDF export',
        'Statistical modeling to uncover revenue drivers and churn patterns'
      ]
    },
    {
      id: 4,
      title: 'Data Pipeline Project',
      category: 'Big Data Engineering',
      icon: <Database size={26} />,
      iconClass: 'p-icon-emerald',
      description: 'Automated end-to-end cloud ETL pipeline orchestrating data from raw S3 landing buckets through PySpark distributed transformations to Delta Lake.',
      technologies: ['Apache Airflow', 'PySpark', 'AWS S3', 'AWS Glue', 'Delta Lake'],
      deliverables: [
        'Scheduled Airflow DAGs with automated retries and failure alerts',
        'Distributed PySpark jobs processing gigabyte-scale datasets',
        'Delta Lake ACID transactions and schema validation rules',
        'Cloud Athena SQL queries for immediate BI consumption'
      ]
    },
    {
      id: 5,
      title: 'AI Chatbot with LLM',
      category: 'Generative AI & LLMs',
      icon: <Bot size={26} />,
      iconClass: 'p-icon-indigo',
      description: 'Enterprise question-answering assistant powered by OpenAI API and LangChain with custom document retrieval and chat memory.',
      technologies: ['OpenAI API', 'LangChain', 'ChromaDB', 'FastAPI', 'RAG'],
      deliverables: [
        'Document ingestion pipeline for PDFs, markdown, and text',
        'Vector embeddings and similarity search with zero hallucinations',
        'Conversational buffer memory maintaining multi-turn context',
        'Streaming token responses for low-latency web interfaces'
      ]
    },
    {
      id: 6,
      title: 'Agentic AI Application',
      category: 'Autonomous Agent Systems',
      icon: <Cpu size={26} />,
      iconClass: 'p-icon-rose',
      description: 'Autonomous multi-step AI agent that uses reasoning loops, web search tools, and code interpreters to plan and solve complex business tasks.',
      technologies: ['LangChain Agents', 'Python Tools', 'Prompt Engineering', 'Vector DB'],
      deliverables: [
        'ReAct reasoning loop (Reason + Act) with tool-calling capabilities',
        'Automated web scraping, data summarization, and SQL generation',
        'Self-correction mechanism verifying intermediate calculation steps',
        'Production deployment with error logging and token cost tracking'
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        {/* Section Heading & Subtitle */}
        <div className="section-header">
          <div className="section-tag blue">
            <Layers size={14} />
            <span>PORTFOLIO BUILDERS</span>
          </div>
          <h2 className="section-title">
            WORK ON REAL-TIME PROJECTS
          </h2>
          <p className="section-desc">
            Build industry-grade portfolio projects from scratch to showcase on your GitHub &amp; resume
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="project-card-header">
                <div className={`project-icon-box ${proj.iconClass}`}>
                  {proj.icon}
                </div>
                <span className="project-category-badge">{proj.category}</span>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-description">{proj.description}</p>

              {/* Tech Pills */}
              <div className="project-tech-stack">
                {proj.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <div className="project-card-footer">
                <button
                  className="btn-view-project"
                  onClick={() => setActiveModalProject(proj)}
                >
                  <span>View Project Details</span>
                  <ExternalLink size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub & Resume Assurance Callout */}
        <div className="projects-resume-callout">
          <div className="callout-left">
            <div className="callout-icon-box">
              <GitBranch size={28} />
            </div>
            <div>
              <h4 className="callout-heading">100% Production Code on Your Personal GitHub</h4>
              <p className="callout-text">
                All projects are developed from clean repositories with proper Git commits, README architecture diagrams, and Docker deployment configs to stand out to recruiters.
              </p>
            </div>
          </div>
          <div className="callout-badge">
            <Rocket size={18} />
            <span>Resume Ready</span>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="project-modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="project-modal-header">
              <div className="modal-title-group">
                <span className="modal-cat">{activeModalProject.category}</span>
                <h3 className="modal-heading">{activeModalProject.title}</h3>
              </div>
              <button
                className="btn-modal-close"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="project-modal-body">
              <p className="modal-full-desc">{activeModalProject.description}</p>

              <div className="modal-section-block">
                <h4 className="modal-subtitle">Technologies Used:</h4>
                <div className="modal-tech-list">
                  {activeModalProject.technologies.map((tech, i) => (
                    <span key={i} className="tech-pill large">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section-block">
                <h4 className="modal-subtitle">Key Features &amp; Deliverables:</h4>
                <ul className="modal-deliverables-list">
                  {activeModalProject.deliverables.map((item, i) => (
                    <li key={i} className="modal-deliv-item">
                      <CheckCircle2 size={16} className="deliv-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-career-impact">
                <Sparkles size={16} />
                <span>
                  <strong>Resume Impact:</strong> Demonstrates real engineering competence during technical rounds.
                </span>
              </div>
            </div>

            <div className="project-modal-footer">
              <button
                className="btn-modal-done"
                onClick={() => {
                  setActiveModalProject(null);
                  const el = document.getElementById('enrollment');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Enroll to Build This Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
