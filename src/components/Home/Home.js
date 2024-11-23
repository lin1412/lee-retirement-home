import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./home.png";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to Golden Time & Sah Rang Bong Care Assisted Living, where compassionate care meets comfort and community. We are a dedicated assisted living facility committed to providing a warm, safe, and enriching environment for seniors. Our mission is to enhance the lives of our residents by offering personalized care, fostering independence, and promoting well-being.
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
