# Svelte Encrypted SPA

🔐 Easily create private, encrypted single page applications with Svelte and PageCrypt.

## Technologies used

- `svelte` for rapid UI development.
- `vite` for modern DX and bundling.
- `tailwindcss` for simple and efficient styling.
- `pagecrypt` for encrypting the output HTML with strong encryption a password.
- `prettier` for consistent code formatting.

## Installation

```sh
pnpm install
pnpm dev
```

## Change the password for the built app

By default, a new password is generated for each build which will be logged to the console. If you want to set a specific password, you can do so by using the `PASSWORD` variable in `.env`.

To view and customize available variables, make a copy of `.env.example` called `.env`:

```sh
cp .example.env .env
```

Then you can use `.env` to configure how your app is encrypted.

## Generating a Magic Link for Easy Access

If you set `DEPLOYMENT_URL` in `.env` and run `pnpm build`, a magic link will be printed to the console that allows users to open the app with a single click once it has been deployed. This allows a really smooth UX for your users.

## Static assets in the `/static` directory

By default, the static assets in the `/static` directory will not be encrypted, so make sure to find a good solution for your use case.

One approach is to host static assets separately on another server. This will hide both the assets themselves, and the URL:s from where the app will fetch them since the source code is encrypted.

Another approach is to inline images and assets, but this is most useful for a small amount of assets.

For additional security considerations, refer to the [pagecrypt docs](https://github.com/greenheart/pagecrypt#security-considerations)

---

## Scripts

### Start the development server

`pnpm dev`

### Build the application and create an encrypted build

`pnpm build`

### Preivew built app

`pnpm preview`
