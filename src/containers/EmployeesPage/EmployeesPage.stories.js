import EmployeesPage from "./components/EmployeesPage"
import employees from "assets/employees"

export default {
    title: "containers/EmployeesPage",
    component: EmployeesPage,
}

export const Default = () => <EmployeesPage employees={employees} />
