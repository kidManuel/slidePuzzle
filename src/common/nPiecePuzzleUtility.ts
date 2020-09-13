import { IPieceState, IXYPosition, IPuzzleState } from './interfaces'
import { shuffle } from 'lodash'

export const shufflePieces = (board: IPieceState[], size?: number): IPieceState[] => {
  const newPositions = [];
  for (let e = 0; e < board.length; e++) newPositions.push(e)
  const shuffledPositions = shuffle(newPositions);
  const newBoard = board.map((element, index) => {
    return { ...element, key: shuffledPositions[index] }
  });

  if (!isBoardSolvable(newBoard)) {
    return (makeBoardSolvable(newBoard, size));
  }

  return newBoard;
}

export const getFullBoardData = (board: IPieceState[], size?: number): IPuzzleState => {
  const newActivePieceIndex = findActivePieceInBoard(board);

  return {
    pieces: board,
    adjacentToActive: findAdjacentsToActive(board, newActivePieceIndex, size),
    activePiecePosition: newActivePieceIndex,
    isSolved: isBoardSolved(board)
  }
}

const makeBoardSolvable = (board: IPieceState[], size?: number): IPieceState[] => {
  const keyOnePosition = board.findIndex(element => element.key == 1);
  const keyTwoPosition = board.findIndex(element => element.key == 2);
  return swapTwoPieces(board, keyOnePosition, keyTwoPosition, size)
}

export const isBoardSolved = (board: IPieceState[]): boolean => {
  let isSolved = true;
  board.forEach((element, index) => {
    if (element.key !== index) {
      isSolved = false;
    }
  })

  return isSolved;
}

export const findActivePieceInBoard = (board: IPieceState[]): number => {
  return board.findIndex(e => e.key === board.length - 1);
}

export const findAdjacentsToActive = (board: IPieceState[], activePiecePosition?: number, size?: number): number[] => {
  size = size || Math.sqrt(board.length);
  activePiecePosition = activePiecePosition ? activePiecePosition : findActivePieceInBoard(board);
  const newActivePieceIndex = findActivePieceInBoard(board);
  const { x, y } = board[activePiecePosition].position;
  const adjacents = [];

  // If not on top row, add the cell directly above. 
  if (y > 0) {
    adjacents.push(newActivePieceIndex - size)
  }
  // Bottom
  if (y < size - 1) {
    adjacents.push(newActivePieceIndex + size)
  }
  // Right
  if (!((x % size) === size - 1)) {
    adjacents.push(newActivePieceIndex + 1)
  }
  //Left
  if (x % size) {
    adjacents.push(newActivePieceIndex - 1)
  }

  return adjacents
}

const getInversionsInBoard = (board: IPieceState[]): number => {
  let invCount = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = i + 1; j < board.length; j++) {
      if (board[i] > board[j]) invCount++
    }
  }
  return invCount;
}

const isOdd = (number: number): boolean => {
  return !!(number % 2)
}

const isBoardSolvable = (board: IPieceState[], activePiecePosition?: number, size?: number): boolean => {
  size = size || Math.sqrt(board.length);
  const activePiece = activePiecePosition ? board[activePiecePosition] : board[findActivePieceInBoard(board)];
  const boardInversions = getInversionsInBoard(board);
  const areBoardInversionsOdd = isOdd(boardInversions);
  const activePieceRow = activePiece.position.y + 1;

  if (isOdd(size)) {
    if (!isOdd(boardInversions)) return true;
  } else {
    if (isOdd(size - activePieceRow)) {
      if (areBoardInversionsOdd) return true;
    } else {
      if (!areBoardInversionsOdd) return true;
    }
  }
  return false;
}

const swapTwoPieces = (board: IPieceState[], pieceA: number, pieceB: number, size?: number): IPieceState[] => {
  size = size || Math.sqrt(board.length);

  const newPiecePositions = [...board];

  // Switch two piece positions
  const pieceKey = newPiecePositions[pieceA].key;
  const activePieceKey = newPiecePositions[pieceB].key;

  newPiecePositions[pieceB].key = pieceKey;
  newPiecePositions[pieceA].key = activePieceKey;

  return newPiecePositions;
}

export const movePiece = (board: IPieceState[], piece: number, activePiecePosition?: number, size?: number): IPieceState[] => {
  activePiecePosition = activePiecePosition ? activePiecePosition : findActivePieceInBoard(board);
  size = size || Math.sqrt(board.length);

  return swapTwoPieces(board, piece, activePiecePosition, size);
}

export const getXYFromPosition = (position: number, size: number): IXYPosition => {
  return {
    x: position % size,
    y: Math.floor(position / size)
  }
}
