import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mission from "../../assets/misson.png";
import services from "../../assets/services.png";
import community from "../../assets/community.png";
import joinus from "../../assets/joinus.png";

function About() {
  return (
    <main className="main-content container">
      <section>
        <div>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Know Who We are and what we do
        </h1>
        </div>
      </section>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <img src={mission} alt="misson" className="about-image" />
          </div>
          <div className="textbox-right">
            <h2>Mission</h2>
            <p>At Golden Time and Sah Rang Bong Care, we are dedicated to providing the highest standard of care to our residents.</p>
          </div>
        </div>
      </section>
      <section className="hero mb-40">
        <div className="hero-content _left">
          <div className="textbox-right mr-top-50 pr-0">
            <h2>Services we provide</h2>
            <p>In our facilities, we understand that each person’s needs and preferences are unique. That’s why we offer a variety of services tailored to the individual, ensuring that our residents feel respected, valued, and supported. With a team of highly trained professionals, we provide assistance with daily living activities, healthcare, and social engagement, all while maintaining a focus on dignity and quality of life.</p>
          </div>
          <div className="hero-image">
            <img src={services} alt="services" className="about-image" />
          </div>
        </div>
      </section>
      <section className="hero mb-40">
        <div className="hero-content pr-0">
          <div className="hero-image mr-3 _left">
            <img src={community} alt="community" className="about-image" />
          </div>
          <div className="textbox-right mr-top-50">
            <h2>Community Engagement</h2>
            <p>Our community is more than just a place to live — it’s a place to thrive. From engaging activities to comfortable living spaces, we create a nurturing atmosphere where residents can build lasting friendships, discover new hobbies, and enjoy every day to the fullest. Whether you’re seeking short-term care or a long-term living solution,  We are here to help your loved ones feel right at home.</p>
          </div>
        </div>
      </section>
      <section className="hero mb-40">
        <div className="hero-content _left">
          <div className="textbox-right mr-top-50 pr-0">
            <h2>Join us Today!</h2>
            <p>Join us at Golden Time or Sah Rang Bong Care, where care and compassion come together to support each resident’s journey.</p>
          </div>
          <div className="hero-image">
            <img src={joinus} alt="services" className="about-image" />
          </div>
        </div>
      </section>
    </main>
    // <Container fluid className="about-section">
    //   <Container>
    //     <Row style={{ justifyContent: "center", padding: "10px" }}>
    //         <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
    //           Know Who We are and what we do
    //         </h1>
    //     </Row>
    //     <Row style={{ justifyContent: "left", padding: "10px" }}>
    //         <h1 style={{ fontSize: "1.5em", paddingBottom: 15 }}>
    //         At Golden Time and Sah Rang Bong Care, we are dedicated to providing the highest standard of care to our residents.
    //         </h1>
    //     </Row>
    //     <Row style={{ justifyContent: "left", padding: "10px" }}>
    //         <h1 style={{ fontSize: "1.5em", paddingBottom: 15 }}>
    //         In our facilities, we understand that each person’s needs and preferences are unique. That’s why we offer a variety of services tailored to the individual, ensuring that our residents feel respected, valued, and supported. With a team of highly trained professionals, we provide assistance with daily living activities, healthcare, and social engagement, all while maintaining a focus on dignity and quality of life.
    //                       </h1>
    //     </Row>
    //     <Row style={{ justifyContent: "left", padding: "10px" }}>
    //         <h1 style={{ fontSize: "1.5em", paddingBottom: 15 }}>
    //         Our community is more than just a place to live — it’s a place to thrive. From engaging activities to comfortable living spaces, we create a nurturing atmosphere where residents can build lasting friendships, discover new hobbies, and enjoy every day to the fullest. Whether you’re seeking short-term care or a long-term living solution,  We are here to help your loved ones feel right at home.
    //                       </h1>
    //     </Row>
    //     <Row style={{ justifyContent: "left", padding: "10px" }}>
    //         <h1 style={{ fontSize: "1.5em", paddingBottom: 15 }}>
    //         Join us at Golden Time or Sah Rang Bong Care, where care and compassion come together to support each resident’s journey.
    //         </h1>
    //     </Row>
    //   </Container>
    // </Container>
  );
}

export default About;
