import React, { useState } from 'react';
import contactImage from '../../assets/contact.png';
import { MdOutlineEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";


function Contact() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [message, setMessage] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here (e.g., send data to a backend service)

    // setSubmitted(true);
  };

  return (
    // <Container fluid className="contact-section">
    //   <Container>
    //     <h1 className="project-heading">
    //       Contact us
    //     </h1>
    //     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    //     <div>
    //       {submitted ? (
    //         <p>Thank you for your message!</p>
    //       ) : (
    //         <form onSubmit={handleSubmit}>
    //           <div>
    //             <label htmlFor="firstName">First Name:</label>
    //             <input 
    //               type="text" 
    //               id="firstName" 
    //               value={firstName} 
    //               onChange={(e) => setFirstName(e.target.value)} 
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="lastName">Last Name:</label>
    //             <input 
    //               type="text" 
    //               id="lastName" 
    //               value={lastName} 
    //               onChange={(e) => setLastName(e.target.value)} 
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="email">Email:</label>
    //             <input 
    //               type="email" 
    //               id="email" 
    //               value={email} 
    //               onChange={(e) => setEmail(e.target.value)} 
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="phone">Phone:</label>
    //             <input 
    //               type="phone" 
    //               id="phone" 
    //               value={email} 
    //               onChange={(e) => setPhone(e.target.value)} 
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="message">Message:</label>
    //             <textarea 
    //               id="message" 
    //               value={message} 
    //               onChange={(e) => setMessage(e.target.value)} 
    //             />
    //           </div>
    //           <button type="submit">Send</button>
    //         </form>
    //       )}
    //     </div>
    //     </Row>
    //   </Container>
    // </Container>
    <div className="contact-form contact-section">
      <div className="form-container">
        <div className="form-content">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                value={name}
                className="custom-input"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <MdDriveFileRenameOutline className="icon" style={{ color: "white" }}/>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                value={email}
                className="custom-input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MdOutlineEmail className="icon" style={{ color: "white" }}/>
            </div>
            <div className="form-group">
              <input
                type="phone"
                id="phone"
                value={phone}
                className="custom-input"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <CiPhone className="icon" style={{ color: "white" }}/>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                value={message}
                className="custom-input"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
              />
              <MdOutlineMessage className="icon" style={{ color: "white" }}/>
            </div>
            <button className="contact-form-button" type="submit">Send Message</button>
          </form>
        </div>
        <div className="image-container">
          <img src={contactImage} alt="Contact Us" />
        </div>
      </div>
  </div>
  );
}

export default Contact;
