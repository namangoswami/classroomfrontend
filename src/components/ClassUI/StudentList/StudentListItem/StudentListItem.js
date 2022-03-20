import React from 'react'
import UserIcon from '@mui/icons-material/AccountCircle'

function StudentListItem({data}) {

  return (
      <div className='student-list-item' > <UserIcon style={{fontSize:50, color:'black'}} /> {data.firstName} {data.lastName}</div>
  )
}

export default StudentListItem