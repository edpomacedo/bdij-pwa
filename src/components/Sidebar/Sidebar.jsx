// Sidebar.jsx
import React from 'react';
import HouseIcon from '../Icons/HouseIcon';
import WikipediaIcon from '../Icons/WikipediaIcon';
import SearchIcon from '../Icons/SearchIcon';
import TextareaResizeIcon from '../Icons/TextareaResizeIcon';
import LayersIcon from '../Icons/LayersIcon';
import PluginIcon from '../Icons/PluginIcon';
import FileEarmarkMedicalIcon from '../Icons/FileEarmarkMedicalIcon';
import FileEarmarkTextIcon from '../Icons/FileEarmarkTextIcon';
import FilePersonIcon from '../Icons/FilePersonIcon';
import ShieldCheckIcon from '../Icons/ShieldCheckIcon';
import PatchCheckFillIcon from '../Icons/PatchCheckFillIcon';

function Sidebar() {
    return (
        <div className="sidebar col-md-3 col-lg-2 p-0">
            <div className="offcanvas-md offcanvas-end" tabindex="-1" id="sidebarMenu"
                aria-labelledby="sidebarMenuLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="sidebarMenuLabel">Base de Dados de Institutos Jurídicos</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="https://bdij.com.br/">
                                <HouseIcon />
                                Principal
                            </a>
                        </li>
                    </ul>
                    <h6
                        className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                        <span>Dados</span>
                    </h6>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2" href="https://web.bdij.com.br/">
                                <WikipediaIcon />
                                Rede
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2" href="https://web.bdij.com.br/query/">
                                <SearchIcon />
                                Consultas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2" href="https://web.bdij.com.br/tools/cradle/">
                                <TextareaResizeIcon />
                                Formulários
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2" href="https://web.bdij.com.br/tools/quickstatements/">
                                <LayersIcon />
                                Lotes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2" href="https://web.bdij.com.br/w/api.php">
                                <PluginIcon />
                                API
                            </a>
                        </li>
                    </ul>
                    <h6
                        className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                        <span>Pesquisar</span>
                    </h6>
                    <ul className="nav flex-column mb-auto">
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2" href="https://bdij.com.br/ementas/">
                                <FileEarmarkMedicalIcon />
                                Ementas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2 disabled" href="https://bdij.com.br/">
                                <FileEarmarkTextIcon />
                                Enunciados
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2 disabled" href="https://bdij.com.br/">
                                <FileEarmarkTextIcon />
                                Legislação
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2 disabled" href="https://bdij.com.br/">
                                <FileEarmarkTextIcon />
                                Vocabulário
                            </a>
                        </li>
                    </ul>
                    <h6
                        className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                        <span>Leia-me</span>
                    </h6>
                    <ul className="nav flex-column mb-auto">
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2" href="https://web.bdij.com.br/wiki/Project:About">
                                <FilePersonIcon />
                                Sobre
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2" href="https://web.bdij.com.br/wiki/Project:Privacy_policy">
                                <ShieldCheckIcon />
                                Política de privacidade
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center gap-2" href="https://web.bdij.com.br/wiki/Project:General_disclaimer">
                                <PatchCheckFillIcon />
                                Termos de uso
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;