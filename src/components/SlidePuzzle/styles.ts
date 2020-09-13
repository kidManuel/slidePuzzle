import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  slidePuzzle: {
    width: '90vmin',
    height: '90vmin',
    border: 'solid 0px white',
    transition: 'all 0.4s',
    position: 'relative',
    '&:before': {
      content: '"you solved it my dude!"',
      textTransform: 'uppercase',
      position: 'absolute',
      margin: 'auto',
      top: '-3%',
      right: '-3%',
      color: 'white',
      fontSize: '2vw',
      fontWeight: 700,
      width: '25%',
      height: '25%',
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
  },
  backgroundStyle: {
    position: 'absolute',
    top: 0,
    opacity: 0,
    zIndex: 99,
    pointerEvents: 'none',
    display: 'none'
  }
})

export default useStyles;
