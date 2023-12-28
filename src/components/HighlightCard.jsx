import { Card } from "react-bootstrap";
import { MdDeliveryDining } from "react-icons/md";

const HighlightCard = ({ details }) => {
  return (
    <Card className="rounded-4 border-0 shadow" style={{ width: "260px" }}>
      <Card.Img
        src={details.image}
        alt={details.food}
        height={180}
        className="rounded-top-4 rounded-bottom-0"
        style={{ objectFit: "cover" }}
      />
      <Card.Title className="mb-0 px-3 pt-3 bg-sec-grey font-karla d-flex justify-content-between align-items-center">
        <h3 className="fs-5 fw-bold">{details.food}</h3>
        <h4 className="fs-5 text-sec-salmon">{details.price}</h4>
      </Card.Title>
      <Card.Body className="px-3 py-3 bg-sec-grey rounded-bottom-4">
        <p style={{ height: "8rem" }}>{details.desc}</p>
        <a
          href="#order"
          className="text-sec-black fw-bold text-decoration-none"
        >
          Order a delivery{" "}
          <MdDeliveryDining className="ms-2" style={{ scale: "1.5" }} />
        </a>
      </Card.Body>
    </Card>
  );
};

export default HighlightCard;
