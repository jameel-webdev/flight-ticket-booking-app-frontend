import { apiSlice } from "../apiSlice";

const USERS_URL = "/api/bookings";

export const bookingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    book: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/newbooking`,
        method: "POST",
        body: data,
      }),
    }),
    update: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/:bookingId`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});
export const { useBookMutation, useUpdateMutation } = bookingApiSlice;
