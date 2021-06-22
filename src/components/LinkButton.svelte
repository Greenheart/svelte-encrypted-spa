<script context="module" lang="ts">
    import { goto } from 'svelte-pathfinder'
</script>

<script lang="ts">
    export let href: string
    export let className =
        $$props.class ||
        'bg-green-500 hover:bg-green-600 active:bg-green-700 max-w-[264px] w-full py-6 rounded-xl text-white font-extralight tracking-widest text-2xl select-none'
</script>

<button on:click={() => goto(href)} class={className}>
    <slot />
</button>
