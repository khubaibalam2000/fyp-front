import React, { useState } from "react";
import * as Components from './Components';
import axios, { HttpStatusCode } from 'axios';
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import { useNavigate } from "react-router-dom"
function Login() {
    const headers = {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
    };
    const url="https://localhost:7293/api/Users/login";
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const history = useNavigate();
    function Register(){
        console.log(username,password);
        axios.post(url,
            {"userName":username,
             "password" : password,
             "isAdmin" : true
            },{headers})
            .then((response)=>{
                localStorage.setItem('userinfo', JSON.stringify(response.data))
                if (response.data.isAdmin===true){
                    history("/addevents")
                }
                else history("/unbookedevents")
            })
            .catch((error)=>alert(error.response.data))
    }
     return(
         <div>
            <Header/>
         <div className="col-sm-6 offset-sm-3">
         <br/>
         
         <Components.Container >
                 <Components.Form >
                     <Components.Title>Login</Components.Title>
                     <Components.Input onChange={(e) => setusername(e.target.value)} type='text' placeholder='Username' />
                     <Components.Input onChange={(e) => setpassword(e.target.value)} type='password' placeholder='Password' />
                     <Button onClick={Register}  variant="outline-dark">LogIn</Button>
                 </Components.Form>
         </Components.Container>
         </div>
         </div>
     )
}

export default Login;