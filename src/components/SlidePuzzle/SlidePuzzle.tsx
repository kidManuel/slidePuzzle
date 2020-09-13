import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import {
  movePiece,
  getFullBoardData,
  shufflePieces,
  prepNewShuffledBoard
} from '../../common/nPiecePuzzleUtility'
import * as selectors from '../../store/selectors';
import { boardStateAction } from '../../store/actions';
import { PuzzlePiece, SquaredGallery, IGalleryElement } from '../'

import useStyles from './styles';

const SlidePuzzle = () => {
  const dispatch = useDispatch();
  const pieces = useSelector(selectors.getPieces);
  const activePiecePosition = useSelector(selectors.getActivePiece);
  const adjacentToActive = useSelector(selectors.getAdjacentToActive);
  const isSolved = useSelector(selectors.isSolved);
  const size = useSelector(selectors.puzzleSizeSelector);

  const {
    slidePuzzle,
    solvedPuzzle
  } = useStyles();

  const movePieceCallback = (x: number): void => {
    dispatch(boardStateAction(getFullBoardData(movePiece(pieces, x, activePiecePosition, size))))
  }

  useEffect(() => {
    dispatch(boardStateAction(getFullBoardData(shufflePieces(pieces))))
  }, [])

  useEffect(() => {
    dispatch(boardStateAction(getFullBoardData(shufflePieces(prepNewShuffledBoard(size)))))
  }, [size])

  const formGalleryElements = (): IGalleryElement[] => {
    return pieces.map((element, index) => {
      const { key } = element;
      const isActivePiece = (index === activePiecePosition);
      return {
        id: `element${key}`,
        order: index,
        hidden: isActivePiece,
        element: (
          <PuzzlePiece
            pos={index}
            content={(element.key + 1).toString()}
            movePieceCallback={movePieceCallback}
            isActivePiece={isActivePiece}
            isAdjacentPiece={adjacentToActive.includes(index)}
          />
        )
      }
    })
  }


  return (
    <div
      className={`${slidePuzzle} ${isSolved ? solvedPuzzle : null}`}
    >
      <SquaredGallery
        columns={size}
        elements={formGalleryElements()}
      />
    </div>
  )
}


export default SlidePuzzle;
