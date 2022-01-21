import React from 'react';

import logo_white from '../../../assets/logo_white.png';
import logo_black from '../../../assets/logo_black.png';

const Logo = ({color}) => {
    if (color==="white") {
        return(
            <img src={logo_white} alt="Logo" />
        )
    }

    else {
        return(
            <img src={logo_black} alt="Logo" />
        )
    }
}

export default Logo;