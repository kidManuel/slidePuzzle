import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  puzzlePiece: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EE6352',
    display: 'grid',
    placeItems: 'center'
  },
  active: {
    opacity: 0
  },
  adjacent: {
    backgroundColor: '#F8C630'
  }
})

export default useStyles;
