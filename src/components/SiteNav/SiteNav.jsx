import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

function SiteNav() {
    const navLinks = [
        { label: "Home", url: "/" },
        { label: "Showcase", url: "/showcase" },
        { label: "CV", url: "/cv" },
    ];

    const [click, setClick] = useState(false);
    function handleClick() {
        setClick(!click);
    }

    return (
        <div className={styles.wrapper}>
            <h3>Chloe Page</h3>
            <nav
                className={
                    click
                        ? `${styles.navMenu} ${styles.active}`
                        : styles.navMenu
                }
            >
                {navLinks.map((navLink) => (
                    <NavLink
                        key={navLink.url}
                        to={navLink.url}
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : ""
                        }
                    >
                        {navLink.label}
                    </NavLink>
                ))}
            </nav>
            <div className={styles.hamburger} onClick={handleClick}>
                {click ? (
                    <FaTimes size={40} style={{ color: "black" }} />
                ) : (
                    <HiMenu size={40} style={{ color: "black" }} />
                )}
            </div>
        </div>
    );
}

export default SiteNav;
