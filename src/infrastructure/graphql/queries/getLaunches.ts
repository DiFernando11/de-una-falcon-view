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

export const GET_LAUNCH_BY_ID = `
  query GetLaunchById($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      launch_date_utc
      rocket { rocket_name }
      details
      links {
        mission_patch
        flickr_images
        article_link
      }
      upcoming
      launch_success
    }
  }
`;
