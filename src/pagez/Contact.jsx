import React from "react";
import "../style/contact.css";
import Moon from "../components/moon";

function Contact({ theme }) {
    return (
        <div className="form-h">
            <div className={`container00 form-c ${theme}`}>
                <h1 className={`title ${theme}`}>Contact me</h1>
                <form
                    action="https://formspree.io/f/xqapnblk"
                    method="POST"
                    className="form"
                >
                    <input type="hidden" name="_captcha" value="false" />
                    <label htmlFor="name" className="name">Name</label>
                    <input type="text" name="name" placeholder="Your name" className="inputname" required />

                    <label htmlFor="email" className="email">Email</label>
                    <input type="email" name="email" placeholder="Your email" className="inputemail" required />

                    <label htmlFor="message" className="message">Message</label>
                    <textarea name="message" id="message" className="messagearea" placeholder="Your message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>

                <div className="divvv">
                    <h2 className={`title ${theme}`}>Contact Information</h2>
                    <ul className="uu">
                        <li>
                            <i className="bi bi-envelope"></i>Email
                            <span className="span">maadimfdal@gmail.com</span>
                        </li>
                        <li>
                            <i className="bi bi-whatsapp"></i>Whatsapp
                            <span className="span">+212 631 361 235</span>
                        </li>
                        <li>
                            <i className="bi bi-geo-alt"></i>Location
                            <span className="span">Tanger</span>
                        </li>
                    </ul>
                    <h2 className={`title ${theme}`}>Social Media</h2>
                    <ul className="uu">
                        <li>
                            <button className="bb">
                                <a href="https://www.linkedin.com/in/el-moufaddal-maadi-79113431b/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                </a> LinkedIn
                            </button>
                        </li>
                        <li>
                            <button className="bb">
                                <a href="https://github.com/Mfdalmaadi" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github"></i>
                                </a> GitHub
                            </button>
                        </li>
                        <li>
                            <button className="bb">
                                <a href="https://www.instagram.com/mfdalmaadi?igsh=bHJzY3V6ZDYwemFx" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i>
                                </a> Instagram
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="moon-model">
                <Moon />
            </div>
        </div>
    );
}

export default Contact;
