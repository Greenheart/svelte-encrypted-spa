<script context="module" lang="ts">
    import Question from '../components/Question.svelte'
    import { questions } from '../data/questions'
    import { getRandomItem } from '../lib/utils'
    import type { Question as QuestionType } from '../lib/types'
</script>

<script lang="ts">
    type Props = {
        question: QuestionType
    }
    let { question }: Props = $props()

    let viewedQuestions = $state<QuestionType[]>([])

    function getQuestionNotViewedBefore() {
        let next: QuestionType
        while (!next && viewedQuestions.length < questions.length) {
            const potential = getRandomItem(
                questions.filter(
                    (potentialQuestion) =>
                        !viewedQuestions.find(
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
        if (question) {
            viewedQuestions = [...viewedQuestions, question]
        }
        question = getQuestionNotViewedBefore()
    }
</script>

{#if question}
    <Question {question} />

    <div class="grid w-full grid-cols-2 gap-4 text-black text-xl sm:text-2xl">
        <button
            onclick={setRandomQuestion}
            class="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 shadow-2xl px-2 md:px-10 py-8 rounded-lg focus:outline-none"
        >
            ❌ No
        </button>
        <button
            onclick={setRandomQuestion}
            class="bg-green-400 hover:bg-green-500 active:bg-green-600 shadow-2xl px-2 md:px-10 py-8 rounded-lg focus:outline-none"
        >
            ✅ Yes
        </button>
    </div>
{:else}
    <p class="text-xl mt-32">Yup, that's all for now! 👀</p>
{/if}
