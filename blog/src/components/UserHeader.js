import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.userId);
  }

  /*   
  renderUsers() {
    this.props.users.map((user) => {
      return <div>{user.username}</div>;
    });   
  }
 */
  render() {
    //const user = this.props.users.find((user) => user.id === this.props.userId);
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, {
  fetchUsers,
})(UserHeader);
