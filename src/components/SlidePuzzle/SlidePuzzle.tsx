import React, { useEffect, useCallback, CSSProperties, useRef, useState, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { debounce } from 'lodash'

import {
  movePiece,
  getFullBoardData,
  getXYFromPosition,
  prepNewShuffledBoard
} from '../../common/nPiecePuzzleUtility'
import { IPieceState } from '../../common/interfaces'
import * as selectors from '../../store/selectors';
import { boardStateAction } from '../../store/actions';
import { PuzzlePiece, SquaredGallery, IGalleryElement } from '../'

import useStyles from './styles';
import bgImage from './greatWave.jpg'

const SlidePuzzle = () => {
  const dispatch = useDispatch();

  const pieces = useSelector(selectors.getPieces);
  const activePiecePosition = useSelector(selectors.getActivePiece);
  const adjacentToActive = useSelector(selectors.getAdjacentToActive);
  const isSolved = useSelector(selectors.isSolved);
  const size = useSelector(selectors.puzzleSizeSelector);

  const [isBgHorizontal, setIsBgHorizontal] = useState<boolean>(true);
  const [containerSize, setContainerSize] = useState<number>(0)

  const backgroundRef = useRef<HTMLImageElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const {
    slidePuzzle,
    solvedPuzzle,
    backgroundStyle
  } = useStyles();

  // Handle window resizes
  const responsiveSizeUpdate = () => {
    setContainerSize(galleryRef.current?.offsetWidth || 0);
  }
  
  const throttledUpdate = useCallback(debounce(() => {
      responsiveSizeUpdate()
  }, 200), [])
  
  useLayoutEffect(() => {
    responsiveSizeUpdate();

    const handleResize = () => {
      throttledUpdate()
    }

    window.addEventListener('resize', handleResize)
  }, [])

  // Callbacks for interaction
  const updateBoard = useCallback((newBoard: IPieceState[]): void => {
    dispatch(boardStateAction(getFullBoardData(newBoard)))
  }, [dispatch])

  const movePieceCallback = (x: number): void => {
    updateBoard(movePiece(pieces, x, activePiecePosition))
  }

  // If puzzle size in N length changes, generate a new board.
  useEffect(() => {
    updateBoard(prepNewShuffledBoard(size))
  }, [size, updateBoard]);

  
  const measureRef = (): void => {
    if(backgroundRef.current) {
      const bgWidth = backgroundRef.current.width;
      const bgHeight = backgroundRef.current.height;
      setIsBgHorizontal(!!(bgWidth >= bgHeight))
    }
  }

  const generatePieceStyle = useCallback((key: number): CSSProperties => {
    let availableSize = 0;
    if (galleryRef.current) availableSize = galleryRef.current.offsetWidth
    const bgSizeStyle = isBgHorizontal ? `auto ${availableSize}px` : `${availableSize}px auto` ;  
    const perPieceSize = availableSize / size;
    const originalXY = getXYFromPosition(key, size);

    return {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: bgSizeStyle,
      backgroundPosition: `-${perPieceSize * originalXY.x}px -${perPieceSize * originalXY.y}px`
    }
  }, [size, containerSize, isBgHorizontal])

  const formGalleryElements = (): IGalleryElement[] => {
    return pieces.map((element, index) => {
      const { key } = element;
      const isActivePiece = (index === activePiecePosition);
      const shouldHide = isActivePiece && !isSolved;
      return {
        id: `element${key}`,
        order: index,
        hidden: shouldHide,
        element: (
          <PuzzlePiece
            pos={index}
            content={(element.key + 1).toString()}
            movePieceCallback={movePieceCallback}
            isActivePiece={isActivePiece}
            isAdjacentPiece={adjacentToActive.includes(index)}
            bgStyles={generatePieceStyle(element.key)}
          />
        )
      }
    })
  }

  return (
    <div
      className={`${slidePuzzle} ${isSolved ? solvedPuzzle : null}`}
      ref={galleryRef}
    >
      <SquaredGallery
        columns={size}
        elements={formGalleryElements()}
        containerSize={containerSize}
      />
      <img
        className={backgroundStyle}
        src={bgImage}
        ref={backgroundRef}
        onLoad={measureRef}
        alt='Background Reference'
      />
    </div>
  )
}


export default SlidePuzzle;
