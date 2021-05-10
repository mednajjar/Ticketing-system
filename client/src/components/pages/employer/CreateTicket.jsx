import React from 'react'
import { Avatar, Button, Grid, Typography, Container, TextField } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment'
import useStyles from '../auth/styles';
// import {useDispatch} from 'react-redux';
import Input from '../auth/Input';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {} from '../../../redux/slices/authSlice';
// import { useHistory } from 'react-router-dom';

const CreateTicket = () => {
//     const history = useHistory()
//   const dispatch = useDispatch()
  const [formData, setFormData] = React.useState({ titre:'', type: '', urgence:'',description:''})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const onsubmit = async (e) => {
    e.preventDefault();
    // dispatch()
    console.log(formData)
    // history.push('/myTickets')
  }
  const classes = useStyles();
    return (
        <div className="container mt-5">
            <h1 className="text-center">Create Ticket</h1>
            <Grid container component="main" className={classes.root}>
      <Grid  >
        <Container className={classes.card} item xs={12} sm={8} md={5}>
        
          <div className={classes.paper} >
            <Avatar className={classes.avatar}>
              <AssignmentIcon />
            </Avatar>
            <Typography component="h1" variant="h5">New ticket</Typography>
            <form className={classes.form} onSubmit={onsubmit}>
              <Grid container spacing={2}>
                <Input name="titre" label="Titre" handleChange={handleChange} type="text" />
                <Input name="type" label="Type" handleChange={handleChange} type="text" />
                <FormControl className={classes.formControl}>
                    <NativeSelect
                    value={formData.urgence}
                    onChange={handleChange}
                    name="urgence"
                    inputProps={{ 'aria-label': 'urgence' }}
                    >
                    <option value="">Urgence</option>
                    <option value={'normal'}>Normal</option>
                    <option value={'urgent'}>Urgent</option>
                    <option value={'immédiatement'}>Immédiatement</option>
                    </NativeSelect>
                </FormControl>
                <TextField
                className={classes.formControl}
                    id="standard-multiline-flexible"
                    label="Description"
                    name="description"
                    variant="outlined"
                    multiline
                    fullWidth
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    />

              </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Envoyer
            </Button>
            </form>
          </div>
        
        </Container>
      </Grid>
    </Grid>
            
        </div>
    )
}

export default CreateTicket
