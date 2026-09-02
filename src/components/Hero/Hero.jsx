import {
  ArrowRight,
  Code,
  BookCheck,
  Users,
  Briefcase,
  Layers,
  CheckCircle2,
  Flame
} from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Subtle Background Glow Elements */}
      <div className="hero-bg-glow glow-blue" />
      <div className="hero-bg-glow glow-purple" />

      <div className="container hero-container">
        {/* Main Hero Content */}
        <div className="hero-content">
          {/* Small Pill Badge */}
          <div className="hero-pill-badge">
            <Flame className="pill-icon" size={16} />
            <span>Industry Ready Full Stack Program</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="hero-heading">
            FULL STACK PYTHON + DATA ENGINEERING WITH <span className="highlight-text">DSA &amp; AI</span>
          </h1>

          {/* Slogan Text */}
          <div className="hero-slogan-wrapper">
            <span className="hero-slogan">
              LEARN. BUILD. DEPLOY. GET HIRED.
            </span>
          </div>

          {/* Detailed Description */}
          <p className="hero-description">
            Learn modern full-stack development, data engineering, artificial intelligence and generative AI through practical, real-world projects.
          </p>

          {/* Key Quick Highlights */}
          <div className="hero-key-points">
            <div className="key-point-item">
              <CheckCircle2 className="key-icon" size={18} />
              <span>6 Months Intensive Training</span>
            </div>
            <div className="key-point-item">
              <CheckCircle2 className="key-icon" size={18} />
              <span>Internship Certificate Included</span>
            </div>
            <div className="key-point-item">
              <CheckCircle2 className="key-icon" size={18} />
              <span>Zero Prior Coding Required</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <button
              className="btn-hero-primary"
              onClick={() => scrollTo('enrollment')}
            >
              <span>Start Learning</span>
              <ArrowRight size={18} />
            </button>

            <button
              className="btn-hero-secondary"
              onClick={() => scrollTo('projects')}
            >
              <Code size={18} />
              <span>View Projects</span>
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================================
          FEATURES SECTION (Four feature cards as specified)
          =================================================================== */}
      <div className="container features-container">
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon-box icon-blue">
              <BookCheck size={26} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Industry Relevant Curriculum</h3>
              <p className="feature-text">
                Rigorously crafted syllabus matching current top tech hiring requirements: Python, React, Cloud, Data Engineering &amp; AI.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon-box icon-purple">
              <Users size={26} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Expert Instructors</h3>
              <p className="feature-text">
                Learn directly from senior architects and data engineers with proven real-world industry experience and patient mentorship.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon-box icon-teal">
              <Layers size={26} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Real-Time Projects</h3>
              <p className="feature-text">
                Build end-to-end applications, distributed Spark ETL data pipelines, and intelligent GenAI agents ready for production.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-icon-box icon-amber">
              <Briefcase size={26} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Career Guidance</h3>
              <p className="feature-text">
                Dedicated 1-on-1 resume optimization, GitHub portfolio polishing, technical mock interviews, and hiring partner connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
