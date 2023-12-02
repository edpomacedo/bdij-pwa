// Header.js
import React from 'react';
import Logo from '../../logo.svg';
import ListIcon from '../Icons/ListIcon';

function Header() {
    return (
        <header className="navbar sticky-top flex-md-nowrap p-0">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="https://bdij.com.br">
                <img src={Logo} alt="Logo" height="32" />
            </a>
            <ul className="navbar-nav flex-row d-md-none">
                <li className="nav-item text-nowrap">
                    <button className="nav-link px-3" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <ListIcon />
                    </button>
                </li>
            </ul>
        </header>
    );
}

export default Header;