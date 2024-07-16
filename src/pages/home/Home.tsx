import React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import {
  FlagIcon,
  GalleryHorizontalEndIcon,
  MessageSquarePlusIcon,
  Users2Icon,
} from 'lucide-react';
import RouteCard from '@/pages/home/components/RouteCard';

const Home = () => {
  return (
    <>
      <div className="mt-0 sm:mt-20">
        <h1 className="text-2xl sm:text-4xl font-bold text-center tracking-tight">
          Welcome to Driver Manager
        </h1>
        <h2 className="text-lg sm:text-2xl font-light text-center mt-4">
          Here are some things you can try out:
        </h2>
      </div>
      <div className="flex flex-col gap-5 mt-20 w-fit-content mx-auto">
        <RouteCard
          to="/signups"
          title="Signup Creation"
          description="Create a custom race with a scheduled Discord signup"
          icon={<MessageSquarePlusIcon size={32} className="min-w-[32px] text-green-500" />}
          color={'text-green-500'}
        />
        <Card
          isDisabled
          className="p-5 select-none hover:cursor-default"
          classNames={{ header: 'p-0 mb-2', body: 'p-0' }}
          shadow="sm"
        >
          <div className="flex items-center">
            <GalleryHorizontalEndIcon size={32} className="min-w-[32px] text-primary-500" />
            <div className="flex flex-col pl-5">
              <CardHeader className="text-xl text-primary-500">Series</CardHeader>
              <CardBody className="text-medium sm:text-lg font-light text-neutral-400">
                View, manage and create series
              </CardBody>
            </div>
          </div>
        </Card>
        <Card
          isDisabled
          className="p-5 select-none hover:cursor-default"
          classNames={{ header: 'p-0 mb-2', body: 'p-0' }}
          shadow="sm"
        >
          <div className="flex items-center">
            <FlagIcon size={32} className="min-w-[32px] text-danger" />
            <div className="flex flex-col pl-5">
              <CardHeader className="text-xl text-danger">Races</CardHeader>
              <CardBody className="text-medium sm:text-lg font-light text-neutral-400">
                View and manage upcoming races
              </CardBody>
            </div>
          </div>
        </Card>
        <Card
          isDisabled
          className="p-5 select-none hover:cursor-default"
          classNames={{ header: 'p-0 mb-2', body: 'p-0' }}
          shadow="sm"
        >
          <div className="flex items-center">
            <Users2Icon size={32} className="min-w-[32px] text-yellow-500" />
            <div className="flex flex-col pl-5">
              <CardHeader className="text-xl text-yellow-500">Team Members</CardHeader>
              <CardBody className="text-medium sm:text-lg font-light text-neutral-400">
                Have a look at the list of team members, their stats and more
              </CardBody>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Home;