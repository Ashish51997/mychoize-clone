import React from 'react'
import styles from "./Login.module.css"
import { Redirect } from "react-router-dom";
import { saveLogin } from '../../Redux/localStorage'
import {loginReq, registerReq} from "../../Redux/Login/action"
import { useDispatch, useSelector } from "react-redux";

const initLoginState = {
    login_email: "",
    login_password: ""
}

const initRegisterState = {
    first_name: "",
    last_name: "",
    reg_email: "",
    phone: "",
    password: ""
}

const Login = () => {

    const isAuth = useSelector((state) => state.login.isAuth)
    const data = useSelector((state) => state.login.data)
    const token = useSelector((state) => state.login.token)
    const isError = useSelector((state) => state.login.isError)
    const isLoading = useSelector((state) => state.login.isLoading)

    //login
    const [loginState, setloginState] = React.useState(initLoginState)
    const {login_email, login_password} = loginState

    const [registerState, setRegisterState] = React.useState(initRegisterState)
    const {first_name, last_name, reg_email, phone, reg_password} = registerState

    const dispatch = useDispatch()

    const handleLoginData = (e) => {
        const {name, value} = e.target

        setloginState({
            ...loginState, [name]:value
        })
    }

    const handleLogin = () => {
        const data = {
            email: loginState.login_email,
            password: loginState.login_password
        }
        console.log(data)
        dispatch(loginReq(data))
    }

    React.useEffect(() => {
        saveLogin("token", token)
        saveLogin("user", data)
    }, [token, data])

    //change tabs
    const [register, setRegister] = React.useState(false)

    const handleLoginTab = () => {
        setRegister(false)
    }

    const handleRegisterTab = () => {
        setRegister(true)
    }

    //register

    const handleregChange = (e) => {
        const {name, value} = e.target

        setRegisterState({
            ...registerState, [name]:value
        })
    }

    const handleRegister = () => {
        const data = {
            email: registerState.reg_email,
            password: registerState.reg_password,
            phone: +registerState.phone,
            name: `${registerState.first_name} ${registerState.last_name}`
        }
        console.log(data)
        dispatch(registerReq(data))
    }
    
    if(isAuth){
        return(
            <Redirect to={"/"} push />
        )
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.imageBox}>
                <img className={styles.imgBanner} src="https://www.mychoize.com/imgs/icons/login-banner.png" alt="banner" />
            </div>
            <div className={styles.inputBox}>
                <div className={styles.title}>
                    <span>UNLOCK YOUR <strong>ACCESS</strong></span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.actionButton}>
                    <button className={styles.loginBtn} onClick={handleLoginTab}>LOGIN</button>
                    <button className={styles.registerBtn} onClick={handleRegisterTab}>REGISTER</button>
                </div>
                <div className={styles.divider}></div>
                {register && <div>
                    <div className={styles.inputContiner}>
                        <input name="first_name" value={first_name} onChange={handleregChange} placeholder="First Name"></input>
                        <input name="last_name" value={last_name} onChange={handleregChange} placeholder="Last Name"></input>
                        <input name="reg_email" value={reg_email} onChange={handleregChange} placeholder="Email"></input>
                        <input name="phone" value={phone} onChange={handleregChange} placeholder="Phone Number"></input>
                        <input name="reg_password" value={reg_password} onChange={handleregChange} placeholder="Choose Password"></input>
                        {/* <input placeholder="Confrim Password"></input> */}
                    </div>
                    <button className={styles.signupBtn} onClick={()=> handleRegister()}>{isLoading ? "Loading..." : "Signup Now"}</button>
                </div>}
                {!register && <div>
                    <div className={styles.inputContiner}>
                        <input name="login_email" value={login_email} placeholder="Email" onChange={handleLoginData}></input>
                        <input name="login_password" value={login_password} placeholder="Password" onChange={handleLoginData}></input>
                        <p>Forgot Password ?</p>
                    </div>
                    <button className={styles.signupBtn} onClick={()=> handleLogin()}>{isLoading ? "Loading..." : "Login"}</button>
                </div>}
            </div>
        </div>
    )
}

export {Login}
