<script context="module" lang="ts">
    import Question from '../components/Question.svelte'
    import { questions } from '../data/questions'
    import getRandomItem from '../lib/getRandomItem'
</script>

<script lang="ts">
    import { question, viewedQuestions } from '../lib/stores'

    function getQuestionNotViewedBefore() {
        let next
        while (!next && $viewedQuestions.length < questions.length) {
            const potential = getRandomItem(
                questions.filter(
                    (potentialQuestion) =>
                        !$viewedQuestions.find(
                            (q) => q?.id === potentialQuestion?.id,
                        ),
                ),
            )
            if (potential) {
                next = potential
            }
        }
        return next
    }

    function setRandomQuestion() {
        if ($question) {
            $viewedQuestions = [...$viewedQuestions, $question]
        }
        $question = getQuestionNotViewedBefore()
    }
</script>

{#if $question}
    <Question question={$question} />

    <div class="grid w-full grid-cols-2 gap-4 text-black text-xl sm:text-2xl">
        <button
            on:click={setRandomQuestion}
            class="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 shadow-2xl px-2 md:px-10 py-8 rounded-lg font-light tracking-wide focus:outline-none"
        >
            ❌ No
        </button>
        <button
            on:click={setRandomQuestion}
            class="bg-green-400 hover:bg-green-500 active:bg-green-600 shadow-2xl px-2 md:px-10 py-8 rounded-lg font-light tracking-wide focus:outline-none"
        >
            ✅ Yes
        </button>
    </div>
{:else}
    <p class="text-xl mt-32">Yup, that's all for now! 👀</p>
{/if}
