import React, {useState} from 'react'
import {Document, Page, pdfjs} from 'react-pdf'
import {IconButton} from '@mui/material'
import LeftArrow from '@mui/icons-material/ArrowLeftOutlined'
import RightArrow from '@mui/icons-material/ArrowRight'

function DataListItem({data}) {
    function onDocumentLoadSuccess({ numPages }) {
       setNumPages(numPages);
     }
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [pageNumber, setPageNumber]=useState(1);
    const [numPages, setNumPages]=useState(0);
    const handlePageChange=(action)=>{
        setPageNumber((pageNumber+action>0&&pageNumber<=numPages)?pageNumber+action:pageNumber)
    }
    
    if(data.type==='video')
    {
        return(
            <video className='video-item' controls>
                <source  src={data.content}/>
            </video>
        )
    }
    if(data.type==='pdf')
    {
        return(
            <div>
            <div className='pdf-container'>

            <Document onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error} file={data.content}>
                <Page pageNumber={pageNumber}  /></Document>
            </div>
            <div className='pdf-container-footer'>
            <IconButton  onClick={()=>handlePageChange(-1)} ><LeftArrow/> </IconButton>
            <div>
                <span>{pageNumber}/{numPages}</span>
            </div>
            <IconButton onClick={()=>handlePageChange(1)} > <RightArrow/></IconButton>

            </div>
            </div>
        )
    }
    return (
        <></>
    )
}

export default DataListItem