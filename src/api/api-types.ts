import TeamPermissions from '@customTypes/team-permissions';

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: TeamPermissions;
}

export interface Series {
  id: string;
  name: string;
  logo?: string;
}

export interface Track {
  config_name: string;
  track_name: string;
  track_id: string;
}
