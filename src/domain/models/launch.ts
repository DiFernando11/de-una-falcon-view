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
