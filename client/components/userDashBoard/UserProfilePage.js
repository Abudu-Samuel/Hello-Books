
import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import { connect } from 'react-redux'

import Footer from '../common/Footer';
import UserProfileHeader from '../userDashBoard/UserProfileHeader';
import UserProfileSidePanel from '../userDashBoard/UserProfileSidePanel';
import UserBorrowedBookList from '../userDashBoard//UserBorrowedBookList';
import { getUser } from '../../helpers/utils';

/**
 * 
 * 
 * @class UserProfilePage
 * @extends {Component}
 */
class UserProfilePage extends Component {
  /**
   * Creates an instance of UserProfilePage.
   * @param {any} props 
   * @memberof UserProfilePage
   */
  constructor(props) {
    super(props)
  }
  /**
   * 
   * 
   * @returns {object} void
   * @memberof UserProfilePage
   */
  render () {
    const user = getUser();
    // const { courses } = this.props;
    return (
      <div>
        <header>
          <UserProfileHeader user={user}/>
        </header>
        <div className="row ">
            <UserProfileSidePanel user={user}/>
            <div className="col s12 m8">
              <UserBorrowedBookList />
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default UserProfilePage;