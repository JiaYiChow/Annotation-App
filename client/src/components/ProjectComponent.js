import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

export default function ProjectCard({ projectName, onClick }) {
  return (
    <Card.Group>
      <Card onClick={onClick}>
        <Card.Header>{projectName}</Card.Header>
      </Card>
    </Card.Group>
  );
}
