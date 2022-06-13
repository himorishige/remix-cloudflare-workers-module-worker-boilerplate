# Remix + Cloudflare Workers boilerplate (Module Worker)🚀

Starter to get going with Remix and Cloudflare Workers (Module Worker).

- [Remix on Cloudflare WorkersをService WorkerからModule Workerに移行する \| DevelopersIO](https://dev.classmethod.jp/articles/remix-on-cloudflare-module-workers/)
- [Remix Docs](https://remix.run/docs)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)

## Getting Started

### ​​Installing the Workers CLI

Wrangler requires a minimum Node version of 16

```bash
npm install -g wrangler
```

or install with yarn:

```bash
yarn global add wrangler
```

Read more about [installing wrangler](https://developers.cloudflare.com/workers/wrangler/get-started/).

## Development

Create a `wrangler.toml` file for the development, referring to `wrangler.dev.toml.example`. It is useful to prepare a configuration for development since the `Secret` is not available in `wrangler dev --local` mode.

You will be running two processes during development:

- The Miniflare server (miniflare is a local environment for Cloudflare Workers)
- The Remix development server

Both are started with one command:

```sh
npm run dev
```

Open up [http://127.0.0.1:8787](http://127.0.0.1:8787) and you should be ready to go!

If you want to check the production build, you can stop the dev server and run following commands:

```sh
npm run build
npm start
```

Then refresh the same URL in your browser (no live reload for production builds).

## Deployment

Use [wrangler](https://developers.cloudflare.com/workers/cli-wrangler) to build and deploy your application to Cloudflare Workers. If you don't have it yet, follow [the installation guide](https://developers.cloudflare.com/workers/cli-wrangler/install-update) to get it setup. Be sure to [authenticate the CLI](https://developers.cloudflare.com/workers/cli-wrangler/authentication) as well.

If you don't already have an account, then [create a cloudflare account here](https://dash.cloudflare.com/sign-up) and after verifying your email address with Cloudflare, go to your dashboard and set up your free custom Cloudflare Workers subdomain.

Once that's done, you should be able to deploy your app:

```sh
npm run deploy
```
