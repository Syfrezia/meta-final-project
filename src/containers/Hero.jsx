import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import heroImg from "../assets/restauranfood.jpg";
import PrimaryButton from "../components/common/PrimaryButton";
import { HERO } from "../constants";

const Hero = () => {
  const isTablet = useMediaQuery({ maxWidth: 991 });

  return (
    <Container fluid className={`${isTablet ? "vh-50" : "vh-75"} m-0 p-0`}>
      <Row
        className={`bg-pri-green ${
          isTablet ? "h-100" : "h-75"
        } m-0 p-0 d-flex justify-content-center position-relative`}
      >
        <Col md={5} lg={4} className="px-4 px-md-0 d-flex align-items-center">
          <div className="w-100">
            <h1 className="font-markazi fs-title fs-md-title fs-md-1 text-pri-yellow">
              {HERO.TITLE}
            </h1>
            <h2 className="font-markazi text-white fs-1">{HERO.SUBTITLE}</h2>
            <p className="font-karla text-white fs-5">{HERO.DESCRIPTION}</p>
            <PrimaryButton
              to="/booking"
              className="mt-3 px-4 py-2 font-karla rounded-4 bg-pri-yellow border border-2 border-white text-black fw-bolder"
            >
              {HERO.BUTTON}
            </PrimaryButton>
          </div>
        </Col>
        <Col
          md={5}
          lg={4}
          className="d-none d-md-flex align-items-md-center justify-content-end"
        >
          <div className="position-absolute top-20">
            <img
              src={heroImg}
              alt="restaurant food"
              width={isTablet ? 320 : 360}
              height={isTablet ? 360 : 400}
              className="rounded-4"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
