import React from "react";
import { Panel, Nav, NavItem } from "reactstrap";

function HandRangeMenu(props) {
  const navItems = props.handRanges.map((handRange) => (
    <NavItem key={handRange.id} eventKey={handRange.id}>
      {handRange.displayName}
    </NavItem>
  ));
  return (
    <Panel header="Hand Range To Display">
      <Nav
        bsstyle="pills"
        activeKey={props.selectedHandRangeId}
        onSelect={props.onSelect}
      >
        {navItems}
      </Nav>
    </Panel>
  );
}

export default HandRangeMenu;
