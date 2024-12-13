import "./App.css";
import "./tailwind.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import PdfViewer from "./components/document/PdfViewer.jsx";
import light from "./theme/light.js";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <div
        className={
          "h-screen w-screen flex flex-col justify-center items-center"
        }
      >
        <CssBaseline />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <PdfViewer file={"assets/pdf-example.pdf"} fileName={"test"} />
      </div>
    </ThemeProvider>
  );
}
