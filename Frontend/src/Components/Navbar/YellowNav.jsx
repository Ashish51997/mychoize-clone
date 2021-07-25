import React from 'react'
import styles from "./Navbar.module.css"
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";

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

const YellowNav = () => {

    const isAuth = useSelector((state) => state.login.isAuth)

    const history = useHistory();

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const goHome = () => {
        history.push("/")
    }

    return (
        <div className={styles.yellowNav}>
                    <div onClick={()=>goHome()} className={styles.navYellowLogo}>
                        <img className={styles.img} src="https://www.mychoize.com/imgs/icons/MyChoize-logo-2.png" alt="logo" />
                    </div>
                    <div className={styles.yellowNavInput}>
                        <select className={styles.selectBox}>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Kolkata">Kolkata</option>
                        </select>

                        <Inputdate>
                        <input
                      type="date"
                      name="pickdate"
                      min={new Date().toISOString().split("T")[0]}
                    />
                    </Inputdate>
                    <Inputdate>
                
                        <input
                        placeholder="when you want to ride"
                      type="date"
                      name="pickdate"
                      min={new Date().toISOString().split("T")[0]}
                    />
                    </Inputdate>
                    </div>
                    <button className={styles.modBtn}>Modify Search</button>
                    <div className={styles.opBtnContainer}>
                        <button aria-describedby={id} type="button" onClick={handleClick} className={styles.opBtn}><MenuIcon fontSize="inherit" /></button>
                        <Popper id={id} open={open} anchorEl={anchorEl}>
                            {! isAuth && <div className={classes.paper}>
                                <p className={classes.pTag}>Login</p>
                                <p className={classes.pTag}>Register</p>
                            </div>}
                            {isAuth && <div className={classes.paper}>
                                <p className={classes.pTag}>My Acoount</p>
                                <p className={classes.pTag}>Logout</p>
                            </div>}
                        </Popper>
                    </div>
        </div>
    )
}

export {YellowNav}

const Inputdate=styled.div`

input{
    border:none;
    padding:0.3rem;
    border-radius:5px;
    margin-top:5px;
    outline: none;
    

}

`