import { IPieceState, IPuzzleState } from '../common/interfaces';

import * as types from './actionTypes'

interface IBasicAction {
  type: string
}

interface IUpdatePiecesAction extends IBasicAction {
  payload: IPieceState[]
}

interface IMoveActivePieceAction extends IBasicAction {
  payload: IPuzzleState
}

const updatePieces = (newPieces: IPieceState[]): IUpdatePiecesAction => {
  return {
    type: types.PIECES_UPDATE,
    payload: newPieces
  }
}

const moveActivePiece = (newState: IPuzzleState): IMoveActivePieceAction => {
  return {
    type: types.MOVE_ACTIVE,
    payload: newState
  }
}

export { updatePieces, moveActivePiece }
export type PuzzleActions = IUpdatePiecesAction | IMoveActivePieceAction;
