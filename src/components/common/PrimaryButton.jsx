import { Button } from "react-bootstrap";

const PrimaryButton = ({
  as,
  to,
  type,
  disabled,
  className = "",
  children,
}) => (
  <Button
    as={as}
    to={to}
    type={type}
    disabled={disabled}
    className={`px-4 py-2 font-karla rounded-4 bg-pri-yellow border border-2 border-white text-black fw-bolder ${className}`}
  >
    {children}
  </Button>
);

export default PrimaryButton;
