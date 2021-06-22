import { writable } from 'svelte/store'

import type { Question } from '../lib/interfaces'
import { questions } from '../data/questions'

export const bgColor = writable('bg-gray-900')
export const viewedQuestions = writable<Question[]>([])
export const question = writable<Question | undefined>(questions[0])
