import React, {Component, Fragment} from 'react';
import {Navbar} from './../../components/navBar';
import ConnectedQuerySection from './../../components/querySection';

export class Homepage extends Component {
  renderNavBar() {
    return (
      <Navbar/>
    );
  }

  renderQuerySection(data) {
    return (
      <ConnectedQuerySection/>
    )
  }

  render() {

    return (
      <div>
        <Fragment>
          {this.renderNavBar()}
          {this.renderQuerySection()}
        </Fragment>
      </div>
    )
  }
}

export default Homepage;
