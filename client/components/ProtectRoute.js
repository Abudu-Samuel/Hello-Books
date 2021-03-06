import React, { Component } from 'react'
import toastMessage from '../helpers/toastMessage';


/**
 * 
 * 
 * @class ProtectRoute
 * @extends {Component}
 */
class ProtectRoute extends Component {
  /**
   * Creates an instance of ProtectRoute.
   * @param {any} props 
   * @memberof ProtectRoute
   */
  constructor(props){
    super(props)
  }

  /**
   * @returns {void}
   * 
   * @memberof ProtectRoute
   */
  componentWillMount() {
    const token = localStorage.getItem('token');
    if ( !token ) {
      this.props.history.replace('/signin');
      toastMessage(' Please login to access this route', 'failure')
    }
  }
}


export default ProtectRoute;