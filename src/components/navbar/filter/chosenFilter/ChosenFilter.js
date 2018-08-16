import React from 'react';
import PropTypes from 'prop-types';

import './ChosenFilter.css';

const ChosenFilter = (props)=>{
        let chigh = props.maxPrice > props.maxValue ? props.maxValue : props.maxPrice;
        let clow = props.minPrice;
        return(
            <div className="chosenFilter">
                <span>Pris {clow} - {chigh} kr</span>
            </div>
        );
}

ChosenFilter.propTypes = {
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number
}

export default ChosenFilter;