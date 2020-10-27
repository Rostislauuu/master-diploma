import React from "react";

import "../../assets/style/Header/header.scss";
import avatar from "../../assets/avatar.png";

const Header = () => {
    return (
            <header className="header">
                <section className="header_container">
                    <h1 className="logo">
                        <a href="#">Study<span>Max</span></a>
                    </h1>
                    <nav className="menu_effect">
                        <a href="#">Головна</a>
                        <a href="#">Тести</a>
                        <a href="#">Завдання</a>
                        <a href="#">Групи</a>
                        <img src={avatar} alt="Avatar" className="avatar" />
                    </nav>
                </section>
            </header>
    );
};

export default Header;
