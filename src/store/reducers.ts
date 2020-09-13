import { combineReducers } from "redux";

import * as types from './actionTypes'
import { IMoveActivePieceAction, IUpdateUserConfigAction } from './actions'
import { puzzleStateDefault, userConfigDefault } from './defaults'
import { IPuzzleState, IUserConfig } from '../common/interfaces';

const puzzleReducer = (state: IPuzzleState = puzzleStateDefault, action: IMoveActivePieceAction) => {
  switch (action.type) {
    case types.MOVE_ACTIVE: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state;
  }
}

const userConfigurationReducer = (state: IUserConfig = userConfigDefault, action: IUpdateUserConfigAction) => {
  switch (action.type) {
    case types.USER_CONFIGURATION: {
      return {
        ...state
      }
    }
    default:
      return state;
  }
}

export default combineReducers({ userConfigurationReducer, puzzleReducer });
