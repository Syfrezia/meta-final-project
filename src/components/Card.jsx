import { Card } from "react-bootstrap";
import { MdDeliveryDining } from "react-icons/md";

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
      <Card.Title className="px-3 pt-3 font-karla d-flex justify-content-between align-items-center">
        <h3 className="fs-5 fw-bold">{details.food}</h3>
        <h4 className="fs-5 text-sec-salmon">{details.price}</h4>
      </Card.Title>
      <Card.Body className="px-3 pt-0 pb-3">
        <p style={{ height: "8rem" }}>{details.desc}</p>
        <a
          href="#order"
          className="text-sec-black fw-bold text-decoration-none"
        >
          Order a delivery <MdDeliveryDining className="ms-2" style={{scale: "1.5"}} />
        </a>
      </Card.Body>
    </Card>
  );
};

export default HighlightCard;
