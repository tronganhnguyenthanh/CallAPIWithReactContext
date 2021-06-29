import React,{createContext,useReducer} from "react";
import appReducer from "./AppReducer";
const init_data = {
   user:[
    {
      id:"",
      title:"",  
    }
   ] 
}
export const GlobalContext = createContext(init_data);
export const GlobalProvider = ({children}) => {
  const [state,dispatch] = useReducer(appReducer,init_data);
  function addUser(user){
    dispatch({
      type:"ADD_USER",
      payload:user
    });
  }
  function editUser(user){
    dispatch({
      type:"EDIT_USER",
      payload:user
    });
  }
  function removeUser(id){
    dispatch({
      type:"REMOVE_USER",
      payload:id
    });
  }
  return(
   <GlobalContext.Provider value={{data:state.data,addUser,editUser,removeUser}}>
     {{children}}
   </GlobalContext.Provider>
  )
}