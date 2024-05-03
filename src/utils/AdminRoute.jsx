import { Navigate } from "react-router-dom";
import { authService } from "../services/authService";

export default  function AdminRoute({children}){
    return authService.getUserId() === 1 ? children : <Navigate to='/home'/>;
}