import React, {Component} from 'react'; 
import './querySection.scss';

export class QuerySection extends Component {

    state = {
        emailFieldContent: '',
    }

    emails = [];

    renderChoiceBox (){
        let visibility;

        if (this.emails.length === 0) {
            visibility = 'hidden';
        } 
        else {
            visibility = 'display';
        }

        return(
        <div className={`choice-box-${visibility}`}>
            {this.emails.map( (emailItem) => (
                <div className='email-item'> {emailItem} </div>
            ) )}
        </div>
        )
    }

    textChange = (e) => {
        const {target: {value}} = e;
        this.setState({emailFieldContent: value})
    }

    renderEmailField (){
        let employees;
        if (this.props.data){
            employees = this.props.data;
        }

        // select emails that have the typed email text
        let emailFieldContent = this.state.emailFieldContent;
        let matchingEmployees = []
        employees.forEach(
            (eachEmployee) => {
                const workEmail = eachEmployee.workEmail;
                if (workEmail){
                    if(workEmail.includes(emailFieldContent) && emailFieldContent !== ''){
                        console.log(workEmail)
                        matchingEmployees.push(workEmail);
                    }
            }
        }
        );

        let somemails = matchingEmployees.splice(0, 5);
        this.emails = somemails;

        return(
            <>
                <div className='input-label'>
                    Email
                </div>
                {/* <div className='input-field' contenteditable='true' onChange={(e) => this.texChange(e)}>
                </div> */}
                <input name='input-email' onChange={this.textChange} className='input-field' />
                {this.renderChoiceBox()}
            </>
        )
    }

    render() {
        return (
        <div className='query-section'>
            <div className='email-input-container'>
                {this.renderEmailField()}
            </div>
        </div>
        );
    }
}