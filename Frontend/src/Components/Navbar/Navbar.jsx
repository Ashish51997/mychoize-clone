import React from 'react'
import styles from "./Navbar.module.css"
import CallIcon from '@material-ui/icons/Call';
import PublicIcon from '@material-ui/icons/Public';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import { logout } from '../../Redux/localStorage'
import { useHistory } from "react-router";



const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    fontSize: 12,
    width: 100
  },
  pTag: {
      cursor: "pointer"
  }
}));

const Navbar = () => {

    const history = useHistory();

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    const isAuth = useSelector((state) => state.login.isAuth)
    const data = useSelector((state) => state.login.data)

    const [state, setState] = React.useState(false)

    const handleLogin = () => {
        setState(true)
        console.log("object")
    }

    if(state){
        return <Redirect to={"/user/login"} push />
    }

    const goHome = () => {
        history.push("/")
    }

    const handleLogout = () => {
        logout()
        window.location.reload()
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
                        <img onClick={()=>goHome()} className={styles.img} src="https://www.mychoize.com/imgs/icons/MyChoize-logo-2.png" alt="logo" />
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
                    {! isAuth && <button className={styles.loginBtn} onClick={() => handleLogin()}>Login</button>}
                    {isAuth && 
                        <div className={styles.opBtnContainer}>
                            <button className={styles.opBtn} onClick={handleClick}>{data.name.split(" ")[0]}</button>
                            <Popper id={id} open={open} anchorEl={anchorEl}>
                                <div className={classes.paper}>
                                    <p className={classes.pTag}>Account</p>
                                    <p className={classes.pTag} onClick={()=> handleLogout()}>Logout</p>
                                </div>
                            </Popper>
                        </div>
                    }
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
