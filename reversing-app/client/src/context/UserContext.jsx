import axios from "axios";
import { createContext, useContext } from "react";
import { useReducer } from "react";
import UserReducer from "../components/reducer/UserReducer";

const UserContext = createContext();

export const useUser = () =>{
    const con = useContext(UserContext);
     if(!con){
        throw new Error('useUser must be used within a UserContextProvider');
     }

     return con;
}

export const UserContextProvider = ({children}) => {

    const initialStates = {
        isLogin: false,
        user: []
    }

    const [state, dispatch] = useReducer(UserReducer, initialStates);

    const createUser  = (email, pass, name, lasName) => {
        
        const res = axios.post(""):
    }

    const getUsers = async() => {
        const res = await axios.get("http://localhost:4000/users/api");
        dispatch({type: "GETUSERS", payload: res.data});
    }

    const checkLogin = (user, email) => {
    }

    return(
        <UserContext.Provider
        value={{
            user: state.user,
            getUsers,

        }}>
            {children}
        </UserContext.Provider>
    )
}