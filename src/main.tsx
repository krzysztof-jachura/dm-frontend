import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient();

const Providers = () => (
  <NextUIProvider className="bg-dark-background" locale="en-GB">
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.BASEPATH}>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </NextUIProvider>
);

root.render(<Providers />);
