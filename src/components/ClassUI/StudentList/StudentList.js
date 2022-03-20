import { Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import StudentListItem from './StudentListItem/StudentListItem'

function StudentList() {
    const data=useSelector(state=>state.class.students)
    return (

        
      <Stack className='scrollable-stack student-stack' spacing={1}  >
         {data.map((i, k)=><StudentListItem key={k} data={i}/>)}
      </Stack>
  )
}

export default StudentList