import { Container, IconButton, Stack, Typography } from "@mui/material";
import { QuestsTable } from "../../Components/QuestsTable";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";


export const Quests = () => {
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center"

        }}>
            <Container sx={{
                display: "flex",
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                m: 2
            }}
                >
                <Typography variant="h2">Quests</Typography>
                <Link to={"/quests/add"}>
                    <IconButton size="large">
                        <AddIcon fontSize="large"/>
                    </IconButton>
                </Link>
            </Container>
            <QuestsTable/>
        </Container>
    );
}