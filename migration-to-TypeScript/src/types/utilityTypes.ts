export interface LoadClass {
  baseLink: string;
  options?: {
    apiKey?: string;
  };
}
export interface Errors {
  status: number;
  code: string;
  message: string;
}

export type Callback<T> = (data?: T) => void;

export interface Options {
  sources: string;
  apiKey: string | never;
}

export const responseStatus = 401 | 404;
export interface URLOpt {
  [index: string]: string;
}

export interface HTMLElementNode<T extends HTMLElement> extends EventTarget {
  deep?: boolean | undefined;
  node?: T;
}
