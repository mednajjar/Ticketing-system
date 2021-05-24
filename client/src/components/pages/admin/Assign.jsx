import React,{useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {useParams} from 'react-router-dom'
import useStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getTicketById,getTechnicien, assignTech} from '../../../redux/slices/ticketSlice'


const Assign = () => {
  const {id} = useParams()
  console.log(id)
  const {technicien} = useSelector((state)=>state.allTickets);
  const {assignTicket} = useSelector((state)=>state.allTickets)
  console.log(technicien)
  console.log('my ticket',assignTicket)

  const [formData, setFormData] = useState({})
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(formData)

  useEffect(()=>{
    dispatch(getTechnicien())
  },[dispatch])

  const assignTechnicien = (e) =>{
    e.preventDefault();
    dispatch(assignTech({id, formData}))
    history.push('/tickets')
  }

  useEffect(()=>{
    dispatch(getTicketById(id));
  },[dispatch, id])

  const classes = useStyles();
    return (
        <div className="container mt-5 d-flex justify-content-center">
          <Card className={classes.root2} variant="outlined">
          {
            assignTicket && (
              <>
              <CardContent key={assignTicket._id}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {assignTicket.etat}
                </Typography>
                <Typography variant="h5" component="h2">
                  {assignTicket.titre}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  
                  Urgence: {assignTicket.urgence} 
                  <br></br>
                  Type: {assignTicket.type} 
                  
                </Typography>
                <Typography variant="body2" component="p">
                  {assignTicket.description}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {assignTicket.date}
                </Typography>
              </CardContent>
          
    <CardContent>
      {
        (assignTicket.etat === 'waiting' || assignTicket.etat === "re-waiting") && (
          <>
          <form>
          <FormControl className={classes.formControl}>
              <NativeSelect
              value={formData.nom_et_prenom}
              onChange={(e)=>setFormData({nom_et_prenom:e.target.value})}
              name="nom_et_prenom"
              inputProps={{ 'aria-label': 'nom_et_prenom' }}
              >
              <option value="">Choisi un Technicien</option>
              {
                technicien.length > 0 && technicien.map((res)=>(
                  <option value={res.nom_et_prenom}>{res.nom_et_prenom}</option>
                ))
              }
            
              </NativeSelect>
          </FormControl>
          <CardActions>
              <Button variant="outlined" fullWidth color="primary" onClick={assignTechnicien}>Assign</Button>
          </CardActions>
          </form>
          </>
        )
      }
    </CardContent>
    </>
      )
    }
    </Card>
        </div>
    )
}

export default Assign
