import React from 'react';
import './companyContainer.css';
import BackBtn from '../backBtn/BackBtn';
import { CompanyList } from '../companyList/CompanyList';
import CompanyDetails from '../companyDetails/CompanyDetails';
import Navbar from '../navbar/Navbar';

export class CompanyContainer extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            displayList: true,
            currentId: null,
            currentSection: "Hår"
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
            <div>
                <Navbar section={this.state.currentSection} />
                <BackBtn />
                {this.getCurrent()}
            </div>
        );
    }
    
}