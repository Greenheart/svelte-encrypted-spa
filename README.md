# Svelte Encrypted SPA

🔐 Easily create private, encrypted single page applications with Svelte and PageCrypt.

## Technologies used

-   `svelte` for rapid UI development.
-   `vite` for modern DX and bundling.
-   `tailwindcss` with `jit` mode for simple and efficient styling.
-   `svelte-pathfinder` for in-memory routing.
-   `vite-plugin-singlefile` for building a single output HTML file that can be easily encrypted along with all its assets.
-   `pagecrypt` for encrypting the output HTML with strong encryption a password.
-   `prettier` for consistent code formatting.

## Installation

```
npm install
npm start
```

## Change the password for the built app

In `package.json`, update the `encrypt` npm script and use any of the options from [pagecrypt](https://github.com/Greenheart/pagecrypt) to either generate or set a password.

## Static assets in the `/public` directory

By default, the static assets in the `/public` directory will not be encrypted, so make sure to find a good solution for your use case.

One approach is to host static assets separately on another server. This will hide both the assets thelselves, and the URL:s from where the app will fetch them since the source code is encrypted.

---

## Scripts

### Start a development server

`npm start`

### Build the application and create the encrypted build

`npm run build`

### Serve the application

`npm run serve`
