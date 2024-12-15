import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./home.png";
import Type from "./Type";
import userImg from "../../user.png";

const Testimonial = ({ testimonial }) => {
  const { name, quote, role, image } = testimonial;
  return (
    <div className="testimonial">
      <img src={image} alt={name} className="testimonial-image" />
      <div className="testimonial-content">
        <p className="testimonial-quote">{quote}</p>
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-role">{role}</p>
      </div>
    </div>
  );
};

function Home() {
  const testimonials = [
    {
      name: 'Rolwyn Quadras',
      quote: 'The service is so good, I feel like I can walk again',
      role: 'Retired Citizen',
      image: userImg,
    },
    {
      name: 'Peter Lee',
      quote: 'Living with other veterans like myself feels good. We share stories about our army days',
      role: 'Retired Army Veteran',
      image: userImg,
    },
    {
      name: 'Hang China',
      quote: 'China! China China!',
      role: 'Software Engineer',
      image: userImg,
    }
    // ... more testimonials
  ];
  return (
    <div>
    {/*<div className="overlay"></div>*/}
    <section className="landingimg">
      <div className="overlay"></div>
      <div className="landing-container">
        <h1 style={{ paddingBottom: 15 }} className="heading">
          Welcome to <span className="_name">Golden Time</span> & Sah Rang Bong Care Assisted Living
        </h1>
        <span>Where compassionate care meets comfort and community</span>
        <p style={{ paddingTop: 40, fontSize: '1.5em' }}>
          We are a dedicated assisted living facility committed to providing a warm, safe, and enriching environment for seniors. Our mission is to enhance the lives of our residents by offering personalized care, fostering independence, and promoting well-being.
        </p>
      </div>
    </section>
    <section className="testimonial_wrapper">
    <div className="testimonial_title">
      <h4>Testimonials</h4>
    </div>
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} testimonial={testimonial} />
      ))}
    </div>
    </section>
    </div>
  );
}

export default Home;
