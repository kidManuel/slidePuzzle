import React, { useState, useEffect, ReactNode } from 'react'

import { PuzzlePiece, SquaredGallery } from '../'

type puzzleProps = {
  size: number,
  showNumbers: boolean,
  image?: string
}

type puzzleStateType = {
  activePiecePosition: number,
  adjacentToActive: number[],
}

const SlidePuzzle = ({ size, showNumbers, image }: puzzleProps) => {
  const movePiece = (x: number): void => {
    const newPiecePositions = [...pieces];
    const { activePiecePosition } = puzzleState;
    [newPiecePositions[x], newPiecePositions[activePiecePosition]] = [newPiecePositions[activePiecePosition], newPiecePositions[x]]
    setPieces(newPiecePositions);
  }

  const updateBoardStates = (): void => {
    const newActivePiecePosition = pieces.findIndex(e => e === pieces.length - 1);
    const adjacents = [];

    // If not on top row, add the cell directly above. 
    if (newActivePiecePosition >= size) {
      adjacents.push(newActivePiecePosition - size)
    }
    // Bottom
    if (newActivePiecePosition < (size * size - 1)) {
      adjacents.push(newActivePiecePosition + size)
    }
    // Right
    if (!((newActivePiecePosition % size) === size - 1)) {
      adjacents.push(newActivePiecePosition + 1)
    }
    //Left
    if (newActivePiecePosition % size) {
      adjacents.push(newActivePiecePosition - 1)
    }

    setPuzzleState({
      activePiecePosition: newActivePiecePosition,
      adjacentToActive: adjacents
    })
  }

  const prepUnshuffledPieces = (): number[] => {
    const totalPieces = size * size;
    const newPieces = [];
    for (let n = 0; n < totalPieces; n++) {
      newPieces.push(n)
    }
    return newPieces;
  }

  const [pieces, setPieces] = useState<number[]>(prepUnshuffledPieces());


  const [puzzleState, setPuzzleState] = useState<puzzleStateType>({
    activePiecePosition: 0,
    adjacentToActive: []
  });

  useEffect(() => {
    setPieces(prepUnshuffledPieces());
  }, [size, showNumbers, image])

  useEffect(() => {
    updateBoardStates()
  }, [pieces])



  const displayPieces = (): ReactNode[] => {
    const { activePiecePosition, adjacentToActive } = puzzleState;

    return pieces.map((element, index) => (
      <PuzzlePiece
        originalPosition={element}
        key={element}
        currentPosition={index}
        movePieceCallback={movePiece}
        isActivePiece={index === activePiecePosition}
        isAdjacentPiece={adjacentToActive?.includes(index)}
      />
    ))
  }

  return (
    <div className={'SlidePuzzle'}>
      <SquaredGallery
        columns={size}
      >
        {
          displayPieces()
        }
      </SquaredGallery>
    </div>


  )
}

export default SlidePuzzle;
