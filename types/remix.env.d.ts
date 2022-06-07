/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

interface CacheStorage {
  default: Cache;
}

declare var process: {
  env: { NODE_ENV: 'development' | 'production' };
};

declare module '@remix-run/cloudflare' {
  import type {
    AppLoadContext,
    DataFunctionArgs as RemixDataFunctionArgs,
  } from '@remix-run/cloudflare';
  export * from '@remix-run/cloudflare/index';

  export interface LoadContext extends AppLoadContext {
    env: Env;
  }

  interface DataFunctionArgs extends Omit<RemixDataFunctionArgs, 'context'> {
    context: LoadContext;
  }

  export interface ActionFunction {
    (args: DataFunctionArgs): null | Response | Promise<Response>;
  }

  export interface LoaderFunction {
    (args: DataFunctionArgs): null | Response | Promise<Response>;
  }
}
