import { darken, lighten } from "@mui/material/styles";
import { createTheme } from "@mui/material";

const dark = createTheme({
  label: "Dark",
  palette: {
    mode: "dark",
    divider: "rgba(149, 156, 169, 0.8)",
    text: {
      primary: "rgb(255,255,255)",
      secondary: "rgb(148, 163, 184)",
      disabled: "rgb(156, 163, 175)",
    },
    primary: {
      light: lighten("#ffb703", 0.3),
      main: lighten("#ffb703", 0.3),
      dark: darken("#ffb703", 0.3),
    },
    secondary: {
      light: lighten("#174f69", 0.2),
      main: "#174f69",
      dark: darken("#174f69", 0.2),
    },
    background: {
      paper: darken("#1B4459", 0.1),
      default: darken("#1B4459", 0.3),
    },
    error: {
      light: "#ffcdd2",
      main: "#f44336",
      dark: "#b71c1c",
    },
  },
  tags: {
    OPEN: "#2196f3",
    WIP: "#ffc107",
    WARNING: "#ff9800",
    DONE: "#4caf50",
    CANCEL: "#b22a00",
    ARCHIVE: "#9e9e9e",
  },
});
export default dark;
