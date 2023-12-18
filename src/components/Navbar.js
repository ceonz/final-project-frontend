import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import PawPrintIcon from './PawPrintIcon';

function Navbar() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logoLink}>
        <PawPrintIcon className={styles.pawIcon} />
        <span className={styles.srOnly}>Animal Shelter</span>
      </NavLink>
      <div className={styles.navLinksContainer}> 
        <NavLink to="/home" className={styles.navLink}>Home</NavLink>
        <NavLink to="/animal-profiles" className={styles.navLink}>Animal Profiles</NavLink>
        <NavLink to="/shelter-tasks" className={styles.navLink}>Shelter Tasks</NavLink>
        <NavLink to="/register-animal" className={styles.navLink}>Register Animal</NavLink>
      </div>
    </header>
  );
}

export default Navbar;
