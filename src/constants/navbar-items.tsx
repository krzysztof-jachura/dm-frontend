import React from 'react';
import {
  FlagIcon,
  GalleryHorizontalEndIcon,
  HomeIcon,
  MessageSquarePlusIcon,
  Users2Icon,
} from 'lucide-react';
import TeamPermissions from '@customTypes/team-permissions';

export type NavbarItem = {
  title: string;
  path: string;
  icon: React.ReactElement;
  active: boolean;
  permissions: TeamPermissions;
  endIcon?: React.ReactElement;
  endPath?: string;
};

export const NAVBAR_ITEMS: Record<string, NavbarItem[]> = {
  '': [
    {
      title: 'Home',
      path: '/',
      icon: <HomeIcon />,
      active: true,
      permissions: TeamPermissions.DRIVER,
    },
  ],
  Management: [
    {
      title: 'Signups',
      path: '/signups',
      icon: <MessageSquarePlusIcon />,
      active: true,
      permissions: TeamPermissions.MANAGER,
    },
  ],
  General: [
    {
      title: 'Races',
      path: '/races',
      icon: <FlagIcon />,
      active: false,
      permissions: TeamPermissions.DRIVER,
    },
    {
      title: 'Series',
      path: '/series',
      icon: <GalleryHorizontalEndIcon />,
      active: false,
      permissions: TeamPermissions.DRIVER,
    },
    {
      title: 'Team Members',
      path: '/members',
      icon: <Users2Icon />,
      active: false,
      permissions: TeamPermissions.DRIVER,
    },
  ],
};
