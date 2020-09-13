import { IPuzzleState } from '../common/interfaces';

interface IUserConfiguration {
  showHints: boolean,
  size: number
}

export const puzzleStateDefault: IPuzzleState = {
  pieces: [
    { key: 0, position: { x: 0, y: 0 } },
    { key: 1, position: { x: 1, y: 0 } },
    { key: 2, position: { x: 2, y: 0 } },
    { key: 3, position: { x: 3, y: 0 } },
    { key: 4, position: { x: 0, y: 1 } },
    { key: 5, position: { x: 1, y: 1 } },
    { key: 6, position: { x: 2, y: 1 } },
    { key: 7, position: { x: 3, y: 1 } },
    { key: 8, position: { x: 0, y: 2 } },
    { key: 9, position: { x: 1, y: 2 } },
    { key: 10, position: { x: 2, y: 2 } },
    { key: 11, position: { x: 3, y: 2 } },
    { key: 12, position: { x: 0, y: 3 } },
    { key: 13, position: { x: 1, y: 3 } },
    { key: 14, position: { x: 2, y: 3 } },
    { key: 15, position: { x: 3, y: 3 } }
  ],
  activePiecePosition: 15,
  adjacentToActive: [11, 14],
  isSolved: false
}

export const userConfigDefault: IUserConfiguration = {
  showHints: true,
  size: 4
} 
