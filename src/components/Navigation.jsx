import { useState } from "react";
import { Container, Row, Col, Navbar, Offcanvas } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/Logo.svg";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <Navbar expand="lg" className="bg-white navbar-white">
      <Container fluid className="m-0 p-0">
        <Row className="m-0 p-0 w-100 d-flex justify-content-between justify-content-md-center">
          <Col xs={6} md={5} lg={3}>
            <Navbar.Brand className="d-flex justify-content-center justify-content-md-start p-0">
              <img className="logo" src={logo} alt="Little Lemon Logo" />
            </Navbar.Brand>
          </Col>
          <Col xs={6} md={5} className="d-flex d-lg-none justify-content-end">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={handleShow}
            />
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              className={isTablet ? "w-50" : "w-100"}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="font-karla fw-bold text-sec-black">
                  Navigation
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex justify-content-center font-karla text-center text-sec-black">
                <NavLinks />
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col
            lg={5}
            className="d-none d-lg-flex justify-content-lg-end font-karla fw-bold text-sec-black"
          >
            <NavLinks />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navigation;
