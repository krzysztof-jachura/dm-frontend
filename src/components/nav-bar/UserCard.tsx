import React, { Suspense } from 'react';
import { User as UserComponent, Button, Skeleton } from '@nextui-org/react';
import { User } from '@api/api-types';

const UserCardSkeleton = () => {
  return (
    <>
      <div className="flex gap-2 flex-row">
        <Skeleton isLoaded={false} className="w-9 h-9 rounded-full" />
        <div className="flex flex-col gap-2 my-auto">
          <Skeleton isLoaded={false} className="w-28 h-3 rounded-lg" />
          <Skeleton isLoaded={false} className="w-28 h-2 rounded-lg" />
        </div>
      </div>
      <Skeleton isLoaded={false} className="w-22 h-full rounded-lg my-auto"></Skeleton>
    </>
  );
};

const UserCard = ({
  user,
  onLogout,
  className,
}: {
  user: User;
  onLogout: () => void;
  className?: string;
}) => {
  return (
    <Suspense fallback={<UserCardSkeleton />}>
      <div className={className}>
        <UserComponent
          name={user.name}
          description={user.role === 'manager' ? 'Team Manager' : 'Driver'}
          avatarProps={{
            src: user.avatar,
          }}
          classNames={{
            name: 'truncate max-w-[8.7rem]',
          }}
        />
        <Button
          size="sm"
          className="mt-1 font-bold"
          color="danger"
          variant="ghost"
          onPress={onLogout}
        >
          Log out
        </Button>
      </div>
    </Suspense>
  );
};

export default UserCard;
