<script lang="ts">
    import { path, prefs } from 'svelte-pathfinder'
    import routes from './routes'

    // Disable side effects to only keep history in browser memory.
    prefs.sideEffect = false

    // @ts-expect-error 2538
    $: page = routes[$path] || routes['/']
</script>

<svelte:component this={page} />
