import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const studentAPI = createApi({
  reducerpath: 'studentAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://strapi.hchow.icu/api',
  }),
  // 用来指定 API 的标签类型，实现自动化刷新
  tagTypes: ['student'],
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => `/students`,
      // 用来转换相应数据的格式
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue.data,
      providesTags: ['student'],
    }),
    getStudentsById: builder.query({
      query: (id) => `/students/${id}`,
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue.data,
      // 设置数据缓存的时间，单位秒，默认 60  0不缓存
      keepUnusedDataFor: 5,
      providesTags: ['student'],
    }),
    delStudentsById: builder.mutation({
      query: (id) => {
        return { url: `/students/${id}`, method: 'delete' };
      },
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue.data,
      // 使标签失效
      invalidatesTags: ['student'],
    }),
    addStudents: builder.mutation({
      query: (stu) => {
        return { url: `/students`, method: 'post', body: { data: stu } };
      },
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue.data,
      invalidatesTags: ['student'],
    }),
    updateStudents: builder.mutation({
      query: ({ id, data }) => {
        return { url: `/students/${id}`, method: 'put', body: { data } };
      },
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue.data,
      invalidatesTags: ['student'],
    }),
  }),
});
export const {
  useGetStudentsQuery,
  useGetStudentsByIdQuery,
  useDelStudentsByIdMutation,
  useAddStudentsMutation,
  useUpdateStudentsMutation,
} = studentAPI;
export default studentAPI;
