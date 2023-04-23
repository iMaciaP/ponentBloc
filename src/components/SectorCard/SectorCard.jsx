import { Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const SectorCard = (props) => {
  const { facils, med, dif, xtrem } = props;

  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      {/* <Card.Img variant="top" src={props.imgSrc ? props.imgSrc : placeholder} />
      {props.header ? <Card.Header>{props.header}</Card.Header> : null} */}
      <Card.Body>
        {props.title ? <Card.Title>{props.title}</Card.Title> : null}
        {props.desc ? <Card.Text>{props.desc}</Card.Text> : null}
        {props.btnlink ? (
          <Button variant="primary" onClick={() => navigate(props.btnlink)}>
            {props.btnLabel}
          </Button>
        ) : null}
      </Card.Body>
      <Card.Footer className="text-muted">
        {/* NUM DE VIES DE CADA NIVELL */}
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
        >
          {facils > 0 ? (
            <Tooltip title="IV -> 6a">
              <Box>
                <Badge bg="success">{facils}</Badge>{" "}
              </Box>
            </Tooltip>
          ) : null}
          {med > 0 ? (
            <Tooltip title="6b -> 7a">
              <Box>
                <Badge bg="warning" text="dark">
                  {med}
                </Badge>{" "}
              </Box>
            </Tooltip>
          ) : null}
          {dif > 0 ? (
            <Tooltip title="7a -> 7b+">
              <Box>
                <Badge bg="danger">{dif}</Badge>{" "}
              </Box>
            </Tooltip>
          ) : null}
          {xtrem > 0 ? (
            <Tooltip title="7c -> ?¿">
              <Box>
                <Badge bg="dark">{xtrem}</Badge>{" "}
              </Box>
            </Tooltip>
          ) : null}
        </Stack>
      </Card.Footer>
    </Card>
  );
};

export default SectorCard;
