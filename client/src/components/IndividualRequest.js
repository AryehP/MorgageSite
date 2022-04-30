import React from 'react'
import { useParams } from 'react-router'
import { useRequestContext } from '../contexts/RequestContext';


function IndividualRequest() {

  const {state} = useRequestContext();
  const {request} = useParams();

  return (
    <>
    <div>{request}</div>
    <div className='content'>
      
    </div>
    </>
  )
}

export default IndividualRequest