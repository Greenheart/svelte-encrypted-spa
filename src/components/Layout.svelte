<script lang="ts">
    import type { Snippet } from 'svelte'
    import { path } from 'svelte-pathfinder'

    import Link from '../components/Link.svelte'
    import { appName } from '../lib/constants'

    const bgDefault = 'bg-gray-900'
    const bgGradient = 'bg-linear-to-r from-gray-800 via-green-900 to-gray-800'

    let bgColor = $state(
        document.body.classList.contains(bgDefault) ? bgDefault : bgGradient,
    )

    type Props = {
        title?: string
        children: Snippet
    }
    let { title, children }: Props = $props()

    function toggleBackground() {
        const next = bgColor === bgDefault ? bgGradient : bgDefault

        document.body.classList.add(...next.split(' '))
        document.body.classList.remove(...bgColor.split(' '))

        bgColor = next
    }
</script>

<svelte:head>
    <title>{`${title ? title + ' | ' : ''}${appName}`}</title>
</svelte:head>

<main
    class="mx-auto flex h-full w-full flex-col items-center justify-between bg-transparent py-4 text-white"
>
    <button
        onclick={toggleBackground}
        class="font-semibold text-green-400 hover:text-green-500 hover:underline active:text-green-600"
        >Secret</button
    >
    {@render children()}
    <footer class="flex h-24 w-full flex-col items-center justify-center">
        <a
            href="https://github.com/Greenheart/svelte-encrypted-spa"
            class="pb-2"
            target="_blank"
            rel="noopener noreferrer">Created with {appName}</a
        >

        {#if $path.toString() !== '/'}
            <Link href="/">Home</Link>
        {/if}
    </footer>
</main>
