const CHECKLOGIN = "CHECKLOGIN";
const GETUSERS = "GETUSERS";
const SETSESSIONID = "SETSESSIONID";
const GETALLPOST = "GETALLPOST";
const GETFRIENDS = "GETFRIENDS";
const NOTFRIENDS = "NOTFRIENDS";
const FRIENDVIEW = "FRIENDVIEW";


export default function UserReducer (state, action) {
    const {payload, type} = action;

    switch(type){
        case GETUSERS:
            return {
                ...state,
                notFriends: payload
            };

        case CHECKLOGIN:
            return{
                ...state,
                isLogin: payload
            };
        case SETSESSIONID:
            return {
                ...state,
                userLogin: payload,
            }
        case GETALLPOST:
            return {
                ...state,
                allPosts: payload
            }
        case GETFRIENDS:
            return {
                ...state,
                friends: payload
            }

        case NOTFRIENDS:{
            return{
                ...state,
                notFriends: payload,
            }
        }

        case FRIENDVIEW: 
        return{
            ...state,
            friendView: state.friends.filter((x) => x.user_id == payload),
        }
        
    }
}