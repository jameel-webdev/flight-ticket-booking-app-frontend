import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //RTK Query

const baseQuery = fetchBaseQuery({
  baseUrl: "https://flight-ticket-booking-webapp.onrender.com/",
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Flight", "Booking"],
  endpoints: (builder) => ({}),
});
