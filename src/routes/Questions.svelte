<script lang="ts" module>
    import Layout from '../components/Layout.svelte'
    import RandomQuestion from '../components/RandomQuestion.svelte'
    import { questions } from '../data/questions'
    import { getRandomItem } from '../lib/utils'

    let question = $state(getRandomItem(questions))
</script>

<Layout title="Questions">
    <div
        class="flex w-full max-w-xl flex-1 flex-col items-center justify-center px-4 text-center"
    >
        <p class="text-xl uppercase">
            {questions.length} questions about
        </p>
        <h1
            class="mt-1 mb-8 text-5xl font-normal text-green-500 normal-case sm:text-6xl"
        >
            Lorem ipsum
        </h1>

        <RandomQuestion {question} />
    </div>
</Layout>
