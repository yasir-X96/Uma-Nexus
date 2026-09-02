import {
  GraduationCap,
  Phone,
  Mail,
  ArrowUp,
  Award,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Code2,
  Sparkles
} from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Highlights Strip */}
      <div className="footer-highlights-strip">
        <div className="container highlights-container">
          <div className="highlight-pill">
            <CheckCircle2 size={16} className="pill-check" />
            <span>BEGINNER FRIENDLY</span>
          </div>
          <div className="highlight-pill">
            <CheckCircle2 size={16} className="pill-check" />
            <span>NO PRIOR EXPERIENCE REQUIRED</span>
          </div>
          <div className="highlight-pill">
            <CheckCircle2 size={16} className="pill-check" />
            <span>PRACTICAL &amp; HANDS-ON TRAINING</span>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="footer-main-body">
        <div className="container footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-logo-box">
                <GraduationCap size={28} />
              </div>
              <div className="footer-brand-title">
                Uma<span className="footer-accent">Nexus</span>
              </div>
            </div>

            <p className="footer-tagline">
              EMPOWERING CAREERS. BUILDING FUTURES.
            </p>

            <p className="footer-mission-text">
              India's premier practical tech education ecosystem. Transforming aspiring engineers and career switchers into industry-ready full-stack developers, data engineers, and AI practitioners.
            </p>

            <div className="footer-trust-chips">
              <span className="trust-chip">
                <Award size={14} />
                Internship Certified
              </span>
              <span className="trust-chip">
                <ShieldCheck size={14} />
                Industry Mentors
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Program Curriculum</h4>
            <ul className="footer-link-list">
              <li>
                <button onClick={() => scrollToSection('curriculum')} className="footer-link-btn">
                  Python Programming &amp; OOPs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('curriculum')} className="footer-link-btn">
                  Full Stack React &amp; Django
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('curriculum')} className="footer-link-btn">
                  DSA with Python
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('data-engineering')} className="footer-link-btn">
                  Data Engineering (Airflow &amp; Spark)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ai-genai')} className="footer-link-btn">
                  AI &amp; Generative AI (LLMs &amp; Agents)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="footer-link-btn">
                  Real-Time Capstone Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Navigation Column */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-link-list">
              <li>
                <button onClick={() => scrollToSection('hero')} className="footer-link-btn">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('curriculum')} className="footer-link-btn">
                  Course Modules
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="footer-link-btn">
                  Project Showcase
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('enrollment')} className="footer-link-btn">
                  Course Fee (₹19,999)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('enrollment')} className="footer-link-btn">
                  Admissions Form
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="footer-link-btn">
                  Support &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Admissions &amp; Help Desk</h4>
            <p className="footer-contact-intro">
              Direct access to our senior counseling team:
            </p>

            <div className="footer-contact-items">
              <a href="tel:9880900174" className="footer-contact-link">
                <Phone size={16} className="f-icon-blue" />
                <span>98809 00174</span>
              </a>

              <a href="tel:9133545403" className="footer-contact-link">
                <Phone size={16} className="f-icon-blue" />
                <span>91335 45403</span>
              </a>

              <a href="mailto:umanexusltd@gmail.com" className="footer-contact-link">
                <Mail size={16} className="f-icon-purple" />
                <span>umanexusltd@gmail.com</span>
              </a>
            </div>

            <div className="footer-batch-reminder">
              <span className="reminder-title">Upcoming Batch:</span>
              <span className="reminder-date">Enrollments Open • 6 Months Training (Weekend &amp; Evening)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Back-to-Top Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} <strong>UmaNexus</strong>. All rights reserved. Empowering Careers. Building Futures.
          </p>

          <button
            className="btn-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
