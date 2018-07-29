import React from 'react';
import './CompanyContainer.css';
import { CompanyList } from './CompanyList';
import { CompanyDetails } from './CompanyDetails';

export class CompanyContainer extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            displayList: true,
            currentId: null
        }
        this.handleListClick = this.handleListClick.bind(this);
        this.handleDetailsClick = this.handleDetailsClick.bind(this);
    }

    handleListClick(id, index){
        this.setState({
            displayList: false,
            currentId: id,
            currentIndex: index
        });
    }

    handleDetailsClick(){
        this.setState({
            displayList: true,
            currentId: null
        });
    }

    getCurrent(){
        if(this.state.displayList){
            return <CompanyList onClick={this.handleListClick} />;
        }else{
            return (
                 <CompanyDetails 
                    onClick={this.handleDetailsClick} 
                    id={this.state.currentId} 
                />
            );
        }
    }

    render(){
        
        return(
            this.getCurrent()
        );
    }
    
}