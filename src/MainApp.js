import { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from './List';
import axios from 'axios';

const styles = makeStyles(() => ({
  main: {
    margin:'30px 10px',
  },
  textfieldSection:{
    display:'flex',
    width:'100%',
    alignItems:'center'
  },
  title:{
    textAlign:'center',
    marginTop:20,
    fontFamily:'fangsong',
    color:'#FFFFFF'
  },
  body:{
    backgroundColor:'#99b8c2',
  },
  textfield:{
    margin:10,
    backgroundColor:'#FFFFFF'
  },
  primaryBtn:{
    width:196,
    height:50,
    backgroundColor:'#77c77d',
    color:'#FFFFFF'
  },
  secondaryBtn:{
    width:196,
    height:50,
    backgroundColor:'#ad5556',
    color:'#FFFFFF'
  }
}));
function MainApp({
  history}) {
  const classes = styles();
  const [userList, setUserList] = useState({all:[],list:[]});
  const [searchedName, setSearchedName] = useState('');
  useEffect(() => {
   fetchUsers();
  }, []);
  const fetchUsers = async() =>{
    axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json',
    {
      headers: {"Access-Control-Allow-Origin": "*"}
    })
  .then(function ({status,data}) {
    if(status === 200){
      setUserList({ all:data, list:data })
    }
  })
  }
  const handleSelectUser=(id)=>{
    history.push({pathname:`/user/${id}`,state:userList.all.find((item)=>item.id===id)});
  }
  const handleText=({target:{value}})=>{
    let updatedList = [];
    if(searchedName){
      updatedList = userList.all.filter((item)=>item.name.toLowerCase().includes(value.toLowerCase()));
      setUserList({...userList,list:updatedList});
      setSearchedName(value)
      return;
    }
      setUserList({...userList, list:userList.all});
      setSearchedName(value);
  }
  return (
    <Grid container justify="center" className={classes.body}>
      <Grid item sm={10}>
        <div>
          <Typography variant="h4" className={classes.title}>Job Portal</Typography>
          <div className={classes.main}>
            <div className={classes.textfieldSection}>
              <TextField
                className={classes.textfield}
                variant="outlined"
                value={searchedName}
                onChange={handleText}
                placeholder="Search Name"
                fullWidth
                name="name"
              />
            <div>
          </div>
          </div>
          </div>
          <div>
            <Button
              variant="contained"
              className={classes.primaryBtn}
              onClick={()=>history.push(`/shortlisted`)}
            >Shortlisted Users
            </Button> <Button
              variant="outlined"
              className={classes.secondaryBtn}
              onClick={()=>history.push(`/rejected`)}
            >Rejected Users
            </Button>
          </div>
          <br/>
          { (userList.list.length > 0 && searchedName) || userList.all.length>0 ? (
          <List
            classes={classes}
            userList={userList.list || userList.all}
            handleSelectUser={handleSelectUser}
          />) : (
            'No Result Found.'
          )}
        </div>
      </Grid>
    </Grid>

  );
}

export default MainApp;
