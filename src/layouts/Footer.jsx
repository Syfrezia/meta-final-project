import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { restaurant } from "../assets";
import { FOOTER_NAV, FOOTER_CONTACT, FOOTER_SOCIAL } from "../constants";

const Footer = () => {
  return (
    <Container fluid className="m-0 py-5 bg-sec-grey">
      <Row className="w-100 m-0 p-0 d-flex justify-content-center gap-3 gap-lg-0">
        <Col lg={2} className="d-none d-lg-block">
          <img
            src={restaurant}
            alt=""
            width={150}
            height={280}
            className="rounded-3"
            style={{ objectFit: "cover", objectPosition: "40% 100%" }}
          />
        </Col>
        <Col md={3} lg={2}>
          <h5 className="text-pri-green">Doormat Navigation</h5>
          <ul className="d-flex flex-column font-karla nav-list">
            {FOOTER_NAV.map((item, index) => (
              <li className="nav-link" key={index}>
                <Link
                  to={item.link}
                  className="text-decoration-none text-sec-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col md={3} lg={2}>
          <h5 className="text-pri-green">Contacts</h5>
          <ul className="d-flex flex-column font-karla nav-list">
            {FOOTER_CONTACT.map((item, index) => (
              <li className="nav-link" key={index}>
                <Link
                  href={item.link}
                  className="text-decoration-none text-sec-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col md={3} lg={2}>
          <h5 className="text-pri-green">Social Media Links</h5>
          <ul className="pt-2 d-flex flex-row gap-3 gap-lg-5 font-karla nav-list">
            {FOOTER_SOCIAL.map((item, index) => (
              <li className="nav-link" key={index}>
                <Link
                  href={item.link}
                  className="text-decoration-none text-sec-black"
                  style={{ scale: "1.25" }}
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row className="w-100 mt-3 mx-0 p-0 d-flex justify-content-center text-center">
        <Col>
          <p>copyright &copy; 2023 by Syafrie Mufariza</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
