import React, { MouseEvent } from 'react'
import { useSelector } from "react-redux";
import { showHintsSelector } from '../../store/selectors';


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
  const shouldShowHints = useSelector(showHintsSelector);

  const handleClick = (e: MouseEvent) => {
    if (isAdjacentPiece) movePieceCallback(pos);
  }

  const {
    puzzlePiece,
    adjacent,
    active,
    contentContainer,
    hideHints
  } = useStyles();

  return (
    <div
      className={`${puzzlePiece} ${isAdjacentPiece && adjacent} ${isActivePiece && active} ${!shouldShowHints && hideHints}`}
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
