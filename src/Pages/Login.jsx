import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [email,setEmail] = useState("");
    const[password,setPassword] = useState("");
  const navigate = useNavigate(); 
    function handleLogin(){
     if(email=="admin@gmail.com" && password =="admin1234"){
        alert("Login Success");
        localStorage.setItem("Authentication_State","true");
        navigate("/admin");
     }
     else{
      alert("Wrong email or password");
     }
    }
  return (
    <div style={container}>
       <input className="LoginItems" type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
       <input  className="LoginItems"  type="password" placeholder="Enter Passsword" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
       <button onClick={()=> handleLogin()}>Login</button>
    </div>
  )
}
const container ={
    width:"400px",
    height:"300px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    backgroundColor:"royalBlue",
    padding:"10px",
    gap:"15px"
  }
  
  
export default Login
