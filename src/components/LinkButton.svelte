<script lang="ts">
    import type { Snippet } from 'svelte'
    import { goto } from 'svelte-pathfinder'

    type Props = {
        href: string
        class?: string
        children: Snippet
    }

    let { href, children, ...props }: Props = $props()

    let className =
        props.class ||
        'bg-green-500 hover:bg-green-600 active:bg-green-700 max-w-[264px] w-full py-6 rounded-xl text-white text-2xl select-none'
</script>

<button onclick={() => goto(href)} class={className}>
    {@render children()}
</button>
