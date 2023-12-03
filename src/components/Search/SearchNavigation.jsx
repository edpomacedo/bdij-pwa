// SearchNavigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SearchNavigation = () => {
    return (
        <ul className="nav nav-underline mb-4">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://bdij.com.br/ementas">
                    <Link to="/ementas" style={{ textDecoration: 'none' }}>Ementas</Link>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="https://bdij.com.br/enunciados/">Enunciados</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://bdij.com.br/informativos">
                    <Link to="/informativos" style={{ textDecoration: 'none' }}>Informativos</Link>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="https://bdij.com.br/legislacao/">Legislação</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="https://bdij.com.br/vocabulario/">Vocabulário</a>
            </li>
        </ul>
    );
};

export default SearchNavigation;