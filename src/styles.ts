import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  AppContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#1D4E89',
    overflowX: 'hidden',
    padding: '50px 0'
  },
  AppTitle:{
    fontWeight: 700,
    width: '90vw',
    fontSize: '2vw',
    color: 'white',
    marginBottom: '30px',
    textAlign: 'center'
  }
})

export default useStyles;
