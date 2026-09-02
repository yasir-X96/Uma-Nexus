import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [contactErrors, setContactErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
    if (contactErrors[name]) {
      setContactErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!contactForm.name.trim()) {
      errs.name = 'Please enter your name';
    }
    if (!contactForm.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!contactForm.message.trim()) {
      errs.message = 'Please enter your message or query';
    }
    return errs;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setContactErrors(errs);
      return;
    }
    setIsSent(true);
  };

  const handleReset = () => {
    setContactForm({ name: '', email: '', message: '' });
    setContactErrors({});
    setIsSent(false);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag blue">
            <MessageSquare size={14} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">
            Contact UmaNexus Admissions &amp; Support
          </h2>
          <p className="section-desc">
            Have questions regarding curriculum details, batch timings, EMI options, or the internship certificate? Our academic counselors are here to help.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information Column */}
          <div className="contact-info-col">
            <h3 className="contact-col-title">Direct Contact Channels</h3>
            <p className="contact-col-desc">
              Reach out to us directly via phone, WhatsApp, or email for immediate counseling assistance.
            </p>

            <div className="contact-cards-list">
              {/* Phone 1 */}
              <a href="tel:9880900174" className="contact-channel-card">
                <div className="channel-icon-box phone-box">
                  <PhoneCall size={22} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Admissions Hotline 1</span>
                  <strong className="channel-value">98809 00174</strong>
                  <span className="channel-note">Click to call or message on WhatsApp</span>
                </div>
              </a>

              {/* Phone 2 */}
              <a href="tel:9133545403" className="contact-channel-card">
                <div className="channel-icon-box phone-box">
                  <Phone size={22} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Counseling Hotline 2</span>
                  <strong className="channel-value">91335 45403</strong>
                  <span className="channel-note">Direct academic queries &amp; guidance</span>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:umanexusltd@gmail.com" className="contact-channel-card">
                <div className="channel-icon-box email-box">
                  <Mail size={22} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Official Email</span>
                  <strong className="channel-value">umanexusltd@gmail.com</strong>
                  <span className="channel-note">Fast response within 24 hours</span>
                </div>
              </a>

              {/* Working Hours */}
              <div className="contact-channel-card non-link">
                <div className="channel-icon-box clock-box">
                  <Clock size={22} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Counseling Hours</span>
                  <strong className="channel-value">Mon - Sun: 9:00 AM - 8:00 PM IST</strong>
                  <span className="channel-note">Weekend counseling sessions available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form Column */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {!isSent ? (
                <>
                  <h3 className="form-card-title">Send a Quick Message</h3>
                  <p className="form-card-subtitle">
                    Drop us a message and our lead counselor will reach out to you promptly.
                  </p>

                  <form onSubmit={handleContactSubmit} className="contact-form" noValidate>
                    {/* Name */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="contactName">
                        Name <span className="req">*</span>
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        name="name"
                        className={`form-input ${contactErrors.name ? 'has-error' : ''}`}
                        placeholder="Your full name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                      />
                      {contactErrors.name && (
                        <span className="form-error-msg">{contactErrors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="contactEmail">
                        Email <span className="req">*</span>
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        name="email"
                        className={`form-input ${contactErrors.email ? 'has-error' : ''}`}
                        placeholder="your.email@example.com"
                        value={contactForm.email}
                        onChange={handleInputChange}
                      />
                      {contactErrors.email && (
                        <span className="form-error-msg">{contactErrors.email}</span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="contactMessage">
                        Message <span className="req">*</span>
                      </label>
                      <textarea
                        id="contactMessage"
                        name="message"
                        rows="4"
                        className={`form-textarea ${contactErrors.message ? 'has-error' : ''}`}
                        placeholder="How can we help you? Inquire about batch dates, curriculum details, or demo class access..."
                        value={contactForm.message}
                        onChange={handleInputChange}
                      />
                      {contactErrors.message && (
                        <span className="form-error-msg">{contactErrors.message}</span>
                      )}
                    </div>

                    <button type="submit" className="btn-contact-submit">
                      <Send size={18} />
                      <span>Submit Message</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="contact-sent-box">
                  <div className="sent-icon-wrap">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="sent-title">Thank You, {contactForm.name}!</h3>
                  <p className="sent-text">
                    Your message has been received by the UmaNexus academic counseling desk.
                    We will reply to <strong>{contactForm.email}</strong> shortly.
                  </p>
                  <button className="btn-send-another" onClick={handleReset}>
                    <RotateCcw size={16} />
                    <span>Send Another Message</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
