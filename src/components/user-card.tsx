import React from 'react';
import { User as UserComponent, Button, Skeleton } from '@nextui-org/react';
import { User } from '@/api/api-types';

const UserCard = ({
  user,
  onLogout,
  className,
  isLoading = false,
}: {
  user: User;
  onLogout: () => void;
  className?: string;
  isLoading?: boolean;
}) => {
  return (
    <div className={className}>
      {!isLoading && (
        <UserComponent
          name={user.name}
          description={user.role === 'manager' ? 'Team Manager' : 'Driver'}
          avatarProps={{
            src: user.avatar,
          }}
          className="collapse sm:visible"
        />
      )}
      {isLoading && (
        <div className="flex gap-2 flex-row">
          <Skeleton className="w-9 h-9 rounded-full" isLoaded={!isLoading} />
          <div className="flex flex-col gap-2 my-auto">
            <Skeleton className="w-28 h-3 rounded-lg" />
            <Skeleton className="w-28 h-2 rounded-lg" />
          </div>
        </div>
      )}
      <Skeleton className="w-22 h-full rounded-lg" isLoaded={!isLoading}>
        <Button
          size="sm"
          className="my-auto font-bold"
          color="danger"
          variant="ghost"
          onClick={onLogout}
        >
          Log out
        </Button>
      </Skeleton>
    </div>
  );
};

export default UserCard;
