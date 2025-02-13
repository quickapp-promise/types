declare module "@quickapp.promise.tools" {
  type GetPromiseParams<T extends (...args: any[]) => any> = Parameters<T> extends any[]
    ? Parameters<T>[0] extends {}
    ? Omit<Parameters<T>[0], 'success' | 'fail' | 'complete'>
    : void
    : void;

  type GetSuccessParams<T extends (...args: any[]) => any> = Parameters<T>[0] extends { success?: (...args: infer R) => any }
    ? R[0] extends undefined
    ? void
    : R[0]
    : void;
}
