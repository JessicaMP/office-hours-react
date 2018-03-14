import React from 'react';
import PropTypes from 'prop-types';

const NavbarItem = ({datostring}) => (
   <a>{datostring}</a>
)

NavbarItem.propTypes = {
    datostring: PropTypes.string.isRequired
};

export default NavbarItem;

