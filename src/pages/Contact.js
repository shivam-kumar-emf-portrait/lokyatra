import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaTelegram,
  FaFacebookMessenger,
  FaTwitter,
} from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    url: "https://wa.me/18001001234",
  },
  {
    icon: <FaTelegram size={20} />,
    label: "Telegram",
    url: "https://t.me/bustracker_support",
  },
  {
    icon: <FaFacebookMessenger size={20} />,
    label: "Messenger",
    url: "https://m.me/bustracker.support",
  },
  {
    icon: <FaTwitter size={20} />,
    label: "Twitter",
    url: "https://twitter.com/bustracker_support",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    type: "feedback",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you for your feedback! We'll review and respond as soon as possible.");
    setFormData({ type: "feedback", message: "" });
  };

  return (
    <section className="contact-compact-card" aria-label="Contact Us">
      <h2>Contact Us</h2>
      <p className="contact-desc">
        Let’s connect! Reach out for queries, support, suggestions, or complaints.
      </p>
      <div className="contact-short-flex">
        <div className="contact-methods">
          <div className="contact-item">
            <FaEnvelope size={18} />
            <a href="mailto:support@bus-tracker.com" className="contact-link">
              support@bus-tracker.com
            </a>
          </div>
          <div className="contact-item">
            <FaPhone size={18} />
            <a href="tel:18001001234" className="contact-link">
              1800-100-1234
            </a>
          </div>
          <div className="contact-socials">
            {SOCIAL_LINKS.map((social) => (
              <a
                className="contact-social-btn"
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
                <span className="contact-social-label">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="feedback">Feedback</option>
            <option value="complaint">Complaint</option>
            <option value="suggestion">Suggestion</option>
          </select>
          <textarea
            name="message"
            required
            placeholder="Write your feedback or complaint here"
            rows={3}
            maxLength={300}
            value={formData.message}
            onChange={handleChange}
          />
          <button className="contact-form-submit" type="submit">
            Submit
          </button>
          {status && <div className="contact-status">{status}</div>}
        </form>
      </div>
      <div className="contact-feedback-info">
        Response expected within 24 hours (Mon-Fri, 9am-6pm).
      </div>
    </section>
  );
};

export default Contact;

const styles = `
.contact-compact-card {
  width: 100%;
  max-width: 590px;
  margin: 32px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(44,62,80,0.09);
  padding: 20px 15px;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  transition: box-shadow 0.3s;
  box-sizing: border-box;
}
.contact-compact-card h2 {
  font-size: 1.32rem;
  margin-bottom: 7px;
}
.contact-desc {
  color: #636e72;
  font-size: 1rem;
  margin-bottom: 10px;
}
.contact-short-flex {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
}
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 150px;
  flex: 1 0 150px;
}
.contact-socials {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.02rem;
}
.contact-link {
  color: #0066ee;
  text-decoration: none;
  transition: color 0.20s;
  word-break: break-word;
  word-wrap: break-word;
}
.contact-link:hover,
.contact-link:focus {
  color: #357ae8;
  text-decoration: underline;
}
.contact-social-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f3f7ff;
  padding: 3px 9px;
  border-radius: 8px;
  color: #2e363e;
  border: none;
  text-decoration: none;
  font-size: 15px;
  transition: background 0.21s;
  min-width: 90px;
}
.contact-social-btn:hover {
  background: #e0eaff;
  color: #357ae8;
}
.contact-form {
  flex: 2 1 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f6f8fb;
  border-radius: 12px;
  padding: 8px 15px;
  box-shadow: 0 2px 6px rgba(44,62,80,0.03);
  min-width: 200px;
  box-sizing: border-box;
}
.contact-form select {
  padding: 7px 11px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  background: #f9fafb;
  outline: none;
  transition: border 0.18s;
}
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: #357ae8;
}
.contact-form textarea {
  resize: vertical;
  border-radius: 8px;
  padding: 9px 12px;
  font-size: 1rem;
  border: 1px solid #cfd8dc;
  background: #f9fafb;
  min-height: 70px;
  max-height: 180px;
  margin-top: 5px;
  outline: none;
  transition: border 0.18s;
}
.contact-form-submit {
  margin-top: 10px;
  background: #2b68e0;
  color: #fff;
  padding: 9px 0;
  border: none;
  border-radius: 9px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.25s;
}
.contact-form-submit:hover {
  background: #174b9d;
}
.contact-status {
  margin-top: 7px;
  font-size: 1rem;
  color: #27ae60;
  animation: fadein 0.5s;
}
.contact-feedback-info {
  margin-top: 12px;
  font-size: 0.95rem;
  color: #8395a7;
  text-align: left;
  user-select: none;
}

/* Larger tablets and small desktops */
@media (max-width: 1024px) {
  .contact-compact-card {
    max-width: 90vw;
    padding: 18px 4vw;
  }
  .contact-short-flex {
    gap: 16px;
  }
  .contact-methods {
    min-width: 135px;
  }
  .contact-form {
    min-width: 180px;
  }
}

/* Tablets and large mobiles */
@media (max-width: 768px) {
  .contact-compact-card {
    padding: 16px 3vw;
    font-size: 0.98rem;
  }
  .contact-short-flex {
    flex-direction: column;
    gap: 18px;
    align-items: stretch;
  }
  .contact-methods {
    flex-direction: row;
    gap: 15px;
    min-width: 0;
    margin-bottom: 10px;
    justify-content: flex-start;
  }
  .contact-socials {
    flex-direction: row;
    gap: 10px;
    margin-top: 0;
  }
  .contact-form {
    min-width: 100%;
    width: 100%;
  }
}

/* Mobile phones */
@media (max-width: 480px) {
  .contact-compact-card {
    padding: 12px 3vw;
  }
  .contact-short-flex {
    gap: 14px;
  }
  .contact-item {
    font-size: 0.93rem;
  }
  .contact-form select {
    font-size: 0.95rem;
    padding: 6px 9px;
  }
  .contact-form textarea {
    font-size: 0.95rem;
    min-height: 45px;
    max-height: 140px;
    padding: 8px 9px;
  }
  .contact-form-submit {
    font-size: 1rem;
    padding: 8px 0;
  }
  .contact-social-btn {
    min-width: 70px;
    font-size: 13px;
    padding: 3px 7px;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(9px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
`;

if (typeof document !== "undefined" && !document.getElementById("responsive-contact-style")) {
  const styleTag = document.createElement("style");
  styleTag.id = "responsive-contact-style";
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
}
