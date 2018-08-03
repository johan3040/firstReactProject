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
            currentSection: "Hår",
            offsetTop: 0,
            minPrice: 0,
            maxPrice: 9999999
        }
        this.handleListClick =      this.handleListClick.bind(this);
        this.handleDetailsClick =   this.handleDetailsClick.bind(this);
        this.updateContainer =      this.updateContainer.bind(this);
    }

    handleListClick(id, index){
        let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        this.setState({
            displayList: false,
            currentId: id,
            currentIndex: index,
            offsetTop: scrollTop
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
            return(
                <div>
                    <Navbar section={this.state.currentSection} onChange={this.updateContainer} currentMinPrice={this.state.minPrice} currentMaxPrice={this.state.maxPrice} />
                    <CompanyList onClick={this.handleListClick} maxPrice={this.state.maxPrice} minPrice={this.state.minPrice} />
                </div>
            );
        }else{
            return (
                 <CompanyDetails 
                    onClick={this.handleDetailsClick} 
                    id={this.state.currentId} 
                />
            );
        }
    }

    updateContainer(value){
        this.setState({
            minPrice: value.min,
            maxPrice: value.max
        });
    }

    componentDidUpdate(){
        //Sets the top offset to where the user left off.
        //Only gets used for when displaying the companyList
        if(this.state.displayList === true) window.scrollBy(0, this.state.offsetTop);
    }

    render(){
        
        return(
            <div>
                <BackBtn displayList={this.state.displayList} />
                {this.getCurrent()}
            </div>
        );
    }    
}