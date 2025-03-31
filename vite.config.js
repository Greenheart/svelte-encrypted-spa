import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteSingleFile } from 'vite-plugin-singlefile'
import tailwind from '@tailwindcss/vite'
import { setDefaultResultOrder } from 'dns'

setDefaultResultOrder('verbatim')

export default defineConfig({
    plugins: [
        svelte(),
        tailwind(),
        viteSingleFile({
            removeViteModuleLoader: true,
            useRecommendedBuildConfig: true,
        }),
    ],
    build: {
        outDir: 'build',
        target: 'es2019',
    },
})
