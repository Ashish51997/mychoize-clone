import React from 'react'
import styles from "./Login.module.css"
import axios from "axios"

const initLoginState = {
    login_email: "",
    login_password: ""
}

const Login = () => {
    //login
    const [loginState, setloginState] = React.useState(initLoginState)
    const {login_email, login_password} = loginState

    const handleLoginData = (e) => {
        const {name, value} = e.target

        setloginState({
            ...loginState, [name]:value
        })
    }

    const handleLogin = () => {
        console.log(loginState)
        axios.get("https://mychoize-backend.herokuapp.com/cars").then(res => console.log(res.data)).catch(err => console.log(err))
    }

    //change tabs
    const [register, setRegister] = React.useState(false)

    const handleLoginTab = () => {
        setRegister(false)
    }

    const handleRegisterTab = () => {
        setRegister(true)
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
                        <input placeholder="First Name"></input>
                        <input placeholder="Last Name"></input>
                        <input placeholder="Email"></input>
                        <input placeholder="Phone Number"></input>
                        <input placeholder="Choose Password"></input>
                        <input placeholder="Confrim Password"></input>
                    </div>
                    <button className={styles.signupBtn}>Signup Now</button>
                </div>}
                {!register && <div>
                    <div className={styles.inputContiner}>
                        <input name="login_email" value={login_email} placeholder="Email" onChange={handleLoginData}></input>
                        <input name="login_password" value={login_password} placeholder="Password" onChange={handleLoginData}></input>
                        <p>Forgot Password ?</p>
                    </div>
                    <button className={styles.signupBtn} onClick={()=> handleLogin()}>Login</button>
                </div>}
            </div>
        </div>
    )
}

export {Login}
