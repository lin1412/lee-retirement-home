import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Contact() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here (e.g., send data to a backend service)

    setSubmitted(true);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Contact us
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <div>
          {submitted ? (
            <p>Thank you for your message!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input 
                  type="text" 
                  id="firstName" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input 
                  type="text" 
                  id="lastName" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input 
                  type="phone" 
                  id="phone" 
                  value={email} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                />
              </div>
              <button type="submit">Send</button>
            </form>
          )}
        </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
