import useEmployees from "hooks/useEmployees"
import { useCallback } from "react"
import HomePageComponent from "./components/HomePage"

const HomePage = () => {
    const { addEmployee } = useEmployees()

    const onSubmit = useCallback(
        (data) => {
            console.log("submit: " + JSON.stringify(data, null, 3))
            addEmployee(data).then(() => alert("added employee"))
        },
        [addEmployee]
    )

    return <HomePageComponent onSubmit={onSubmit} />
}

export default HomePage
