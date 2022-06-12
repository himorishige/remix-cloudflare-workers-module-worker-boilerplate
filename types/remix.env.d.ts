/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

interface CacheStorage {
  default: Cache;
}

declare var process: {
  env: { NODE_ENV: 'development' | 'production' };
};
