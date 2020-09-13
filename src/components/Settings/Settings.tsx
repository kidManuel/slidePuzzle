import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { boardStateAction } from '../../store/actions'
import { getPieces } from '../../store/selectors'
import { shufflePieces, getFullBoardData } from '../../common/nPiecePuzzleUtility'
import useStyles from './styles';

interface ISettingsProps {
}

const Settings = (props: ISettingsProps) => {
  const dispatch = useDispatch();
  const pieces = useSelector(getPieces);

  const handleShuffle = () => {
    dispatch(boardStateAction(getFullBoardData(shufflePieces(pieces))))
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
