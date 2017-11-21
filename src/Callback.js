import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as authActions from "./actions/authActions";

class Callback extends Component {
  render() {
    const bearerToken = localStorage.getItem("access_token");
    const idToken = localStorage.getItem("id_token");
    const user = { bearerToken: bearerToken, idToken: idToken };
    this.props.authActions.receiveLogin(user);
    return <div>Loading...</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Callback);
