import React from 'react'
import { Link } from 'react-router-dom'
import './gridItem.css'



function ClassGridItem({data}) {
  return (
      <Link to={"/dashboard/"+data._id}>
    <div className='card grid-card'>
        <div className='grid-header'>
        </div>
        <div className='grid-body' >
            <div className='class-name-header'>
                <span className='heading-xs'>{data.className}</span>
                <span className='heading-xs'>{data.section}</span>
            </div>
            <div className='class-subject'>
                <span className='heading-medium'>{data.subject}</span>
            </div>
            <div>
                <span>{data.students.length} Student{data.students.length!==1?'s':''}</span>
            </div>
        </div>
    </div>
      </Link>
  )
}

export default ClassGridItem