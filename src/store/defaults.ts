import { IPuzzleState } from '../common/interfaces';

interface IUserConfiguration {
  showHints: boolean,
  size: number
}

export const puzzleStateDefault: IPuzzleState = {
  pieces: [],
  activePiecePosition: -1,
  adjacentToActive: [],
  isSolved: false
}

export const userConfigDefault: IUserConfiguration = {
  showHints: true,
  size: 4
} 
