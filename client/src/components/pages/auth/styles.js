import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
    


    },
    paper: {
      margin: theme.spacing(16, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(3),
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 
      background: 'white',
      borderRadius: '4px'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    card:{
        height:'10vh',
        padding: theme.spacing(3),
     
    },
    formControl:{
      width:'100%',
      padding: '2%'
    },
    list:{
      paddingLeft: '2%'
    }
  }));