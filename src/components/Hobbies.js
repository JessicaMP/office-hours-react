import React from 'react';
import HobbieItem from './Hobbie-item';
import PropTypes from 'prop-types';

const Hobbies = ({info}) => {
    return (
    <ul className="ul">
        {info.map(li =>
            <HobbieItem 
                action={li}
                key={li}
            />
        )}
    </ul>
    )
};

Hobbies.propTypes = {
    info: PropTypes.arrayOf(PropTypes.string)
};

export default Hobbies; 