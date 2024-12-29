import NavButton from '@components/nav-bar/NavButton';

import LoginButton from '@components/LoginButton';
import UserCard from '@components/nav-bar/UserCard';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { logoutUser, pullUser } from '@api/actions';
import BrandNavButton from '@components/nav-bar/BrandNavButton';
import roleFilterNavbarItems from '@components/nav-bar/utils/filter-nav-items';
import TeamPermissions from '@customTypes/team-permissions';
import { User } from '@api/api-types';

const NavBarSide = () => {
  const initialUser: User = {
    name: 'Loading...',
    avatar: '',
    role: TeamPermissions.DRIVER,
    id: '',
  };

  const {
    data: user,
    isError: userError,
    refetch: refetchUser,
    isRefetchError: userRefetchError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: pullUser,
    retry: false,
    initialData: initialUser,
  });

  const handleLogin = () => {
    const callbackUrl = encodeURIComponent(window.location.href);
    window.location.href = `/api/auth/login?callbackUrl=${callbackUrl}`;
  };

  const handleLogout = () => {
    logoutUser().then(res => {
      if (res.ok) {
        refetchUser();
      }
    });
  };

  return (
    <div className="fixed w-[300px] h-full hidden md:flex flex-col px-4 pt-3 pb-5 max-h-screen gap-3 bg-default-50">
      <BrandNavButton className="mx-auto py-4" />
      <div className="px-1 grow flex flex-col gap-1 items-center">
        {Object.entries(roleFilterNavbarItems(user.role ?? TeamPermissions.DRIVER)).map(
          ([category, items]) => (
            <React.Fragment key={category + 'fragment'}>
              {category && (
                <p className="text-lg sm:text-sm text-default-600 self-start mt-2" key={category}>
                  {category}
                </p>
              )}
              {items.map(item => (
                <NavButton
                  route={item.path}
                  icon={item.icon}
                  disabled={!item.active}
                  key={item.title}
                  endIcon={item.endIcon}
                  endPath={item.endPath}
                >
                  {item.title}
                </NavButton>
              ))}
            </React.Fragment>
          ),
        )}
      </div>
      {userError || userRefetchError ? (
        <LoginButton className="justify-self-end my-auto" onPress={handleLogin} />
      ) : (
        <UserCard
          className="mx-auto rounded-lg flex flex-row min-w-60 gap-2 items-center justify-between justify-self-end"
          user={user}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default NavBarSide;
