import React from 'react'
import Box from '@material-ui/core/Box';
import { withAuth } from "../../lib/AuthProvider";
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from '@material-ui/core/styles';


const styles = {
  root: {
    background: 'linear-gradient(to right, rgba(26, 32, 64,.7), rgba(54, 84, 157,.2))',
    borderRadius: 15,
    border: 0,
    color: 'white',
    height: 68,
    padding: '10px 20px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginTop:'20px'
    
  },
};

const useStyles = makeStyles(styles)


function CardPlayer(props) {
    const {position} = props
    const classes = useStyles();
    const {arrayScore} = props.user
    console.log(props)
    return (
        <div >
       
        <Box className ={classes.root} display="flex" alignItems="center" justifyContent="space-between" m={1} p={1}>
          <Box p={1} >
            {position + 1}
          </Box>
          <Box p={1}  m={1} >
          <Avatar alt="Remy Sharp" src={props.user.img} />

          </Box>
          <Box p={1}  m={1} >
            @{props.user.username}
          </Box>
          <Box p={1}  m={1}  flexGrow ={10}>
          {Math.max.apply(Math,arrayScore.map(function(o) { return o.score; }))}
          </Box>
        </Box>
       
        </div>
        
        )
    }
    export default  withAuth(CardPlayer)