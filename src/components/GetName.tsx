import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {nameType} from './../types/QuizType'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const btnStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },
  },
}));

export default function GetName({getName}:nameType) {
  const classes = useStyles();
  const btnclasses = btnStyles();
  let [name,setName]=useState("")
  function getValue(e:any){
    setName(e.target.value)
  }


  return (
    <form onSubmit={(e:React.FormEvent<EventTarget>)=>{getName(e,name)}} className={classes.root} noValidate autoComplete="off">
      <TextField  id="standard-basic" label="Enter Your Name" onChange={getValue}/>


      <div className={btnclasses.root} style={{ margin: '0 auto'}}>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>

    </div>

    </form>
  );
}
