import React , {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import axios from "axios";
import {useState} from "react";
import {Table,Button} from "react-bootstrap";
import {useEffect} from "react";
export const DataList = () => {
  const {user,removeUser} = useContext(GlobalContext);
  const [list,setList] = useState(user);
  useEffect(() => {
    getList()
  },[])
  const getList = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => {
     setList(res.data);
    })
  }
  return(
   <React.Fragment>
     <Table className="table table-hover table-bordered">
       <thead>
         <tr>
           <th className="text-center">Id</th>
           <th className="text-center">Title</th>
           <th className="text-center">Action</th>
         </tr>
       </thead>
       <tbody>
          {list.map((i) => {
            return(
             <tr key={i.id}>
               <td className="text-center">{i.id}</td>
               <td className="text-center">{i.title}</td>
               <td className="text-center">
                 <Button className="btn btn-danger" onClick={() => removeUser(i.id)}>Delete</Button>
               </td>
             </tr>
            )  
          })
          }
       </tbody>
     </Table>
   </React.Fragment>
  )
}