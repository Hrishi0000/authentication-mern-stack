
import React, { useContext } from "react";
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import AuthContext from "../../context/AuthContext";

export default function  NavBar() {
    const  {loggedIn} = useContext(AuthContext);
    console.log("actve_client: ",loggedIn)
    return ( <div className={styles.navBarWrapper}>
        <ul className={styles.navBar}>
            <li><Link to='/home'>Home</Link></li>

        {loggedIn===false &&(
            <>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            </>)
        }
        {loggedIn===true &&(
            <>
            <li><Link to='/postQues'>Post Your Ques</Link></li>
            <li><Link to='/logout'>Log Out</Link></li>
            </>
            )
        }
        </ul>
    </div>
    );

}