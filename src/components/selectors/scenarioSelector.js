import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";

const { Option } = Select;

function ScenarioSelector(props) {
  const { scenarios, onChange } = props;
  const scenarioOptions = scenarios.map((scenario) => {
    return <Option key={scenario.id}>{scenario.name}</Option>;
  });
  return (
    <Select
      allowClear
      mode="multiple"
      style={{ width: "100%" }}
      placeholder="Please select"
      defaultValue={[]}
      onChange={onChange}
    >
      {scenarioOptions}
    </Select>
  );
}

export default ScenarioSelector;
