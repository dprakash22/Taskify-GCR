import { useNavigate, useParams } from "react-router-dom"
import "../assets/styles.css"
import { useState } from "react"

const Addclass=()=>{
    const {uid}=useParams() 
    // console.log(ui)
    const nav= useNavigate()
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    console.log(uid)
    const submitDa=async()=>{

        const res = await fetch('http://localhost:5256/create-class/'+uid,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "title":title,
                "desc":description
            })
        })
        const data = await res.json()
        nav("/home/"+uid)
    }
    return (
        <>
        <img className="addclasspic" src="http://localhost:5256/static/pic.jpg"></img>
        <form className="addclassform">
            <div className="addclassform1" >
            <label>
                <h4>Title</h4>
                <input onChange={(e)=>{setTitle(e.target.value)}} style={{"height":"35px","marginTop":"9px","marginLeft":"120px","width":"190px","borderRadius":"10px","paddingLeft":"5px"}} type="text" placeholder="Enter the title"></input>
            </label>
            <label>
                <h4>Description</h4>
                <input onChange={(e)=>{setDescription(e.target.value)}} style={{"height":"35px","marginTop":"9px","marginLeft":"27px","width":"190px","borderRadius":"10px","paddingLeft":"5px"}} type="text" placeholder="Enter the Description"></input>
            </label>
            <button onClick={(e)=>{e.preventDefault();submitDa()}} className="addclassbtn" style={{"width":"100px","height":"35px","marginLeft":"130px","marginTop":"20px","borderRadius":"10px"}}>Create</button>
            </div>
        </form>
        </>
    )
}

export default Addclass