import React from 'react';
import {NavLink} from 'react-router-dom';

const logo = (props) => {
    return(
        <NavLink to='/' className='brand-logo'>EXPEN</NavLink>
    );
}

export default logo;