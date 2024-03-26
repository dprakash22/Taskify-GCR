import { useState } from 'react';
import '../assets/signstyles.css';
import { Link, createRoutesFromChildren, useNavigate } from 'react-router-dom';

const NewUser = () => {

  const[user , setUser] = useState();
  const[emails,setEmails] = useState();
  const[passwords , setPasswords] = useState();
  const[conpas,setConpas] = useState();
const navigate = useNavigate()
  const handleValues = async () => {

      try {
        if (passwords === conpas) {
          const response = await fetch('http://localhost:5256/sign-up' , {
            method : 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body : JSON.stringify({
              name : user,
              password : passwords,
              email : emails
            })
          })
          const dat= await response.json()
          console.log("Perfect Signin and everything are up to date")
          navigate('/')
        }
        else{
          console.log("Password is not same")
        }
      } 
      catch (error) {
        console.log("Error is => ",error)
      }
  }
  console.log("you are in sign up page")
    return ( 
      <>
        <form className="form">
        <p className="title">Register</p>
        <label>
                <input className="input" type="text" placeholder="" required="" onChange={t => {setUser(t.target.value)}}/>
                <span>UserName</span>
        </label>
        <label>
          <input className="input" type="email" placeholder="" required="" onChange={k => {setEmails(k.target.value)}}/>
          <span>Email</span>
        </label>
  
        <label>
          <input className="input" type="password" placeholder="" required="" onChange={u => {setPasswords(u.target.value)}} />
          <span>Password</span>
        </label>
  
        <label>
          <input className="input" type="password" placeholder="" required="" onChange={h => {setConpas(h.target.value)}}/>
          <span>Confirm password</span>
        </label>
        
        <button className="submit" onClick={e => {e.preventDefault();handleValues()}}>Submit</button>
        
        <p className="signin">
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
      <img className='pen' src='src/assets/pen.avif'></img>
      </>
    )
}

export default NewUser