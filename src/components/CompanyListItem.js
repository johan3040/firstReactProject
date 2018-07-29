import React from 'react';

export default class CompanyListItem extends React.Component{
    constructor(props){
        super(props);
        this.index = this.props.index;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.onClick(this.index);
    }

    render(){
        let title = this.props.title;
        let location = this.props.location;
        let img = "/img/" + this.props.img;
        return(
            <div className="companySection">
                <div className="companyInnerSection">
                    <h3 onClick = {this.handleClick} style={{cursor: "pointer"}}>{title}</h3>
                    <p>Paragraph</p>
                    <p>Location: {location} </p>
                </div>
                <figure>
                    <img src={img} alt={title} />
                </figure>
            </div>
        );
    }
}