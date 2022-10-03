import {
    Button,
    FormControl,
    FormGroup,
    Input,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material"
import FormDatePicker from "components/FormDatePicker"
import FormSelect from "components/FormSelect"
import FormTextField from "components/FormTextField"
import Navbar from "components/Navbar"
import { useForm } from "react-hook-form"
import states from "assets/states"

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
                                    //Date of Birth must be before today
                                    validate: (value) =>
                                        value <= new Date() ||
                                        "Date of Birth must be before today",
                                }}
                            />
                            <FormDatePicker
                                name="startDate"
                                control={control}
                                label="Starte Date"
                                rules={{
                                    required: "Start Date is required",
                                }}
                            />
                            <FormGroup>
                                <Typography variant="body1" fontWeight="bold">
                                    Address
                                </Typography>
                                <Stack sx={{ marginTop: 1 }} spacing={2}>
                                    <FormTextField
                                        name="address.street"
                                        control={control}
                                        label="Street"
                                        rules={{
                                            required: "Street is required",
                                        }}
                                    />
                                    <FormTextField
                                        name="address.city"
                                        control={control}
                                        label="City"
                                        rules={{
                                            required: "City is required",
                                        }}
                                    />
                                    <FormSelect
                                        name="address.state"
                                        control={control}
                                        label="State"
                                        rules={{
                                            required: "State is required",
                                        }}
                                        options={states.map((state) => ({
                                            value: state.abbreviation,
                                            label: state.name,
                                        }))}
                                    />
                                    <FormTextField
                                        name="address.zip"
                                        control={control}
                                        label="Zip"
                                        rules={{
                                            required: "Zip is required",
                                            //Should be positive integer
                                            pattern: {
                                                value: /^\d+$/,
                                                message: "Zip must be a number",
                                            },
                                        }}
                                        type="number"
                                    />
                                </Stack>
                            </FormGroup>
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
