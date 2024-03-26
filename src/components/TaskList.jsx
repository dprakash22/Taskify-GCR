import { useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
import Addtask from "./Addtask"
// import book1 from "src/assets/book1.png"


export const TaskList =()=>{
   
    const [datta , setdaata] = useState([]);
    const [dummy_title,setDummy_title] = useState()
    const {id,uid} = useParams();
    const [creator,setCre]=useState("")
    // const [list,setlist] = useState(task)
    const fet_data = async () => {
        console.log("in the page")
        const ur=`http://localhost:5256/get-task/${id}`
        console.log(ur)
        const dats = await fetch(ur)
        const dats1 = await dats.json()
        console.log("the needed data ===========   ",dats1.values)
        setdaata(dats1.values)
        setCre(dats1.creator)
        setDummy_title(dats1.class_title)
    }
    useEffect(()=>{fet_data()},[])
    return (
        <div className="rightside">
                        <>
                            <div className="titlecard">
                                <h1 style={{"marginLeft":"60px","marginTop":"60px"}}> {dummy_title} </h1>
                                <img style={{"width":"290px","marginLeft":"600px","marginTop":"-120px"}} src="http://localhost:5256/static/bk.png"></img>
                                </div>
                                {(creator==uid)?<div className="plus-logo">
                                    <a href={`/home/${uid}/task/${id}/form`}>
                                        <img className="plus" src="https://cdn-icons-png.flaticon.com/128/6844/6844877.png"></img> 
                                    </a>
                                </div>:<></> }
                                <div className="tasklist">                                    
                                    {(datta.length==0)?<h1>No tasks are uploaded yet...</h1>:
                                        datta.map(yy => {
                                            return (
                                                <Addtask title = {yy.title} description = {yy.desc} file = {yy.file}/>
                                            )
                                        })
                                    }

                            </div>
                        
                        </>
        </div>
    )
}