import { apiSlice } from "../apiSlice";

const BOOKING_URL = "/api/bookings";

export const bookingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    book: builder.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/newbooking`,
        method: "POST",
        body: data,
      }),
    }),
    getBookingById: builder.query({
      query: (bookingId) => ({
        url: `${FLIGHT_URL}/${bookingId}`,
        providesTags: (result, error, bookingId) => [
          { type: "Booking", id: bookingId },
        ],
      }),
    }),
    getallbookings: builder.query({
      query: () => `${BOOKING_URL}/getallbookings`,
    }),
    update: builder.mutation({
      query: (data, bookingId) => ({
        url: `${BOOKING_URL}/${bookingId}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});
export const {
  useBookMutation,
  useUpdateMutation,
  useGetBookingByIdQuery,
  useGetallbookingsQuery,
} = bookingApiSlice;
