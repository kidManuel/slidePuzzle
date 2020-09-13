export interface IPieceState {
  key: number,
  position: IXYPosition,
}

export interface IXYPosition {
  x: number,
  y: number,
}

export interface IPuzzleState {
  pieces: IPieceState[],
  adjacentToActive: number[],
  activePiecePosition: number,
  isSolved: boolean
}

export interface IUserConfig {
  size: number,
  showHints: boolean,
}
