import React, { lazy, Suspense } from 'react';
import { Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Spinner } from '@nextui-org/react';
import UserCard from '@/components/user-card';
import LoginButton from '@/components/login-button';
import { logoutUser, pullUser } from '@/api/api';
import { useQuery } from '@tanstack/react-query';
import { Route, Routes, useMatch } from 'react-router-dom';

const Home = lazy(() => import('./pages/home/Home'));
const CreateSignupPage = lazy(() => import('./pages/signups/CreateSignupPage'));

const App = () => {
  const signupRouteMatch = useMatch('/signups');

  const {
    data: user,
    isFetched: userFetched,
    isError: userError,
    refetch: refetchUser,
    isRefetchError: userRefetchError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: pullUser,
    initialData: { name: '', id: '', avatar: '', role: 'driver' },
    retry: false,
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
    <div className="flex flex-col w-full min-h-screen gap-8 sm:gap-2 overflow-y-auto">
      <Navbar
        maxWidth="full"
        classNames={{
          base: 'bg-default-50',
          wrapper: 'gap-0 sm:gap-4',
          brand: 'hidden sm:block',
        }}
      >
        <NavbarBrand>
          <Image
            src="pv_logo.webp"
            className="h-12 my-auto select-none"
            loading="eager"
            disableSkeleton
          />
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <p className="sm:text-xl my-auto mx-auto select-none">
              {signupRouteMatch ? 'Signup Creation' : 'Project Valorous'}
            </p>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            {userError || userRefetchError ? (
              <LoginButton className="justify-self-end my-auto" onClick={handleLogin} />
            ) : (
              <UserCard
                className="px-1 rounded-lg flex flex-row gap-6 items-center justify-self-end"
                // @ts-expect-error role is a string
                user={user}
                onLogout={handleLogout}
                isLoading={!userFetched}
              />
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="flex flex-1 flex-col px-6 py-0 sm:py-6">
        <Suspense
          fallback={<Spinner color="primary" size="lg" className="absolute top-1/2 left-1/2" />}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signups" element={<CreateSignupPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
