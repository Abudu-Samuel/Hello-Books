import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import { connect } from 'react-redux'
import { Redirect } from 'react-router';


import BookList from '../adminDashBoard/BookList';
import BookBorrow from '../adminDashBoard/BookBorrow';
import BookReturn from '../adminDashBoard/BookReturn';
import Footer from '../common/Footer';
import { getUser } from '../../helpers/utils';


/**
 * 
 * 
 * @class AdminDashBoard
 * @extends {Component}
 */
class AdminDashBoard extends Component {
  /**
   * Creates an instance of AdminDashBoard.
   * @param {any} props 
   * @memberof AdminDashBoard
   */
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }

  }

  /**
   * @returns {Object} User status
   * 
   * @memberof AdminDashBoard
   */
  componentWillMount() {
    const user = getUser();
    const { role }  = user 
    role === 'normal' ? this.setState({ redirect: true })  : null
  }
  /**
   * 
   * 
   * @returns {object} admin board
   * @memberof AdminDashBoard
   */
  render () {
  // console.log(this.props)
    const { redirect } = this.state;
    const user = getUser();
    return (
      redirect ? <Redirect to='/allbooks'/> : 
      <div>
        <header>
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <a href="index.html" className="brand-logo left adjust">HelloBooks</a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/addbook">Add book</Link></li>
                {/* <li><a href="favorite.html">Favorite Books</a></li> */}
                  {/* <!-- <i className="material-icons prefix">notifications</i> --> */}
                  <li><a href="notifications.html">Notifications<span className="new badge red">4</span></a></li>
                  <li><a className="dropdown-button" href="#" data-activates="dropdown1">{user.username}<i className="material-icons right">arrow_drop_down</i></a>
                    {/* <!-- Dropdown Structure --> */}
                    <ul id="dropdown1" className="dropdown-content">
                      <li><a href="profile.html"><i className="material-icons ">account_box</i>Profile</a></li>
                      <li><a href="#!">Terms and Condition</a></li>
                      <li className="divider"></li>
                      <li><a href="signin.html"><i className="material-icons ">lock</i>Log Out</a></li>
                    </ul>
                    </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <div className="row ">
          <div className="col s12 m9">
              <div className="card-panel">
                  <div className="row">
                      <div className="col s12">
                        <ul className="tabs">
                          <li className="tab col s4"><a className="active" href="#allbooks">Book List</a></li>
                          <li className="tab col s4"><a href="#accept">Borrow Request</a></li>
                          <li className="tab col s4"><a href="#return">Return Request</a></li>
                          {/* <li className="tab col s3"><a href="#edit">Edit Book</a></li> */}
                        </ul>
                      </div>
                      <BookList />
                      <BookBorrow />
                      <BookReturn />
                      <ul className="pagination  center-align">
                        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="active"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!">3</a></li>
                        <li className="waves-effect"><a href="#!">4</a></li>
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="col s12 m3  profile-bio ">
            <div className="card-panel responsive-table">
              <table className="bordered centered highlight ">
                <thead>
                  <tr>
                    <th>Categories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="notifications.html">Finance<span className="new badge red">4</span></a></td>
                  </tr>
                  <tr>
                    <td><a href="notifications.html">Engineering<span className="new badge red">4</span></a></td>
                  </tr>
                  <tr>
                    <td><a href="notifications.html">Afrincan Literature<span className="new badge red">4</span></a></td>
                  </tr>
                  <tr>
                    <td><a href="notifications.html">Children<span className="new badge red">4</span></a></td>
                  </tr>
                  <tr>
                    <td><a href="notifications.html">Law<span className="new badge red">4</span></a></td>
                  </tr>
                  <tr>
                    <td><a href="notifications.html">Business<span className="new badge red">4</span></a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminDashBoard;
// const mapStateToProps = (state) => {
//   return {
//     allbooks: state.borrowReducer.allbooks,
//   };
// };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     fetchAllBooks: () => dispatch(fetchAllBooks())
// //   };
// // };

// export default connect(mapStateToProps, null)(AdminDashBoard);