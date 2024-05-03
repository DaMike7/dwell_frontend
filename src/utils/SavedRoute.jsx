import { Navigate } from "react-router-dom";
import { authService } from "../services/authService";

const SavedRoute = ({ children }) => {
  return authService.getUserRole() === 'tenant' ? children : <Navigate to="/home" />;
}

export default SavedRoute;