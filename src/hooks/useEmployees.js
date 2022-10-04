import { useCallback, useEffect, useState } from "react"
import employeesData from "assets/employees"

const getEmployees = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(JSON.parse(localStorage.getItem("employees")))
        }, 1000)
    })
}

const useEmployees = () => {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getEmployees().then((employees) => {
            if (!employees || employees.length === 0) {
                const newEmployees = JSON.stringify(employeesData)
                localStorage.setItem("employees", newEmployees)
                setEmployees(newEmployees)
            } else {
                setEmployees(employees)
            }
            setLoading(false)
        })
    }, [])

    const addEmployee = useCallback(
        (employee) => {
            const newEmployees = [
                ...employees,
                { ...employee, id: new Date().getTime() },
            ]
            localStorage.setItem("employees", JSON.stringify(newEmployees))
            setEmployees(newEmployees)

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            })
        },
        [employees]
    )

    return {
        employees,
        addEmployee,
        loading,
    }
}

export default useEmployees
