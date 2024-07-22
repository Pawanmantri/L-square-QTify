import React from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

const NavBar = () => {

    return (
        <>
            <nav className={styles.navbar}>
                <Logo />
                <SearchBar search={"Search a song of your choice"} />
                <Button children={"Give Feedback"} />
            </nav>

        </>

    );
}

export default NavBar;