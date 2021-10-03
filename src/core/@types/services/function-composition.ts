export interface FunctionCompositionServiceProvider {
  compose<T1 = string & number>(...fns: unknown[]): (arg: any) => T1
}
