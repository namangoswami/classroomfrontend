import React, {useEffect, useState} from 'react'
import './classUI.css'
import { CircularProgress, Grid } from '@mui/material'
import DataList from './DataList/DataList'
import StudentList from './StudentList/StudentList'
import SpeedDial from './SpeedDial/SpeedDial'
import AddDialogFile from './AddDialog/AddFile'
import AddDialogStudent from './AddDialog/AddStudent'
import { useDispatch, useSelector } from 'react-redux'
import { getClass } from '../../redux/classes/classesActions'
import { useParams } from 'react-router-dom'


function ClassUI() {
  const [openFile, setFileOpen]=useState(false);
  const [openStudent, setStudentOpen]=useState(false);
  const [loading, setLoading]=useState(false);
  const classObj=useSelector(state=>state.class);
  const params=useParams();
  const dispatch=useDispatch();
  console.log(classObj)
  useEffect(()=>{
    dispatch(getClass(params.classId));    
    if(classObj._id==='')
    {
      setLoading(true);
    }
    else
    {
      setLoading(false);
    }
    
  }, [classObj._id])
  if(loading)
  {
      return<div style={{flex:1,display:'flex', justifyContent:'center', alignItems:'center'}} >
          <CircularProgress/>
      </div>
  }
  return (
    <div className='class-ui-container'>
        <Grid container justifyContent={'space-between'} style={{height:'100%'}}>
            <Grid item xs={10}  height='100%' >
                <DataList />
            </Grid>
            <Grid item xs={1.99}borderLeft="1px solid rgba(0, 0, 0, 0.70)" height='100%' paddingLeft="10px" >
                
                <StudentList/>
                
            </Grid>
           <SpeedDial setFileDialogOpen={setFileOpen} setStudentDialogOpen={setStudentOpen} />
        </Grid>
        <AddDialogFile open={openFile} setOpen={setFileOpen}/>
        <AddDialogStudent open={openStudent} setOpen={setStudentOpen}/>
    </div>
  )
}

export default ClassUI