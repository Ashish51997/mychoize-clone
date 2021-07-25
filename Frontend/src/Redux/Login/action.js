import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from "./actionType"
import axios from "axios"

const loginReq = (payload) => (dispatch) => {
    const login_req = login_request()
    dispatch(login_req)
    axios.post(`https://mychoize-backend.herokuapp.com/login`,payload, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        const login_succe = login_success(res.data)
        dispatch(login_succe)
    })
    .catch(err => {
        const login_err = login_failure()
        dispatch(login_err)
    })
}

const registerReq = (payload) => (dispatch) => {
    const register_req = register_request()
    dispatch(register_req)
    axios.post(`https://mychoize-backend.herokuapp.com/register`,payload, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        const req_succ = register_success(res.data)
        dispatch(req_succ)
    })
    .catch(err => {
        const reg_fail = register_failure
        dispatch(reg_fail)
    })
}

const login_request = () => {
    return{
        type: LOGIN_REQUEST
    }
}

const login_success = (payload) => {
    return{
        type: LOGIN_SUCCESS,
        payload
    }
}

const login_failure = () => {
    return{
        type: LOGIN_FAILURE
    }
}

const register_request = () => {
    return{
        type: REGISTER_REQUEST
    }
}

const register_success = (payload) => {
    return{
        type: REGISTER_SUCCESS,
        payload
    }
}

const register_failure = () => {
    return{
        type: REGISTER_FAILURE
    }
}

export {loginReq, registerReq}