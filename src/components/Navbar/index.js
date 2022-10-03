import { Container, Typography } from "@mui/material"

const Navbar = ({ title }) => {
    return (
        <Container sx={{ padding: 2 }}>
            <Typography variant="h4" fontWeight={"bold"} textAlign={"center"}>
                {title}
            </Typography>
        </Container>
    )
}

export default Navbar
