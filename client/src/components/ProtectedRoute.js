import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    if (isAuthenticated == undefined) {
      return <Navigate to="/" replace />;
    }
    return children;
  }
};

export default ProtectedRoute;
