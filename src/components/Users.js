import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        Users!
        <ul>
          {this.props.users.map(u => <li>{u.username}</li>)}
        </ul>
        <h2>{this.props.userCount} users in the store</h2>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {users: state.users, userCount: state.userCount}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
