import { apiSlice } from "../apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allusers: builder.mutation({
      query: () => ({
        url: `api/users/allusers`,
        method: "GET",
      }),
    }),
    allflights: builder.mutation({
      query: () => ({
        url: `api/flights/allflights`,
        method: "GET",
      }),
    }),
    allbookings: builder.mutation({
      query: () => ({
        url: `api/flights/allflights`,
        method: "GET",
      }),
    }),
  }),
});
export const { useAllusersMutation, useAllflightsMutation } = adminApiSlice;
