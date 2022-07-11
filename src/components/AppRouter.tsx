import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { UseTypeSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../routes/enums/route-names';
import { privateRoutes, publicRoutes } from '../routes/index';
import IRoute from '../routes/interfaces/routes';

const AppRouter = () => {
  const { isAuth } = UseTypeSelector((state) => state.authReducer);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route: IRoute) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.EVENT} />}></Route>
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
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />}></Route>
    </Routes>
  );
};

export default AppRouter;
