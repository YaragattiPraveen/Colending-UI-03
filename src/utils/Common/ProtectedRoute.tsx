import { Navigate, Outlet } from "react-router-dom"
import { ProtectedProps } from "../typeScript"

const ProtectedRoute = ({ loggedIn, role }: ProtectedProps) => {
    return loggedIn && ["admin", "nbfc", "commericalbank"].includes(role) ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute