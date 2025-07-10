export const GET_LAUNCHES = `
  query GetLaunches($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_utc
      rocket { rocket_name }
    }
  }
`;
