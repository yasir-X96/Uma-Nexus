import { useState } from 'react';
import {
  Sparkles,
  Bot,
  BrainCircuit,
  Boxes,
  Database,
  Terminal,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Wand2,
  Share2,
  Zap
} from 'lucide-react';
import './AI.css';

export const AI = () => {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // The complete list of 12 topics requested
  const topics = [
    { title: 'Introduction to AI', desc: 'Core principles of intelligence, symbolic systems, and transition from traditional ML to generative foundation models.' },
    { title: 'LLM Fundamentals', desc: 'Transformer architectures, tokenization, context windows, temperature, top-p sampling, and attention mechanisms.' },
    { title: 'Prompt Engineering', desc: 'Zero-shot, few-shot, Chain-of-Thought (CoT), ReAct prompting, and role-based instruction tuning.' },
    { title: 'OpenAI API', desc: 'Integration with chat completions, embeddings endpoints, structured JSON outputs, and function calling schemas.' },
    { title: 'LangChain Basics', desc: 'Chains, document loaders, text splitters, output parsers, and composition patterns in Python.' },
    { title: 'Building AI Agents', desc: 'Autonomous reasoning loops with observation, tool execution, decision-making, and goal completion.' },
    { title: 'RAG', desc: 'Retrieval-Augmented Generation to ground LLM answers on proprietary enterprise knowledge bases without hallucinations.' },
    { title: 'Agentic Workflows', desc: 'Iterative reflection, evaluation, plan-and-solve routines, and routing pipelines.' },
    { title: 'Vector Databases', desc: 'Chroma, Pinecone, FAISS, cosine similarity, HNSW indexing, and hybrid dense/sparse search.' },
    { title: 'Memory & Tools', desc: 'Short-term conversational buffers, summary memory, vector-backed recall, and custom Python tool executors.' },
    { title: 'Multi-Agent Systems', desc: 'Hierarchical team architectures, supervisor patterns, inter-agent collaboration, and task delegation.' },
    { title: 'Deploying AI Applications', desc: 'Containerizing LLM microservices with FastAPI, streaming responses, rate limiting, and observability.' }
  ];

  const workflowSteps = [
    { name: '1. User Request', desc: 'Natural language task or domain inquiry', icon: <Bot size={18} /> },
    { name: '2. Vector RAG Retrieval', desc: 'Semantic search over Chroma / Pinecone', icon: <Database size={18} /> },
    { name: '3. LLM Reasoning', desc: 'GPT-4o / Claude with system prompts', icon: <BrainCircuit size={18} /> },
    { name: '4. Autonomous Tool Use', desc: 'API calls, SQL queries, Python runners', icon: <Workflow size={18} /> },
    { name: '5. Synthesized Result', desc: 'Verified, grounded, production-grade output', icon: <Sparkles size={18} /> }
  ];

  const scrollToEnroll = () => {
    const el = document.getElementById('enrollment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ai-genai" className="ai-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag purple">
            <Sparkles size={14} />
            <span>PURPLE SPECIALIZATION TRACK</span>
          </div>
          <h2 className="section-title">
            AI &amp; Generative AI Specialization
          </h2>
          <p className="section-desc">
            Equip yourself with the most demanded tech skill on earth: building intelligent LLM applications, RAG architectures, and autonomous multi-agent systems.
          </p>
        </div>

        {/* Interactive Agentic Architecture Visualization */}
        <div className="ai-visual-architecture">
          <div className="architecture-header">
            <div className="arch-title-group">
              <span className="arch-badge">INDUSTRY ARCHITECTURE</span>
              <h3 className="arch-title">How Production AI Agents &amp; RAG Operate</h3>
            </div>
            <span className="arch-sub">Click any step to inspect the workflow</span>
          </div>

          <div className="arch-flow-row">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className={`arch-step-card ${activeWorkflowStep === idx ? 'active' : ''}`}
                onClick={() => setActiveWorkflowStep(idx)}
              >
                <div className="arch-step-icon">{step.icon}</div>
                <h4 className="arch-step-name">{step.name}</h4>
                <p className="arch-step-desc">{step.desc}</p>
                {idx < workflowSteps.length - 1 && <span className="arch-connector" />}
              </div>
            ))}
          </div>
        </div>

        {/* 12 Topics Grid */}
        <div className="ai-topics-grid">
          {topics.map((topic, index) => (
            <div key={index} className="ai-topic-card">
              <div className="ai-card-meta">
                <span className="ai-num">TOPIC {String(index + 1).padStart(2, '0')}</span>
                <span className="ai-pill">Hands-on Lab</span>
              </div>
              <h3 className="ai-topic-title">
                <CheckCircle2 size={16} className="ai-check" />
                <span>{topic.title}</span>
              </h3>
              <p className="ai-topic-desc">{topic.desc}</p>
            </div>
          ))}
        </div>

        {/* Purple Banner CTA */}
        <div className="ai-cta-banner">
          <div className="ai-cta-left">
            <div className="ai-cta-icon-box">
              <BrainCircuit size={32} />
            </div>
            <div>
              <span className="ai-cta-eyebrow">PRACTICAL HANDS-ON FOCUS</span>
              <h4 className="ai-cta-heading">Ready to Engineer Production AI Applications?</h4>
              <p className="ai-cta-sub">
                Course material covers practical architectural design, prompt orchestration, and autonomous agent development with step-by-step guidance.
              </p>
            </div>
          </div>
          <button className="btn-ai-cta" onClick={scrollToEnroll}>
            <span>Join GenAI Track</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
