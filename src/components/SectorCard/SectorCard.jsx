import { Card, Button, Badge } from "react-bootstrap";
import placeholder from "../../imgs/placeholder.png";

const SectorCard = (props) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={props.imgSrc ? props.imgSrc : placeholder} />
      {props.header ? <Card.Header>{props.header}</Card.Header> : null}
      <Card.Body>
        {props.title ? <Card.Title>{props.title}</Card.Title> : null}
        {props.desc ? <Card.Text>{props.desc}</Card.Text> : null}
        {props.btnLabel ? (
          <Button variant="primary">{props.btnLabel}</Button>
        ) : null}
      </Card.Body>
      <Card.Footer className="text-muted">
        {/* NUM DE VIES DE CADA NIVELL */}
        <div>
          <Badge bg="success">12</Badge>{" "}
          <Badge bg="warning" text="dark">
            7
          </Badge>{" "}
          <Badge bg="danger">3</Badge>{" "}
          <Badge bg="dark">5</Badge>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default SectorCard;
