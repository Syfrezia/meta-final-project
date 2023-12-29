const dbUrl = "http://localhost:3000/reservations"; // replace with your json-server URL

// Read all bookings
export const fetchBookings = async () => {
  const response = await fetch(dbUrl);
  const data = await response.json();
  return data;
};

// Read a single booking
export const fetchBooking = async (id) => {
  const response = await fetch(`${dbUrl}/${id}`);
  const data = await response.json();
  return data;
};

// Create a new booking
export const createBooking = async (booking) => {
  const response = await fetch(dbUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  });

  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }

  return await response.json();
};

// Update a booking
export const updateBooking = async (id, updatedBooking) => {
  const response = await fetch(`${dbUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedBooking),
  });

  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }

  return await response.json();
};

// Delete a booking
export const deleteBooking = async (id) => {
  const response = await fetch(`${dbUrl}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }

  return await response.json();
};
