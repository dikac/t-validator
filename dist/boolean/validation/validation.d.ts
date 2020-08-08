import Function from "@dikac/t-function/function";
import FunctionGuard from "@dikac/t-function/boolean/guard";
export default interface Validation<Fn extends Function<unknown[], boolean> | FunctionGuard<unknown, unknown> = Function<unknown[], boolean> | FunctionGuard<unknown, unknown>> {
    validation: Fn;
}
