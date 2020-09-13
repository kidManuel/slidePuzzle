import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import {
  movePiece,
  findAdjacentsToActive,
  isBoardSolved,
  getFullBoardData,
  shufflePieces
} from '../../common/nPiecePuzzleUtility'
import * as selectors from '../../store/selectors';
import { boardStateAction } from '../../store/actions';
import { PuzzlePiece, SquaredGallery, IGalleryElement } from '../'

import useStyles from './styles';

interface IPuzzleProps {
  size: number,
  showNumbers: boolean,
}

const SlidePuzzle = ({ size, showNumbers }: IPuzzleProps) => {
  const dispatch = useDispatch();
  const pieces = useSelector(selectors.getPieces);
  const activePiecePosition = useSelector(selectors.getActivePiece);
  const adjacentToActive = useSelector(selectors.getAdjacentToActive);
  const isSolved = useSelector(selectors.isSolved);

  const {
    slidePuzzle,
    solvedPuzzle
  } = useStyles();

  const movePieceCallback = (x: number): void => {
    const newPieces = movePiece(pieces, x, activePiecePosition, size);
    const newAdjacents = findAdjacentsToActive(newPieces, x, size);
    const isCurrentBoardSolved = isBoardSolved(newPieces)

    dispatch(boardStateAction({
      pieces: newPieces,
      activePiecePosition: x,
      adjacentToActive: newAdjacents,
      isSolved: isCurrentBoardSolved
    }))
  }

  useEffect(() => {
    dispatch(boardStateAction(getFullBoardData(shufflePieces(pieces))))
  }, [])

  /*
  const prepUnshuffledPieces = (): IPieceState[] => {
    const totalPieces = size * size;
    const newPieces = [];
    for (let n = 0; n < totalPieces; n++) {
      const newPiece = {
        key: n,
        position: getXYFromPosition(n)
      }
      newPieces.push(newPiece)
    }
    return newPieces;
  }
  */

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
