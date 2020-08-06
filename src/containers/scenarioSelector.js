import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as scenarioActions from "../actions/scenarioActions";
import * as positionActions from "../actions/positionActions";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../ScenarioPage.css";

class ScenarioSelector extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  handlePositionClick = (clickedCompositeKey) => {
    this.props.positionActions.positionSelectedForEdit(clickedCompositeKey);
  };

  renderPositionSelector = () => {
    const { SubMenu } = Menu;
    const { scenarios } = this.props;
    const scenarioMenuGroups = scenarios.map((scenario) => {
      const situationSubMenus = scenario.situations.map((situation) => {
        const positionMenuItems = situation.positions.map((position) => {
          return (
            <Menu.Item key={`${scenario.id}-${situation.id}-${position.key}`}>
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
          const scenarioId = splitKey[0];
          const situationId = splitKey[1];
          const positionKey = splitKey[2];

          const selectedPositionCompositeKey = {
            scenarioId,
            situationId,
            positionKey,
          };

          //DISPATCH THIS INFO
          this.handlePositionClick(selectedPositionCompositeKey);
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

  render() {
    return <div>{this.renderPositionSelector()}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // selectedHands: state.selectedHands,
    // handRanges: state.handRanges,
    // positions: state.positions,
    // selectedPositionId: state.selectedPositionId,
    // mode: state.mode,
    // quizResults: state.quizResults,
    // sliderValue: state.sliderValue,
    auth: state.auth,
    isLoading: state.isLoading,
    scenarios: state.scenarios,
    selectedPositionCompositeKey: state.selectedPositionCompositeKey,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    scenarioActions: bindActionCreators(scenarioActions, dispatch),
    positionActions: bindActionCreators(positionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioSelector);
