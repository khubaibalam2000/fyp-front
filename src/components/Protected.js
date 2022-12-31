import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Protected2 from './Protected2'
function Protected(props) {
    const history=useNavigate();
    useEffect(()=>{
        console.log("mama mia")
        if(!localStorage.getItem("userinfo")){
            console.log("kaka mia ")
            history("/signup")
        }
    },[])

    return (
        <div>
            < Protected2 func={props.func}/>
        </div>
    );
}

export default Protected;