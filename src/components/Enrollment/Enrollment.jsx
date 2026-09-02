import { useState } from 'react';
import {
  CreditCard,
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  Award,
  FileCheck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  UserCheck,
  Send,
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import './Enrollment.css';

export const Enrollment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: 'Full Stack Python + Data Engineering with DSA & AI',
    learningMode: 'Online Live Classes (Weekend & Evening)',
    goals: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const courseFeatures = [
    'Duration: 6 Months (Intensive Training + Internship)',
    'Live Instructor-Led Classes',
    'Recording Access (Lifetime)',
    'Doubt Clearing Sessions (Daily 1-on-1)',
    'Certificate of Completion',
    'Work on Real-Time Projects (6+ Projects)',
    'Internship Certificate Included',
    '1-on-1 Mentorship & Resume Review'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^\+?[\d\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save submitted state to display confirmation
    setSubmittedData({
      ...formData,
      registrationId: `UMA-${Math.floor(100000 + Math.random() * 900000)}`,
      timestamp: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      course: 'Full Stack Python + Data Engineering with DSA & AI',
      learningMode: 'Online Live Classes (Weekend & Evening)',
      goals: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="enrollment" className="enrollment-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag blue">
            <CreditCard size={14} />
            <span>INVEST IN YOUR TECH CAREER</span>
          </div>
          <h2 className="section-title">
            Course Fee &amp; Fast-Track Enrollment
          </h2>
          <p className="section-desc">
            Transparent pricing, high return on investment, and zero hidden costs. Secure your seat today for the upcoming batch.
          </p>
        </div>

        <div className="enrollment-grid">
          {/* ===================================================================
              COURSE FEE CARD (As requested in prompt)
              =================================================================== */}
          <div className="course-fee-card">
            <div className="fee-card-badge-top">
              <Sparkles size={14} />
              <span>LIMITED PERIOD 50% EARLY BIRD SCHOLARSHIP</span>
            </div>

            <div className="fee-card-header">
              <span className="fee-title-label">COURSE FEE</span>
              <div className="fee-price-row">
                <span className="fee-currency">₹</span>
                <span className="fee-amount">19,999</span>
                <span className="fee-original">₹39,999</span>
              </div>
              <span className="fee-tax-note">All-Inclusive One-Time Fee • Easy No-Cost EMI Available</span>
            </div>

            <div className="fee-features-block">
              <h4 className="fee-features-title">Everything Included in This Program:</h4>
              <ul className="fee-features-list">
                {courseFeatures.map((feat, idx) => (
                  <li key={idx} className="fee-feature-item">
                    <span className="fee-check-box">
                      <CheckCircle2 size={16} strokeWidth={2.5} />
                    </span>
                    <span className="fee-feature-text">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fee-security-guarantee">
              <ShieldCheck size={20} className="shield-icon" />
              <span>100% Practical &amp; Interview Oriented Curriculum</span>
            </div>

            <button
              className="btn-fee-enroll"
              onClick={() => {
                const el = document.getElementById('enrollment-form-container');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Enroll Now</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* ===================================================================
              ENROLLMENT FORM (Frontend React state managed)
              =================================================================== */}
          <div id="enrollment-form-container" className="enrollment-form-card">
            {!isSubmitted ? (
              <>
                <div className="form-card-header">
                  <h3 className="form-heading">Reserve Your Seat</h3>
                  <p className="form-subheading">
                    Fill out the form below to lock in the ₹19,999 fee and receive the detailed curriculum syllabus brochure.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="enroll-form" noValidate>
                  {/* Full Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                    {errors.fullName && (
                      <span className="form-error-msg">{errors.fullName}</span>
                    )}
                  </div>

                  {/* Email & Phone Row */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className={`form-input ${errors.email ? 'has-error' : ''}`}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <span className="form-error-msg">{errors.email}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone Number <span className="req">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className={`form-input ${errors.phone ? 'has-error' : ''}`}
                        placeholder="e.g. 98809 00174"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && (
                        <span className="form-error-msg">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Course Dropdown */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="course">
                      Select Program Track
                    </label>
                    <select
                      id="course"
                      name="course"
                      className="form-select"
                      value={formData.course}
                      onChange={handleInputChange}
                    >
                      <option value="Full Stack Python + Data Engineering with DSA & AI">
                        Full Stack Python + Data Engineering with DSA &amp; AI (Complete Program)
                      </option>
                      <option value="Enterprise Data Engineering Specialization (Airflow & Spark)">
                        Enterprise Data Engineering Specialization (Airflow &amp; Spark)
                      </option>
                      <option value="AI & Generative AI Specialization (LangChain & Agents)">
                        AI &amp; Generative AI Specialization (LangChain &amp; Agents)
                      </option>
                      <option value="Full Stack Python with DSA & React">
                        Full Stack Python with DSA &amp; React
                      </option>
                    </select>
                  </div>

                  {/* Learning Mode */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="learningMode">
                      Preferred Mode of Training
                    </label>
                    <select
                      id="learningMode"
                      name="learningMode"
                      className="form-select"
                      value={formData.learningMode}
                      onChange={handleInputChange}
                    >
                      <option value="Online Live Classes (Weekend & Evening)">
                        Online Live Interactive Classes (Weekend &amp; Evening)
                      </option>
                      <option value="Hybrid (Classroom Hub + Online Recordings)">
                        Hybrid (Classroom Hub + Online Recordings)
                      </option>
                    </select>
                  </div>

                  {/* Goals / Message */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="goals">
                      Message / Career Goals (Optional)
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      rows="3"
                      className="form-textarea"
                      placeholder="Tell us about your background (student, working professional, or career switcher) and target job roles..."
                      value={formData.goals}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="btn-submit-enroll">
                    <Send size={18} />
                    <span>Submit Enrollment Application</span>
                  </button>

                  <div className="form-footer-assurance">
                    <UserCheck size={16} />
                    <span>Our admissions counselor will contact you within 24 hours to finalize your batch schedule.</span>
                  </div>
                </form>
              </>
            ) : (
              /* Success Confirmation Card */
              <div className="enroll-success-box">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={44} />
                </div>
                <h3 className="success-title">Enrollment Application Received!</h3>
                <p className="success-sub">
                  Congratulations, <strong>{submittedData.fullName}</strong>! Your seat inquiry has been registered.
                </p>

                <div className="success-summary-card">
                  <div className="summary-row">
                    <span className="summary-label">Registration ID:</span>
                    <span className="summary-value bold">{submittedData.registrationId}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Program:</span>
                    <span className="summary-value">{submittedData.course}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Duration:</span>
                    <span className="summary-value">6 Months (Comprehensive Training + Internship)</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Course Fee:</span>
                    <span className="summary-value highlight">₹19,999 (Early Bird Rate)</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Contact Email:</span>
                    <span className="summary-value">{submittedData.email}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Phone:</span>
                    <span className="summary-value">{submittedData.phone}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Mode:</span>
                    <span className="summary-value">{submittedData.learningMode}</span>
                  </div>
                </div>

                <div className="next-steps-block">
                  <h4 className="next-steps-heading">What happens next?</h4>
                  <ol className="next-steps-list">
                    <li>Our team will call or WhatsApp you at <strong>{submittedData.phone}</strong> with the LMS login and orientation details.</li>
                    <li>You will receive the complete syllabus PDF on <strong>{submittedData.email}</strong>.</li>
                    <li>Internship capstone guidelines and live session calendar will be provided.</li>
                  </ol>
                </div>

                <button className="btn-submit-another" onClick={handleReset}>
                  <RotateCcw size={16} />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
