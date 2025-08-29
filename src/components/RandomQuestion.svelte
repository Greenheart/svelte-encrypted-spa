<script lang="ts" module>
    import Question from '../components/Question.svelte'
    import { questions } from '../data/questions'
    import { getRandomItem } from '../lib/utils'
    import type { Question as QuestionType } from '../lib/types'
</script>

<script lang="ts">
    import Button from './Button.svelte'

    type Props = {
        question?: QuestionType
    }
    let { question }: Props = $props()

    let viewedQuestions = $state<QuestionType[]>([])

    function getQuestionNotViewedBefore() {
        let next: QuestionType | undefined = undefined
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

    <div class="grid w-full grid-cols-2 gap-4 text-xl text-black sm:text-2xl">
        <Button onclick={setRandomQuestion} variant="outline">❌ No</Button>
        <Button onclick={setRandomQuestion}>✅ Yes</Button>
    </div>
{:else}
    <p class="mt-32 text-xl">Yup, that's all for now! 👀</p>
{/if}
