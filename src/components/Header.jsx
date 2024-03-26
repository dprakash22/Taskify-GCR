import "../assets/styles.css"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Header = () => {
    const {uid} =useParams()
    const [dummy,setDummy]=useState({})
    const fet=async()=>{
        const res = await fetch('http://localhost:5256/get-user/'+uid)
        const data = await res.json()
        setDummy(data)
    }
    useEffect(()=>{fet()},[])
    return (
        <>
                <div className="first-header"> 
                
                    <div className="first-1"> 
                        {/* <div> <img src="https://cdn-icons-png.flaticon.com/128/14607/14607522.png" className="header-logo"/> </div> */}
                        {/* <div className="header-logo"> D </div> */}
                        <Link to={'/home/'+uid}>
                        <img className="header-logo" src="http://localhost:5256/static/logo.png"></img>
                        </Link>
                    </div>

                    <div className="first-2">
                        <div>
                            <Link to={'/home/'+uid}>
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to={'/'}>Logout</Link>
                        </div>
                        <div className="profile"><h2 className="D">{(dummy.name)?(dummy.name.charAt(0)).toUpperCase():""}</h2></div>
                    </div>
                    
                </div>
        </>
    )
}

export default Header