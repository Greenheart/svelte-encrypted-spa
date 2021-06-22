import App from './App.svelte'

if (import.meta.env.DEV) {
    await import('./lib/hmr')
}

const app = new App({
    target: document.body,
})

export default app
