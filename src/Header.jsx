import React from "react";
import './Bootstrap/css/bootstrap.min.css';
import './Bootstrap/js/bootstrap.bundle.min.js';
import './Bootstrap/js/color-modes.js';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
                <div className="container-fluid"> <a className="navbar-brand" href="#">Nuevo Horario 🗿🗿</a>
                </div>
            </nav>
        </>
    )
}

export default Header;