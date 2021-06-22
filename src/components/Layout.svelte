<script context="module" lang="ts">
    import { path } from 'svelte-pathfinder'

    import Link from '../components/Link.svelte'
    import { appName } from '../lib/constants'
</script>

<script lang="ts">
    import { bgColor } from '../lib/stores'

    export let title = ''

    const bgDefault = 'bg-gray-900'
    const bgGradient =
        'bg-gradient-to-r from-gray-800 via-green-900 to-gray-800'

    function toggleBackground() {
        $bgColor = $bgColor === bgDefault ? bgGradient : bgDefault
    }

    $: {
        bgGradient
            .split(' ')
            .forEach((c) =>
                document.body.classList.toggle(c, $bgColor.includes(c)),
            )
        document.body.classList.toggle(bgDefault, $bgColor === bgDefault)
    }
</script>

<svelte:head>
    <title>{`${title ? title + ' | ' : ''}${appName}`}</title>
</svelte:head>

<main
    class="py-4 mx-auto flex flex-col items-center justify-between bg-transparent text-white h-full w-full"
>
    <button
        on:click={() => toggleBackground()}
        class="text-green-400 hover:text-green-500 hover:underline active:text-green-600 font-semibold"
        >Secret</button
    >
    <slot />
    <footer
        class="flex flex-col items-center justify-center w-full h-24 font-thin"
    >
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
