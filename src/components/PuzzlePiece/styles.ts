import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  puzzlePiece: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FBD1A2',
    display: 'grid',
    placeItems: 'center',
    transition: 'all 0.3s',
    position: 'relative',
    borderRadius: 6,
    opacity: 1,
    overflow: 'hidden'
  },
  active: {
    opacity: 0
  },
  adjacent: {
    '&:after': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      content: '""',
      display: "block",
      transition: 'background-color 0.4s'
    },
    '&:hover:after': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }
  },
  contentContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 15,
    fontWeight: 700,
    backgroundColor: '#00B2CA',
    borderRadius: 20,
    width: 40,
    height: 40,
    display: 'grid',
    placeItems: 'center',
    color: 'white',
    userSelect: 'none'
  }
})

export default useStyles;
