import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ruta}) => (
    <div className="main text-center">
        <img src={ruta} alt="gato"/>
        </div>

);

Main.propTypes = {
    ruta: PropTypes.string.isRequired
};

export default Main;