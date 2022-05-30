declare module '__STATIC_CONTENT_MANIFEST' {
  const manifestJSON: string;
  export default manifestJSON;
}

interface Env {
  __STATIC_CONTENT: KVNamespace;

  SESSION_KV: KVNamespace;
  COUNTER: DurableObjectNamespace;

  SESSION_SECRET: string;
}
