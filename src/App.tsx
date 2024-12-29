import React, { lazy, Suspense } from 'react';
import { Spinner } from '@nextui-org/react';
import { Route, Routes } from 'react-router-dom';

import NavBarSide from '@components/nav-bar/NavBarSide';
import NavBarTop from '@components/nav-bar/NavBarTop';

const Home = lazy(() => import('@pages/home'));
const CreateSignupPage = lazy(() => import('@pages/signups'));

const App = () => {
  return (
    <div className="flex flex-row w-full min-h-screen">
      <NavBarSide />
      <NavBarTop />

      <main className="flex flex-1 flex-col md:ml-[300px] md:mt-0 ml-0 mt-[60px] p-6 w-full max-h-screen overflow-y-auto items-center">
        <Suspense fallback={<Spinner color="primary" size="lg" className="my-auto mx-auto" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signups" element={<CreateSignupPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
