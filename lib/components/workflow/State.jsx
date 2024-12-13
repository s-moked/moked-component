import { forwardRef } from "react";
import { useTheme } from "@mui/styles";
import PropTypes from "prop-types";
import _ from "lodash";
import { alpha } from "@mui/material/styles";
import { Chip } from "@mui/material";
import clsx from "clsx";

const State = forwardRef(({ stateObject, className, ...otherProps }, ref) => {
  const theme = useTheme();
  const tag = _.get(stateObject, "tag", "OPEN");
  const label = _.get(stateObject, "label");

  if (!stateObject || !tag || !label) {
    return null;
  }
  const color = _.get(theme, `tags.${tag}`);
  return (
    <Chip
      ref={ref}
      className={clsx("state-chip font-semibold text-12", className)}
      label={label}
      sx={{
        borderRadius: 1,
        color: theme.palette.getContrastText(color),
        backgroundColor: alpha(color, 0.5),
      }}
      size="small"
      {...otherProps}
    />
  );
});
State.displayName = "State";
State.propTypes = {
  stateObject: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    tag: PropTypes.oneOf([
      "OPEN",
      "WIP",
      "WARNING",
      "DONE",
      "CANCEL",
      "ARCHIVE",
    ]),
  }),
  className: PropTypes.string,
};
export default State;
