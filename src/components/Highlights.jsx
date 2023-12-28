import { Container, Row, Col, Button } from "react-bootstrap";
import HighlightCard from "./Card";
import { HIGHLIGHTS } from "../constants";

const Highlights = () => {
  return (
    <Container fluid className="py-5 pt-lg-0 pb-lg-5 p-0">
      <Row className="w-100 m-0 p-0 d-flex justify-content-center align-items-center">
        <Col
          lg={4}
          className="m-0 p-0 d-flex justify-content-center justify-content-lg-start align-items-center"
        >
          <h2 className="font-markazi fs-highlight">This weeks' specials!</h2>
        </Col>
        <Col
          lg={3}
          className="m-0 p-0 d-flex justify-content-center justify-content-lg-end align-items-center"
        >
          <Button className="px-4 py-2 font-karla rounded-4 bg-pri-yellow border border-2 border-white text-black fw-bolder">
            Online Menu
          </Button>
        </Col>
      </Row>
      <Row className="w-100 m-0 pt-4 px-0 d-flex justify-content-center">
        {HIGHLIGHTS.map((menu) => (
          <Col xs={10} md={4} lg={3} className="mt-4 d-flex justify-content-center">
            <HighlightCard details={menu} key={menu.food} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Highlights;
