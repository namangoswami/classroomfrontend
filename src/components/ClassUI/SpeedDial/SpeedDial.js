import React from 'react'
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from '@mui/material';
import FileCopyIcon from '@mui/icons-material/NoteAdd';
import AddIcon from '@mui/icons-material/PersonAdd';

function SpeedDialFn({setFileDialogOpen, setStudentDialogOpen}) {
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const handleAddPost=()=>{
        setFileDialogOpen(true);
      }
      const handleAddStudent=()=>{
        setStudentDialogOpen(true)
      }
  return ( <SpeedDial
    ariaLabel="Options"
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
    icon={<SpeedDialIcon />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
  >
    
      <SpeedDialAction
        icon={<FileCopyIcon/>}
        tooltipTitle={'Post'}
        tooltipOpen
        onClick={handleAddPost}
      />
     <SpeedDialAction
        icon={<AddIcon/>}
        tooltipTitle={'Add'}
        tooltipOpen
        onClick={handleAddStudent}
        />
  </SpeedDial>
  )
}

export default SpeedDialFn