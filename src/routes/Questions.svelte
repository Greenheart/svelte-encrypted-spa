<script lang="ts" module>
    import Layout from '../components/Layout.svelte'
    import RandomQuestion from '../components/RandomQuestion.svelte'
    import { questions } from '../data/questions'
    import { getRandomItem } from '../lib/utils'

    let question = $state(getRandomItem(questions))
</script>

<Layout title="Questions">
    <div
        class="flex flex-col items-center justify-center flex-1 px-4 text-center max-w-xl w-full"
    >
        <p class="text-xl uppercase">
            {questions.length} questions about
        </p>
        <h1
            class="text-green-500 text-5xl sm:text-6xl font-normal normal-case mt-1 mb-8"
        >
            Lorem ipsum
        </h1>

        <RandomQuestion {question} />
    </div>
</Layout>
