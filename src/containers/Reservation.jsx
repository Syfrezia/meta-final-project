import { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { BookingForm } from "../components";
import { createBooking, fetchBookings } from "../services/api";

const Reservation = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getAllBookings = async () => {
      const data = await fetchBookings();
      setBookings(data);
    };

    getAllBookings();
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "updateTimes":
        const { date, bookings } = action.payload;
        const bookedTimes = bookings
          .filter((booking) => booking.date === date)
          .map((booking) => booking.time);
        const availableTimes = initializeTimes().filter(
          (time) => !bookedTimes.includes(time)
        );
        return availableTimes;
      default:
        return state;
    }
  };

  const initializeTimes = () => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const [availableTimes, dispatch] = useReducer(reducer, null, initializeTimes);

  const navigate = useNavigate();

  const submitForm = async (booking) => {
    try {
      const result = await createBooking(booking);
      if (result) {
        navigate("/confirmed");
      } else {
        console.error("Booking failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onDateChange = (e) => {
    dispatch({
      type: "updateTimes",
      payload: { date: e.target.value, bookings },
    });
  };

  return (
    <>
      <Container fluid className="m-0 py-5">
        <Row className="w-100 m-0 p-0">
          <Col md={6} lg={{ span: 4, offset: 2 }}>
            <h1>Reservation</h1>
            <BookingForm
              bookings={bookings}
              availableTimes={availableTimes}
              onDateChange={onDateChange}
              submitForm={submitForm}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reservation;
