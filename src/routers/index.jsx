import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import App from '../App';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/detail',
        element: <Detail />,
      },
    ],
  },
]);

export default routers;
