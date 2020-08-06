import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

function Login(props) {
  const { isAuthenticated, login, logout } = props.auth;
  return (
    <div className="login-nav text-center">
      <Navbar dark>
        <NavbarBrand>
          <span href="#">Hand Range Memorizer</span>
        </NavbarBrand>
        <Nav pullRight>
          {isAuthenticated() && (
            <UncontrolledDropdown
              nav
              inNavbar
              id="user-info-dropdown"
              title="Supreme Leader"
            >
              <DropdownToggle nav caret></DropdownToggle>
              <DropdownMenu>
                <DropdownItem>My Profile</DropdownItem>
                <DropdownItem>My Account</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
          {!isAuthenticated() && (
            <Button bsStyle="primary" className="btn-margin" onClick={login}>
              Log In
            </Button>
          )}
          {isAuthenticated() && (
            <Button
              bsStyle="primary"
              className=" primary btn-margin"
              onClick={logout}
            >
              Log Out
            </Button>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Login;
