import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {getTicket} from '../../../redux/slices/ticketSlice'
// import Assign from './Assign';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const AllTickets = () => {
    const history = useHistory()
    const push = (id)=>(e) =>{
        e.preventDefault()
        history.push(`/ticket/${id}`)
    }
    const {ticket} = useSelector((state)=>state.allTickets)
    console.log(ticket)
    const dispatch = useDispatch();
   

    useEffect(()=>{
        dispatch(getTicket())
    }, [dispatch])
    const classes = useStyles();
    return (
        <>
        <h1 className="text-center mt-5">all tickets</h1>
        
            <div className={classes.cartes}>
            {
                (ticket.length > 0) ? ticket.map((res, i)=>(
            <Card className={classes.root} key={i}>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {res.titre}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {res.description}
                    </Typography>
                    </CardContent>
                    <CardContent>
                    {res.etat}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={push(res._id)}>
                        More
                    </Button>
                </CardActions>
            </Card>
                )) : <p className="text-center mt-5 text-danger" >There is no ticket yet</p>
            }
            
        </div>
        </>
    )
}

export default AllTickets
