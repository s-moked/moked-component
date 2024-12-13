import { darken, lighten } from "@mui/material/styles";
import { createTheme } from "@mui/material";

const light = createTheme({
  label: "Pastel grey",
  palette: {
    mode: "light",
    divider: "rgba(149, 156, 169, 0.12)",
    text: {
      primary: "rgb(17, 24, 39)",
      secondary: "rgb(107, 114, 128)",
      disabled: "rgb(149, 156, 169)",
    },
    primary: {
      light: lighten("#ffb703", 0.3),
      main: lighten("#ffb703", 0.3),
      dark: darken("#ffb703", 0.3),
    },
    secondary: {
      light: lighten("#1B4459", 0.3),
      main: lighten("#1B4459", 0.3),
      dark: darken("#1B4459", 0.3),
    },
    background: {
      // paper: darken('#FAF6F3', 0.2),
      paper: "#ecf4f9",
      default: "#fff", // #F1F1F1',
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
export default light;
