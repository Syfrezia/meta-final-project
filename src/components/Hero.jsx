import { Container, Row, Col, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import heroImg from "../assets/restauranfood.jpg";
import { HERO } from "../constants";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 575 });

  return (
    <Container fluid className={`${isMobile ? "vh-50" : "vh-75"} m-0 p-0`}>
      <Row
        className={`bg-pri-green ${
          isMobile ? "h-100" : "h-75"
        } m-0 p-0 d-flex justify-content-center position-relative`}
      >
        <Col md={4} lg={3} className="px-4 px-md-0 d-flex align-items-center">
          <div className="w-100">
            <h1 className="font-markazi fs-title text-pri-yellow">
              {HERO.TITLE}
            </h1>
            <h2 className="font-markazi text-white">{HERO.SUBTITLE}</h2>
            <p className="font-karla text-white">{HERO.DESCRIPTION}</p>
            <Button className="mt-3 px-4 py-2 font-karla rounded-4 bg-pri-yellow text-black fw-bolder">
              {HERO.BUTTON}
            </Button>
          </div>
        </Col>
        <Col md={6} lg={4} className="d-none d-md-flex justify-content-end">
          <div className="position-absolute top-20">
            <img
              src={heroImg}
              alt="restaurant food"
              width={320}
              height={360}
              className="rounded-4"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
