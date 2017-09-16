import React from "react";
import { Nav, NavItem } from "react-bootstrap";

function PositionMenu(props) {
  const navItems = props.positions.map(position => (
    <NavItem key={position.id} eventKey={position.id}>
      {position.description}
    </NavItem>
  ));
  return (
    <Nav
      bsStyle="pills"
      stacked
      activeKey={props.selectedPositionId}
      onSelect={props.onSelect}
    >
      {navItems}
    </Nav>
  );
}

export default PositionMenu;
