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
        notFriends: [],
        friends: [],
        userLogin: [],
        allPosts: [],
        userPost: [],
        friendView: [],
    }

    const [state, dispatch] = useReducer(UserReducer, initialStates);

    const createUser  = async(values) => {
        const res = await axios.post("http://localhost:4000/users/api/", values);
    }

    const getUsers = async(id) => {
        const res = await axios.get(`http://localhost:4000/not-friends/api/${id}`);
        dispatch({type: "GETUSERS", payload: res.data});
    }

    const getFriends = async(id) => {
        const res = await axios.get(`http://localhost:4000/friends/api/${id}`);
        dispatch({type: "GETFRIENDS", payload: res.data});
        return res.data;
    }

    const checkLogin = async(values) => {
        console.log(values)
        const res = await axios.get(`http://localhost:4000/users/api/exist/${values.email}/${values.password}`);
        if(res.data.length>0){
            dispatch({type: "CHECKLOGIN", payload: true})
            dispatch({type: "SETSESSIONID", payload: res.data})
            return true;
        }
        else return false;
    }

    const createPost = async(values) => {
        const res = await axios.post(`http://localhost:4000/login/api/post-it`, values);
        console.log(res);
        const new_res = await axios.get(`http://localhost:4000/login/api/post-it/${res.data.id}`);
        console.log(new_res.data);
        return new_res.data;
    }

    const getAllPost = async() => {
        const res = await axios.get(`http://localhost:4000/login/api/post-it`);
        //dispatch({type: "GETALLPOST", payload: res.data});
        return res.data;
    }

    const getNotFriends = async(id) => {
        const res = await axios.get(`http://localhost:4000/not-friends/api/${id}`);
        //dispatch({type: "NOTFRIENDS", payload: res.data});
        return res.data;
    }

    const createFollow = async(myid, followid) => {
        const values = {myid, followid};
        const res = await axios.post(`http://localhost:4000/follow/api/`, values);
        if(res.length > 0){
            return true;
        }
        else return false;
    }

    const setFriendView = (id) => {
        console.log("desde context", id);
        dispatch({type: "FRIENDVIEW", payload: id});
    }

    const deleteFriend = async(id, fid) => {
        
        const res = await axios.delete(`http://localhost:4000/follow/api/${id}/${fid}`);
        return res.data;
    }

    return(
        <UserContext.Provider
        value={{
            notFriends: state.notFriends,
            isLogin: state.isLogin,
            userLogin: state.userLogin,
            allPosts: state.allPosts,
            friends: state.friends,
            friendView: state.friendView,
            getUsers,
            createUser,
            checkLogin,
            createPost,
            getAllPost,
            getNotFriends,
            createFollow,
            setFriendView,
            getFriends,
            deleteFriend
        }}>
            {children}
        </UserContext.Provider>
    )
}