import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  galleryContainer: {
    width: 600,
    height: 600,
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
    transition: 'all 0.3s'
  }
})

export default useStyles;
