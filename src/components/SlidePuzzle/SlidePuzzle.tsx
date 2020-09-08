import React, { useState, useEffect } from 'react'

import { PuzzlePiece, SquaredGallery } from '../'
import { ISquaredGalleryElementsData } from '../SquaredGallery/SquaredGallery'

interface puzzleProps {
  size: number,
  showNumbers: boolean,
  image?: string
}

interface puzzleStateinterface {
  activePiecePosition: number,
  adjacentToActive: number[],
}

interface pieceState {
  key: number,
  position: IXYPosition,
}

interface IXYPosition {
  x: number,
  y: number,
}

const SlidePuzzle = ({ size, showNumbers, image }: puzzleProps) => {
  const movePiece = (x: number): void => {
    const newPiecePositions = [...pieces];
    const { activePiecePosition } = puzzleState;

    [newPiecePositions[x], newPiecePositions[activePiecePosition]] = [newPiecePositions[activePiecePosition], newPiecePositions[x]]
    newPiecePositions[x].position = getXYFromPosition(x);
    newPiecePositions[activePiecePosition].position = getXYFromPosition(activePiecePosition);

    setPieces(newPiecePositions);
  }

  const updateBoardStates = (): void => {
    const newActivePieceIndex = pieces.findIndex(e => e.key === pieces.length - 1);
    const newActivePiecePosition = pieces[newActivePieceIndex].position;
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

    setPuzzleState({
      activePiecePosition: newActivePieceIndex,
      adjacentToActive: adjacents
    })
  }

  const getXYFromPosition = (position: number): IXYPosition => {
    return {
      x: position % size,
      y: Math.floor(position / size)
    }
  }

  const prepUnshuffledPieces = (): pieceState[] => {
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

  const [pieces, setPieces] = useState<pieceState[]>(prepUnshuffledPieces());
  const [puzzleState, setPuzzleState] = useState<puzzleStateinterface>({
    activePiecePosition: 0,
    adjacentToActive: []
  });

  useEffect(() => {
    setPieces(prepUnshuffledPieces());
  }, [size, showNumbers, image])

  useEffect(() => {
    updateBoardStates()
  }, [pieces])

  const formGalleryElements = (): ISquaredGalleryElementsData[] => {
    const { activePiecePosition, adjacentToActive } = puzzleState;

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
    <div className={'SlidePuzzle'}>
      <SquaredGallery
        columns={size}
        elements={formGalleryElements()}
      />
    </div>
  )
}


export default SlidePuzzle;
