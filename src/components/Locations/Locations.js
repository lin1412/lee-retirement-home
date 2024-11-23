import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./LocationCard";
import srbLogo from "./Sah_Rang_Bong_Logo.png";
import srb2Logo from "./Sah_Rang_Bong_II_Logo.png";
import gtLogo from "./Golden_Time_Logo.jpg";

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
              imgPath={gtLogo}
              address1="10705 Vista Road"
              address2="Columbia, MD 21044"
              location="/locations/golden-time"
            />
          </Col>

          <Col md={4} className="location-card">
            <ProjectCard
              imgPath={srbLogo}
              address1="10717 Hunting Lane"
              address2="Columbia, MD 21044"
              location="/locations/sah-rang-bong"
            />
          </Col>

          <Col md={4} className="location-card">
            <ProjectCard
              imgPath={srb2Logo}
              address1="10804 Hunting Lane"
              address2="Columbia, MD 21044"
              location="/locations/sah-rang-bong-2"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
