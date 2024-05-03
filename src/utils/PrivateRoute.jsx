import { Navigate, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

const PrivateRoute = ({children}) =>{
    return authService.isUserLoggedIn() ? children: <Navigate to="/login"/>
} 

export default PrivateRoute;