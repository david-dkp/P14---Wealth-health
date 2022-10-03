import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import "../src/App.css"

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    parameters: {
        layout: "fullscreen",
    },
}

export const decorators = [
    (Story) => (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Story />
        </LocalizationProvider>
    ),
]
