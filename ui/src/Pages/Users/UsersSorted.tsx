import { Container, Typography } from "@mui/material";
import { UsersSortedTable } from "../../Components/UsersSortedTable";


export const UsersSorted = () => {
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
                <Typography variant="h2">Leaderboard</Typography>
            </Container>
            <UsersSortedTable/>
        </Container>
    );
}