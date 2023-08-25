import React, { useState } from "react";
import { Link } from "react-router-dom";
import gmail from "../../icons/gmail.png";
import linkedin from "../../icons/linkedin.png";
import github from "../../icons/github.png";
import contactImg from "../../images/contact.gif" 
import "./contact.css";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const regName = /[^a-zA-Z\s]/;
  const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateName = (value) => {
    if (regName.test(value)) {
      setNameError("Numbers or special characters are not supported.");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value) => {
    if (!regEmail.test(value)) {
      setEmailError("This mail is not valid.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameError || emailError) {
      alert("Please complete the form correctly");
      return;
    }

    if (!name || !email || !reason) {
      alert("Please complete the form");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Contact Reason:", reason);

    setName("");
    setEmail("");
    setReason("");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 7000);
  };

  return (
    <div className="contact-container">
      <div className="mail-container">
        <h1>Ways to Contact Me</h1>
        <Link to="https://www.linkedin.com/in/josealbertofc/" target="_blank">
          <button>
            <img className="linkedin" src={linkedin} alt="LinkedIn" />
            LinkedIn
          </button>
        </Link>
        <Link to="mailto:fuenmayorcoa@gmail.com" target="_blank">
          <button>
            <img className="gmail" src={gmail} alt="Gmail" />
            Gmail
          </button>
        </Link>
        <Link to="https://github.com/JoseAlbertoFC" target="_blank">
          <button>
            <img className="github" src={github} alt="Gmail" />
            GitHub
          </button>
        </Link>
      </div>
      <img className="contact-image" src={contactImg} alt="Image Not Found" />

      {/* <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              validateName(event.target.value);
            }}
          />
          {nameError && <p className="error-message">{nameError}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              validateEmail(event.target.value);
            }}
          />
          {email.length > 0
            ? emailError && <p className="error-message">{emailError}</p>
            : ""}
        </div>
        <div className="form-group">
          <label>Contact Reason</label>
          <textarea
            id="reason"
            name="reason"
            value={reason}
            onChange={(event) => {
              setReason(event.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="submitted-message">
          <p>Successful Notification</p>
        </div>
      )} */}
    </div>
  );
}

export default Contact;
