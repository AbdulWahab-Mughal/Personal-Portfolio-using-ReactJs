import React from 'react'
import "./SubHeader.scss"

const SubHeader = (props) => {
    const {HeaderPage,iconPage} = props;
  return (
    <div className='Wrapper'> 
        <h2 className='Heading2'>{HeaderPage}</h2>
        <span className='Span2'>{iconPage}</span>
    </div>
  )
}

export default SubHeader