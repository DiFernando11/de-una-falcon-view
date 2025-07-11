import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  Launch,
  LaunchAdapter,
  LaunchDetail,
  LaunchDetailAdapter,
} from '@/domain/models/launch';
import { GET_LAUNCH_BY_ID, GET_LAUNCHES } from '@/infrastructure/graphql/queries';
import { mapApiToLaunchDetail, mapApiToLaunchList } from './adapters';

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
    getLaunchById: builder.query<LaunchDetailAdapter, string>({
      query: (id) => ({
        url: '',
        method: 'POST',
        body: {
          query: GET_LAUNCH_BY_ID,
          variables: { id },
        },
      }),
      transformResponse: (response: { data: { launch: LaunchDetail } }) => {
        console.log('GraphQL RAW launch response:', response);
        return mapApiToLaunchDetail(response.data.launch);
      },
    }),
  }),
});

export const { useGetLaunchesQuery, useGetLaunchByIdQuery } = launchesApi;
