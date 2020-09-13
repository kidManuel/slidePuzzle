import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { boardStateAction } from '../../store/actions'
import { getPieces } from '../../store/selectors'
import { shufflePieces, findActivePieceInBoard, findAdjacentsToActive, isBoardSolved } from '../../common/nPiecePuzzleUtility'
import useStyles from './styles';

interface ISettingsProps {
}

const Settings = (props: ISettingsProps) => {
  const dispatch = useDispatch();
  const pieces = useSelector(getPieces);

  const handleShuffle = () => {
    let newPieces = shufflePieces(pieces);

    // Is this check worht it for the one-in-several-billion chance the game gets shuffled to a solved state? 
    while (isBoardSolved(newPieces)) newPieces = shufflePieces(pieces);
    const newActivePiecePosition = findActivePieceInBoard(newPieces);

    // TODO PASS SIZE
    const newAdjacent = findAdjacentsToActive(newPieces, newActivePiecePosition, 4);
    dispatch(boardStateAction({
      pieces: newPieces,
      activePiecePosition: newActivePiecePosition,
      adjacentToActive: newAdjacent,
      isSolved: false
    }))
  }

  const {
    settingsWrapper,
    field,
    shuffleButton
  } = useStyles();

  return (
    <div
      className={`${settingsWrapper}`}
    >
      <div className={field}>
        <input
          type='checkbox'
          name='showHint'
        />
        <label htmlFor='showHint'>
          Show number hints?
        </label>
      </div>
      <div className={field}>
        <input
          type='range'
          min={2}
          max={10}
          name='puzzleSize'
        />
        <label htmlFor='puzzleSize'>
          Puzzle Size
      </label>
      </div>

      <div
        className={shuffleButton}
        onClick={handleShuffle}
      >
        shuffle!
      </div>
    </div>
  )
}

export default Settings;
