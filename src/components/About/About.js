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

      </Container>
    </Container>
  );
}

export default About;
