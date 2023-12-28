import { Container, Row, Col } from "react-bootstrap";
import restaurant from "../assets/restaurant.jpg";
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
        <Col lg={2}>
          <h5 className="text-pri-green">Doormat Navigation</h5>
          <ul className="d-flex flex-column font-karla list-group">
            {FOOTER_NAV.map((item, index) => (
              <li className="list-group" key={index}>
                <a
                  href={item.link}
                  className="text-decoration-none text-sec-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col lg={2}>
          <h5 className="text-pri-green">Contacts</h5>
          <ul className="d-flex flex-column font-karla list-group">
            {FOOTER_CONTACT.map((item, index) => (
              <li className="list-group" key={index}>
                <a
                  href={item.link}
                  className="text-decoration-none text-sec-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col lg={2}>
          <h5 className="text-pri-green">Social Media Links</h5>
          <ul className="pt-2 d-flex flex-row gap-3 gap-lg-5 font-karla list-group">
            {FOOTER_SOCIAL.map((item, index) => (
              <li className="list-group" key={index}>
                <a
                  href={item.link}
                  className="text-decoration-none text-sec-black" style={{scale: "1.25"}}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
