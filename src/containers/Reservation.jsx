import { Container, Row, Col } from "react-bootstrap";
import { BookingForm } from "../components";

const Reservation = () => {
  return (
    <Container fluid className="m-0 py-5">
      <Row>
        <Col md={6} lg={4}>
          <h1>Reservation</h1>
          <BookingForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Reservation;
