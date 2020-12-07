//import React from 'react';
const initialState={
    users:{
        id:'',
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        entries:0,
        joined: ''
      }
    
}

const userReducer=(state=initialState,action)=>{
    if(action.type==='REGISTER')
    {
        //console.log(action.data);
        
                  return {                  
                      ...state,
                      users:{
                          ...state.users,
                          id:action.data.id,
                          first_name: action.data.first_name,
                          last_name:action.data.last_name,
                          email:action.data.email,
                          password:action.data.password,
                          entries:action.data.entries,
                          joined:action.data.joined
                      }     
            
                  }

    }
    if(action.type==='LOGIN')
    {
        //console.log(action.data);
        
                  return {                  
                      ...state,
                      users:{
                          ...state.users,
                          id:action.data.id,
                          first_name: action.data.first_name,
                          last_name:action.data.last_name,
                          email:action.data.email,
                          password:action.data.password,
                          entries:action.data.entries,
                          joined:action.data.joined
                      }     
            
                  }

    }

    if(action.type==='COUNTER')
    {
        //console.log(action.data);
        
                  return {                  
                      ...state,
                      users:{
                        ...state.users,
                       
                        entries:action.data,
                       
                    }     
            
                  }

    }
   
}
export default userReducer;