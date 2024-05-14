
import React, { lazy, Suspense } from 'react';
import  useAuth  from 'src/hooks/use-auth'; // Import your authentication hook
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
// Lazy load components
const IndexPage = lazy(() => import('src/pages/app'));
const UserPage = lazy(() => import('src/pages/usuarios'));
const LoginPage = lazy(() => import('src/pages/login'));
const ProductsPage = lazy(() => import('src/pages/products'));
const ProcessesFormPage = lazy(() => import('src/pages/process-form-page'));
const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const { isAuthenticated } = useAuth();

  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element:  <IndexPage /> , index: true }, // Redirect to login if not authenticated
        { path: 'usuarios', element: isAuthenticated ? <UserPage /> : <Navigate to="/login" replace /> },
        { path: 'procesos', element: <ProductsPage /> },
        { path: 'procesos/nuevo', element: isAuthenticated ? <ProcessesFormPage/> : <Navigate to="/login" replace /> },
        { path: '404', element: isAuthenticated? <Page404 />: <Navigate to="/login" replace/> }, // Route for 404 errors
        { path: '*', element: isAuthenticated?<Navigate to="/404" replace />:<Navigate to="/login" replace/> }, // Default redirect for undefined routes
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
  ]);

  return routes;
}
