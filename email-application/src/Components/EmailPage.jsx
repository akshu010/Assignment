import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./EmailPage.css"

const EmailPage = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qc4cnjl", "template_953yy5s", form.current, {
        publicKey: "MXqwukC1Qf2sfugaW",
      })
      .then(
        () => {
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="email-page-container">
      <div className="email-form-wrapper">
        <h2 className="form-title">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="user_name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="user_email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              rows="4"
              className="form-textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
      {showPopup && (
        <div className="popup">Form submitted successfully!</div>
      )}
    </div>
  );
};

export default EmailPage;
