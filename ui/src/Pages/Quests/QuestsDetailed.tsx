import { Card, CardActions, CardContent, Container, IconButton, Paper, Stack, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Quest } from "../../Models/Quest";


export const QuestsDetailed = () => {

    const [quest, setQuest] = useState<Quest>();
    const [loading, setLoading] = useState(false);

    const params = useParams();

    React.useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const data = await fetch(import.meta.env.VITE_REACT_API_BACKEND + `/quests/${params.id}`);
            const res = await data.json();
            setQuest(res);
        }
        fetchData();
        setLoading(false);
    }, []);

    return (
            <Container>
                <Card>
                    <CardContent>
                        <IconButton component={Link} sx={{ mr: 3 }} to={`/quests`}>
                            <ArrowBackIcon fontSize="large"/>
                        </IconButton>
                        <Container sx={{
                            display: "flex",
                            gap: "10px",
                            mb: 2,
                            p:0
                        }}>
                            <Typography variant="h2">Quest Details</Typography>
                            <CardActions>
                                <IconButton component={Link} sx={{ mr: 0 }} to={`/quests/${params.id}/update`}>
                                    <EditIcon fontSize="large"/>
                                </IconButton>
            
                                <IconButton component={Link} sx={{ mr: 0 }} to={`/quests/${params.id}/solve`}>
                                    <DoneIcon sx={{ color: "green" }} fontSize="large"/>
                                </IconButton>
                            </CardActions>
                        </Container>
                        <TableContainer component={Paper}>
                            <TableRow>
                                <TableCell><Typography variant="h6">Name</Typography></TableCell>
                                <TableCell sx={{width: "10000px"}}><Typography variant="subtitle1">{quest?.name}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography variant="h6">Description</Typography></TableCell>
                                <TableCell sx={{width: "10000px"}}><Typography variant="subtitle1">{quest?.description}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography variant="h6">Points</Typography></TableCell>
                                <TableCell sx={{width: "10000px"}}><Typography variant="subtitle1">{quest?.points}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography variant="h6">Key</Typography></TableCell>
                                <TableCell sx={{width: "10000px"}}><Typography variant="subtitle1">{quest?.key}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography variant="h6">User</Typography></TableCell>
                                <TableCell>
                                    <Typography component={Link} to={`/users/${quest?.user.id}`} variant="subtitle1" color="secondary" sx={{textDecoration: "none"}}>{quest?.user.name}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Container>
    );
}