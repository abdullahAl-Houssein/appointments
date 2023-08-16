import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'


const Action = ({OnDelete,ViewData}) => {
  return (
    <Row className='justify-content-center  my-2'>
          <Col sm="8" className='d-flex justify-content-between'>
            <button onClick={OnDelete} className='btn-style p-2'>Delete All</button>
            <button onClick={ViewData} className='btn-style p-2'>View Data</button>
          </Col>
    </Row>
  )
}

export default Action
