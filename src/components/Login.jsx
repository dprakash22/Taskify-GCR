import { useEffect, useState } from 'react'
import '../assets/login.css'
// import { dummy } from './temp'
import { useNavigate } from 'react-router-dom'

export var dummy = {
    id:'',
    name:"",
    password:"",
    email:"",
    joined:[],
    created:[]
}
const Login=()=>{
    const [logname,setlogname]=useState("")
    const [logpass,setlogpass]=useState("")
    const navigate = useNavigate();
    // const username=document.getElementById('name').value
    // const password=document.getElementById('pass').value

    const loginclick=async()=>{
        console.log("login intial")
        const res = await fetch('http://localhost:5256/login',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({"username":logname,"password":logpass})
        })
        const dat = await res.json()
        console.log(dat)
        if(dat.data[0]._id!=false){
            console.log("fine")
            navigate('/home/'+dat.data[0]._id)
        }else{
            console.log('prblm')
        }
    }

    // useEffect(()=>{
    //     fetch('')
    // },[logname,logpass])

    return (
        <>
        <div className='login'>
            <div className='c1'></div>
            <h1 style={{"textAlign":"center","marginTop":"-100px"}}>Welcome Folks!!!</h1>
        <div className="loginouter">
            <div className='holder'>
                <h2 style={{"marginBottom":"10px"}}>Username</h2>
                <input id='name' onChange={e=>{setlogname(e.target.value)}} className='input' type='text' placeholder='Username'></input>

                <h2 style={{"marginBottom":"10px"}}>Password</h2>
                <input id='pass' onChange={e=>{setlogpass(e.target.value)}} className='input' type='text' placeholder='Password'></input>

                <div>
                <button onClick={loginclick} className='btn'><h4>Login</h4></button>
                <p>Don't have an account? 
                <a style={{"marginLeft":"20px","textDecoration":"none","margin":"0"}} href='/signUp'> Create one</a></p>
                </div>
            </div>
            <div className='full'>
                <img src='/src/assets/boy1.png'></img>
            </div>
        </div>
        </div>
        </>
    )
}

export default Login