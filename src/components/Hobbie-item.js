import React from 'react';
import PropTypes from 'prop-types';

const HobbieItem = ({action}) => (
    <li>{action}</li>
);

HobbieItem.propTypes = {
    action: PropTypes.string.isRequired
};

export default HobbieItem;