export {};

// cloudflare/workers-types
// https://github.com/cloudflare/workers-types#using-bindings
declare global {
  const __STATIC_CONTENT: KVNamespace;

  const SESSION_SECRET: string;
}

