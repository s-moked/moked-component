import React from "react";
import { MuiTelInput } from "mui-tel-input";
import PropTypes from "prop-types";

const PhoneField = React.forwardRef(
  ({ size = "small", value = "+33 ", ...props }, ref) => (
    <MuiTelInput
      size={size}
      continents={["EU"]}
      fullWidth
      {...props}
      ref={ref}
      defaultCountry={"FR"}
      value={value}
    />
  ),
);
PhoneField.displayName = "PhoneField";
PhoneField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium"]),
};
export default PhoneField;
