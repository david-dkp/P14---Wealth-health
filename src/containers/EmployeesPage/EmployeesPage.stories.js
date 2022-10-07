import EmployeesPage from "./components/EmployeesPage"
import employees from "../public/assets/employees"

export default {
    title: "containers/EmployeesPage",
    component: EmployeesPage,
}

export const Default = () => <EmployeesPage employees={employees} />
