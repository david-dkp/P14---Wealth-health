const {
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    FormHelperText,
} = require("@mui/material")
const { Controller } = require("react-hook-form")

const FormSelect = ({ name, control, rules, label, options }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <FormControl fullWidth error={!!fieldState.error}>
                    <InputLabel id={`${name}-label`}>{label}</InputLabel>
                    <Select
                        {...field}
                        labelId={`${name}-label`}
                        defaultValue={options[0].value}
                        label={label}
                    >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>{fieldState.error?.message}</FormHelperText>
                </FormControl>
            )}
        />
    )
}

export default FormSelect
