// SearchNavigation.jsx
import React from 'react';

const SearchNavigation = () => {
    return (
        <ul className="nav nav-underline">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://bdij.com.br/ementas/">Ementas</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="https://bdij.com.br/enunciados/">Enunciados</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="https://bdij.com.br/informativos/">Informativos</a>
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