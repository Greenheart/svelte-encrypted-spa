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
        'text-green-400 hover:text-green-500 hover:underline active:text-green-600 font-semibold'
</script>

<button onclick={() => goto(href)} class={className}>
    {@render children()}
</button>
