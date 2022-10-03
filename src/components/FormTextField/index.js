import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"

const FormTextField = ({ name, control, rules, label, type }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue=""
            render={({ field, fieldState }) => (
                <TextField
                    label={label}
                    {...field}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    type={type}
                />
            )}
        />
    )
}

export default FormTextField
