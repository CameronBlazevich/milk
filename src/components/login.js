import React from "react";
import { Navbar, Nav, NavDropdown, MenuItem, Button } from "react-bootstrap";

function Login(props) {
  const { isAuthenticated, login, logout } = props.auth;
  return (
    <div className="login-nav text-center">
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <span href="#">Hand Range Memorizer</span>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          {isAuthenticated() && (
            <NavDropdown title="Supreme Leader">
              <MenuItem>My Profile</MenuItem>
              <MenuItem>My Account</MenuItem>
            </NavDropdown>
          )}
          {!isAuthenticated() && (
            <Button bsStyle="primary" className="btn-margin" onClick={login}>
              Log In
            </Button>
          )}
          {isAuthenticated() && (
            <Button bsStyle="primary" className="btn-margin" onClick={logout}>
              Log Out
            </Button>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Login;
