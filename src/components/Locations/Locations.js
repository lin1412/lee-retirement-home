import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./LocationCard";
import locationOne from "./locationOne.png";
import locationTwo from "./locationTwo.png";
import locationThree from "./locationThree.png";

function Projects() {
  return (
    <Container fluid className="location-section">
      <Container>
        <h1 className="project-heading">
          We have homes in the following locations.
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="location-card">
            <ProjectCard
              imgPath={locationOne}
              title="123 Test Rd, Somewhere, MD, 77777"
              summary="First Best Place"
              location="/locations/one"
            />
          </Col>

          <Col md={4} className="location-card">
            <ProjectCard
              imgPath={locationTwo}
              title="123 Test Rd, Somewhere, MD, 77777"
              summary="Second Best Place"
              location="/locations/two"
              />
          </Col>

          <Col md={4} className="location-card">
            <ProjectCard
              imgPath={locationThree}
              title="123 Test Rd, Somewhere, MD, 77777"
              summary="Third Best Place"
              location="/locations/Three"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
