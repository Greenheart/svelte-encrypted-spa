<script lang="ts" module>
    import LinkButton from '../components/LinkButton.svelte'
    import { appName } from '../lib/constants'
</script>

<div class="flex flex-1 flex-col items-center justify-center text-center">
    <p class="text-xl uppercase">Welcome to</p>
    <h1
        class="mt-1 mb-32 text-5xl font-normal text-green-500 normal-case sm:text-6xl"
    >
        {appName}
    </h1>

    <LinkButton href="#/questions">Let's start!</LinkButton>
</div>
