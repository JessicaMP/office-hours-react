import React from 'react';
import Navbar from './Navbar';

const datosEspañol = ['Inicio', 'Nosotros', 'Ustedes', 'ellos'];

const Header = () => (
    <header className="header">
        <h1>React</h1>
        <Navbar arrayString={datosEspañol}/>
        </header>
);

export default Header;