import React from 'react';
import PropTypes from 'prop-types';
import CompanyListItem from '../companyListItem/CompanyListItem';
import CompanyJsonFile from '../../json/companies.json';

import './CompanyList.css';

const jsonData = CompanyJsonFile;
const data = jsonData.companies.sort((a,b)=>{
    return sortByTitle(a,b);
});

export const CompanyList = (props) => {

    return(
        <div className="companyContainer">
            {data.map((object, index)=>{
                if(object.price > props.maxPrice || object.price < props.minPrice){
                    return false;
                } 
                return (
                    <CompanyListItem 
                        title =     {object.title} 
                        key =       {object.id} 
                        location =  {object.location.city} 
                        rating =    {object.rating}
                        street =    {object.location.street}
                        price =     {object.price}
                        id =        {object.id}
                        index =     {index}
                        onClick =   {props.onClick}
                    />
                )
            })}
        </div>
    );
}

//Props from class CompanyContainer
CompanyList.propTypes = {
    onClick: PropTypes.func,
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number
}

function sortByTitle(a,b){
    a = a.title.toLowerCase();
    b = b.title.toLowerCase();
    return (a<b) ? -1 : (a>b) ? 1 : 0;
}