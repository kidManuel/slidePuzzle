import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { IPieceState, IXYPosition } from '../../common/interfaces'

import * as selectors from '../../store/selectors';
import { moveActivePiece } from '../../store/actions';

import { PuzzlePiece, SquaredGallery, IGalleryElement } from '../'

interface IPuzzleProps {
  size: number,
  showNumbers: boolean,
}

const SlidePuzzle = ({ size, showNumbers }: IPuzzleProps) => {
  const dispatch = useDispatch();
  const pieces = useSelector(selectors.getPieces);
  const activePiecePosition = useSelector(selectors.getActivePiece);
  const adjacentToActive = useSelector(selectors.getAdjacentToActive);


  const movePiece = (x: number): void => {
    const newPiecePositions = [...pieces];

    // Switch two piece positions
    [newPiecePositions[x], newPiecePositions[activePiecePosition]] = [newPiecePositions[activePiecePosition], newPiecePositions[x]];
    newPiecePositions[x].position = getXYFromPosition(x);
    newPiecePositions[activePiecePosition].position = getXYFromPosition(activePiecePosition);

    updateBoardStates(newPiecePositions);
  }

  const updateBoardStates = (piecesToAnalyze: IPieceState[]): void => {
    const newActivePieceIndex = piecesToAnalyze.findIndex(e => e.key === pieces.length - 1);
    const newActivePiecePosition = piecesToAnalyze[newActivePieceIndex].position;
    const { x, y } = newActivePiecePosition;
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

    dispatch(moveActivePiece({
      pieces: piecesToAnalyze,
      activePiecePosition: newActivePieceIndex,
      adjacentToActive: adjacents
    }))
  }

  const getXYFromPosition = (position: number): IXYPosition => {
    return {
      x: position % size,
      y: Math.floor(position / size)
    }
  }

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
            content={element.key.toString()}
            movePieceCallback={movePiece}
            isActivePiece={isActivePiece}
            isAdjacentPiece={adjacentToActive.includes(index)}
          />
        )
      }
    })
  }

  return (
    <div className={'SlidePuzzle'} >
      <SquaredGallery
        columns={size}
        elements={formGalleryElements()}
      />
    </div>
  )
}


export default SlidePuzzle;
