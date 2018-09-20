import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../actions/loginActions';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser(this.props.history);
  }

  render() {
    return <div>Sorry to see you go...</div>;
  }
}

export default connect(null, loginActions)(Signout);
