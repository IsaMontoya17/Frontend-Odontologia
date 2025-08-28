// src/components/protectedRoute/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const roles = payload.authorities || [];

        const hasRequiredRole = roles.includes(`ROLE_${role}`) || roles.includes(role);

        if (hasRequiredRole) {
            return children;
        } else {
            return (
                <div className="access-denied">
                    <h2>Acceso denegado</h2>
                    <p>No tienes permisos para acceder a esta página.</p>
                </div>
            );
        }
    } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('token');
        return <Navigate to="/login" replace />;
    }
};

export default ProtectedRoute;