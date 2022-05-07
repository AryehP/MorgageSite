import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRequestContext } from '../contexts/RequestContext';


function IndividualRequest() {
  
  const [indivdualRequest, setIndivdualRequest] = useState({});
 
  const {getRequest} = useRequestContext();
  const {request} = useParams();
  
  useEffect(() => {
    fetch(`api/requests/${request}`)
    .then(response => response.json())
    .then(data => setIndivdualRequest(data));

  },[])

  
  return (
    <>
    <div></div>
    <div className='content'>
      {indivdualRequest.requester_full_name}
    </div>
    </>
  )
}

export default IndividualRequest