const { MenuItem, Select } = require("@mui/material")
const { Controller } = require("react-hook-form")

const FormSelect = ({ name, control, rules, label, options }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <Select
                    {...field}
                    label={label}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            )}
        />
    )
}

export default FormSelect
