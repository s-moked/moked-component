import _ from "lodash";

export const stopPropagation = (event) => {
  if (event && _.isFunction(event.stopPropagation)) {
    event.stopPropagation();
  }
};

export const longFloatOrZero = (data) =>
  data ? parseFloat(parseFloat(data).toFixed(6)) : 0;
export const floatOrZero = (data) =>
  data ? parseFloat(parseFloat(data).toFixed(6)) : 0;
export const floatOrNull = (data) =>
  data ? parseFloat(parseFloat(data).toFixed(6)) : null;

export const decimalToPercent = (data) =>
  (longFloatOrZero(data) * 100).toFixed(6);
export const percentToDecimal = (data) => longFloatOrZero(data) / 100;
