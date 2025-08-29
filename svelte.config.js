import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess()],
    kit: {
        adapter: adapter({
            fallback: 'index.html',
        }),
        output: {
            bundleStrategy: 'inline',
        },
        router: {
            type: 'hash',
        },
    },
}

export default config
