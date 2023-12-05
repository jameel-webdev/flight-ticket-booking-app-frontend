import { apiSlice } from "../apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allusers: builder.mutation({
      query: () => ({
        url: `api/users/allusers`,
        method: "GET",
      }),
    }),
    addflight: builder.mutation({
      query: (data) => ({
        url: `api/flights/addflight`,
        method: "POST",
        body: data,
      }),
    }),
    allflight: builder.mutation({
      query: () => ({
        url: `api/flights/allflights`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useAllusersMutation,
  useAddflightMutation,
  useAllflightMutation,
} = adminApiSlice;
