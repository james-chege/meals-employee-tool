import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  fetchAllEmployeesAction
} from '../../redux/actionCreators/employeeActions';
import {
  updatePasswordAction
} from '../../redux/actionCreators/authActions';
import './querySection.scss';
import refreshImg from '../../assets/reload-icon.png';

export class QuerySection extends Component {
  constructor(props) {
    super(props);
    this.syncBtnRef = React.createRef();
  }

  state = {
    selectedEmployee: {},
    firstName: '',
    lastName: ''
  };

  results = [];
  visibility;
  employees;

  // render details of employee with selected email from the dropdown
  searchSelectedEmployee = (emailSelected) => {
    const employeeDetails = this.props.employees.find(({workEmail}) =>
      (workEmail === emailSelected)
    );
    this.setState(() => ({selectedEmployee: employeeDetails}));
    return (
      <></>
    )
  };

  // function executed after user has clicked on a choice on the dropdown
  onClickDropdownChoice = (e) => {
    this.visibility = 'hidden';
    let selected = e.target.innerText;
    this.setState(() => ({search: selected}));
    this.searchSelectedEmployee(selected);
  };

  render() {
    const selectEmployee = this.state.selectedEmployee;
    this.getMatchingEmployees();
    return (
      <div className='main-section'>
        <div className='query-section'>
          <div className='search-container'>
            {this.renderSearchField()}
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

  // render the dropdown after user has typed
  renderChoiceBox() {
    const {search} = this.state;
    if (this.results.length === 0 || search === this.results[0]) {
      this.visibility = 'hidden';
    } else {
      this.visibility = 'display';
    }

    return (
      <div className={`choice-box-${this.visibility}`}>
        {this.results.map((email, index) => (
          <div className='search-item' key={index} onClick={this.onClickDropdownChoice}> {email} </div>
        ))}
      </div>
    )
  }

  onChange = (e) => {
    this.setState({...this.state, [e.target.name]: e.target.value});
  };

  onPasswordChange = (event) => {
    const {updatePasswordAction} = this.props;

    const {value} = event.target;
    updatePasswordAction(value);
  };

  onSync = () => {
    // this.passInputRef.current.style = 'background-color: blue';
    this.syncBtnRef.current.blur();
    const {fetchAllEmployeesAction} = this.props;
    fetchAllEmployeesAction();
  }

  getMatchingEmployees = () => {
    // select emails that have the typed email text
    const {search} = this.state;

    let matchingEmployees = [];
    const searchVal = search ? search.toLowerCase() : search;
    const searchParams = ['firstName', 'lastName', 'workEmail', 'bambooId'];

    this.props.employees.forEach((employee) => {
        searchParams.forEach(param => {
          const value = employee[param];

          if (searchVal && value && value.toLowerCase().includes(searchVal)) {
            const {workEmail} = employee;

            if (matchingEmployees.indexOf(workEmail) < 0)
              matchingEmployees.push(workEmail);
          }
        });
      }
    );

    this.results = matchingEmployees.splice(0, 5);
  }

  getSyncStatus = () => {
    const {isFetching, success, fetchedAtLeastOnce} = this.props;

    let message;

    if (!fetchedAtLeastOnce) {
      message = 'Enter password and sync employees'
    } else if (isFetching) {
      message = 'Please wait: Syncing employee data';
    } else if (success) {
      message = 'Success: You can now search for employees'
    } else {
      message = 'Failed: Check password and try again'
    }

    return message;
  };

  renderSearchField() {
    return (
      <>
        <div>
          <label>{this.getSyncStatus()}</label>
        </div>
        <div className='auth-sync-section'>
          <input
            type={'password'}
            placeholder={'Password'}
            onChange={this.onPasswordChange}
          />
          <button
            ref={this.syncBtnRef}
            title='Sync employees'
            type={'button'}
            onClick={this.onSync}
          >
            <img src={refreshImg} alt='Sync'/>
          </button>
        </div>
        <input
          placeholder='Email, FirstName, LastName or BambooId'
          name='search'
          onChange={this.onChange}
          className='search-field'
          value={this.state.search}
        />
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
}

const mapDispatchToProps = {
  fetchAllEmployeesAction,
  updatePasswordAction,
}

const mapStateToProps = (
  {employee: {all: employees, isFetching, success, fetchedAtLeastOnce}}
) => ({
  employees,
  isFetching,
  success,
  fetchedAtLeastOnce,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuerySection)
