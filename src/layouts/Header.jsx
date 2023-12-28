import { Navigation } from "../components";

const Header = () => (
  <header className="position-sticky top-0" style={{ zIndex: "1000" }}>
    <Navigation />
  </header>
);

export default Header;
