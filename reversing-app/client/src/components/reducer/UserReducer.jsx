const CHECKLOGIN = "CHECKLOGIN";
const GETUSERS = "GETUSERS";


export default function UserReducer (state, action) {
    const {payload, type} = action;

    switch(type){
        case GETUSERS:
            return {
                ...state,
                user: payload
            };
    }
}