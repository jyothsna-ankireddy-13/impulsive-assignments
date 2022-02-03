import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
export default function Login_Form() {

    const adminUser = {
        email:"example@gmail.com",
        password:"123456"
      }
    
      
      const [error,setError] = useState("");
      const[details,setDetails] = useState({email:"",password:""})
    
      const Login = (details) =>{
        console.log(details);
        fetch('http://assignment.cyberboxer.com/auth/login',{
            method:"POST",
            body:JSON.stringify(details)
        })
        
        .then((response)=>{
            console.log(response);
            response.json().then((result)=>{
                console.warn("result",result);
                localStorage.setItem('login',JSON.stringify({
                    login:true,
                    token:result.token
                }))
            })
        })
      }
      const navigate = useNavigate()
      const submitHandler = e =>{
        e.preventDefault();
        
    
        if(details.email === adminUser.email && details.password === adminUser.password){
          console.log("Logged in")
          Login(details);
          navigate('/home')
        }else{
          console.log("Details do not match")
          setError("Details doesnot match")
        }
    }

    React.useEffect(()=>{
        localStorage.setItem('form',JSON.stringify(details));
    },[details])

  return (
  <div className="container-box">
      <form onSubmit={submitHandler}>
        <div className="form-inner"> 
            <h2>Login</h2>
            
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input className="form-control" type="email" name="email" id="email" onChange={e=> setDetails({...details,email:e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="passsword">Password:</label>
                <input className="form-control" type="password" name="password" id="password" onChange={e=> setDetails({...details,password:e.target.value})} value={details.password} />
            </div>
            <button type="submit" className="btn btn-primary btn-block">SignIn</button>
        </div>

    </form>
  </div>
  );
}
