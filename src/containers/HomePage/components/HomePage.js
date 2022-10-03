import {
    Button,
    FormControl,
    Input,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material"
import FormDatePicker from "components/FormDatePicker"
import FormTextField from "components/FormTextField"
import Navbar from "components/Navbar"
import { useForm, Controller } from "react-hook-form"

const HomePage = ({ onSubmit = () => {} }) => {
    const { control, handleSubmit } = useForm()

    return (
        <Stack>
            <Navbar title="HRnet" />
            <Stack spacing={2} alignItems="center">
                <Link>
                    <Typography>View Current Employees</Typography>
                </Link>
                <Typography variant="h5" fontWeight={"bold"}>
                    Create Employee
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <Stack spacing={3}>
                            <FormTextField
                                name="firstName"
                                control={control}
                                label="First Name"
                                rules={{
                                    required: "First Name is required",
                                }}
                            />
                            <FormTextField
                                name="lastName"
                                control={control}
                                label="Last Name"
                                rules={{
                                    required: "Last Name is required",
                                }}
                            />
                            <FormDatePicker
                                name="dateOfBirth"
                                control={control}
                                label="Date of Birth"
                                rules={{
                                    required: "Date of Birth is required",
                                }}
                            />
                            <Button variant="contained" type="submit">
                                Save
                            </Button>
                        </Stack>
                    </FormControl>
                </form>
            </Stack>
        </Stack>
    )
}

export default HomePage
