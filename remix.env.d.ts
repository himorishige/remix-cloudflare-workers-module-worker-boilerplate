/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare/globals" />
/// <reference types="@cloudflare/workers-types" />

declare var process: {
  env: { NODE_ENV: 'development' | 'production' };
};