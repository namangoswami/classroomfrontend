import React, { useState, useEffect } from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { addClass, getClasses } from '../../../redux/user/userActions';


function AddDialog({open, setOpen}) {
    const user=useSelector(state=>state.user);
  const handleClose = () => {
    setOpen(false);
  }
  const [dialogData, setDialogData]=useState({
      section:'',
      className:'',
      subject:'',
      teacher:user.id
  })
  const handleChange=(e)=>{
    setDialogData({...dialogData, [e.target.id]:e.target.value});
  }
  const dispatch=useDispatch();
  const handleSubmit=()=>{
    dispatch(addClass(dialogData));
  }
 
  return (
    
    <Dialog open={open} fullWidth maxWidth={'sm'} onClose={handleClose} style={{color:''}}>
    <DialogTitle>Add Class</DialogTitle>
    <DialogContent>
      <DialogContentText>
          Add Class with the following Details
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="className"
        label="Class Name"
        type="text"
        fullWidth
        onChange={handleChange}
        />

      <TextField
        
        margin="dense"
        id="section"
        label="Section"
        type="text"
        onChange={handleChange}
        fullWidth
        />
      <TextField
        
        margin="dense"
        id="subject"
        label="Subject"
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