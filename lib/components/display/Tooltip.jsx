import { alpha, styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import { Tooltip as MuiTooltip } from "@mui/material";
import PropTypes from "prop-types";

const Tooltip = styled(({ className, active = true, ...props }) => {
  return active ? (
    <MuiTooltip
      arrow
      placement="bottom"
      leaveDelay={500}
      disableFocusListener
      {...props}
      classes={{ popper: className }}
    />
  ) : (
    props.children
  );
})(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.getContrastText(theme.palette.background.paper),
    minWidth: 200,
    maxWidth: "none",
    justify: "center",
    textAlign: "center",
    fontSize: theme.typography.pxToRem(12),
    border: `1px solid ${theme.palette.divider}`,
  },
  [`& .${tooltipClasses.arrow}`]: {
    // backgroundColor: theme.palette.background.paper,
    color: alpha(theme.palette.primary.main, 0.6),
  },
}));
Tooltip.propTypes = {
  className: PropTypes.any,
  active: PropTypes.bool,
  title: PropTypes.node,
  placement: PropTypes.string,
};
export default Tooltip;
