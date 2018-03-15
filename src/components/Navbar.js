import React from 'react';
import NavbarItem from './Navbar-item';
import PropTypes from 'prop-types';
//hola
const ingles = ['welcome', 'us', 'yours', 'they'];

const Navbar = ({arrayString}) => {
    return (
    <navbar>
        {arrayString.map( e =>
            <NavbarItem
                datostring={e}
                key={e}
                />
        )}
     </navbar>
    )
} 

Navbar.propTypes = {
    arrayString: PropTypes.arrayOf(PropTypes.string)
};

export default Navbar;
// const Navbar = () => (
//     <navbar>
//         {español.map((es, i) => 
//             <a key={i}>{es}</a>
//         )}
//     </navbar>
// );
//En el key tambien se le puede pasaer el parametro e y se hace un valor unico
