import React, { MouseEvent } from 'react'

import useStyles from './styles';

type puzzleProps = {
  originalPosition: number,
  currentPosition: number,
  movePieceCallback: (x: number) => void,
  isActivePiece: boolean,
  isAdjacentPiece: boolean,
  image?: string,
}

const PuzzlePiece = ({ originalPosition, currentPosition, image, movePieceCallback, isAdjacentPiece, isActivePiece }: puzzleProps) => {
  const handleClick = (e: MouseEvent) => {
    if (isAdjacentPiece) movePieceCallback(currentPosition);
  }

  const {
    puzzlePiece,
    adjacent,
    active
  } = useStyles();

  return (
    <div
      className={`${puzzlePiece} ${isAdjacentPiece && adjacent}  ${isActivePiece && active}`}
      onClick={handleClick}
    >
      {
        originalPosition
      }
    </div>




  )
}

export default PuzzlePiece;
