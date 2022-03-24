import React, { useEffect, useState } from 'react';
import { useRequestContext } from '../contexts/RequestContext';

function AllRequests() {

  const {state} = useRequestContext();

 
      
  return (
    <div className='all-requests'>

        {state.items.map(request => {
          const name = request.full_name;
          
          return(
            <h6 key={request.id}>{name}</h6>
          )
        })
      }
    </div>
  );
}

export default AllRequests