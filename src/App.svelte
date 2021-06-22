<script lang="ts">
    import './tailwind.css'
    import { path, prefs } from 'svelte-pathfinder'
    import routes from './routes'

    // Disable side effects to only keep history in browser memory.
    prefs.sideEffect = false

    // @ts-expect-error 2538
    $: page = routes[$path] || routes['/']
</script>

<svelte:component this={page} />

<style>
    :global(html, body) {
        height: 100%;
        overscroll-behavior-y: contain;
    }

    :global(*) {
        -webkit-tap-highlight-color: transparent;
    }

    :global(button::-moz-focus-inner) {
        border: 0;
    }

    :global(:focus, *:focus) {
        outline: 0 !important;
        border: 0 !important;
    }
</style>
