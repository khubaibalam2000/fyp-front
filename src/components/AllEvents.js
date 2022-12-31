import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import axios from "axios"
import Form from 'react-bootstrap/Form'
// import "./styles.css";
function AllEvents(props) {
    const url = "https://localhost:7293/api/Events";
    const [data, setdata] = useState([]);
    function Getdata(){
        axios.get(url)
            .then(response => {
                setdata(response.data)
                console.log(data, "mein akela ku hun", response.data)
            })
    }
    useEffect(() => {
        Getdata();
    }, [])

    function Remove(id) {

        // console.log(url + "/{id}" + id.toString())
        const headers = {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        };
        axios.delete(url + "/" + id.toString(), { headers })
            .then(
                (response) => console.log("record deleted", response.data)
            )
            .catch(e=>console.log(e.data))
        setdata((olddata)=>
        {
            return olddata.filter((old)=>
            {
                return old.eventId !== id
            }
            )
        })
            // Getdata();

    }
    const [seacrh,setsearch]=useState("")
    const [val,setval]=useState([]);
   useEffect(()=>{
    console.log("akhtar pawa")
    axios.get(url+"/getbyname/"+seacrh)
    .then(response=>
        {
            var names=[]
            response.data.forEach(element => {
                names.push(element.eventName)
            });
            setval(names)
            console.log(val)
        }
    )
    console.log(val)
   },[seacrh])


    return (
        <div>
            <Header />
            {/* <div className="col-sm-6 offset-sm-3"> */}
            {/* <Form className="d-flex">
                <input onChange={(e)=> setsearch(e.target.value) }/>
            <Button variant="outline-success">Search</Button>
          </Form> */}
            <></>
            <Table striped bordered hover variant="dark" width="100%">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Event Name</th>
                        <th>Event Description</th>
                        <th>Venue</th>
                        <th>Price</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Registration End Date</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row) => (
                            <tr key={row.eventId}>
                                <td>{row.eventId}</td>
                                <td>{row.eventName}</td>
                                <td>{row.eventDescription}</td>
                                <td>{row.venue}</td>
                                <td>{row.price}</td>
                                <td>{row.startTime}</td>
                                <td>{row.endTime}</td>
                                <td>{row.registrationEndTime}</td>
                                <td>
                                    <Button onClick={() => { Remove(row.eventId) }} variant="outline-danger">Delete Event</Button>
                                </td>
                            </tr>))
                    }
                </tbody>
            </Table>
        </div>
        // </div>
    );
}

export default AllEvents;