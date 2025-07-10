import type { Launch, LaunchAdapter } from '@/domain/models';

export function mapApiToLaunchList(apiLaunches: Launch[]): LaunchAdapter[] {
  return apiLaunches.map((launch) => ({
    id: launch.id,
    missionName: launch.mission_name,
    launchDate: launch.launch_date_utc,
    rocketName: launch.rocket.rocket_name,
  }));
}
