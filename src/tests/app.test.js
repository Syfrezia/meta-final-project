import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Reservation from "../containers/Reservation";
import { BookingForm } from "../components";
import { initializeTimes, updateTimes } from "../containers/Reservation";

test("renders Reservation component", () => {
  render(
    <Router>
      <Reservation />
    </Router>
  );
  const linkElement = screen.getByText("Reservation");
  expect(linkElement).toBeInTheDocument();
});

test("BookingForm can be submitted", () => {
  const handleSubmit = jest.fn();

  const { getByLabelText, getByText, getByDisplayValue } = render(
    <Router>
      <BookingForm onSubmit={handleSubmit} />
    </Router>
  );

  fireEvent.change(getByLabelText("Choose date"), {
    target: { value: "2024-02-01" },
  });
  fireEvent.change(getByLabelText("Number of guests"), {
    target: { value: "2" },
  });
  fireEvent.change(getByLabelText("Occasion"), {
    target: { value: "Birthday" },
  });

  expect(getByDisplayValue("2024-02-01")).toBeInTheDocument();
  expect(getByDisplayValue("2")).toBeInTheDocument();
  expect(getByDisplayValue("Birthday")).toBeInTheDocument();

  fireEvent.click(getByText("Make Your Reservation"));

  expect(handleSubmit).toHaveBeenCalled();
});

test("initializeTimes", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

describe("updateTimes", () => {
  test("returns the same state for now", () => {
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: "updateTimes", payload: "2022-12-31" };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
  });
});
