import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className={styles.navContainer}>
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>DJwhoCODES</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen ? getImageUrl("navIcons/closeIcon.png") : getImageUrl("navIcons/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul  className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}
