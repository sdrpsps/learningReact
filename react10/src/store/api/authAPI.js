import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://strapi.hchow.icu/api/auth' }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userDdata) => {
        return { url: `/local/register`, method: 'post', body: userDdata };
      },
    }),
    login: builder.mutation({
      query: (userDdata) => {
        return { url: `/local`, method: 'post', body: userDdata };
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authAPI;
