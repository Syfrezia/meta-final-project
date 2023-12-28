import { Container, Row, Col } from "react-bootstrap";
import ReviewCard from "../components/ReviewCard";
import { TESTIMONIALS } from "../constants";

const Testimonials = () => {
  return (
    <Container fluid className="mt-5 py-5 bg-sec-grey">
      <Row className="w-100 m-0 p-0 d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <h2 className="font-markazi fs-highlight text-pri-green">
            Testimonials
          </h2>
        </Col>
      </Row>
      <Row className="w-100 m-0 p-0 d-flex justify-content-center">
        {TESTIMONIALS.map((testimonial) => (
          <Col xs={10} md={5} lg={2} className="mt-4">
            <ReviewCard testimonial={testimonial} key={testimonial.name} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
