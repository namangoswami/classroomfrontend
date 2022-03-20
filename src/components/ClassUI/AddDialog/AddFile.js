import React, { useRef, useState, useEffect } from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,IconButton, Button, TextField} from '@mui/material'
import CrossIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from 'react-redux';
import { addDoc } from '../../../redux/classes/classesActions';

function AddDialog({open, setOpen}) {
    
  const handleClose = () => {
    setOpen(false);
  }
  const [dialogData, setDialogData]=useState({
      name:'',
      file:null
  })
  const handleFileChange=(e)=>{

    if(!e)
    {
        setDialogData({...dialogData, file:null});
        return;
    }
    if(e.target.files[0].name)
    {
        let file =e.target.files[0];
        let type=file.name.split('.');
        type=type[type.length-1];
        setLabelValue(file.name)
        convertToBase64(file)
        .then(result=>{
            setDialogData({...dialogData, file:{content:result, type}});

        })
        .catch(err=>console.log(err))
    }
    else
    setDialogData({...dialogData, file:null})
  }
  const convertToBase64=file=>{
      return new Promise(resolve=>{
          let baseURL="";
          let reader=new FileReader();
          reader.readAsDataURL(file);
          reader.onload=()=>{
              baseURL=reader.result;
              resolve(baseURL);
          };
      })
  }
  const dispatch=useDispatch();
  const classObj=useSelector(state=>state.class);
  const handleSubmit=()=>{
    dispatch(addDoc(dialogData.file, classObj._id))
  }
  const fileInput=useRef();
  const [labelValue, setLabelValue]=useState(null);
  useEffect(() => {
    setDialogData({...dialogData, file:null})
  
  }, [open])
  
  return (
    <Dialog open={open} fullWidth maxWidth={'md'} onClose={handleClose} style={{color:''}}>
    <DialogTitle>Add Content</DialogTitle>
    <DialogContent>
      <DialogContentText>
          Add Documents or Videos to this Classroom
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="File Name"
        type="text"
        fullWidth
        onChange={(e)=>setDialogData({...dialogData,name:e.target.value})}
      />
      <div className='select-file-div'>
          <input className='hidden'ref={fileInput} name='fileInput' id='fileInput' type='file' onChange={handleFileChange}  ></input>
          <Button variant='contained'onClick={()=>fileInput.current.click()} >Select File</Button>
          <DialogContentText color={dialogData.file?'black':'rgba(0, 0, 0, 0.6)'} >Selected File: {(labelValue&&dialogData.file)?labelValue:'None'}</DialogContentText>
          {dialogData.file&&<IconButton onClick={()=>handleFileChange(null)}><CrossIcon/></IconButton>}
      </div>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleSubmit}>Add</Button>
    </DialogActions>
  </Dialog>
  )
}

export default AddDialog