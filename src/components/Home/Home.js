import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./home.png";
import Type from "./Type";

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
      name: 'John Doe',
      quote: 'This is a great product!',
      role: 'Software Engineer',
      image: 'https://example.com/john-doe.jpg',
    },
    {
      name: 'John Doe',
      quote: 'This is a great product!',
      role: 'Software Engineer',
      image: 'https://example.com/john-doe.jpg',
    },
    {
      name: 'John Doe',
      quote: 'This is a great product!',
      role: 'Software Engineer',
      image: 'https://example.com/john-doe.jpg',
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
          Welcome to Golden Time & Sah Rang Bong Care Assisted Living
        </h1>
        <span>Where compassionate care meets comfort and community</span>
        <p style={{ paddingTop: 40, fontSize: '1.5em' }}>
          We are a dedicated assisted living facility committed to providing a warm, safe, and enriching environment for seniors. Our mission is to enhance the lives of our residents by offering personalized care, fostering independence, and promoting well-being.
        </p>
      </div>
    </section>
    <section>
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
