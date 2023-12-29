import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Table } from "react-bootstrap";
import { fetchBookings } from "../services/api";
import { PrimaryButton } from "../components";

const ConfirmedBooking = () => {
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
    <Container fluid className="m-0 py-5 px-0">
      <Row className="w-100 m-0 p-0 d-flex justify-content-center">
        <Col lg={8}>
          <h2>Your booking has been confirmed!</h2>
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
        </Col>
      </Row>
      <Row className="w-100 m-0 p-0 d-flex justify-content-center">
        <Col lg={8}>
          <PrimaryButton as={Link} to="/">
            Back to Home
          </PrimaryButton>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmedBooking;
