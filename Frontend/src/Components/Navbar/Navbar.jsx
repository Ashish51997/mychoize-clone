import React from 'react'
import styles from "./Navbar.module.css"
import CallIcon from '@material-ui/icons/Call';
import PublicIcon from '@material-ui/icons/Public';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import { Redirect } from "react-router-dom";

const Navbar = () => {

    const [state, setState] = React.useState(false)

    const handleLogin = () => {
        setState(true)
        console.log("object")
    }

    if(state){
        return <Redirect to={"/user/login"} push />
    }

    return (
        <div className={styles.navContainer}>
            <div className={styles.topBanner}>
                <div className={styles.topBannerInfo}>
                    <div>
                        <p><CallIcon fontSize="inherit" /></p>95 1234 1234
                    </div>
                    <div>
                        <p><PublicIcon fontSize="inherit" /></p>English
                    </div>
                </div>
                <div className={styles.midNav}>
                    <div className={styles.navLogo}>
                        <img className={styles.img} src="https://www.mychoize.com/imgs/icons/MyChoize-logo-2.png" alt="logo" />
                    </div>
                    <div> 
                        <p>A Self Driven Life is MyChoize</p>
                    </div>
                    <div className={styles.appDownload}>
                        <div className={styles.appDownloadText}>
                            <p>Download <strong>MYCHOIZE APP</strong></p>
                        </div>
                        <div className={styles.appDownloadLogo}>
                            <span><AppleIcon fontSize="medium" /></span>
                            <span><AndroidIcon fontSize="medium" /></span>
                        </div>
                    </div>
                    <button className={styles.loginBtn} onClick={() => handleLogin()}>Login</button>
                </div>
                <div className={styles.navOptions}>
                    <div>DEALS</div>
                    <div>SUBSCRIPTION</div>
                    <div>VACCINATION DRIVE</div>
                    <div>ABOUT US</div>
                    <div>FAQs</div>
                    <div>BLOG</div>
                    <div>CONTACT US</div>
                </div>
            </div>
        </div>
    )
}

export {Navbar}
