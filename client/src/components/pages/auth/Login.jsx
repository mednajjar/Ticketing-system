import React from 'react'
import { Avatar, Button, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import Input from './Input';
import {getLogin} from '../../../redux/slices/authSlice'

const Login = () => {
    const [formData, setFormData] = React.useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
const dispatch = useDispatch();
  const onsubmit = async (e) => {
    e.preventDefault();
    dispatch(getLogin(formData))
  }

  const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
      
      <Grid  >
        <Container className={classes.card} item xs={12} sm={8} md={5}>
        
          <div className={classes.paper} >
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">sign in</Typography>
            <form className={classes.form} onSubmit={onsubmit}>
              <Grid container spacing={2}>
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                sign in
                </Button>
            </form>
          </div>
        
        </Container>
      </Grid>
    </Grid>
    )
}

export default Login
