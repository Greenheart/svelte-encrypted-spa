<script context="module" lang="ts">
    import type { Question as QuestionType } from '../lib/interfaces'
</script>

<script lang="ts">
    export let question: QuestionType
</script>

<article class="border-0 rounded-lg shadow-2xl w-full bg-gray-800 py-8 mb-4">
    <p class="uppercase tabular-nums text-green-400 tracking-wide">
        #{question.id}
    </p>
    <p
        class="h-64 text-xl md:text-2xl text-center flex items-center justify-center px-8"
    >
        {question.text}
    </p>
</article>
