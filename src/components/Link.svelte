<script lang="ts">
    import type { Snippet } from 'svelte'

    type Props = {
        href: string
        class?: string
        children: Snippet
    }

    let { href, children, class: className }: Props = $props()
</script>

<a
    {href}
    class={className ??
        'font-semibold text-green-400 underline underline-offset-3 hover:text-green-500 active:text-green-600'}
>
    {@render children()}
</a>
