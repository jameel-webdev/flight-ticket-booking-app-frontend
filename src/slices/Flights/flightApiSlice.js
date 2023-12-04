import { apiSlice } from "../apiSlice";

const USERS_URL = "/api/flight";

export const flightApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/addflight`,
        method: "POST",
        body: data,
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
export const { useCreateMutation, useUpdateMutation } = usersApiSlice;
