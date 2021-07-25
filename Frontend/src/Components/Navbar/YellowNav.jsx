import React from 'react'
import styles from "./Navbar.module.css"
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';

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

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div className={styles.yellowNav}>
                    <div className={styles.navYellowLogo}>
                        <img className={styles.img} src="https://www.mychoize.com/imgs/icons/MyChoize-logo-2.png" alt="logo" />
                    </div>
                    <div className={styles.yellowNavInput}>
                        <select className={styles.selectBox}>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Kolkata">Kolkata</option>
                        </select>
                    </div>
                    <button className={styles.modBtn}>Modify Search</button>
                    <div className={styles.opBtnContainer}>
                        <button aria-describedby={id} type="button" onClick={handleClick} className={styles.opBtn}><MenuIcon fontSize="inherit" /></button>
                        <Popper id={id} open={open} anchorEl={anchorEl}>
                            <div className={classes.paper}>
                                <p className={classes.pTag}>Login</p>
                                <p className={classes.pTag}>Register</p>
                            </div>
                        </Popper>
                    </div>
        </div>
    )
}

export {YellowNav}
