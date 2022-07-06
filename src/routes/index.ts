import Event from '../pages/Event';
import Login from '../pages/Login';
import IRoute from './interfaces/routes';
import { RouteNames } from './enums/route-names';

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, component: Event },
];
