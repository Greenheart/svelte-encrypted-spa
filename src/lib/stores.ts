import { writable } from 'svelte/store'

import type { Question } from './types'
import { questions } from '../data/questions'

export const viewedQuestions = writable<Question[]>([])
export const question = writable<Question | undefined>(questions[0])
