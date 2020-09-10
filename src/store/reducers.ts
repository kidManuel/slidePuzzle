import { combineReducers } from "redux";

import * as types from './actionTypes'
import { PuzzleActions } from './actions'
import { storeDefault } from './defaults'
import { IPuzzleState } from '../common/interfaces';

const puzzleReducer = (state: IPuzzleState = storeDefault, action: PuzzleActions) => {
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

export default combineReducers({ puzzleReducer });
