import { remove } from 'fs-extra'
import { encrypt, generatePassword } from 'pagecrypt'
import 'dotenv/config'

const password = process.env.PASSWORD
    ? process.env.PASSWORD
    : generatePassword(61)

const inputFile = 'build/index.html'
const outputFile = inputFile

await encrypt(inputFile, outputFile, password)
console.log(
    `\n🔐 Encrypting ${inputFile} → ${outputFile} with \u{1F511}: ${password}\n`,
)

await remove('build/assets')

if (process.env.DEPLOYMENT_URL) {
    console.log(`🔐 Magic Link: ${process.env.DEPLOYMENT_URL + '#' + password}\n\n`)
} else {
    console.log(
        'Set DEPLOYMENT_URL and optionally PASSWORD in `.env` if you want to generate a magic link for each build.\n\n',
    )
}
