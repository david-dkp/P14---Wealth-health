import useEmployees from "hooks/useEmployees"
import EmployeesPageComponent from "./components/EmployeesPage"

const EmployeesPage = () => {
    const { employees, loading } = useEmployees()

    return <EmployeesPageComponent employees={employees} loading={loading} />
}

export default EmployeesPage
