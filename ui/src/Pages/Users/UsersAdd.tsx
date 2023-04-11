import { Alert, Box, Button, FormGroup, TextField } from "@mui/material"
import * as React from 'react';
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const UsersAdd = () => {
    const [name, setName] = useState("");
    const [points, setPoints] = useState(0);

    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const body = {
            name: name,
            points: points
        }
        
        const response = await window.fetch(import.meta.env.VITE_REACT_API_BACKEND + `/users`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',  
            },
            body: JSON.stringify(body)
        });
        
        if (!(await response).ok) {
            setAlert(true);
            setAlertContent("Some field is invalid!");
        } else {
            setAlert(false);
            navigate("/users");
        }
    }


    return (
        <Box>
            {alert ? <Alert severity="error">{alertContent}</Alert> : <></>}
            <FormGroup sx={{ display: "flex", alignItems: "center"}}>
                <TextField
                    type="text"
                    variant='outlined'
                    color='primary'
                    label="Name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    fullWidth
                    sx={{m: 2, width: "50ch"}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='primary'
                    label="Amount"
                    onChange={e => setPoints(parseInt(e.target.value))}
                    fullWidth
                    value={points}
                    required
                    sx={{m: 2, width: "25ch"}}
                />
                <Button variant="outlined" color="primary" type="submit" sx={{m: 4, width: "25ch"}} onClick={handleSubmit}>Add</Button>
            </FormGroup>
        </Box>
    );
}
