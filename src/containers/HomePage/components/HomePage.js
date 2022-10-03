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
import departments from "assets/departments"

const HomePage = ({ onSubmit = () => {} }) => {
    const { control, handleSubmit } = useForm()

    return (
        <Stack>
            <Navbar title="HRnet" />
            <Stack spacing={2} alignItems="center" width={"100%"}>
                <Link href="/employees">
                    <Typography>View Current Employees</Typography>
                </Link>
                <Typography variant="h5" fontWeight={"bold"}>
                    Create Employee
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <Stack
                            spacing={3}
                            alignItems={"start"}
                            sx={{
                                width: ["100%", "400px"],
                            }}
                        >
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
                            <Stack
                                sx={{
                                    padding: 2,
                                    border: "1px solid",
                                    position: "relative",
                                    width: "100%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 10,
                                        backgroundColor: "white",
                                        padding: 1,
                                        transform: "translateY(-50%)",
                                    }}
                                    variant="body1"
                                    fontWeight="bold"
                                >
                                    Address
                                </Typography>
                                <Stack
                                    sx={{ marginTop: 1, width: "100%" }}
                                    spacing={2}
                                    alignItems="start"
                                >
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
                            </Stack>
                            <FormSelect
                                name="department"
                                control={control}
                                label="Department"
                                rules={{
                                    required: "Department is required",
                                }}
                                options={departments.map((department) => ({
                                    value: department.id,
                                    label: department.name,
                                }))}
                            />
                            <Button fullWidth variant="contained" type="submit">
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
