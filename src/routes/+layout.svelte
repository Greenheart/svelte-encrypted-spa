<script lang="ts">
    import type { Snippet } from 'svelte'
    import { page } from '$app/state'

    import Link from '../components/Link.svelte'
    import { appName } from '../lib/constants'
    import { toggle } from '../lib/background.svelte'
    import '../app.css'

    type Props = {
        title?: string
        children: Snippet
    }
    let { title, children }: Props = $props()
</script>

<svelte:head>
    <title>{`${title ? title + ' | ' : ''}${appName}`}</title>
</svelte:head>

<main
    class="mx-auto flex h-full w-full flex-col items-center justify-between bg-transparent py-4 text-white"
>
    <button
        onclick={toggle}
        class="font-semibold text-green-400 hover:text-green-500 hover:underline active:text-green-600"
        >Secret</button
    >
    {@render children()}
    <footer class="flex h-24 w-full flex-col items-center justify-center">
        <a
            href="https://github.com/Greenheart/svelte-encrypted-spa"
            class="pb-2 underline"
            target="_blank"
            rel="noopener noreferrer">Created with {appName}</a
        >

        {#if page.route.id !== '/'}
            <Link href="/">Home</Link>
        {/if}
    </footer>
</main>
