import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  puzzlePiece: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EE6352',
    display: 'grid',
    placeItems: 'center',
    transition: 'all 0.3s',
  },
  active: {
  },
  adjacent: {
    backgroundColor: '#FF7564'
  }
})

export default useStyles;
