import React from "react";
import "../style/contact.css";

function Contact({ theme }) {
    return (
        <section id="contact" className={`contact-section ${theme}`}>
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title-shadow">CONTACT</h2>
                    <h2 className="contact-title">CONTACT</h2>
                </div>

                <div className="contact-content">
                    <form 
                        action="https://formspree.io/f/xqapnblk"
                        method="POST"
                        className={`contact-form ${theme}`}
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your name" 
                                className="form-input"
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your email" 
                                className="form-input"
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                name="message" 
                                placeholder="Your message" 
                                className="form-textarea"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={`submit-btn ${theme}`}>
                            Send Message
                        </button>
                    </form>

                    <div className={`contact-info ${theme}`}>
                        <h3 className="info-title">Contact Information</h3>
                        <ul className="info-list">
                            <li className="info-item">
                                <i className="bi bi-envelope"></i>
                                <span>maadimfdal@gmail.com</span>
                            </li>
                            <li className="info-item">
                                <i className="bi bi-whatsapp"></i>
                                <span>+212 631 361 235</span>
                            </li>
                            <li className="info-item">
                                <i className="bi bi-geo-alt"></i>
                                <span>Tanger, Morocco</span>
                            </li>
                        </ul>

                        <h3 className="social-title">Social Media</h3>
                        <div className="social-links">
                            <a 
                                href="https://www.linkedin.com/in/el-moufaddal-maadi-79113431b/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a 
                                href="https://github.com/Mfdalmaadi" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="bi bi-github"></i>
                            </a>
                            <a 
                                href="https://www.instagram.com/mfdalmaadi?igsh=bHJzY3V6ZDYwemFx" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;