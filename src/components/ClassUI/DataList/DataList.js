import { Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import DataListItem from './DataListItem/DataListItem'

function DataList() {
    const data=useSelector(state=>state.class.data)
    return (
      <Stack className='scrollable-stack data-stack' spacing={5} padding={'10px 15px '} >
         {data.map((i, k)=><DataListItem key={k} data={i}/>)}
      </Stack>
  )
}

export default DataList