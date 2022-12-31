import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Header from "./Header";
function UnbookedEvents(props) {
    const userId= JSON.parse(localStorage.getItem("userinfo"))["userId"];
    const url_unbooked = "https://localhost:7293/api/Events/getunbookedevents/"+ userId.toString();
    const url_book = "https://localhost:7293/api/Bookings/add/"+userId.toString();
    const [data, setdata] = useState([]);
    function Getdata(){
        axios.get(url_unbooked)
            .then(response => {
                setdata(response.data)
                console.log(data, "mein akela ku hun", response.data)
            })
    }
    useEffect(() => {
        Getdata();
    }, [])

    function Add(id) {

        // console.log(url + "/{id}" + id.toString())
        const headers = {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        };
        axios.post(url_book + "/" + id.toString())
            .then(
                (response) => console.log("record Added", response.data)
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

    return (
        <div>
            <Header />
            {/* <div className="col-sm-6 offset-sm-3"> */}


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
                                    <Button onClick={() => { Add(row.eventId) }} variant="outline-danger">Book</Button>
                                </td>
                            </tr>))
                    }
                </tbody>
            </Table>
        </div>
        // </div>
    );
}

export default UnbookedEvents;