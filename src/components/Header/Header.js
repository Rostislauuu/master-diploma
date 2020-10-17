import React from "react";
import "../../assets/style/Header/Header.scss";
import avatar from "../../assets/avatar.png";

const Header = () => {
    return (
        <div>
            <header>
                <section className="headerContainer">
                    <h1><a href="#">Study<span>Max</span></a></h1>
                    <nav className="effect">
                        <a href="#">Головна</a>
                        <a href="#">Тести</a>
                        <a href="#">Завдання</a>
                        <a href="#">Групи</a>
                        <img src={avatar} alt="Avatar" className="avatar" />
                    </nav>
                </section>
            </header>
            <div className="fakeBlock">
                <p>Hello</p>
            </div>
        </div>
    );
};

export default Header;
