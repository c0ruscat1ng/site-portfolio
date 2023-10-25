import React from 'react';
import {NavLink} from "react-router-dom";
import DarkModeBtn from "../UI/darkModeBtn/DarkModeBtn.jsx";
import './Navbar.scss'

const Navbar = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link"

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink className="logo" to="/">
                        <strong>Portfolio</strong>
                    </NavLink>

                    <DarkModeBtn/>

                    <ul className="nav-list">

                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Главная
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Проекты
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Контакты
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;