import "../assets/dharun.css"
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export const CreateForm = ()=>{
    const nav = useNavigate()
    const form = new FormData()
    const {id,uid} = useParams();
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const Handle =(fils)=>{
        console.log(fils[0])
        form.append('file',fils[0])
    }
    const submitHandle = async()=>{
        form.append('title',title)
        form.append('desc',description)
        const response = await fetch('http://localhost:5256/create-task/'+id,{
            method : 'POST',
            body : form
        })
        const data = await response.json()
        console.log(data)
        nav('/home/'+uid+'/task/'+id)
    }
    const style = {
        rightContainer:{
            width:'75%',
            height:'100%',
            padding:'0% 0px',
            marginLeft:'20%',
            marginTop:'10%'
        },
        profileContainer:{
            height:'175px',
            width:'175px',
            border:'2px solid black',
            borderRadius:'50%',
            background:'red',
            margin:'15% auto'
        },
        inpContainer:{
            display:'flex',
            flexDirection:'column' ,
            margin:'5% 15%',
            // border:'1px solid black'  ,
            // paddingBo
        },
        btn:{
            border:'1px solid grey',
            alignSelf:'flex-end',
            borderRadius:'20px',
            padding:'0px 15px',
            margin:'0px 0px',
            padding:'10px',
            background:'rgb(80, 194, 163)',
            width:"100px",
            textAlign:"center"            
        },
        inp:{
            height:'45px',
            width:'300px',
            border:'0px',
            borderBottom:'2px solid silver',
            fontSize:'20px',
            padding:'5px'
        },
        txtInp:{
            height:'125px',
            width:'300px',
            // border:'0px',
            // borderBottom:'2px solid silver',
            fontSize:'20px',
            padding:'5px'
        },
        fileInp:{
            height:'49px',
            width:'300px',
            border:'0px',
            padding:'7%'
        },
        tdata:{
            padding:'2%'
        }
    }
    return (
        <div style={style.rightContainer}>
                <div style={style.inpContainer}>
                    <table className="inp-table">
                        <tr>
                            <td style={style.tdata}> <h1>Title</h1></td>
                            <td style={style.tdata}><input onChange={(e)=>setTitle(e.target.value)} style={style.inp} type="text" id="title" /></td>
                        </tr>
                        <tr>
                            <td style={style.tdata}><h1>Description</h1></td>
                            <td style={style.tdata}><textarea style={style.txtInp} onChange={e=>setDescription(e.target.value)} name="desc" id="" cols="30" rows="10"></textarea></td>
                        </tr>
                        <tr>
                            <td style={style.tdata}><h1>Upload Files</h1></td>
                            <td style={style.tdata}><input name="file" onChange={e=>{Handle(e.target.files)}} style={style.fileInp} type="file" id="" /></td>
                        </tr>
                    </table>
                    <div style={style.btn}>
                        <button onClick={e=>submitHandle()} style={{background:'inherit',border:'0px'}}><h2 style={{color:'white'}}>
                            <Link to={'/home/'} > Submit </Link></h2></button>                         
                    </div>
                </div>
            </div>
    )
}


