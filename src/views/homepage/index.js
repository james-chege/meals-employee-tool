import React, { Component} from 'react';
import { connect } from 'react-redux';
import { 
    fetchAllEmployeesAction,
        } from './../../redux/actionCreator/homePageActions';

export class Homepage extends Component{
    componentDidMount(){
        const {  fetchAllEmployeesAction } = this.props;
        fetchAllEmployeesAction();

        console.log('homepage props', this.props);
    }

render(){
    return(
    <div>
        hello
    </div>
    )
}
}

const mapDispatchToProps = {
    fetchAllEmployeesAction,
}

const mapStateToProps = (state) => ({
    allState: state
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Homepage)