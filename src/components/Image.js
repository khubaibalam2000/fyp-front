import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Axios from "axios";
import fileDownload from 'js-file-download';
import * as Components from './Components';
import Header from "./Header";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { fontSize } from '@mui/system';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const mystyle = {
  
    fontFamily: "Arial",
    fontSize:"30px"
  };

const names = [
    'hospital','diagnosis','prescriptions','treatments',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


function Image(props) {
    const url_1 = "http://127.0.0.1:8000/datadetails/personal/epdgwithconnection/?ssn="
    const url_2 = "http://127.0.0.1:8000/datadetails/personal/epdgwithoutconnection/?ssn="
    const url_3 = "http://127.0.0.1:8000/datadetails/personal/ipdg/?id="
    const url_4 = "http://127.0.0.1:8000/datadetails/personal/eXdataReport/?ssn="
    const url_5 = "http://127.0.0.1:8000/datadetails/personal/eHdataReport/?ssn="
    const url_6 = "http://127.0.0.1:8000/datadetails/personal/ireport/?id="
    const url_7 ="http://127.0.0.1:8000/datadetails/personal/databreach/?id="
    const [url_t,seturl]=React.useState(url_7);
    const [ssn, setssn] = useState("")
    const [id, setid] = useState("")
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
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
    function BREACH(){
        Axios({
            url: url_7 + id + url_t,
            method: "GET",
            responseType: "blob"
        }).then(res => {
            console.log(res)
            fileDownload(res.data, "BREACH.pdf")
        })
    }
    function handleChange(event){
        const {
            target: { value },
        } = event;
        var url_new="";
        for (var i = 0; i < value.length; i++) {
            url_new += "&departments=" + value[i];
        }
        seturl(url_new)
        console.log(url_new)
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

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
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Attributes</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, personName, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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
                            <br />
                            <Button onClick={BREACH} variant="outline-dark">Data Breaching Report</Button>

                        </Components.Form>
                    </Components.Container>
                </div>
            </div>
        </div>
    );
}

export default Image;