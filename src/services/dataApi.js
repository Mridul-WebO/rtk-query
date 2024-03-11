import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    fetchAllData: builder.query({
      query: () => '/users',
      providesTags: ['User'],
    }),

    addUser: builder.mutation({
      query: (contact) => ({
        url: '/users',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['User'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useFetchAllDataQuery,
  useAddUserMutation,
  useDeleteContactMutation,
} = dataApi;
