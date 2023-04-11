import { Card, CardActions, CardContent, Container, IconButton, Paper, Stack, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { User } from "../../Models/User";
import { Badge } from "../../Models/Badge";


export const UsersDetailed = () => {

    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(false);

    const params = useParams();

    React.useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const data = await fetch(import.meta.env.VITE_REACT_API_BACKEND + `/users/${params.id}`);
            const res = await data.json();
            setUser(res);
        }
        fetchData();
        setLoading(false);
    }, []);

    return (
            <Container>
                <Card>
                    <CardContent>
                        <IconButton component={Link} sx={{ mr: 3 }} to={`/users`}>
                            <ArrowBackIcon fontSize="large"/>
                        </IconButton>
                        <Container sx={{
                            display: "flex",
                            gap: "10px",
                            mb: 2,
                            p:0
                        }}>
                            <Typography variant="h2">User Details</Typography>
                            <CardActions>
                                <IconButton component={Link} sx={{ mr: 0 }} to={`/users/${params.id}/update`}>
                                    <EditIcon fontSize="large"/>
                                </IconButton>
            
                                <IconButton component={Link} sx={{ mr: 0 }} to={`/users/${params.id}/delete`}>
                                    <DeleteIcon sx={{ color: "red" }} fontSize="large"/>
                                </IconButton>
                            </CardActions>
                        </Container>
                        <TableContainer component={Paper}>
                            <TableRow>
                                <TableCell><Typography variant="h6">Name</Typography></TableCell>
                                <TableCell sx={{width: "10000px"}}><Typography variant="subtitle1">{user?.name}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography variant="h6">Points</Typography></TableCell>
                                <TableCell sx={{width: "10000px"}}><Typography variant="subtitle1">{user?.points}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h6">Badges</Typography>
                                </TableCell>
                                <TableCell>
                                    {user?.badges.map((badge: Badge, index) => (
                                        <Typography key={index} variant="subtitle1" color="secondary" sx={{textDecoration: "none", pr: 3}}>{badge.title}</Typography>
                                    ))}
                                </TableCell>
                            </TableRow>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Container>
    );
}