import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            // On définit nos points d’entrée
            input: {
                main: 'lib/index.js', // Pour les composants
                hook: 'lib/hook.js'   // Pour le(s) hook(s)
            },
            // On déclare comme externes les peerDependencies pour ne pas les inclure dans le bundle final
            external: [
                'react',
                'react-dom',
                '@mui/material',
                '@mui/icons-material',
                '@emotion/react',
                '@emotion/styled',
                'mui-tel-input',
                'react-pdf',
                'react-router-dom',
                'react-icons',
                'lodash'
            ],
            output: [
                // Sortie au format ES
                {
                    // On nomme les fichiers en fonction du point d’entrée
                    entryFileNames: (chunkInfo) =>
                        chunkInfo.name === 'hook' ? `hook.es.js` : `component.es.js`,
                    format: 'es',
                    dir: 'dist',
                    exports: 'named'
                },
                // Sortie au format CJS
                {
                    entryFileNames: (chunkInfo) =>
                        chunkInfo.name === 'hook' ? `hook.cjs.js` : `component.cjs.js`,
                    format: 'cjs',
                    dir: 'dist',
                    exports: 'named'
                }
            ]
        }
    }
})