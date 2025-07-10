import { apolloClient } from '@/infrastructure/graphql/client';
import { GET_LAUNCHES } from '@/infrastructure/graphql/queries';
import type { LaunchAdapter } from '@/domain/models';
import { mapApiToLaunchList } from './adapters';

export async function fetchLaunches(): Promise<LaunchAdapter[]> {
  const { data } = await apolloClient.query({ query: GET_LAUNCHES });
  return mapApiToLaunchList(data.launchesPast);
}
