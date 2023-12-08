import { apiSlice } from "../apiSlice";

const FLIGHT_URL = "/api/flights";
export const flightApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addflight: builder.mutation({
      query: (data) => ({
        url: `${FLIGHT_URL}/addflight`,
        method: "POST",
        body: data,
      }),
    }),
    getallflights: builder.query({
      query: ({ search }) => ({
        url: `${FLIGHT_URL}/getflights`,
        params: search,
      }),
    }),
    getflightById: builder.query({
      query: (flightId) => ({
        url: `${FLIGHT_URL}/${flightId}`,
        providesTags: (result, error, flightId) => [
          { type: "Flight", id: flightId },
        ],
      }),
    }),
  }),
});
export const {
  useAddflightMutation,
  useGetallflightsQuery,
  useGetflightByIdQuery,
  useGetflightsQuery,
} = flightApiSlice;
