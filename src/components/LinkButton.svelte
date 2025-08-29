<script lang="ts" module>
    import type { Snippet } from 'svelte'
    import { defaultVariant, variants, defaultClasses } from './Button.svelte'
</script>

<script lang="ts">
    type Props = {
        href: string
        variant?: keyof typeof variants
        class?: string
        children: Snippet
    }

    let {
        href,
        variant = defaultVariant,
        children,
        class: className,
    }: Props = $props()
</script>

<a
    {href}
    class={[
        'block text-center select-none',
        defaultClasses,
        variants[variant],
        className,
    ]}
>
    {@render children()}
</a>
