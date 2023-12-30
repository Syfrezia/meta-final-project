import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ConfirmedTable, PrimaryButton } from "../components";

const ConfirmedPage = () => {
  return (
    <Container fluid className="m-0 py-5 px-0">
      <Row className="w-100 m-0 p-0 d-flex justify-content-center">
        <Col lg={8}>
          <h2>Your booking has been confirmed!</h2>
          <ConfirmedTable />
        </Col>
      </Row>
      <Row className="w-100 m-0 p-0 d-flex justify-content-center">
        <Col lg={8}>
          <PrimaryButton as={Link} to="/">
            Back to Home
          </PrimaryButton>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmedPage;
