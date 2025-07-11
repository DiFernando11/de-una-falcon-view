import type { Launch, LaunchAdapter, LaunchDetail, LaunchDetailAdapter } from '@/domain/models';

export function mapApiToLaunchList(apiLaunches: Launch[]): LaunchAdapter[] {
  return apiLaunches.map((launch) => ({
    id: launch.id,
    missionName: launch.mission_name,
    launchDate: launch.launch_date_utc,
    rocketName: launch.rocket.rocket_name,
  }));
}

export function mapApiToLaunchDetail(api: LaunchDetail): LaunchDetailAdapter {
  return {
    id: api.id,
    missionName: api.mission_name,
    launchDate: api.launch_date_utc,
    rocketName: api.rocket?.rocket_name ?? '',
    details: api.details,
    patch: api.links?.mission_patch,
    images: api.links?.flickr_images,
    article: api.links?.article_link,
    upcoming: api.upcoming,
    success: api.launch_success,
  };
}
