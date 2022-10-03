import { Dialog } from "components/Dialog"
import useEmployees from "hooks/useEmployees"
import { useCallback, useState } from "react"
import HomePageComponent from "./components/HomePage"

const HomePage = () => {
    const { addEmployee } = useEmployees()
    const [open, setOpen] = useState(false)

    const onSubmit = useCallback(
        (data) => {
            // console.log("submit: " + JSON.stringify(data, null, 3))
            // addEmployee(data).then(() => alert("added employee"))
            setOpen(true)
        },
        [addEmployee]
    )

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                testing here content
            </Dialog>

            <HomePageComponent onSubmit={onSubmit} />
        </>
    )
}

export default HomePage
