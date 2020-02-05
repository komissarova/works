import React, { Component } from 'react';
import UsersList from '../components/UsersList';

import { connect } from 'react-redux';
import { fetchUsers } from "../actions/usersActions";

 class Users extends Component {
  
  render() {
    const { users } = this.props;
    return (
      <div>
        {
          (!this.props.children) ?
            (<UsersList users={users}/>)
            :
            (this.props.children)
        }
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.user,
  }
}

export default connect(mapStateToProps)(Users);

