import { useState } from "react";
import { Form } from "react-bootstrap";
import { PrimaryButton } from "../components";

const BookingForm = ({ availableTimes, onDateChange, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    const date = new Date();
    const todayDate = date.toISOString().split("T")[0];
    if (date === "") {
      setDate(todayDate);
    }
    if (newDate < todayDate) {
      return;
    }
    setDate(newDate);
    onDateChange(e);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTime(newTime);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  return (
    <Form onSubmit={handleSubmit} aria-label="Booking Form">
      <Form.Group className="mt-3" controlId="formDate">
        <Form.Label>Choose date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter reservation date"
          name="date"
          value={date}
          required
          onChange={handleDateChange}
          aria-label="Reservation date"
        />
      </Form.Group>

      <Form.Group className="mt-3" controlId="formTime">
        <Form.Label>Choose time</Form.Label>
        <Form.Select
          name="time"
          value={time}
          required
          onChange={handleTimeChange}
          aria-label="Reservation time"
        >
          <option value="">-- Select a time --</option>
          {availableTimes &&
            availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mt-3" controlId="formGuests">
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

      <Form.Group className="mt-3" controlId="Occasion">
        <Form.Label>Occasion</Form.Label>
        <Form.Select
          name="occasion"
          value={occasion}
          required
          onChange={(e) => setOccasion(e.target.value)}
          aria-label="Occasion"
        >
          <option value="">-- Select an occasion --</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </Form.Select>
      </Form.Group>

      <PrimaryButton type="submit" className="mt-4">
        Make Your Reservation
      </PrimaryButton>
    </Form>
  );
};

export default BookingForm;
