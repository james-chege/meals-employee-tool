import React, {Component} from 'react';
import './querySection.scss';

export class QuerySection extends Component {

  state = {
    selectedEmployee: {},
    firstName: '',
    lastName: ''
  };

  emails = [];
  visibility;
  employees;

  // render details of employee with selected email from the dropdown
  searchEmployeeWithSelectedEmail = (emailSelected) => {
    const employeeDetails = this.employees.find(
      (eachEmployee) => (eachEmployee.workEmail === emailSelected)
    );
    this.setState(() => ({selectedEmployee: employeeDetails}));
    return (
      <></>
    )
  };


  // function executed after user has clicked on a choice on the dropdown
  onClickDropdownChoice = (e) => {
    this.visibility = 'hidden';
    let emailSelected = e.target.innerText;
    this.setState(() => ({email: emailSelected}));
    this.searchEmployeeWithSelectedEmail(emailSelected);
  };

  // render the dropdown after user has typed
  renderChoiceBox() {
    const {email} = this.state;
    if (this.emails.length === 0 || email === this.emails[0]) {
      this.visibility = 'hidden';
    } else {
      this.visibility = 'display';
    }

    return (
      <div className={`choice-box-${this.visibility}`}>
        {this.emails.map((emailItem, index) => (
          <div className='email-item' key={index} onClick={this.onClickDropdownChoice}> {emailItem} </div>
        ))}
      </div>
    )
  }

  onChange = (e) => {
    this.setState({...this.state, [e.target.name]: e.target.value});
  };

  renderEmailField() {
    if (this.props.data) {
      this.employees = this.props.data;
    }

    // select emails that have the typed email text
    const {email} = this.state;

    let matchingEmployees = [];
    const search = email ? email.toLowerCase() : email;
    const searchParams = ['firstName', 'lastName', 'workEmail', 'bambooId'];

    this.employees.forEach((employee) => {
        searchParams.forEach(param => {
          const value = employee[param];

          if (search && value && value.toLowerCase().includes(search)) {
            const {workEmail} = employee;

            if (matchingEmployees.indexOf(workEmail) < 0)
              matchingEmployees.push(workEmail);
          }
        });
      }
    );

    this.emails = matchingEmployees.splice(0, 5);

    return (
      <>
        <input placeholder='Email, FirstName, LastName or BambooId' name='email' onChange={this.onChange} className='input-field'
               value={this.state.email}/>
        {this.renderChoiceBox()}
      </>
    )
  }

  renderPersonalDetails(selectEmployee) {
    return (
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

  renderWorkDetails(selectEmployee) {
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

  renderMealsDetails(selectEmployee) {
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
