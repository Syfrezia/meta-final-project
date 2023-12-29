import { useState } from "react";
import { Form } from "react-bootstrap";
import { PrimaryButton } from "../components";

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

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
    onSubmit({ date, time, guests, occasion });
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
          aria-label="Reservation date"
        />
      </Form.Group>

      <Form.Group controlId="formTime">
        <Form.Label>Choose time</Form.Label>
        <Form.Select
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          aria-label="Reservation time"
        >
          {availableTimes &&
            availableTimes.map((time, index) => (
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
          aria-label="Number of guests"
        />
      </Form.Group>

      <Form.Group controlId="Occasion">
        <Form.Label>Occasion</Form.Label>
        <Form.Select
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-label="Occasion"
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
