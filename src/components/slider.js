import React from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";

function SliderWithToolTip(props) {
  const SliderWithTooltip = createSliderWithTooltip(Slider);
  return (
    <SliderWithTooltip
      tipFormatter={percentFormatter}
      min={0}
      max={100}
      step={1}
      onChange={props.onChange}
      onAfterChange={props.onAfterChange}
      defaultValue={props.value}
      included={true}
      //value={props.value}
    />
  );
}

export default SliderWithToolTip;

function percentFormatter(v) {
  return `${v} %`;
}
