import { createBrowserRouter, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Actors from '../src/pages/Actors';
import Directors from '../src/pages/Directors';
import Movie from '../src/pages/Movie';
import ErrorPage from '..src/pages/ErrorPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'directors',
        element: <Directors />
      },
      {
        path: 'actors',
        element: <Actors />   
      },
      {
        path: 'movie/:id',
        element: <Movie />
      },
    ],
  },
]);

export default routes;