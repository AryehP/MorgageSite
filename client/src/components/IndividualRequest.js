import React from 'react'
import { useParams } from 'react-router'

function IndividualRequest() {

  const {request} = useParams();
  return (
    <div>{request}</div>
  )
}

export default IndividualRequest