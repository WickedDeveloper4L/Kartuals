import  userActionTypes  from "./user.types";
const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return{
            ...state,
            currentUser: action.payload,
            error: null
            }
            case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
                case userActionTypes.EMAIL_SIGN_IN_FAILURE:
                    return{
                    ...state,
                    error: null
                    }
        default:
            return state;
    }
}

export default userReducer