import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes/index';
import IRoute from '../routes/interfaces/routes';

const AppRouter = () => {
  const auth = true;

  return auth ? (
    <Routes>
      {privateRoutes.map((route: IRoute) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route: IRoute) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
