import { apiSlice } from "../apiSlice";

const USERS_URL = "/api/flights";
export const flightApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/addflight`,
        method: "POST",
        body: data,
      }),
    }),
    getflight: builder.mutation({
      query: (flightId) => ({
        url: `${USERS_URL}/${flightId}`,
        method: "GET",
      }),
    }),
    update: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/:flightId`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});
export const { useCreateMutation, useUpdateMutation, useGetflightMutation } =
  flightApiSlice;
