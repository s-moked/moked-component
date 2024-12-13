/** @type { import('@storybook/react').Preview } */
import "../lib/tailwind.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {withThemeFromJSXProvider} from "@storybook/addon-themes";

import withProviders from "./Provider.jsx";

import light from "../lib/theme/light.js";
import dark from "../lib/theme/dark.js";

// import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                light: light,
                dark: dark,
            },
            defaultTheme: "light",
            Provider: ThemeProvider,
            GlobalStyles: CssBaseline,
        }),
        withProviders,
    ],
    tags: ["autodocs"],
};

export default preview;
