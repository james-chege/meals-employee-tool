import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
    fetchAllEmployeesAction,
        } from './../../redux/actionCreator/homePageActions';
import { Navbar } from './../../components/navBar';
import { QuerySection } from './../../components/querySection';

export class Homepage extends Component{
    componentDidMount(){
        const {  fetchAllEmployeesAction } = this.props;
        fetchAllEmployeesAction();

    }

    renderNavBar(){
        return (
        <Navbar /> 
        ); 
    }

    renderQuerySection(data){
        return(
            <QuerySection data={ data }/>
        )
    }

render(){

    return(
        <div>
        <Fragment>
            {this.renderNavBar()}
            {this.renderQuerySection(this.props.allState.allEmployees)}
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