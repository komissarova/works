import React, { Component } from 'react'
import { connect } from "react-redux";

import UserProfile from '../components/User';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    return (
      <div>
        {this.props.user ? <UserProfile {...this.props.user} /> : null}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user.user.find(user => user.id === +ownProps.params.userId)
  }
}

export default connect(mapStateToProps)(User);
