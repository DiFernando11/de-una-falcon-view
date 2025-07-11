export interface Launch {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
  };
}

export interface LaunchAdapter {
  id: string;
  missionName: string;
  launchDate: string;
  rocketName: string;
}

export interface LaunchDetail {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
  };
  details: string | null;
  links: {
    mission_patch: string | null;
    flickr_images: string[];
    article_link: string | null;
  };
  upcoming: boolean;
  launch_success: boolean | null;
}

export interface LaunchDetailAdapter {
  id: string;
  missionName: string;
  launchDate: string;
  rocketName: string;
  details?: string | null;
  patch?: string | null;
  images?: string[];
  article?: string | null;
  upcoming?: boolean;
  success?: boolean | null;
}
