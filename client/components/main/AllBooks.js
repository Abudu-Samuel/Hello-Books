import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux'

// import inputValidator from '../../helpers/inputValidator'
import Header from '../common/Header';
import Footer from '../common/Footer';
import BookCard from '../common/BookCard'
import { fetchAllBooks } from '../../actions/bookAction';
import { getUser } from '../../helpers/utils';
import { logout } from '../../actions/userAction';
import ProtectRoute from '../ProtectRoute';

/**
 * 
 * 
 * @export
 * @class AllBooks
 * @extends {Component}
 */
class AllBooks extends ProtectRoute {
  /**
   * Creates an instance of AllBooks.
   * @param {any} props 
   * @memberof AllBooks
   */
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  /**
   * 
   * 
   * @memberof AllBooks
   * @returns {Array} books array
   */
  componentWillMount() {
    super.componentWillMount();
    this.props.fetchAllBooks();
  }

  /**
   * @returns {object} redirects to home page
   * 
   * @memberof AllBooks
   */
  handleLogout() {
    this.props.logout();
  }


  /**
   * 
   * 
   * @returns {Object} object containing user detail
   * @memberof AllBooks
   */
  render () { 
    const { books, } = this.props;
    const user = getUser();
    return (
      <div>
        <header>
          <div className="navbar-fixed">
              <nav>
                  <div className="nav-wrapper">
                      <a href="index.html" className="brand-logo left adjust">HelloBooks</a>
                      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                      
                      <ul id="nav-mobile" className="right hide-on-med-and-down">
                          { user.role === 'admin' ? <li><Link to="/admindashboard">Admin DashBoard</Link></li> : null }
                          { user.role === 'admin' ? <li><Link to="/addbook">Add book</Link></li> : null }
                          {/* <!-- <i className="material-icons prefix">notifications</i> --> */}
                          <li><a className="dropdown-button" href="#" data-activates="dropdown2">Categories<i className="material-icons right">arrow_drop_down</i></a>
                              {/* <!-- Dropdown Structure --> */}
                              <ul id="dropdown2" className="dropdown-content">
                                  
                                  <li><a href="notifications.html">Finance</a></li>
                                  <li><a href="notifications.html">Engineering</a></li>
                                  <li><a href="notifications.html">African Literature</a></li>
                                  <li><a href="notifications.html">Children</a></li>
                                  <li><a href="notifications.html">Law</a></li>
                                  <li><a href="notifications.html">Business</a></li>
                              </ul>
                          </li>
                          <li><a className="dropdown-button" data-activates="dropdown1">{ user.username }<i className="material-icons right">arrow_drop_down</i></a>
                              {/* <!-- Dropdown Structure --> */}
                              <ul id="dropdown1" className="dropdown-content">
                                  <li><Link to="/favorite">Favorite Books</Link></li>
                                  <li><Link to="/profile"><i className="material-icons ">account_box</i>Profile</Link></li>
                                  <li><a href="#!">Terms and Condition</a></li>
                                  <li className="divider"></li>
                                  <li><Link to=""  onClick={this.handleLogout}><i className="material-icons ">lock</i>Log Out</Link></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
        </header>
        <div className="container">
          <div className="row ">
            <div className="section">
              <div className="row">
              {books.map((book, index) => {
                return <div key={index}><BookCard book={book}/></div>
              })}              
              </div>
            </div> 

          </div>
        </div>
        <Footer/> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooks()),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks);

