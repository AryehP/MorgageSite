import React, {useContext, useMemo, useReducer, useEffect, useState, useCallback} from 'react'

const Context = React.createContext({});

function reducer(state, action){
    switch(action.type){
        case 'GET_ALL_REQUESTS':
           return{
               ...state,
                items: action.payload.data,
           };
        case 'GET_REQUEST_BY_ID':
            return{
                items: state.items.find(item => item === action.payload.id),
            };
        case 'ADD_REQUEST':
            return{
                
            };
    }
}

function RequestProvider({children}){
    const [state, dispatch] = useReducer(reducer, {
        items: [],
    });

    //const [requests, setRequests] = useState([]);

    useEffect(() => {

        fetch('api/requests')
        .then(response => response.json())
       .then(data => dispatch({
           type: 'GET_ALL_REQUESTS',
           payload: {data},
       }));
  
    },[])

    const getRequest = useCallback((id) => {
        dispatch({
            type: 'GET_REQUEST_BY_ID',
            payload: {id},
        })
    })

   const addRequest = useCallback(data => {
        fetch('api/requests',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: 'ADD_REQUEST',
            payload: {data},
        }))
   })

    const value = useMemo(() => ({
        state,
        addRequest,
      }), [state, dispatch]);

        return (
            <Context.Provider value={value}>
             {children}
            </Context.Provider>
        )
}

function useRequestContext(){
    return useContext(Context);
}
export {
    RequestProvider,
    useRequestContext
}