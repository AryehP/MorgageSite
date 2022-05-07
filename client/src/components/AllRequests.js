import React, { useEffect, useState } from 'react';
import { useRequestContext } from '../contexts/RequestContext';
import { Link , Outlet} from 'react-router-dom';
function AllRequests() {

  const {state} = useRequestContext();

 
      
  return (
    <div className='all-requests'>

        {state.items.map(request => {
          const name = request.requester_full_name;
          
          return(
          // <h6 key={request.id}>{name}</h6>
           <Link key={request._id} to={`/${request._id}`}>{name}</Link>
          )
        })
      }
      <div><Outlet/></div>
    </div>
  );
}

export default AllRequests