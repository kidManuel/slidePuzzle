import React, { useCallback, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { debounce } from 'lodash'

import { boardStateAction, setHintsVisibilityAction, setPuzzleSizeAction } from '../../store/actions'
import { getPiecesSelector, showHintsSelector, puzzleSizeSelector } from '../../store/selectors'
import { shufflePieces, getFullBoardData } from '../../common/nPiecePuzzleUtility'
import useStyles from './styles';

interface ISettingsProps {
}

const Settings = (props: ISettingsProps) => {
  const dispatch = useDispatch();
  const pieces = useSelector(getPiecesSelector);
  const showHints = useSelector(showHintsSelector);
  const puzzleSize = useSelector(puzzleSizeSelector);
  const sizeSlider = useRef<HTMLInputElement>(null);

  const handleShuffle = () => {
    dispatch(boardStateAction(getFullBoardData(shufflePieces(pieces))))
  }

  const handleHintsChange = (e: boolean) => {
    dispatch(setHintsVisibilityAction(e))
  }

  const handleSizeChange = (e: number) => {
    throttledSizeChange(e)
  }

  const throttledSizeChange = useCallback(debounce((e) => {
    if (sizeSlider.current) {
      dispatch(setPuzzleSizeAction(parseInt(sizeSlider.current.value)))
    }
  }, 300), [])

  useEffect(() => {
    // Since we're using an uncontrolled input for throttling
    // set the value of the range at the start.
    if (sizeSlider.current) {
      sizeSlider.current.value = puzzleSize.toString();
    }
  }, [puzzleSize])

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
          checked={showHints}
          onChange={(e) => handleHintsChange(e.target.checked)}
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
          placeholder={puzzleSize.toString()}
          name='puzzleSize'
          onChange={(e) => handleSizeChange(parseInt(e.target.value))}
          ref={sizeSlider}
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
