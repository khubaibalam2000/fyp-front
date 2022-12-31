import React, { useState } from "react";
import * as Components from './Components';
import axios, { HttpStatusCode } from 'axios';
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
function AddEvent(props) {
    const headers = {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
    };
    const history = useNavigate();
    const url = "https://localhost:7293/api/Events";
    const [eventName, setusername] = useState("");
    const [eventDescription, setdesc] = useState("");
    const [venue, setvenue] = useState("");
    const [price, setprice] = useState("");
    const [endTime, setend] = useState("");
    const [registrationEndTime, setreg] = useState("");

    async function Register() {
        if (eventName.length===0 || eventDescription.length===0 || venue.length===0 || price.length===0 || endTime.length===0 || eventName.length===0 || registrationEndTime.length===0){
            alert("above feilds can not be empty")
            return
        }
        axios.post(url,
            {
                "eventName": eventName,
                "eventDescription": eventDescription,
                "venue": venue,
                "price": price,
                "endTime": new Date(endTime),
                "registrationEndTime": new Date(registrationEndTime)
            }, { headers })
            .then((response) => {
                history('/addevents');
            }).catch((error)=>alert(error.response.data))
    }
    return (
        <div>
        <Header/>
     <div className="col-sm-6 offset-sm-3">
     <br/>
     
     <Components.Container >
             <Components.Form >
                 <Components.Title>Event Info</Components.Title>
                 <Components.Input onChange={(e) => setusername(e.target.value)} required="required" type='text' placeholder='Event Name' />
                 <Components.Input onChange={(e) => setdesc(e.target.value)} required="required" type='text' placeholder='Description' />
                 <Components.Input onChange={(e) => setvenue(e.target.value)} required="required"  type='text' placeholder='Venue' />
                 <Components.Input onChange={(e) => setprice(e.target.value)} required="required" type='text' placeholder='Price' />
                 <Form.Label>Enter Event End Date</Form.Label>
                 <Components.Input onChange={(e) => setend(e.target.value)} required="required" type='datetime-local' placeholder='End Time' />
                 <Form.Label>Enter Registration End Date</Form.Label>
                 <Components.Input onChange={(e) => setreg(e.target.value)} required="required" type='datetime-local' placeholder='Registration End time' />
                 <Button onClick={Register}  variant="outline-dark">Add</Button>
             </Components.Form>
     </Components.Container>
     </div>
     </div>
 );
}

export default AddEvent;