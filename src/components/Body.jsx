import { useEffect, useState } from "react";
import "../assets/styles.css"
import { TaskCompo } from "./TaskCompo";
import { Link, useParams } from "react-router-dom";
import Join from "./Join";

const Body = () => {
    const dummy = useParams()
    const[data,setData]=useState([])
    const[tas,setTas]=useState(0)
    const [join,setjoin]=useState(0)
    const [code,setCode]=useState('')
    const[refresh,setRef]=useState(true)
    console.log("params id  = ",dummy.uid)
    const fet = async()=>{
        console.log(tas)
        const response = await fetch(`http://localhost:5256/get-class/${dummy.uid}/${tas}`)
        const dat = await response.json()
        console.log("-------------------",dat)
        setData(dat.data)
    }
    const joinTask=async()=>{
        console.log("Join func  ",dummy.uid,code)
        const res = await fetch('http://localhost:5256/join-class/'+dummy.uid+'/'+code)
        const dat = await res.json()
        console.log(dat)
        setRef(!refresh)
    }
    useEffect(()=>{
        fet()
    },[tas,refresh])
    return (
        <>
            <div className="body-main">

                <div className="body-first"> 
                    <div className="body-name">
                        Hey Guhan you have 5 task remaining
                    </div>
                    <div style={{"display":"flex","margin-right":"50px"}}>
                        {(join==1)?<Join fun={setCode}/>:<></>}
                        <button onClick={()=>{
                            setjoin(!join);
                            if(join==1){
                                joinTask()
                            }
                        }} style={{"margin-left":"40px","height":"40px","margin-top":"14px"}} className="body-join-button"> Join Task</button>

                    </div>
                </div>

                <div className="body-middle">
                    <div>
                        <button onClick={()=>{setTas(0)}} className="my-task-btn" style={{background:(tas)? "rgb(205, 211, 210)":"rgb(82, 212, 177)"}}> My Task</button>
                    </div>
                    <div>
                        <button onClick={()=>{setTas(1)}} className="create-task-btn" style={{background:(!tas)? "rgb(205, 211, 210)":"rgb(82, 212, 177)"}}> Created Task </button>
                    </div>
                </div>
                <a href={`/home/${dummy.uid}/create-cls`} ><img className="add-class" src="https://cdn-icons-png.freepik.com/256/5127/5127820.png?ga=GA1.1.1524325866.1710403214&"></img></a>
                <div className="body-third">
                    <table className="dataDa">
                        <thead>
                            <th>Title </th>
                            <th>Total Tasks</th>
                            <th>Participants </th>
                            <th>Description </th>
                        </thead>
                        <tbody>
                            {data.map((e)=>
                                    <TaskCompo uid={dummy.uid} id={e._id} title={e.title} desc={e.description} tas={e.tasks.length} mem={e.members.length}/>
                            )}
                        </tbody>

                    </table>
                 </div> 

            </div>
        </>
    )
}

export default Body;
