import { encrypt, generatePassword } from 'pagecrypt'
import { rm } from 'fs/promises'

const password = process.env.PASSWORD
    ? process.env.PASSWORD
    : generatePassword(61)

const inputFile = 'build/index.html'
const outputFile = inputFile

await rm('build/_app', { recursive: true, force: true })

// Do not log if password was predefined
if (!process.env.PASSWORD) {
    console.log(`\n🔐 Encrypting with \u{1F511}: ${password}\n`)
}

if (process.env.DEPLOYMENT_URL) {
    console.log(
        `\n🔐 Magic Link: ${process.env.DEPLOYMENT_URL + '/#' + password}`,
    )
}

console.log(`🔐 Preview Link: http://localhost:4173/${'#' + password}\n`)

await encrypt(inputFile, outputFile, password)
