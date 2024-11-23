import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function LocationCard(props) {
  let location = props.location;
  return (
    <Card className="location-card-view" as={Link} to={location}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.address1}</Card.Title>
        <Card.Title style={{ marginBottom: "1em" }}>{props.address2}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.summary}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default LocationCard;
