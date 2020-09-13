import React, { MouseEvent } from 'react'

import useStyles from './styles';

interface IPuzzlePieceProps {
  pos: number,
  content: string,
  movePieceCallback: (x: number) => void,
  isActivePiece: boolean,
  isAdjacentPiece: boolean,
  image?: string,
}

const PuzzlePiece = ({ pos, content, image, movePieceCallback, isAdjacentPiece, isActivePiece }: IPuzzlePieceProps) => {
  const handleClick = (e: MouseEvent) => {
    if (isAdjacentPiece) movePieceCallback(pos);
  }

  const {
    puzzlePiece,
    adjacent,
    active,
    contentContainer
  } = useStyles();

  return (
    <div
      className={`${puzzlePiece} ${isAdjacentPiece && adjacent}  ${isActivePiece && active}`}
      onClick={handleClick}
    >
      <div
        className={contentContainer}
      >
        {
          content
        }
      </div>
    </div>
  )
}

export default PuzzlePiece;
