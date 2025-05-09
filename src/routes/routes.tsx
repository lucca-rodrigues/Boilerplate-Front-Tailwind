import { Dashboard } from '@/pages/dashboard';
import { SignIn } from '@/pages/signIn';
import React from 'react';

const routes: {
  path: string;
  element: React.ReactNode;
  isPublicRoute: boolean;
}[] = [
  { path: '/', element: <SignIn />, isPublicRoute: true },
  { path: '/dashboard', element: <Dashboard />, isPublicRoute: false },
];

export default routes;
