import { Container, Row, Col } from "react-bootstrap";
import { ABOUT } from "../constants";

const About = () => {
  return (
    <Container fluid className="m-0 py-5 bg-pri-green">
      <Row className="w-100 m-0 p-0 d-flex justify-content-center">
        <Col md={10} lg={4} className="d-flex flex-column justify-content-center">
          <h2 className="font-markazi fs-highlight text-pri-yellow">
            {ABOUT.TITLE}
          </h2>
          <h3 className="font-markazi text-white fs-2">{ABOUT.SUBTITLE}</h3>
          <p className="font-karla text-white fs-5 lh-sm">
            {ABOUT.DESCRIPTION}
          </p>
        </Col>
        <Col lg={4} className="d-none d-lg-block">
          <div className="position-relative" style={{ height: "35rem" }}>
            <img
              src={ABOUT.PICTURES[0]}
              alt="Mario and Adrian"
              width={300}
              height={400}
              className="position-absolute rounded-4 picture-1"
              style={{ objectFit: "cover", objectPosition: "80% 100%" }}
            />
            <img
              src={ABOUT.PICTURES[1]}
              alt="Mario and Adrian"
              width={300}
              height={400}
              className="position-absolute rounded-4 picture-2"
              style={{ objectFit: "cover", objectPosition: "80% 100%" }}
            />
          </div>
        </Col>
        <Col className="mt-4 d-flex d-lg-none justify-content-center">
          <div className="d-flex flex-column flex-md-row gap-4">
            <img
              src={ABOUT.PICTURES[0]}
              alt="Mario and Adrian"
              width={300}
              height={300}
              className="rounded-4 shadow"
              style={{ objectFit: "cover", objectPosition: "80% 100%" }}
            />
            <img
              src={ABOUT.PICTURES[1]}
              alt="Mario and Adrian"
              width={300}
              height={300}
              className="rounded-4 shadow"
              style={{ objectFit: "cover", objectPosition: "80% 100%" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
