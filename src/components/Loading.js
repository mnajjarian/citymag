import React from 'react'
import { Col } from 'reactstrap'

export const Loading = () => {
  return(
    <Col>
      <span className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary' ></span>
      <p>Loading...</p>
    </Col>
  )
}