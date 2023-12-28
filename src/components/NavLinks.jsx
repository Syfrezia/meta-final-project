import { Link } from "react-router-dom";
import { NAV } from "../constants";

const NavLinks = ({handleClose}) => (
  <nav className="d-flex align-items-lg-center">
    <ul className="m-0 p-0 d-flex flex-column flex-lg-row gap-4 font-karla fw-semibold nav-list">
      <li>
        <Link to="/" className="nav-link" onClick={handleClose}>
          {NAV.HOME}
        </Link>
      </li>
      <li>
        <a href="#about" className="nav-link" onClick={handleClose}>
          {NAV.ABOUT}
        </a>
      </li>
      <li>
        <a href="#menu" className="nav-link" onClick={handleClose}>
          {NAV.MENU}
        </a>
      </li>
      <li>
        <Link to="/booking" className="nav-link" onClick={handleClose}>
          {NAV.RESERVATIONS}
        </Link>
      </li>
      <li>
        <a href="#order" className="nav-link" onClick={handleClose}>
          {NAV.ORDER}
        </a>
      </li>
      <li>
        <a href="#login" className="nav-link" onClick={handleClose}>
          {NAV.LOGIN}
        </a>
      </li>
    </ul>
  </nav>
);

export default NavLinks;
