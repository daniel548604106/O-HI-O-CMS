import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import Users from 'src/pages/users/Index';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Products from 'src/pages/products/Index';
import ProductEdit from 'src/pages/products/Edit';
import ProductCreate from 'src/pages/products/Create';
import Register from 'src/pages/Register';
import Shops from 'src/pages/shops/Index';
import Shop from 'src/pages/shops/Shop';
import Settings from 'src/pages/Settings';
import Banners from 'src/pages/banners/Index';
import BannerEdit from 'src/pages/banners/Edit';
import BannerCreate from 'src/pages/banners/Create';
// This nested array of Javascript objects keeps the code DRY and improves the readability of the code.
const routes = (isAdminLoggedIn) => [
  {
    path: 'app',
    // Protected Routes
    element: isAdminLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: 'account', element: <Account /> },
      {
        path: 'users',
        children: [
          {
            path: '/', element: <Users />
          }
        ]
      },
      { path: 'dashboard', element: <Dashboard /> },
      {
        path: 'shops',
        children: [
          {
            path: '/', element: <Shops />
          },
          {
            path: ':id', element: <Shop />
          }
        ]
      },
      {
        path: 'banners',
        children: [
          {
            path: '/',
            element: <Banners />
          },
          {
            path: '/create',
            element: <BannerCreate />
          },
          {
            path: ':id/edit',
            element: <BannerEdit />
          }
        ]
      },
      {
        path: 'products',
        children: [
          { path: '/', element: <Products /> },
          { path: 'create', element: <ProductCreate /> },
          { path: ':id/edit', element: <ProductEdit /> },
        ]
      },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    // Unprotected Routes
    element: !isAdminLoggedIn ? <MainLayout /> : <Navigate to="/app/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
