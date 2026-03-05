import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const tunceriApi = createApi({
  reducerPath: 'tunceriApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tunceri.com/api/' }),
  endpoints: (build) => ({
    getNew: build.query<object, string>({
      query: () => `getnew`,
      transformResponse: (response: { data: any }, meta, arg) => {
      console.log('tunceri api  response: ', response)
      return response.data
      },
    }),
  }),
  
})

export const { useGetNewQuery } = tunceriApi
