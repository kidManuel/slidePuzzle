import React from 'react'

import useStyles from './styles';

interface ISettingsProps {
}

const Settings = (props: ISettingsProps) => {

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
          min={3}
          max={10}
          name='puzzleSize'
        />
        <label htmlFor='puzzleSize'>
          Puzzle Size
      </label>
      </div>

      <div className={shuffleButton}>
        shuffle!
      </div>
    </div>
  )
}

export default Settings;
