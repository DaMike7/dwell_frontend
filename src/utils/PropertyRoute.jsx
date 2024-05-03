import { Navigate } from "react-router-dom";
import { authService } from "../services/authService";

const PropertyRoute = ({ children }) => {
  return authService.getUserRole() === 'property_owner' ? children : <Navigate to="/home" />;
}

export default PropertyRoute;