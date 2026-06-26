import {Navigate} from "react-router-dom";

function ProtectedRoutes({ children,allowedRole }) {
    const role = localStorage.getItem("role");

    if (role !== allowedRole) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoutes;
