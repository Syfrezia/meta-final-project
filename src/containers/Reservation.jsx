import { useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BookingForm } from "../components";

export const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "updateTimes":
      // Implement your logic to update the available times based on the selected date
      // For now, return the same times regardless of the date
      return state;
    default:
      return state;
  }
};

const Reservation = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

  const handleDateChange = (e) => {
    dispatch({ type: "updateTimes", payload: e.target.value });
  };

  return (
    <>
      <Container fluid className="m-0 py-5">
        <Row>
          <Col md={6} lg={4}>
            <h1>Reservation</h1>
            <BookingForm
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reservation;
