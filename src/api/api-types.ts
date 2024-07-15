export interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'manager' | 'driver';
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
