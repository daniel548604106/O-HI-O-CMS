import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/CustomerList';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Products from 'src/pages/products/Index';
import ProductEdit from 'src/pages/products/Edit';
import Register from 'src/pages/Register';
import Shops from 'src/pages/shops/Index';
import Shop from 'src/pages/shops/Shop';
import Settings from 'src/pages/Settings';

// This nested array of Javascript objects keeps the code DRY and improves the readability of the code.
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
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
        path: 'products',
        element: <Products />,
        children: [
          { path: '/', element: <Products /> },
          { path: ':id/edit', element: <ProductEdit /> },
        ]
      },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
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
