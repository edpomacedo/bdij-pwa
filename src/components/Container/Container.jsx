// Container.jsx
import React from 'react';
import Logo from '../../logo.svg';

function Container() {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src={Logo} alt="BDIJ" width="288" height="162" />
                <h1 className="display-5 fw-bold text-body-emphasis">BASE DE DADOS DE INSTITUTOS JURÍDICOS</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Banco de dados secundário gratuito e multilíngue, voltado para a coleta de dados e estruturá-los a fim de fornecer suporte para os operadores do Direito.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Acessar a base</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Saiba mais</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Container;
