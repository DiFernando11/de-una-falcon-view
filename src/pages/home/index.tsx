import type { LaunchAdapter } from '@/domain/models';
import { fetchLaunches } from '@/services/launches/launchService';
import { useEffect, useState } from 'react';

function Home() {
  const [launches, setLaunches] = useState<LaunchAdapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLaunches().then((data) => {
      setLaunches(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return <div>{JSON.stringify(launches)}</div>;
}

export default Home;
