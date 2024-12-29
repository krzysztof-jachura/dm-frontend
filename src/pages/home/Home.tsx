import React from 'react';
import { Divider } from '@nextui-org/react';
import {
  FlagIcon,
  GalleryHorizontalEndIcon,
  MessageSquarePlusIcon,
  Users2Icon,
} from 'lucide-react';
import RouteCard from '@pages/home/components/RouteCard';

const Home = () => {
  return (
    <>
      <div className="mt-0 sm:mt-20">
        <h1 className="text-2xl sm:text-4xl font-bold text-center tracking-tight">
          Welcome to Driver Manager
        </h1>
        <h2 className="text-lg sm:text-2xl font-light text-center mt-2 sm:mt-4">
          Here are some things you can try out:
        </h2>
      </div>
      <div className="flex flex-col gap-5 mt-6 sm:mt-16 w-fit-content mx-auto">
        <RouteCard
          to="/signups"
          title="Signup Creation"
          description="Create a custom race with a scheduled Discord signup"
          icon={<MessageSquarePlusIcon size={32} className="min-w-[32px] text-green-500" />}
          color="text-green-500"
        />

        <div className="mt-2 sm:mt-6">
          <h3 className="text-lg sm:text-xl text-default-400 uppercase text-center tracking-wide">
            Coming Soon
          </h3>
          <Divider className="w-full mt-2" />
        </div>
        <RouteCard
          isDisabled
          to="/series"
          title="Series"
          description="View, manage and create series"
          icon={<GalleryHorizontalEndIcon size={32} className="min-w-[32px] text-primary-500" />}
          color="text-primary-500"
        />
        <RouteCard
          isDisabled
          to="/races"
          title="Races"
          description="View and manage upcoming races"
          icon={<FlagIcon size={32} className="min-w-[32px] text-danger" />}
          color="text-danger"
        />
        <RouteCard
          isDisabled
          to="/members"
          title="Team Members"
          description="Have a look at the list of team members, their stats and more"
          icon={<Users2Icon size={32} className="min-w-[32px] text-yellow-500" />}
          color="text-yellow-500"
        />
      </div>
    </>
  );
};

export default Home;
