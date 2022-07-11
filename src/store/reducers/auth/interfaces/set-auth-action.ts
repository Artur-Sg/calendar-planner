import { AuthActionsEnum } from '../enums/auth-actions-enum';

export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}
