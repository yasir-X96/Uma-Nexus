import { useState } from 'react';
import {
  Code2,
  Globe,
  Binary,
  Database,
  Brain,
  Bot,
  Check,
  Sparkles,
  BookOpen,
  ArrowRight,
  Layers
} from 'lucide-react';
import './Curriculum.css';

export const Curriculum = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      id: 'python',
      num: 'MODULE 01',
      title: 'PYTHON PROGRAMMING',
      icon: <Code2 size={24} />,
      colorClass: 'mod-blue',
      badge: 'Core Foundation',
      topics: [
        'Core Python',
        'OOPs',
        'Exception Handling',
        'File Handling',
        'Modules',
        'NumPy',
        'Pandas'
      ],
      description: 'Master clean coding, object-oriented design, modular programming, and data manipulation with standard scientific libraries.'
    },
    {
      id: 'webdev',
      num: 'MODULE 02',
      title: 'WEB DEVELOPMENT',
      icon: <Globe size={24} />,
      colorClass: 'mod-royal',
      badge: 'Frontend & Backend',
      topics: [
        'HTML',
        'CSS',
        'JavaScript',
        'React.js',
        'Django / Flask',
        'REST APIs'
      ],
      description: 'Build modern responsive client interfaces with React and robust backend servers and RESTful web services with Django & Flask.'
    },
    {
      id: 'dsa',
      num: 'MODULE 03',
      title: 'DSA WITH PYTHON',
      icon: <Binary size={24} />,
      colorClass: 'mod-purple',
      badge: 'Interview Cracker',
      topics: [
        'Data Structures',
        'Algorithms',
        'Time & Space Complexity',
        'Problem Solving'
      ],
      description: 'Ace product-company technical interviews with thorough understanding of arrays, trees, graphs, sorting, searching, and Big-O efficiency.'
    },
    {
      id: 'databases',
      num: 'MODULE 04',
      title: 'DATABASES',
      icon: <Database size={24} />,
      colorClass: 'mod-teal',
      badge: 'Data Persistence',
      topics: [
        'SQL & Relational DBs',
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Database Design'
      ],
      description: 'Design normalized relational schemas, write high-performance SQL queries, index tables, and manage NoSQL document stores.'
    },
    {
      id: 'aiml',
      num: 'MODULE 05',
      title: 'AI & ML FUNDAMENTALS',
      icon: <Brain size={24} />,
      colorClass: 'mod-indigo',
      badge: 'Predictive Intelligence',
      topics: [
        'Machine Learning Basics',
        'Scikit-learn',
        'Deep Learning Basics',
        'Model Training & Evaluation'
      ],
      description: 'Learn supervised & unsupervised algorithms, feature engineering, loss metrics, and neural network foundations.'
    },
    {
      id: 'ai-integration',
      num: 'MODULE 06',
      title: 'AI INTEGRATION',
      icon: <Bot size={24} />,
      colorClass: 'mod-violet',
      badge: 'Next-Gen Apps',
      topics: [
        'ChatGPT',
        'LLM Basics',
        'Prompt Engineering',
        'AI APIs',
        'Building AI Powered Features'
      ],
      description: 'Integrate state-of-the-art LLMs into real applications, write optimized prompts, and ship AI-powered capabilities users love.'
    }
  ];

  const scrollToEnroll = () => {
    const el = document.getElementById('enrollment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="curriculum" className="curriculum-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag blue">
            <BookOpen size={14} />
            <span>STRUCTURED LEARNING PATH</span>
          </div>
          <h2 className="section-title">
            Industry Relevant Curriculum
          </h2>
          <p className="section-desc">
            A comprehensive 6-month, project-first roadmap engineered to take you from foundational programming to full stack mastery, big data pipelines, and AI engineering.
          </p>
        </div>

        {/* Modules Grid (Cards for each module) */}
        <div className="curriculum-grid">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className={`curriculum-card ${mod.colorClass} ${
                selectedModule === mod.id ? 'active-card' : ''
              }`}
              onClick={() => setSelectedModule(selectedModule === mod.id ? null : mod.id)}
            >
              {/* Card Header */}
              <div className="curriculum-card-header">
                <div className="curriculum-icon-wrap">
                  {mod.icon}
                </div>
                <div className="curriculum-meta">
                  <span className="curriculum-num">{mod.num}</span>
                  <span className="curriculum-badge">{mod.badge}</span>
                </div>
              </div>

              {/* Module Title */}
              <h3 className="curriculum-title">{mod.title}</h3>
              <p className="curriculum-description">{mod.description}</p>

              {/* Topics List */}
              <div className="curriculum-topics-wrapper">
                <span className="topics-heading">Key Topics Covered:</span>
                <ul className="topics-list">
                  {mod.topics.map((topic, index) => (
                    <li key={index} className="topic-item">
                      <span className="topic-check">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="topic-text">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom Indicator */}
              <div className="curriculum-card-footer">
                <span className="practical-tag">
                  <Sparkles size={12} />
                  Includes Real-Time Hands-on Exercises
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Curriculum Bottom Specialization Banner */}
        <div className="curriculum-specialization-banner">
          <div className="banner-content">
            <div className="banner-badge-group">
              <span className="banner-pill-teal">Specialization 1: Data Engineering</span>
              <span className="banner-pill-purple">Specialization 2: AI &amp; Generative AI</span>
            </div>
            <h3 className="banner-headline">
              Looking for Advanced Data Pipelines &amp; Autonomous AI Agents?
            </h3>
            <p className="banner-subtext">
              Our program dives deep into Apache Airflow, PySpark, AWS Big Data services, RAG architectures, and Multi-Agent Systems. Explore the dedicated modules below!
            </p>
          </div>
          <div className="banner-actions">
            <button className="btn-banner-action" onClick={scrollToEnroll}>
              <span>Enroll for Full Syllabus</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
