import Navbar from "components/Navbar"
import {
    Button,
    IconButton,
    Link,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "@mui/icons-material"

const columns = [
    { field: "firstName", headerName: "First name" },
    { field: "lastName", headerName: "Last name" },
    { field: "startDate", headerName: "Start Date", type: "date" },
    { field: "department", headerName: "Department" },
    { field: "dateOfBirth", headerName: "Date of Birth", type: "date" },
    { field: "streetAddress", headerName: "Street" },
    { field: "city", headerName: "City" },
    { field: "state", headerName: "State" },
    { field: "zipCode", headerName: "Zip Code" },
]

const EmployeesPage = ({ employees, loading }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [pageSize, setPageSize] = useState(5)

    return (
        <Stack>
            <Navbar title={"Current Employees"} />
            <Stack sx={{ minHeight: 300, width: "100%", padding: [2, 5] }}>
                <Stack direction={"row"} alignItems="center" spacing={1}>
                    <Typography variant={"body1"} fontWeight={"bold"}>
                        Show
                    </Typography>
                    <Select
                        value={pageSize}
                        onChange={(e) => setPageSize(e.target.value)}
                        defaultValue={pageSize}
                        sx={{
                            padding: 0,
                        }}
                    >
                        <MenuItem key={5} value={5}>
                            5
                        </MenuItem>
                        <MenuItem key={10} value={10}>
                            10
                        </MenuItem>
                        <MenuItem key={25} value={25}>
                            25
                        </MenuItem>
                        <MenuItem key={50} value={50}>
                            50
                        </MenuItem>
                        <MenuItem key={100} value={100}>
                            100
                        </MenuItem>
                    </Select>
                    <Typography variant={"body1"} fontWeight={"bold"}>
                        entries
                    </Typography>
                </Stack>
                <DataGrid
                    sx={{ marginTop: 2 }}
                    rows={employees.map((employee) => ({
                        id: employee.id,
                        firstName: employee.firstName,
                        lastName: employee.lastName,
                        startDate: new Date(employee.startDate),
                        department: employee.department,
                        dateOfBirth: new Date(employee.dateOfBirth),
                        streetAddress: employee.address.street,
                        city: employee.address.city,
                        state: employee.address.state,
                        zipCode: employee.address.zip,
                    }))}
                    columns={columns}
                    autoHeight
                    pageSize={pageSize}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    hideFooter
                    onPageSizeChange={setPageSize}
                    onPageChange={setCurrentPage}
                    page={currentPage}
                    components={{ Toolbar: GridToolbar }}
                    componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                    disableColumnMenu
                    loading={loading}
                />
                <Typography sx={{ marginTop: 1 }} textAlign="center">
                    {
                        //Showing 1 to 5 of 5 entries
                        `Showing ${currentPage * pageSize + 1} to ${
                            currentPage * pageSize + pageSize > employees.length
                                ? employees.length
                                : currentPage * pageSize + pageSize
                        } of ${employees.length} entries`
                    }
                </Typography>
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems="center"
                    sx={{ marginTop: 3 }}
                    spacing={1}
                >
                    <IconButton
                        onClick={() => {
                            if (currentPage > 0) {
                                setCurrentPage(currentPage - 1)
                            }
                        }}
                        disabled={currentPage === 0}
                    >
                        <ArrowLeft />
                    </IconButton>
                    <Stack direction="row" spacing={1}>
                        {Array.from(
                            Array(Math.ceil(employees.length / pageSize)).keys()
                        ).map((page) => (
                            <Button
                                key={page}
                                variant={
                                    page === currentPage
                                        ? "contained"
                                        : "outlined"
                                }
                                onClick={() => setCurrentPage(page)}
                            >
                                {page + 1}
                            </Button>
                        ))}
                    </Stack>
                    <IconButton
                        onClick={() => {
                            if (
                                currentPage <
                                Math.ceil(employees.length / pageSize) - 1
                            ) {
                                setCurrentPage(currentPage + 1)
                            }
                        }}
                        disabled={
                            currentPage >=
                            Math.ceil(employees.length / pageSize) - 1
                        }
                    >
                        <ArrowRight />
                    </IconButton>
                </Stack>
            </Stack>
            <Stack sx={{ marginTop: 3 }} alignItems={"center"}>
                <Link href={"/"} textAlign={"center"}>
                    Home
                </Link>
            </Stack>
        </Stack>
    )
}

export default EmployeesPage
