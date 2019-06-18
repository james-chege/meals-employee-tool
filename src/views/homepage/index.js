import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
    fetchAllEmployeesAction,
        } from './../../redux/actionCreator/homePageActions';
import { Navbar } from './../../components/navBar';
import MainSection from './../../components/mainSection';

export class Homepage extends Component{
    componentDidMount(){
        const {  fetchAllEmployeesAction } = this.props;
        fetchAllEmployeesAction();

        console.log('homepage props', this.props);
    }

    renderNavBar(){
        return (
        <Navbar /> 
        ); 
    }

    renderMainSection(data){
        return(
            <MainSection data={ data }/>
        )
    }

render(){

    return(
        <div>
        <Fragment>
            {this.renderNavBar()}
            {this.renderMainSection(this.props.allState.allEmployees)}
            {console.log('________+++++', this.props.allState)}
        </Fragment>
    </div>
    )
}
}

const mapDispatchToProps = {
    fetchAllEmployeesAction,
}

const mapStateToProps = (state) => ({
    allState: state.homePage
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Homepage)