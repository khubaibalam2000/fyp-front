import React, { usestate, useEffect } from 'react';
import './App.css';
import axios from "axios"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddEvent from './components/AddEvent';
import BookedEvents from './components/BookedEvents';
import UnbookedEvents from './components/UnbookedEvents';
import Protected from './components/Protected'
import User from './components/User'
import Admin from './components/Admin'
import AllEvents from './components/AllEvents';
// ans = response.data.data.filter(rec => rec.city==="Seattle")
var val =[]
 function App() {
   async function data(){
    var ans = []
    var votes = 0
    console.log("asdlkasdkaksd")
    await axios.get("https://jsonmock.hackerrank.com/api/food_outlets").then(response =>{ans=response.data.data.filter(rec=> 
      rec.city==="Seattle" 
    )
    // console.log(val) 
  })
    // if(ans !== null){ 
    //     ans.forEach(rec => votes += rec.user_rating.votes)    
    // }
   console.log(ans)
    if (votes === 0){
        return -1    
    }
  }
  return (
    <div className="App">
      <input type="submit" onClick={data} placeholder='anda'/>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addevents" element={<Protected func={AddEvent} />} />
          <Route path="/allevents" element={<Protected func={AllEvents} />} />
          <Route path="/bookedevents" element={<BookedEvents/>} />
          <Route path="/unbookedevents" element={<UnbookedEvents/>} />
          <Route path="/user" element={<Protected func={User}/>} />
          <Route path="/admin" element={<Protected func={Admin}/>} />
          

        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
