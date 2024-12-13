import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useTheme } from "@mui/styles";
import { List, ListItemButton, ListItemIcon } from "@mui/material";
import { alpha } from "@mui/material/styles";
import _ from "lodash";
import Button from "./Button.jsx";

SplitButton.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.node,
      onClick: PropTypes.func,
      icon: PropTypes.string,
      primary: PropTypes.bool,
    }),
  ),
};
export default function SplitButton(props) {
  const { buttons } = props;

  const primaryButtons = [];
  const secondaryButtons = [];

  let hasPrimary = false;
  _.forEach(buttons, ({ primary, ...btn }) => {
    if (primary) {
      primaryButtons.push(btn);
      hasPrimary = true;
    } else {
      secondaryButtons.push(btn);
    }
  });

  if (!hasPrimary) {
    primaryButtons.push(_.first(secondaryButtons));
  }

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const {
    palette: { primary, secondary, mode },
  } = useTheme();
  const isLight = mode === "light";

  if (_.isEmpty(buttons)) {
    return null;
  }
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const buttonsWidth = anchorRef.current?.offsetWidth;

  return (
    <>
      <ButtonGroup
        sx={{
          "& .MuiButton-root": {
            padding: `1px 12px`,
          },
        }}
        size="small"
        variant="contained"
        ref={anchorRef}
        className="shadow-0"
      >
        {_.map(primaryButtons, ({ className, icon, ...btnProps }, key) => (
          <Button
            key={key}
            {...btnProps}
            className={clsx(className, "whitespace-nowrap")}
            startIcon={icon}
          />
        ))}
        <Button fullWidth={false} onClick={handleToggle}>
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 999 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              zIndex: 99,
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper
              sx={{
                zIndex: 99,
                borderRadius: 1,
                padding: 0,
                minWidth: `${buttonsWidth}px`,
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  sx={{
                    "& .MuiListItemIcon-root": {
                      minWidth: 0,
                      marginRight: 1,
                    },
                    "& .MuiListItemButton-root": {
                      paddingY: 0.5,
                      paddingX: 2,
                      "&:hover": {
                        backgroundColor: alpha(
                          isLight ? primary.main : secondary.main,
                          0.4,
                        ),
                        cursor: "pointer",
                      },
                    },
                  }}
                  dense
                  className="w-full flex flex-col space-y-2 items-start"
                >
                  {_.map(
                    secondaryButtons,
                    (
                      { className, icon, onClick, children, ...btnProps },
                      key,
                    ) => (
                      <ListItemButton
                        key={key}
                        onClick={(event) => {
                          if (_.isFunction(onClick)) {
                            onClick(event);
                          }
                          setOpen(false);
                        }}
                        {...btnProps}
                        variant="text"
                        className={clsx(
                          className,
                          "w-full whitespace-nowrap flex justify-start hover:cursor-pointer",
                        )}
                      >
                        <ListItemIcon>{icon}</ListItemIcon>
                        {children}
                      </ListItemButton>
                    ),
                  )}
                </List>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
