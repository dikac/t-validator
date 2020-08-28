export default interface Validation<Callable extends ((...args: unknown[]) => boolean) | ((value: unknown, ...args: unknown[]) => value is unknown) = ((...args: unknown[]) => boolean) | ((value: unknown, ...args: unknown[]) => value is unknown)> {
    validation: Callable;
}
