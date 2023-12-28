import { Nav } from "react-bootstrap";
import { NAV } from "../constants";

const NavLinks = () => (
  <Nav className="font-karla fw-bold list-group">
    <Nav.Link href="#home" className="list-group">
      {NAV.HOME}
    </Nav.Link>
    <Nav.Link href="#about" className="list-group">
      {NAV.ABOUT}
    </Nav.Link>
    <Nav.Link href="#menu" className="list-group">
      {NAV.MENU}
    </Nav.Link>
    <Nav.Link href="#reservations" className="list-group">
      {NAV.RESERVATIONS}
    </Nav.Link>
    <Nav.Link href="#order" className="list-group">
      {NAV.ORDER}
    </Nav.Link>
    <Nav.Link href="#login" className="list-group">
      {NAV.LOGIN}
    </Nav.Link>
  </Nav>
);

export default NavLinks;
