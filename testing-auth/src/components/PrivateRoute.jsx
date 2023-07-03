import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../App";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
    const { token } = useContext(AppContext);

    /** this lines makes the magic */
    if (!token) {
        return <Navigate to="/" replace />;
    }
    
    return children;
}
