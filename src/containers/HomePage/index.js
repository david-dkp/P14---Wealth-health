import { Dialog } from "components/Dialog"
import useEmployees from "hooks/useEmployees"
import { useCallback, useState } from "react"
import HomePageComponent from "./components/HomePage"

const HomePage = () => {
    const { addEmployee } = useEmployees()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSubmit = useCallback(
        (data) => {
            setLoading(true)
            addEmployee(data).then(() => {
                setOpen(true)
                setLoading(false)
            })
        },
        [addEmployee]
    )

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                Employee Created!
            </Dialog>

            <HomePageComponent onSubmit={onSubmit} loading={loading} />
        </>
    )
}

export default HomePage
