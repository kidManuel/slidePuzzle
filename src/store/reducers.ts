import { combineReducers } from "redux";

import * as types from './actionTypes'
import { IMoveActivePieceAction, userConfigTypes } from './actions'
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

const userConfigurationReducer = (state: IUserConfig = userConfigDefault, action: userConfigTypes) => {
  switch (action.type) {
    case types.USER_CONFIGURATION: {
      return {
        ...state
      }
    }
    case types.SET_HINTS_VISIBILITY: {
      return {
        ...state,
        showHints: action.payload
      }
    }
    case types.SET_PUZZLE_SIZE: {
      return {
        ...state,
        size: action.payload
      }
    }
    default:
      return state;
  }
}

export default combineReducers({ userConfigurationReducer, puzzleReducer });
