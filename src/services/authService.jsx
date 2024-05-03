import client from "../api";
import { jwtDecode } from "jwt-decode";


//SET TOKEN
const setToken = (token) =>{
    localStorage.setItem('token',token);
};

//GET TOKEN
const getToken = () =>{
    const token = localStorage.getItem('token');
    if(token){
        return token;
    }
    return null
}

//LOGIN USER
const loginUser = (userData) =>{
    return client.post('auth/token/',userData);
}


//LOGOUT USER
const logOutUser = (userData) =>{
    localStorage.clear()
}

//GET USER EMAIL
const getUserEmail = () =>{
    const token = getToken();
    if (token){
        const payload = jwtDecode(token);
        return payload?.email
    }
    return null;
}

//GET USERNAME
const getUsername = () =>{
    const token = getToken();
    if (token){
        const payload = jwtDecode(token);
        return payload?.username
    }
    return null;
}

//GET USER FIRSTNAME
const getUserFirstName = () =>{
    const token = getToken();
    if (token){
        const payload = jwtDecode(token);
        return payload?.first_name
    }
    return null;
}

//GET USER LASTNAME
const getUserLastName = () =>{
    const token = getToken();
    if (token){
        const payload = jwtDecode(token);
        return payload?.last_name
    }
    return null;
}

//GET USER ID
const getUserId = () =>{
    const token = getToken();
    if (token){
        const payload = jwtDecode(token);
        return payload?.user_id
    }
    return null;
}

//GET USER ROLE
const getUserRole = () =>{
    const token = getToken();
    if (token){
        const payload = jwtDecode(token);
        return payload?.user_type
    }
    return null;
}

//IS USER LOGGED IN
const isUserLoggedIn = () => {
    const token = getToken();
  
    if (token) {
      try {
        const payload = jwtDecode(token);
        const isLoggedIn = Date.now() < payload.exp * 1000;
        return isLoggedIn;
      } catch (error) {
        // Handle the case where the token is invalid
        return false;
      }
    }
  
    return false;
  };


export const authService = {getToken , setToken , loginUser, getUserEmail , getUserId , isUserLoggedIn , getUsername , getUserFirstName , getUserLastName , logOutUser , getUserRole}