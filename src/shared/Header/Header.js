import React from "react";

import {Link} from "react-router-dom";

import "../../assets/style/Header/header.scss";
import avatar from "../../assets/avatar.png";

const Header = () => {
    return (
        <header className="header">
            <section className="header_container">
                <h1 className="logo">
                    <Link to="/">
                        <a href="#">Study<span>Max</span></a>
                    </Link>
                </h1>
                <nav className="menu_effect">
                    <Link to="/auth">
                        <li>Головна</li>
                    </Link>
                    <li>Тести</li>
                    <Link to="/lessons">
                        <li>Завдання</li>
                    </Link>
                    <li>Групи</li>
                </nav>
                <img src={avatar} alt="Avatar" className="avatar"/>
            </section>
        </header>
    );
};

export default Header;
