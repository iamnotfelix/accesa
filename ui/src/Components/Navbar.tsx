import { AppBar, Button, Stack, Toolbar, Typography, styled } from '@mui/material'
import { Container } from '@mui/system';
import { Link } from 'react-router-dom'

const StyledToolbar = styled(Toolbar) ({
    display:"flex",
    justifyContent:"space-between"
})

const NavbarButton = styled(Button) ({
    color:"white"
})

const SimpleLink = styled(Link) ({
    color: 'inherit',
    padding: 0,
    margin: 0,
    textDecoration: 'none'
})

export const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h5" sx={{
                    display:{xs:"none", sm:"block"},
                    flexGrow: 1
                }}>
                    <SimpleLink to="/">Accesa</SimpleLink>
                </Typography>
                <Container 
                    sx={{ flexGrow: 7}}
                >
                    <Stack direction="row" spacing={12}>
                        <SimpleLink to="/users">
                            <NavbarButton variant='text'>Users</NavbarButton>
                        </SimpleLink>
                        <SimpleLink to="/leaderboard">
                            <NavbarButton variant='text'>Leaderboard</NavbarButton>
                        </SimpleLink>
                        <SimpleLink to="/quests">
                            <NavbarButton variant='text'>Quests</NavbarButton>
                        </SimpleLink>
                    </Stack>
                </Container>
            </StyledToolbar>
        </AppBar> 
    )
}