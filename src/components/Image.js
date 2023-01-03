import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Axios from "axios";
import fileDownload from 'js-file-download';
import * as Components from './Components';
import Header from "./Header";
function Image(props) {
    const url_1 = "http://127.0.0.1:8000/datadetails/personal/epdgwithconnection/?ssn="
    const url_2 = "http://127.0.0.1:8000/datadetails/personal/epdgwithoutconnection/?ssn="
    const url_3 = "http://127.0.0.1:8000/datadetails/personal/ipdg/?id="
    const url_4 = "http://127.0.0.1:8000/datadetails/personal/eXdataReport/?ssn="
    const url_5 = "http://127.0.0.1:8000/datadetails/personal/eHdataReport/?ssn="
    const url_6 = "http://127.0.0.1:8000/datadetails/personal/ireport/?id="

    const [ssn, setssn] = useState("")
    const [id, setid] = useState("")

    function PDGC() {
        Axios({
            url: url_1 + ssn,
            method: "GET",
            responseType: "blob"
        }).then(res => {
            console.log(res)
            fileDownload(res.data, "PDGC.png")
        })
    }
    function PDGW() {
        Axios({
            url: url_2 + ssn,
            method: "GET",
            responseType: "blob"
        }).then(res => {
            console.log(res)
            fileDownload(res.data, "PDGW.html")
        })
    }
    function PDGH() {
        Axios({
            url: url_3 + id,
            method: "GET",
            responseType: "blob"
        }).then(res => {
            console.log(res)
            fileDownload(res.data, "PDGH.html")
        })
    }
    function PDGD() {
        Axios({
            url: url_4 + ssn,
            method: "GET",
            responseType: "blob"
        }).then(res => {
            console.log(res)
            fileDownload(res.data, "PDGD.pdf")
        })
    }
    function PDGE() {
        Axios({
            url: url_5 + ssn,
            method: "GET",
            responseType: "blob"
        }).then(res => {
            console.log(res)
            fileDownload(res.data, "PDGE.pdf")
        })
    }
    function PDGA() {
        Axios({
            url: url_6 + id,
            method: "GET",
            responseType: "blob"
        }).then(res => {
            console.log(res)
            fileDownload(res.data, "PDGA.pdf")
        })
    }
    return (
        <div style={{
            height:"100%",
            width:"100%",
            backgroundImage: `url("https://securiti.ai/wp-content/uploads/2022/09/people-data-graph-hero-2.webp")`
        }}>
            <Header />

            <div className="col-sm-6 offset-sm-3" >

                <div
                >
                    <br />
                    <Components.Container >
                        <Components.Form >
                            <Components.Title>Generate people data graph    </Components.Title>
                            <Components.Input onChange={(e) => setssn(e.target.value)} type='text' placeholder='SSN' />
                            <Components.Input onChange={(e) => setid(e.target.value)} type='text' placeholder='ID' />
                            <br />
                            <Button onClick={PDGC} variant="outline-dark">Generate people data graph with connections</Button>
                            <br />
                            <Button onClick={PDGW} variant="outline-dark">Generate people data graph without connections</Button>
                            <br />
                            <Button onClick={PDGH} variant="outline-dark">Generate people data graph with in hospital</Button>
                            <br />
                            <Button onClick={PDGD} variant="outline-dark">suumary of data exchange</Button>
                            <br />
                            <Button onClick={PDGE} variant="outline-dark">Entities holding data of user</Button>
                            <br />
                            <Button onClick={PDGA} variant="outline-dark">All data with in hospital</Button>
                        </Components.Form>
                    </Components.Container>
                </div>
            </div>
        </div>
    );
}

export default Image;