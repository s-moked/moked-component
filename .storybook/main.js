/** @type { import('@storybook/react-vite').StorybookConfig } */

async function viteFinal(config) {
    // Ajoute l'externalisation
    config.build = config.build || {};
    config.build.rollupOptions = config.build.rollupOptions || {};
    config.build.rollupOptions.external = [
        ...(config.build.rollupOptions.external || []),
        "pdfjs-dist/build/pdf.worker.min.mjs",
    ];

    // Ajoute un alias pour résoudre les imports
    config.resolve = config.resolve || {};
    config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "pdfjs-dist/build/pdf.worker.min.js": require.resolve(
            "pdfjs-dist/build/pdf.worker.min.mjs",
        ),
    };

    return config;
}

const config = {
    stories: [
        "../lib/**/*.mdx",
        "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../tailwind.config.js",
    ],
    addons: [
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-themes",
        "@storybook/addon-actions",
        "@storybook/addon-docs",
        "storybook-addon-react-docgen",
        "storybook-addon-tailwind-autodocs",
    ],
    // core: {
    //   builder: "webpack5",
    // },
    framework: "@storybook/react-vite",
    staticDirs: ["../public"],
    viteFinal,
};
export default config;
