import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create';
import { Quest } from '../Models/Quest';


export const QuestsTable = () => {
    const initQuests: any[] = [];
    const [loading, setLoading] = React.useState(false);
    const [quests, setQuests] = React.useState(initQuests);

    React.useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const data = await fetch(import.meta.env.VITE_REACT_API_BACKEND + `/quests`);
            const res = await data.json();
            setQuests(res)
        }
        fetchData();
        setLoading(false);
    }, []);

    const SimpleLink = styled(Link) ({
        color: 'inherit',
        padding: 0,
        margin: 0,
        textDecoration: 'none'
    })

    return (
        <Box width="1100px">
            {loading && <Typography variant="h3" gutterBottom>Still loading...</Typography>}
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">Index</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Points</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {!loading && quests.map((quest: Quest, index) => (
                        <TableRow key={index}> 
                            <TableCell align="left" key={"index" + index.toString()}>{index}</TableCell>
                            <TableCell align="center" key={"name" + index.toString()}>
                                <SimpleLink to={`/quests/${quest.id}`}><Typography color="secondary">{quest.name}</Typography></SimpleLink>
                            </TableCell>
                            <TableCell align="center" key={"description" + index.toString()}>{quest.description}</TableCell>
                            <TableCell align="center" key={"points" + index.toString()}>{quest.points}</TableCell>
                            <TableCell>
                                <SimpleLink to={`/quests/${quest.id}`}><CreateIcon/></SimpleLink>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}