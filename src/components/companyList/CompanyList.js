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
                return (
                    <CompanyListItem 
                        title =     {object.title} 
                        key =       {object.id} 
                        location =  {object.location.city} 
                        img =       {object.imgUrl} 
                        id =        {object.id}
                        index =     {index}
                        onClick =   {props.onClick}
                    />
                )
            })}
        </div>
    );
}

CompanyList.propTypes = {
    onClick: PropTypes.func
}

function sortByTitle(a,b){
    a = a.title.toLowerCase();
    b = b.title.toLowerCase();
    return (a<b) ? -1 : (a>b) ? 1 : 0;
}