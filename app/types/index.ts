import type {
  DataFunctionArgs as RemixDataFunctionArgs,
  Session,
} from '@remix-run/cloudflare';

export interface AppLoadContext {
  env: Env;
  session: Session;
}

export interface DataFunctionArgs
  extends Omit<RemixDataFunctionArgs, 'context'> {
  context: AppLoadContext;
}

export interface ActionFunction {
  (args: DataFunctionArgs): null | Response | Promise<Response>;
}

export interface LoaderFunction {
  (args: DataFunctionArgs): null | Response | Promise<Response>;
}
