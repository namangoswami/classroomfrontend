import React, { useState } from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,Grid, Button, TextField} from '@mui/material'
import { useDispatch,useSelector } from 'react-redux';
import { addStudent } from '../../../redux/classes/classesActions'

function AddDialog({open, setOpen}) {
    
  const handleClose = () => {
    setOpen(false);
  }
  const [dialogData, setDialogData]=useState({
      firstName:'',
      lastName:'',
      email:''
  })
  const handleChange=(e)=>{
    setDialogData({...dialogData, [e.target.id]:e.target.value});
  }
  const dispatch=useDispatch();
  const classObj=useSelector(state=>state.class);
  const handleSubmit=()=>{
    dispatch(addStudent(dialogData, classObj._id));
  }

  return (
    
    <Dialog open={open} fullWidth maxWidth={'sm'} onClose={handleClose} style={{color:''}}>
    <DialogTitle>Add Student</DialogTitle>
    <DialogContent>
      <DialogContentText>
          Add Student with the following Details
      </DialogContentText>
      <Grid container spacing={2} >
      <Grid item xs={6}>

      <TextField
        autoFocus
        margin="dense"
        id="firstName"
        label="First Name"
        type="text"
        fullWidth
        onChange={handleChange}
        />
        </Grid>
        <Grid item xs={6}>

      <TextField
        autoFocus
        margin="dense"
        id="lastName"
        label="Last Name"
        type="text"
        onChange={handleChange}
        fullWidth
        />
        </Grid>
        </Grid>
      <TextField
        autoFocus
        margin="dense"
        id="email"
        label="Email"
        type="text"
        onChange={handleChange}
        fullWidth
      />
      
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleSubmit}>Add</Button>
    </DialogActions>
  </Dialog>
  )
}

export default AddDialog