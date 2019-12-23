export default function Or<Types extends any[]>(value: any, ...checks: {
    [Key in keyof Types]: (value: any) => value is Types[Key];
}): value is Types[number];
