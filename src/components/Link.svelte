<script lang="ts">
    import type { Snippet } from 'svelte'

    type Props = {
        href: string
        class?: string
        children: Snippet
    }

    let { href, children, ...props }: Props = $props()

    let className =
        props.class ||
        'text-green-400 hover:text-green-500 underline underline-offset-3 active:text-green-600 font-semibold'
</script>

<a {href} class={className}>
    {@render children()}
</a>
