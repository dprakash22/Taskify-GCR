import { Link } from "react-router-dom"

export const TaskCompo = (props)=>{
    console.log(props)
    return (
        
            <tr>
                <td><Link to={'/home/'+props.uid+'/task/'+props.id}> {props.title}  </Link></td>
                <td> {props.tas} </td>
                <td> {props.mem} </td>
                <td> {props.desc} </td> 
            </tr>
       
    )
}
