import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who We are and what we do
            </h1>
        </Row>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
            <h1 style={{ fontSize: "1.5em", paddingBottom: 15 }}>
            At Golden Time and Sah Rang Bong Care, we are dedicated to providing the highest standard of care to our residents.
            </h1>
        </Row>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
            <h1 style={{ fontSize: "1.5em", paddingBottom: 15 }}>
            In our facilities, we understand that each person’s needs and preferences are unique. That’s why we offer a variety of services tailored to the individual, ensuring that our residents feel respected, valued, and supported. With a team of highly trained professionals, we provide assistance with daily living activities, healthcare, and social engagement, all while maintaining a focus on dignity and quality of life.
                          </h1>
        </Row>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
            <h1 style={{ fontSize: "1.5em", paddingBottom: 15 }}>
            Our community is more than just a place to live — it’s a place to thrive. From engaging activities to comfortable living spaces, we create a nurturing atmosphere where residents can build lasting friendships, discover new hobbies, and enjoy every day to the fullest. Whether you’re seeking short-term care or a long-term living solution,  We are here to help your loved ones feel right at home.
                          </h1>
        </Row>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
            <h1 style={{ fontSize: "1.5em", paddingBottom: 15 }}>
            Join us at Golden Time or Sah Rang Bong Care, where care and compassion come together to support each resident’s journey.
            </h1>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
