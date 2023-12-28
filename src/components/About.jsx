import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { ABOUT } from "../constants";
import AboutImage from "./AboutImage";

const About = () => {
  const isTablet = useMediaQuery({ maxWidth: 991 });

  return (
    <Container fluid className="m-0 py-5 bg-pri-green">
      <Row className="w-100 m-0 p-0 d-flex justify-content-center">
        <Col
          md={10}
          lg={4}
          className="d-flex flex-column justify-content-center"
        >
          <h2 className="font-markazi fs-highlight text-pri-yellow">
            {ABOUT.TITLE}
          </h2>
          <h3 className="font-markazi text-white fs-2">{ABOUT.SUBTITLE}</h3>
          <p className="font-karla text-white fs-5 lh-sm">
            {ABOUT.DESCRIPTION}
          </p>
        </Col>
        <Col
          lg={4}
          className={
            isTablet
              ? "mt-4 d-flex d-lg-none justify-content-center"
              : "d-none d-lg-block"
          }
        >
          <div
            className={
              isTablet
                ? "d-flex flex-column flex-md-row gap-4"
                : "position-relative"
            }
            style={isTablet ? {} : { height: "35rem" }}
          >
            {ABOUT.PICTURES.map((picture, index) => (
              <AboutImage
                key={index}
                src={picture}
                alt="Mario and Adrian"
                className={`${isTablet ? "" : "position-absolute"} picture-${
                  index + 1
                }`}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
