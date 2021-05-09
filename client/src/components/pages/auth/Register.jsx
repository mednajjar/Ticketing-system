import React, {useEffect} from 'react'
import { Avatar, Button, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import Input from './Input';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {getDepartement, getRegister} from '../../../redux/slices/authSlice';
import { useHistory } from 'react-router-dom';
const Register = () => {
    const {departement} = useSelector((state)=>state.authentification)
    console.log(departement)
    const [formData, setFormData] = React.useState({ nom_et_prenom:'', email: '', type:'',departement:'', password: '' })
    const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const history = useHistory()
  const dispatch = useDispatch()

  const onsubmit = async (e) => {
    e.preventDefault();
    dispatch(getRegister(formData))
    history.push('/employers')
  }
  useEffect(()=>{
    dispatch(getDepartement())
  }, [dispatch])


  const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
      <Grid  >
        <Container className={classes.card} item xs={12} sm={8} md={5}>
        
          <div className={classes.paper} >
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">Register</Typography>
            <form className={classes.form} onSubmit={onsubmit}>
              <Grid container spacing={2}>
                <Input name="nom_et_prenom" label="Nom et Prénom" handleChange={handleChange} type="text" />
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <FormControl className={classes.formControl}>
                    <NativeSelect
                    value={formData.type}
                    onChange={handleChange}
                    name="type"
                    inputProps={{ 'aria-label': 'type' }}
                    >
                    <option className={classes.list} value="">Type</option>
                    <option className={classes.list} value={'admin'}>admin</option>
                    <option className={classes.list} value={'employer'}>employer</option>
                    <option className={classes.list} value={'technicien'}>technicien</option>
                    </NativeSelect>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <NativeSelect
                    value={formData.departement}
                    onChange={handleChange}
                    name="departement"
                    inputProps={{ 'aria-label': 'departement' }}
                    >
                    <option className={classes.list} value="">Departement</option>
                    {
                      departement && departement.map((res)=>(
                        <option className={classes.list} value={res.nom}>{res.nom}</option>
                      )
                      )
                    }
                
                    </NativeSelect>
                </FormControl>
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

export default Register
