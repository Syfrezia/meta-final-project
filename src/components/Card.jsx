import { Card } from "react-bootstrap";

const HighlightCard = ({ details }) => {
  return (
    <Card className="rounded-4" style={{ width: "260px" }}>
      <Card.Img
        src={details.image}
        alt={details.food}
        height={180}
        className="rounded-top-4"
        style={{ objectFit: "cover" }}
      />
      <Card.Title className="px-3 pt-3 font-karla">
        <h3 className="">{details.food}</h3>
        <h4 className="">{details.price}</h4>
      </Card.Title>
      <Card.Body className="px-3 py-0">
        <p style={{height: "8rem"}}>{details.desc}</p>
        <a href="#order">Order a delivery (icon)</a>
      </Card.Body>
    </Card>
  );
};

export default HighlightCard;
