import HomePage from "./components/HomePage"

export default {
    title: "containers/HomePage",
    component: HomePage,
}

export const Default = () => (
    <HomePage onSubmit={(data) => alert("submit: " + JSON.stringify(data))} />
)
