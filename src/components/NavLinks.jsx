import { Link } from "react-router-dom";
import { NAV } from "../constants";

const NavLinks = () => (
  <nav className="d-flex align-items-center">
    <ul className="m-0 p-0 d-flex gap-4 font-karla fw-semibold nav-list">
      <li>
        <Link to="/" className="nav-link">
          {NAV.HOME}
        </Link>
      </li>
      <li>
        <a href="#about" className="nav-link">
          {NAV.ABOUT}
        </a>
      </li>
      <li>
        <a href="#menu" className="nav-link">
          {NAV.MENU}
        </a>
      </li>
      <li>
        <Link to="/booking" className="nav-link">
          {NAV.RESERVATIONS}
        </Link>
      </li>
      <li>
        <a href="#order" className="nav-link">
          {NAV.ORDER}
        </a>
      </li>
      <li>
        <a href="#login" className="nav-link">
          {NAV.LOGIN}
        </a>
      </li>
    </ul>
  </nav>
);

export default NavLinks;
