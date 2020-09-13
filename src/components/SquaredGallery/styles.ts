import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  galleryContainer: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  galleryItem: {
    position: 'absolute',
    overflow: 'hidden',
    cursor: 'pointer',
    zIndex: 2,
  },
  hidden: {
    zIndex: -1,
    opacity: 0
  }
})

export default useStyles;
