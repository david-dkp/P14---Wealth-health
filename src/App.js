import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "containers/HomePage"
import EmployeesPage from "containers/EmployeesPage"

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Router>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route
                        path="/employees"
                        exact
                        element={<EmployeesPage />}
                    />
                </Routes>
            </Router>
        </LocalizationProvider>
    )
}

export default App
