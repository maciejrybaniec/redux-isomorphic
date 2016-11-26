import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

@connect(mapStateToProps)
class Users extends Component {         
    render() {
        const { users } = this.props;
        return (
            <div className="Users">
                {users.map((user) => {
                    return (
                        <li key={user}>{user}</li>
                    );
                })}
            </div>
        );
    }
}

export default Users;
