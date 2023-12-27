import { Nav } from "react-bootstrap";
import { NAV } from "../constants";

const NavLinks = () => (
  <Nav className="font-karla fw-bold">
    <Nav.Link href="#home">{NAV.HOME}</Nav.Link>
    <Nav.Link href="#about">{NAV.ABOUT}</Nav.Link>
    <Nav.Link href="#menu">{NAV.MENU}</Nav.Link>
    <Nav.Link href="#reservations">{NAV.RESERVATIONS}</Nav.Link>
    <Nav.Link href="#order">{NAV.ORDER}</Nav.Link>
    <Nav.Link href="#login">{NAV.LOGIN}</Nav.Link>
  </Nav>
);

export default NavLinks;