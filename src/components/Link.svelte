<script context="module" lang="ts">
    import { goto } from 'svelte-pathfinder'
</script>

<script lang="ts">
    export let href: string
    export let className =
        $$props.class ||
        'text-green-400 hover:text-green-500 hover:underline active:text-green-600 font-semibold'
</script>

<button on:click={() => goto(href)} class={className}>
    <slot />
</button>
