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

Make a copy of `.env.example` and rename one of them to `.env`. Then you can use `.env` to change config for the app.

```
npm install
npm start
```

## Change the password for the built app

By default, a new password is generated for each build which will be logged to the console. If you want to set a specific password, you can do so by using the `PASSWORD` variable in `.env`.

## Generating a Magic Link for Easy Access

If you set `DEPLOYMENT_URL` in `.env` and run `npm run build`, a magic link will be printed to the console that allows users to open the app with a single click once it has been deployed. This allows a really smooth UX for your users.

## Static assets in the `/public` directory

By default, the static assets in the `/public` directory will not be encrypted, so make sure to find a good solution for your use case.

One approach is to host static assets separately on another server. This will hide both the assets themselves, and the URL:s from where the app will fetch them since the source code is encrypted.

For additional security considerations, refer to the [pagecrypt docs](https://github.com/greenheart/pagecrypt#security-considerations)

---

## Scripts

### Start a development server

`npm start`

### Build the application and create the encrypted build

`npm run build`

### Serve the application

`npm run serve`
