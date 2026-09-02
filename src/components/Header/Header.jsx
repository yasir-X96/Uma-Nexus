import { useState, useEffect } from 'react';
import {
  GraduationCap,
  Menu,
  X,
  ArrowRight,
  BookOpen,
  Code2,
  Cpu,
  Mail,
  Home,
  PhoneCall
} from 'lucide-react';
import './Header.css';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id) => {
    closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Notification Bar for Admissions */}
      <div className="top-banner">
        <div className="container top-banner-container">
          <span className="banner-badge">NEXT BATCH STARTING SOON</span>
          <span className="banner-text">
            Limited Seats • 6 Months Intensive Training • 100% Practical &amp; Real-time Projects
          </span>
          <div className="banner-contact-quick">
            <PhoneCall size={13} />
            <span>Call / WhatsApp: <strong>98809 00174</strong></span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-nav-bar">
        <div className="container nav-container">
          {/* Logo & Tagline */}
          <a
            href="#hero"
            className="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            <div className="brand-icon-wrapper">
              <GraduationCap className="brand-icon" size={26} />
            </div>
            <div className="brand-text-group">
              <span className="brand-title">
                Uma<span className="brand-title-accent">Nexus</span>
              </span>
              <span className="brand-tagline">
                EMPOWERING CAREERS. BUILDING FUTURES.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <a
              href="#hero"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              Home
            </a>
            <a
              href="#curriculum"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('curriculum');
              }}
            >
              Curriculum
            </a>
            <a
              href="#data-engineering"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('data-engineering');
              }}
            >
              Data Engineering
            </a>
            <a
              href="#ai-genai"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('ai-genai');
              }}
            >
              AI &amp; GenAI
            </a>
            <a
              href="#projects"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="header-actions">
            <button
              className="btn-enroll-header"
              onClick={() => scrollToSection('enrollment')}
            >
              <span>Enroll Now</span>
              <ArrowRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-brand-info">
            <span className="mobile-tagline">EMPOWERING CAREERS. BUILDING FUTURES.</span>
          </div>

          <div className="mobile-nav-links">
            <button
              className="mobile-nav-link"
              onClick={() => scrollToSection('hero')}
            >
              <Home size={18} />
              <span>Home</span>
            </button>

            <button
              className="mobile-nav-link"
              onClick={() => scrollToSection('curriculum')}
            >
              <BookOpen size={18} />
              <span>Curriculum</span>
            </button>

            <button
              className="mobile-nav-link"
              onClick={() => scrollToSection('data-engineering')}
            >
              <Code2 size={18} />
              <span>Data Engineering (Teal)</span>
            </button>

            <button
              className="mobile-nav-link"
              onClick={() => scrollToSection('ai-genai')}
            >
              <Cpu size={18} />
              <span>AI &amp; GenAI</span>
            </button>

            <button
              className="mobile-nav-link"
              onClick={() => scrollToSection('projects')}
            >
              <Code2 size={18} />
              <span>Projects</span>
            </button>

            <button
              className="mobile-nav-link"
              onClick={() => scrollToSection('contact')}
            >
              <Mail size={18} />
              <span>Contact</span>
            </button>
          </div>

          <div className="mobile-drawer-footer">
            <button
              className="btn-enroll-mobile"
              onClick={() => scrollToSection('enrollment')}
            >
              <span>Enroll Now • ₹19,999</span>
              <ArrowRight size={16} />
            </button>
            <div className="mobile-call-link">
              <span>Quick Help: </span>
              <a href="tel:9880900174">98809 00174</a> / <a href="tel:9133545403">91335 45403</a>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile */}
      {isMobileMenuOpen && (
        <div className="mobile-backdrop" onClick={closeMobileMenu} />
      )}
    </header>
  );
};
