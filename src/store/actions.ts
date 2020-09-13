import { IPuzzleState } from '../common/interfaces';

import * as types from './actionTypes'

interface IBasicAction {
  type: string
}

export interface IMoveActivePieceAction extends IBasicAction {
  payload: IPuzzleState
}

export interface IUpdateHintsVisibilityAction extends IBasicAction {
  payload: boolean
}

export interface ISetPuzzleSizeAction extends IBasicAction {
  payload: number
}

export const boardStateAction = (newState: IPuzzleState): IMoveActivePieceAction => {

  // TODO change action name
  return {
    type: types.MOVE_ACTIVE,
    payload: newState
  }
}

export const setHintsVisibilityAction = (newSize: boolean): IUpdateHintsVisibilityAction => {
  return {
    type: types.SET_HINTS_VISIBILITY,
    payload: newSize
  }
}

export const setPuzzleSizeAction = (newSize: number): ISetPuzzleSizeAction => {
  return {
    type: types.SET_PUZZLE_SIZE,
    payload: newSize
  }
}

export type userConfigTypes = IUpdateHintsVisibilityAction | ISetPuzzleSizeAction;
