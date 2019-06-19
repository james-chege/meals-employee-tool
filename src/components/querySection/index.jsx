import React, {Component} from 'react';
import './querySection.scss';

export class QuerySection extends Component {

    state = {
        selectedEmployee: {
        }
    }

    emails = [];
    visibility;
    employees;

    // render details of employee with selected email from the dropdown
    searchEmployeeWithSelectedEmail = (emailSelected) => {
        const employeeDetails = this.employees.find(
            (eachEmployee) => (eachEmployee.workEmail === emailSelected)
        )
        this.setState(() => ({selectedEmployee: employeeDetails}))
        return(
            <></>
        )
    }


    // function executed after user has clicked on a choice on the dropdown
    onClickDropdownChoice = (e) => {
        this.visibility = 'hidden';
        let emailSelected = e.target.innerText;
        this.setState(() => ({ emailFieldContent: emailSelected }));
        this.searchEmployeeWithSelectedEmail(emailSelected);
    }

    // render the dropdown after user has typed
    renderChoiceBox (){
        const { emailFieldContent } = this.state;
        if (this.emails.length === 0 || emailFieldContent === this.emails[0]) {
            this.visibility = 'hidden';
        }
        else {
            this.visibility = 'display';
        }

        return(
        <div className={`choice-box-${this.visibility}`}>
            {this.emails.map( (emailItem, index) => (
                <div className='email-item' key={index} onClick={this.onClickDropdownChoice}> {emailItem} </div>
            ) )}
        </div>
        )
    }

    textChange = (e) => {
        const {target: {value}} = e;
        this.setState(() => ({emailFieldContent: value}));
    }

    renderEmailField (){
        if (this.props.data){
            this.employees = this.props.data;
        }

        // select emails that have the typed email text
        let emailFieldContent = this.state.emailFieldContent;
        let matchingEmployees = []
        this.employees.forEach(
            (eachEmployee) => {
                const workEmail = eachEmployee.workEmail;
                if (workEmail){
                    if(workEmail.includes(emailFieldContent) && emailFieldContent !== ''){
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
                <input placeholder='type email' name='input-email' onChange={this.textChange} className='input-field' value={this.state.emailFieldContent} />
                {this.renderChoiceBox()}
            </>
        )
    }

    renderPersonalDetails (selectEmployee){
        return(
        <div className='employee-details-container personal-details'>

            <div className="detail-item">
                <div className="avatar">
                </div>
            </div>

            <div className="detail-item">
                <div className="detail-item-title">
                    Name
                </div>
                <div className="employee-name detail-item-value">
                    <div style={{display: 'inline-block', margin: 2}}>{selectEmployee.firstName}</div>
                    <div style={{display: 'inline-block', margin: 2}}>{selectEmployee.lastName}</div>
                </div>
            </div>

            <div className="detail-item">
                <div className="detail-item-title">
                    User type
                </div>
                <div className="type detail-item-value">
                    {selectEmployee.type}
                </div>
            </div>

        </div>
        )
    }

    renderWorkDetails (selectEmployee){
        return (
        <div className="employee-details-container work-details">
            <div className="detail-item">
                <div className="detail-item-title">
                    Department
                </div>
                <div className="department detail-item-value">{selectEmployee.department}</div>
            </div>
            <div className="detail-item">
                <div className="detail-item-title">Division</div>
                <div className="division detail-item-value">{selectEmployee.division}</div>
            </div>
            <div className="detail-item">
                <div className="detail-item-title">Job Title</div>
                <div className="job-title detail-item-value">{selectEmployee.jobTitle}</div>
            </div>
        </div>
        )
    }

    renderMealsDetails (selectEmployee){
        return (
            <div className="employee-details-container meals-details">
                <div className="detail-item">
                    <div className="detail-item-title">
                        Email
                    </div>
                    <div className="department detail-item-value email-value">{selectEmployee.workEmail}</div>
                </div>
                <div className="detail-item">
                    <div className="detail-item-title ">Bamboo Id</div>
                    <div className="division detail-item-value bamboo-value">{selectEmployee.bambooId}</div>
                </div>
                <div className="detail-item">
                    <div className="detail-item-title">Issued Card</div>
                    <div className="job-title detail-item-value">{`${selectEmployee.hasCard}`}</div>
                </div>
            </div>
            )
    }

    render() {
        const selectEmployee = this.state.selectedEmployee;
        console.log(this.state.selectedEmployee);
        return (
        <div className='main-section'>
            <div className='query-section'>
                <div className='email-input-container'>
                    {this.renderEmailField()}
                </div>
            </div>
            <div className='employee-details'>
                {this.renderPersonalDetails(selectEmployee)}
                {this.renderWorkDetails(selectEmployee)}
                {this.renderMealsDetails(selectEmployee)}
            </div>
        </div>
        );
    }
}
