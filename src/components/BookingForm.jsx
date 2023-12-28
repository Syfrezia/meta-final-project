import { useState } from "react";
import { Form } from "react-bootstrap";
import { PrimaryButton } from "../components";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const handleGuestChange = (e) => {
    const guestCount = e.target.valueAsNumber;
    if (!isNaN(guestCount) && guestCount >= 1 && guestCount <= 10) {
      setGuests(guestCount);
    } else {
      setGuests("");
    }
  };

  const handleEmptyGuests = (e) => {
    const guestCount = e.target.valueAsNumber;
    if (isNaN(guestCount)) {
      setGuests(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formDate">
        <Form.Label>Choose date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter reservation date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formTime">
        <Form.Label>Choose time</Form.Label>
        <Form.Select
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formGuests">
        <Form.Label>Number of guests</Form.Label>
        <Form.Control
          type="number"
          placeholder="1"
          min="1"
          max="10"
          name="guests"
          value={guests}
          onChange={handleGuestChange}
          onBlur={handleEmptyGuests}
        />
      </Form.Group>

      <Form.Group controlId="Occasion">
        <Form.Label>Occasion</Form.Label>
        <Form.Select
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </Form.Select>
      </Form.Group>

      <PrimaryButton type="submit">Make Your Reservation</PrimaryButton>
    </Form>
  );
};

export default BookingForm;
