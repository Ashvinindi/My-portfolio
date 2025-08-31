import React from "react";
import "./Contact.css";
import { CopyToClipboard } from "react-copy-to-clipboard"; // optional for copy button
import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* WhatsApp / Mobile */}
        <div className="contact-card">
          <h3>Let's Chat!</h3>
          <p>
            Got a quick question or want to discuss a project on the go? Feel
            free to call or drop me a WhatsApp message. I'm usually quick to
            respond!
          </p>
          <p>
            <strong>Mobile / WhatsApp:</strong> +94 701505064{" "}
            <CopyToClipboard
              text="+94701505064"
              onCopy={() => setCopied(true)}
            >
              <span className="copy-btn">📋</span>
            </CopyToClipboard>
          </p>
        </div>

        <div className="or">OR</div>

        {/* Email */}
        <div className="contact-card">
          <h3>Send an Email</h3>
          <p>
            For more detailed inquiries, collaboration proposals, or
            professional discussions, please use the email below. I'll get back
            to you as soon as possible.
          </p>
          <p>
            <strong>ashvinindiu@gmail.com</strong>{" "}
            <CopyToClipboard
              text="ashvinindiu@gmail.com"
              onCopy={() => setCopied(true)}
            >
              <span className="copy-btn">📋</span>
            </CopyToClipboard>
          </p>
        </div>
      </div>

      {copied && <p className="copied-msg">Copied to clipboard ✅</p>}

      
    </section>
  );
}

export default Contact;
