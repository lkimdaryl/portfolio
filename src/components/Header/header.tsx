import './header.css';
import SearchBox from '../SearchBox/searchbox';
import ModeSwitcher from '../ModeSwitcher/modeswitcher';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import MenuIcon from '../../assets/burger_menu.svg';
import Resume from '../../assets/resume.pdf';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const navMenu = () => {
        return (
            <ul id="navigation">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href={Resume} target="_blank">Resume</a></li>
            </ul>
        )
    }

    const burgerMenu = () => {
        return (
            <div id="burger_menu" onClick={toggleMenu} style={{width: '30px', height: '30px'}}>
                <img src={MenuIcon} alt="menu icon" />
            </div>
        )
    }

    const menuItems = () => {
        return (
            <div className="menu-items">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="./resume.pdf" target="_blank">Resume</a></li>
                </ul>
            </div>
        )
    }
    
    return (
        <>
        <header>
            <img src={logo} alt="logo" />
            <nav>
                {burgerMenu()}
                {navMenu()}
            </nav>
        </header>
        {menuOpen && menuItems()}
        {/* <SearchBox /> */}
        <ModeSwitcher />
        </>
    )
}

export default Header