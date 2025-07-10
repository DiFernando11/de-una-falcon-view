import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Launch, LaunchAdapter } from '@/domain/models/launch';
import { GET_LAUNCHES } from '@/infrastructure/graphql/queries';
import { mapApiToLaunchList } from './adapters';

export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://spacex-production.up.railway.app/' }),
  endpoints: (builder) => ({
    getLaunches: builder.query<LaunchAdapter[], { limit?: number; offset?: number }>({
      query: ({ limit = 10, offset = 0 } = {}) => ({
        url: '',
        method: 'POST',
        body: {
          query: GET_LAUNCHES,
          variables: { limit, offset },
        },
      }),
      transformResponse: (response: { data: { launchesPast: Launch[] } }) =>
        mapApiToLaunchList(response.data.launchesPast),
    }),
  }),
});

export const { useGetLaunchesQuery } = launchesApi;
