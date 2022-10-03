import { TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { Controller } from "react-hook-form"

const FormDatePicker = ({ name, control, rules, label }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <DatePicker
                    {...field}
                    label={label}
                    renderInput={(params) => <TextField {...params} />}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                />
            )}
        />
    )
}

export default FormDatePicker
