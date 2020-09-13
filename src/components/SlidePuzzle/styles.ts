import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  slidePuzzle: {
    width: '90vmin',
    height: '90vmin',
    border: 'solid 0px white',
    transition: 'all 0.4s',
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
      content: '"you solved it my dude!"',
      textTransform: 'uppercase',
      position: 'absolute',
      margin: 'auto',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      color: 'white',
      fontSize: 80,
      fontWeight: 700,
      width: '50%',
      height: '50%',
      display: 'grid',
      placeItems: 'center',
      zIndex: 3,
      transition: 'all 0.4s',
      textAlign: 'center',
      opacity: 0,
      transform: 'rotate(-120deg)',
      backgroundColor: '#F79256',
      borderRadius: 30,
      pointerEvents: 'none'
    },
  },
  solvedPuzzle: {
    '&:before': {
      opacity: 1,
      transform: 'rotate(-10deg)',
    }
  }
})

export default useStyles;
