import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '345px',
        margin: '2rem',
        

      },
      root2:{
        width: '30rem',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between'
      },
      cartes:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',

      },
      media: {
        height: 140,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
        marginTop: 6,
      },
}))