import reactDOM from 'react-dom/client';
import App from '@/App';
import routers from './routers';
import { RouterProvider } from 'react-router-dom';

reactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}>
    <App />
  </RouterProvider>,
);
