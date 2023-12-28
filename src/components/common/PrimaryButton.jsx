import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PrimaryButton = ({ to, children }) => (
  <Button
    as={Link}
    to={to}
    className="mt-3 px-4 py-2 font-karla rounded-4 bg-pri-yellow border border-2 border-white text-black fw-bolder"
  >
    {children}
  </Button>
);

export default PrimaryButton;
