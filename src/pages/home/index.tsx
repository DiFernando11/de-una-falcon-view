import { useGetLaunchesQuery } from '@/services';

function Home() {
  const { data: launches, isLoading, isError } = useGetLaunchesQuery({ limit: 5, offset: 0 });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading launches</div>;

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {launches?.map((launch) => (
          <li key={launch.id}>
            <strong>{launch.missionName}</strong> ({launch.rocketName}) – {launch.launchDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
