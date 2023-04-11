import { Container, Card, CardContent, IconButton, CardActions, Button, Typography, TextField, MenuItem, Alert } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { User } from "../../Models/User";
import { UsersTable } from "../../Components/UsersTable";

export const QuestsDelete = () => {
	const params = useParams();
	const navigate = useNavigate();

    const [key, setKey] = useState("");
    const [userId, setUserId] = useState("");
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState("");


    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const data = await fetch(import.meta.env.VITE_REACT_API_BACKEND + `/users`);
            const users = await data.json();
            setUsers(users);
        }
        fetchData();
        setLoading(false);
    }, [])

	const handleDelete = async (event: { preventDefault: () => void }) => {
		event.preventDefault();

        const response = fetch(import.meta.env.VITE_REACT_API_BACKEND + `/quests/${params.id}/${userId}/${key}`,{
            method: 'DELETE',
            mode: 'cors'
        });

        if (!(await response).ok) {
            setAlert(true);
            setAlertContent("Key is invalid!");
        } else {
            setAlert(false);
            navigate("/quests");
        }


	};

	const handleCancel = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		navigate(`/quests/${params.id}`);
	};

	return (
		<Container>
            {alert ? <Alert severity="error">{alertContent}</Alert> : <></>}
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/quests/${params.id}`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<Typography variant="h5">In order to solve this quest you need to enter the correct key:</Typography>
                    <TextField
                        required
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="Key"
                        onChange={e => setKey(e.target.value)}
                        value={key}
                        fullWidth
                        sx={{ mt: 2, width: "50ch"}}
                    />
                    <TextField
                        select
                        label="User"
                        required
                        onChange={e => setUserId(e.target.value)}
                        sx={{ml: 2, mt: 2, width: "25ch"}}
                    >
                        {users.map((option: User) => (
                            <MenuItem key={option.id} value={option.id}>
                            {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
				</CardContent>
				<CardActions>
					<Button onClick={handleDelete}>Solve</Button>
					<Button onClick={handleCancel}>Cancel</Button>
				</CardActions>
			</Card>
		</Container>
	);
};