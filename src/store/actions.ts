import { IPuzzleState, IUserConfig } from '../common/interfaces';

import * as types from './actionTypes'

interface IBasicAction {
  type: string
}

export interface IMoveActivePieceAction extends IBasicAction {
  payload: IPuzzleState
}

export interface IUpdateUserConfigAction extends IBasicAction {
  payload: IUserConfig
}

export const boardStateAction = (newState: IPuzzleState): IMoveActivePieceAction => {

  // TODO change action name
  return {
    type: types.MOVE_ACTIVE,
    payload: newState
  }
}


export const userConfigAction = (newConfig: IUserConfig): IUpdateUserConfigAction => {
  return {
    type: types.MOVE_ACTIVE,
    payload: newConfig
  }
}
