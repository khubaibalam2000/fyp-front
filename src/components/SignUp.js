import React, { useState } from "react";
import axios from "axios";
import * as Components from './Components';
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Header from "./Header";


function SignUp() {
    const headers = {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
    };
    const history = useNavigate();
    const url = "https://localhost:7293/api/Users";
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    async function Register() {
        console.log(username, password);
        if (username.length === 0) {
            alert("Username can not be empty");
            return
        }
        if (password.length === 0) {
            alert("Password can not be empty");
            return
        }
        var isAdmin = false;
        if(checked && text==="secret"){
            isAdmin = true
        }
        axios.post(url,
            {
                "userName": username,
                "password": password,
                "isAdmin": isAdmin
            }, { headers })
            .then((response) => {
                history('/Login');
            }).catch((error) => alert(error.response.data))
    } 
    const [checked, setChecked] = useState(false);
    const [text, setText] = useState("");
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <br />
                <Components.Container >
                    <Components.Form >
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input onChange={(e) => setusername(e.target.value)} type='text' placeholder='Username' />
                        <Components.Input onChange={(e) => setpassword(e.target.value)} type='password' placeholder='Password' />
                        <label>
                            <h4>IFADMIN?</h4>
                            <Components.Input
                                name="checkbox"
                                type="checkbox"
                                checked={checked}
                                onChange={() => {
                                    if (checked) {
                                        setText('')
                                    }
                                    setChecked(!checked)
                                }
                                }
                            />
                        </label>
                        <label>
                            <input
                                name="input"
                                type="text"
                                placeholder="password"
                                disabled={!checked}
                                value={text}
                                onChange={e => setText(e.target.value)}
                            />
                        </label>
                        <br />
                        <Button onClick={Register} variant="outline-dark">SignUp</Button>
                    </Components.Form>
                </Components.Container>
            </div>
        </div>
    );
}

export default SignUp;