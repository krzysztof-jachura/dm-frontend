import { Button } from '@nextui-org/react';
import React from 'react';
import { AlignJustifyIcon } from 'lucide-react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { logoutUser, pullUser } from '@api/actions';
import NavButton from '@components/nav-bar/NavButton';
import roleFilterNavbarItems from '@components/nav-bar/utils/filter-nav-items';
import LoginButton from '@components/LoginButton';
import UserCard from '@components/nav-bar/UserCard';
import BrandNavButton from '@components/nav-bar/BrandNavButton';
import { User } from '@api/api-types';
import TeamPermissions from '@customTypes/team-permissions';

const NavBarItems = () => {
  const initialUser: User = {
    name: 'Loading...',
    avatar: '',
    role: TeamPermissions.DRIVER,
    id: '',
  };

  const {
    data: user,
    isError: userError,
    isRefetchError: userRefetchError,
    refetch: refetchUser,
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

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.015,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <motion.ul
        className="px-1 grow flex flex-col gap-1"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        <div className="flex mb-3">
          {userError || userRefetchError ? (
            <LoginButton className="my-auto mx-auto" onClick={handleLogin} />
          ) : (
            <UserCard
              className="mx-auto rounded-lg flex flex-row min-w-60 gap-8 md:gap-2 items-center justify-between justify-self-end"
              user={user}
              onLogout={handleLogout}
            />
          )}
        </div>
        {Object.entries(roleFilterNavbarItems(user.role)).map(([category, items]) => (
          <>
            {category && (
              <motion.li variants={navItem} key={category}>
                <p className="text-lg sm:text-sm text-default-600 self-start mt-2">{category}</p>
              </motion.li>
            )}
            {items.map(item => (
              <motion.li variants={navItem} key={item.path}>
                <NavButton
                  route={item.path}
                  icon={item.icon}
                  disabled={!item.active}
                  endPath={item.endPath}
                  endIcon={item.endIcon}
                >
                  {item.title}
                </NavButton>
              </motion.li>
            ))}
          </>
        ))}
      </motion.ul>
    </>
  );
};

const NavBarTop = () => {
  const [isToggled, setToggled] = useCycle(false, true);

  const navContainer = {
    visible: {
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.2,
      },
    },
  };

  return (
    <div className="fixed z-50 top-0 w-full h-[60px] md:hidden flex flex-row bg-default-50 justify-between items-center px-4">
      <BrandNavButton />
      <Button
        onClick={() => setToggled()}
        radius="none"
        size="lg"
        isIconOnly
        disableRipple
        className="bg-opacity-0 mx-0 pl-2"
      >
        <AlignJustifyIcon width={40} height={30} />
      </Button>

      <AnimatePresence>
        {isToggled && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navContainer}
            className="absolute z-50 left-0 top-[60px] m-0 px-4 pt-2 w-screen h-screen bg-default-50"
          >
            <NavBarItems />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBarTop;
