import { Card, Button, Badge } from "react-bootstrap";
import placeholder from "../../imgs/placeholder.png";
// import { useNavigate } from "react-router-dom";

const SectorCard = (props) => {
  const { facils, med, dif, xtrem } = props;

  // const navigate =  useNavigate();

  const handleClick = (link) => {
    // navigate(link);
  }

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={props.imgSrc ? props.imgSrc : placeholder} />
      {props.header ? <Card.Header>{props.header}</Card.Header> : null}
      <Card.Body>
        {props.title ? <Card.Title>{props.title}</Card.Title> : null}
        {props.desc ? <Card.Text>{props.desc}</Card.Text> : null}
        {props.btnlink ? (
          <Button disabled variant="primary" onClick={handleClick(props.btnlink)}>{props.btnLabel}</Button>
        ) : null}
      </Card.Body>
      <Card.Footer className="text-muted">
        {/* NUM DE VIES DE CADA NIVELL */}
        <div>
          {facils > 0 ? (
            <>
              <Badge bg="success">{facils}</Badge>{" "}
            </>
          ) : null}
          {med > 0 ? (
            <>
              <Badge bg="warning" text="dark">
                {med}
              </Badge>{" "}
            </>
          ) : null}
          {dif > 0 ? (
            <>
              <Badge bg="danger">{dif}</Badge>{" "}
            </>
          ) : null}
          {xtrem > 0 ? (
            <>
              <Badge bg="dark">{xtrem}</Badge>{" "}
            </>
          ) : null}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default SectorCard;
