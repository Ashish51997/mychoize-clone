import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from "./actionType"
  import {saveLogin,LoadData} from "../localStorage"
const initState =  {
    data: [],
    token: "",
    isAuth: false,
    isLoading: false,
    isError: false
}

export const LoginReducer = (state=initState, action) => {
    switch(action.type){
        case LOGIN_REQUEST: {
            return{
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case LOGIN_SUCCESS: {
            return{
                ...state,
                data: action.payload.user,
                token: action.payload.token,
                isAuth: true,
                isLoading: false
            }
            
        }
        case LOGIN_FAILURE: {
            return{
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false
            }
        }
        case REGISTER_REQUEST: {
            return{
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case REGISTER_SUCCESS: {
            return{
                ...state,
                data: action.payload.user,
                token: action.payload.token,
                isAuth: true,
                isLoading: false
            }
        }
        case REGISTER_FAILURE: {
            return{
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false
            }
        }
        default: return state
    }
}