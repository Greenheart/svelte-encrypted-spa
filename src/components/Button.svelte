<script lang="ts" module>
    import type { Snippet } from 'svelte'
    import type { HTMLButtonAttributes } from 'svelte/elements'

    export const variants = {
        solid: 'rounded-lg bg-linear-to-br from-green-500 to-green-500/75 px-3 py-2 text-base xs:text-lg text-black hover:from-green-600 hover:to-green-600/75',
        outline:
            'rounded-lg px-3 py-2 text-base xs:text-lg hover:bg-green-500/10 text-white',
    }
    export const defaultVariant = 'solid'
    export const defaultClasses =
        'border-2 border-green-500 hover:border-green-600 shadow-md disabled:cursor-not-allowed disabled:opacity-25'
</script>

<script lang="ts">
    interface Props extends HTMLButtonAttributes {
        variant?: keyof typeof variants
        class?: string
        children: Snippet
    }

    let {
        children,
        variant = defaultVariant,
        class: className,
        ...props
    }: Props = $props()
</script>

<button {...props} class={[defaultClasses, variants[variant], className]}>
    {@render children()}
</button>
