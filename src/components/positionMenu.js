import React from "react";
import { Panel, Nav, NavItem } from "react-bootstrap";

function PositionMenu(props) {
  const navItems = props.positions.map(position => (
    <NavItem key={position.id} eventKey={position.id}>
      {position.description}
    </NavItem>
  ));
  return (
    <Panel header="Position">
      <Nav
        bsStyle="pills"
        stacked
        activeKey={props.selectedPositionId}
        onSelect={props.onSelect}
      >
        {navItems}
      </Nav>
    </Panel>
  );
}

export default PositionMenu;
