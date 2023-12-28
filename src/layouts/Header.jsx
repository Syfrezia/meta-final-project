import Navigation from "../components/Navigation";

const Header = () => (
  <header className="position-sticky top-0" style={{ zIndex: "1000" }}>
    <Navigation />
  </header>
);

export default Header;
