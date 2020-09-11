import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  galleryContainer: {
    width: '100vmin',
    height: '100vmin',
    backgroundColor: '#EFE9F4',
    position: 'relative'
  },
  galleryItem: {
    border: 'solid 1px white',
    position: 'absolute',
    borderRadius: 10,
    overflow: 'hidden',
    '&:hover': {
      border: 'solid 2px #08B2E3'
    },
    cursor: 'pointer',
    zIndex: 2,
  },
  hidden: {
    zIndex: -1
  }
})

export default useStyles;
