import React, { useEffect, useState } from 'react';
import { useRequestContext } from '../contexts/RequestContext';
import { Link , Outlet} from 'react-router-dom';
import './AllRequests.css';
function AllRequests() {

  const {state} = useRequestContext();

 
      
  return (
    <div className='all-requests'>

        {state.items.map(request => {
          const name = request.requester_full_name;
          
          return(
          <div className='request'>
            <Link key={request._id} to={`/${request._id}`}>{name}</Link>
          </div>
           
          )
        })
      }
      <div><Outlet/></div>
    </div>
  );
}

export default AllRequests