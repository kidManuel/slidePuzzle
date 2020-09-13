import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  settingsWrapper: {
    padding: 30,
    color: 'white',
    '& label': {
      userSelect: 'none'
    }
  },
  field: {
    margin: '30px 0'
  },
  shuffleButton: {
    padding: '20px 40px',
    backgroundColor: '#7DCFB6',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 700,
    borderRadius: 2,
    userSelect: 'none',
    cursor: 'pointer'
  },
})

export default useStyles;
