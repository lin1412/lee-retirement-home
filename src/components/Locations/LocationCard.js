import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function LocationCard(props) {
  let location = props.location;
  return (
    <Card className="location-card-view" as={Link} to={location}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ marginBottom: "1em" }}>{props.title}</Card.Title>
        <Card.Subtitle>
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.summary}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.point1}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default LocationCard;
