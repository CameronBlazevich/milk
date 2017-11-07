import React from "react";
import { NOTIFICATION_TYPE_SUCCESS } from "react-redux-notify";

export const handRangeUpdateSuccessNotification = {
  message: "Hand Range updated!",
  type: NOTIFICATION_TYPE_SUCCESS,
  duration: 2000,
  canDimiss: true,
  icon: <i className="fa fa-check" />
};
