import { Button } from "react-bootstrap";

const PrimaryButton = ({ as, to, type, children }) => (
  <Button
    as={as}
    to={to}
    type={type}
    className="mt-3 px-4 py-2 font-karla rounded-4 bg-pri-yellow border border-2 border-white text-black fw-bolder"
  >
    {children}
  </Button>
);

export default PrimaryButton;
