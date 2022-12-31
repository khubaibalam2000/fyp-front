import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
function Protected2(props) {
    const history=useNavigate();
    useEffect(()=>{
        if (localStorage.getItem("userinfo")){
        if(JSON.parse(localStorage.getItem("userinfo"))["isAdmin"]===false){
            history("/bookedevents")
        }
    }
    else{
        console.log("skdlkaksdl")
        history("/signup")
    }
    },[])

    return (
        <div>
            <props.func/>
        </div>
    );
}

export default Protected2;