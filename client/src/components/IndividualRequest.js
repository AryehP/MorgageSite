import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRequestContext } from '../contexts/RequestContext';
import './IndividualRequest.css';

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
      <label>Full name: {indivdualRequest.requester_full_name}</label><br></br>
      <label>Phone number: {indivdualRequest.requester_phone_number}</label><br></br>
      <label>Email: {indivdualRequest.requester_email}</label><br></br>
      <label>Life status: {indivdualRequest.requester_lifestatus}</label><br></br>
      <label>Work status: {indivdualRequest.requester_workstatus}</label><br></br>
      <label>Partner name: {indivdualRequest.partner_full_name}</label><br></br>
      <label>Partner Phone number: {indivdualRequest.partner_phone_number}</label><br></br>
      <label>Partner Email: {indivdualRequest.partner_email}</label>
      
    </div>
    </>
  )
}

export default IndividualRequest