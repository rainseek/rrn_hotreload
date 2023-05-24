import {createMemoryRouter, RouterProvider} from 'react-router-native';
import Root from './routes/Root';
import Home from './routes/Home';
import Second from './routes/Second';

const router = createMemoryRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {index: true, element: <Home />},
      {
        path: '/second',
        element: <Second />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
