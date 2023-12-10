import { apiSlice } from "../apiSlice";

const BOOKING_URL = "/api/bookings";
const RAZORPAY_URL = "/api/razorpay";

export const bookingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRazorKey: builder.query({
      query: () => `${RAZORPAY_URL}/getkey`,
    }),
    razorOrder: builder.mutation({
      query: (data) => ({
        url: `${RAZORPAY_URL}/order`,
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
  useRazorOrderMutation,
  useGetRazorKeyQuery,
} = bookingApiSlice;
