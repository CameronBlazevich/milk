import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../../ScenarioPage.css";
import "antd/dist/antd.css";

class PositionSelector extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  renderPositionSelector = () => {
    const { SubMenu } = Menu;
    const { scenarios } = this.props;
    const scenarioMenuGroups = scenarios.map((scenario) => {
      const situationSubMenus = scenario.situations.map((situation) => {
        const positionMenuItems = situation.positions.map((position) => {
          return (
            <Menu.Item key={`${scenario.id}-${situation.id}-${position.id}`}>
              {position.key}
            </Menu.Item>
          );
        });

        return (
          <SubMenu
            title={situation.displayName}
            key={`${scenario.id}-${situation.id}`}
          >
            {positionMenuItems}
          </SubMenu>
        );
      });

      return (
        <Menu.ItemGroup title={scenario.displayName} key={`${scenario.id}`}>
          {situationSubMenus}
        </Menu.ItemGroup>
      );
    });

    const menu = (
      <Menu
        onClick={({ item, key }) => {
          const splitKey = key.split("-");
          const scenarioId = parseInt(splitKey[0]);
          const situationId = parseInt(splitKey[1]);
          const positionId = parseInt(splitKey[2]);

          const selectedPositionCompositeKey = {
            scenarioId,
            situationId,
            positionId,
          };

          //DISPATCH THIS INFO
          this.props.onItemSelect(selectedPositionCompositeKey);
        }}
      >
        {scenarioMenuGroups}
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Select Scenario <DownOutlined />
        </a>
      </Dropdown>
    );
  };

  renderSelectedPosition = () => {
    if (!this.props.selectedPositionKey) {
      return null;
    }

    const scenario = this.props.scenarios.find(
      (s) => s.id === this.props.selectedPositionKey.scenarioId
    );

    const situation = scenario.situations.find(
      (s) => s.id === this.props.selectedPositionKey.situationId
    );

    const position = situation.positions.find(
      (p) => p.id === this.props.selectedPositionKey.positionId
    );

    return (
      <div>
        <div>Scenario: {scenario.displayName}</div>
        <div>Situation: {situation.displayName}</div>
        <div>Position: {position.key}</div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderSelectedPosition()}
        {this.renderPositionSelector()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    isLoading: state.isLoading,
    scenarios: state.scenarios,
    selectedPositionKey: state.selectedPositionKey,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionSelector);
