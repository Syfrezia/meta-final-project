import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { fetchBookings } from "../services/api";

const ConfirmedTable = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const fetchLatestBooking = async () => {
      const bookings = await fetchBookings();
      const latestBooking = bookings[bookings.length - 1];
      setBooking(latestBooking);
    };

    fetchLatestBooking();
  }, []);

  return (
    <div className="table-responsive">
      {booking && (
        <Table striped bordered hover variant="light" className="mt-5">
          <thead className="fs-5 align-middle">
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Occasion</th>
            </tr>
          </thead>
          <tbody className="fs-5 align-middle">
            <tr>
              <td className="text-center">{booking.id}</td>
              <td className="text-center">{booking.date}</td>
              <td className="text-center">{booking.time}</td>
              <td className="text-center">{booking.guests}</td>
              <td className="text-center">{booking.occasion}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ConfirmedTable;
