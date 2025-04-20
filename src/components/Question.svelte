<script lang="ts">
    import type { Question as QuestionType } from '../lib/types'

    type Props = {
        question: QuestionType
    }
    let { question }: Props = $props()
</script>

<article class="mb-4 w-full rounded-lg border-0 bg-gray-800 py-8 shadow-2xl">
    <p class="tracking-wide text-green-400 uppercase tabular-nums">
        #{question.id}
    </p>
    <p
        class="flex h-64 items-center justify-center px-8 text-center text-xl md:text-2xl"
    >
        {question.text}
    </p>
</article>
