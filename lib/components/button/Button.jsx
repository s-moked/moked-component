import { forwardRef } from "react";
import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  ucFirst: {
    textTransform: "lowercase",
    "&:first-letter": {
      textTransform: "uppercase",
    },
  },
}));

const Button = forwardRef((props, ref) => {
  const {
    children,
    color = "primary",
    ucFirst = true,
    className,
    sx,
    fullWidth = true,
    variant = "contained",
    size = "small",
    ...otherProps
  } = props;
  const classes = useStyles();
  return (
    <MuiButton
      ref={ref}
      sx={{ borderRadius: 1, sx }}
      className={clsx("px-8 py-1", className)}
      data-test="button"
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      color={color}
      {...otherProps}
    >
      {ucFirst ? (
        <p className={classes.ucFirst}>{children}</p>
      ) : (
        <p>{children}</p>
      )}
    </MuiButton>
  );
});
Button.displayName = "Button";
Button.propTypes = {
  color: PropTypes.oneOf(["inherit", "primary", "secondary", "default"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  ucFirst: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  startIcon: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  sx: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
