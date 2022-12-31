import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Events() {
    const url = "https://localhost:7293/api/users";
    const [data, setdata] = useState([]);
    useEffect(() => {
        console.log("han mein chal gaya hun");
        axios.get(url)
            .then(response => {
                setdata(response.data)
                console.log(data,"mein akela ku hun",response.data)
            })
    }, [])
    return (
        <div>
            {
                
                data.map(post => <li key={post["userId"]}> {post["password"]} </li>)

            }

        </div>
    );
}

export default Events;
