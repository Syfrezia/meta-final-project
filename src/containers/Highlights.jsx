import { Container, Row, Col } from "react-bootstrap";
import { HighlightCard } from "../components";
import { PrimaryButton } from "../components";
import { HIGHLIGHTS, HIGHLIGHTS_TITLE } from "../constants";

const Highlights = () => {
  return (
    <Container fluid className="py-5 pt-lg-0 pb-lg-5 p-0">
      <Row className="w-100 m-0 p-0 d-flex justify-content-center align-items-center">
        <Col
          lg={4}
          className="m-0 p-0 d-flex justify-content-center justify-content-lg-start align-items-center"
        >
          <h2 className="font-markazi fs-highlight">{HIGHLIGHTS_TITLE.NAME}</h2>
        </Col>
        <Col
          lg={4}
          className="m-0 p-0 d-flex justify-content-center justify-content-lg-end align-items-center"
        >
          <PrimaryButton to="/menu">{HIGHLIGHTS_TITLE.BUTTON}</PrimaryButton>
        </Col>
      </Row>
      <Row className="w-100 m-0 pt-4 px-0 d-flex justify-content-center">
        {HIGHLIGHTS.map((menu) => (
          <Col
            xs={10}
            md={4}
            lg={3}
            className="mt-4 d-flex justify-content-center"
          >
            <HighlightCard details={menu} key={menu.food} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Highlights;
