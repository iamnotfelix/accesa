import { Box, Button, FormGroup, MenuItem, TextField } from "@mui/material"
import * as React from 'react';
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../../Models/User";

export const QuestsUpdate = () => {
    const params = useParams()

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(0);
    const [key, setKey] = useState("");

    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const body = {
            name: name,
            description: description,
            points: points,
            key: key
        }
        
        const response = await window.fetch(import.meta.env.VITE_REACT_API_BACKEND + `/quests/${params.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',  
            },
            body: JSON.stringify(body)
        });
        
        navigate("/quests");

        
        //handle failure
        const {data, errors} = await response.json()
        console.log(data, errors);
        // if (response.ok) {
        //    console.log("ok");
        // } else {
        //     //const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
        //     //return Promise.reject(error)
        // }
    }


    return (
        <Box>
            <FormGroup sx={{ display: "flex", alignItems: "center"}}>
                <TextField
                    required
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
                    required
                    type="text"
                    variant='outlined'
                    color='primary'
                    label="Description"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    fullWidth
                    sx={{m: 2, width: "50ch"}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='primary'
                    label="Points"
                    onChange={e => setPoints(parseInt(e.target.value))}
                    fullWidth
                    value={points}
                    required
                    sx={{m: 2, width: "25ch"}}
                />
                <TextField
                    required
                    type="text"
                    variant='outlined'
                    color='primary'
                    label="Key"
                    onChange={e => setKey(e.target.value)}
                    value={key}
                    fullWidth
                    sx={{m: 2, width: "50ch"}}
                />
                <Button variant="outlined" color="primary" type="submit" sx={{m: 4, width: "25ch"}} onClick={handleSubmit}>Update</Button>
            </FormGroup>
        </Box>
    );
}
