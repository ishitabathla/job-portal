import {
  Button,
  Grid, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
const styles = makeStyles(() => ({
  body:{
    backgroundColor:'#FFFFBF',
    height:'100vh',
  },
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  title:{
    textAlign:'center'
  },
  btn:{
    display:'flex',
    justifyContent:'space-between'
  }
}))
function UserDetail({
  history:{location:{state}},
  history,
  setSelectedUsers,
  selectedUsers
}) {
  const handleShortlistedUsers=(user)=>{
    const existShortlisted = selectedUsers.shortlisted;
    setSelectedUsers({...selectedUsers, shortlisted:[...existShortlisted,user]})
    history.push(`/`)
  }
  const handleRejectedUsers=(user)=>{
    const existRejected = selectedUsers.rejected;
    setSelectedUsers({...selectedUsers, rejected:[...existRejected,user]})
    history.push(`/`)
  }
  const classes = styles();
  return (
    <div className={classes.body} >
      <Typography variant="h5" className={classes.title}>User Details</Typography>
        <Grid container className={classes.container} >
          <div>
            <img src={state.Image} width="200px"/>
            <div>
              <Typography variant="h6">ID: {state.id}</Typography>
              <Typography variant="h6"> Name: {state.name}</Typography>
            </div>
            <div className={classes.btn}>
            <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={()=>handleShortlistedUsers(state)}
            >
            Shortlist
            </Button>
            <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={()=>handleRejectedUsers(state)}
            >Reject</Button>
            </div>
          </div>
        </Grid>
    </div>
  );
}

export default UserDetail;
