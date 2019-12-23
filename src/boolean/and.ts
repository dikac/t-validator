//
// export default function Or<Types extends any[]>(
//     value : any,
//     ...checks : {[Key in keyof Types] : (value : any) => value is Types[Key]}
// ) : value is MergeTupleMembers<Types[number]> {
//
//
//     return true;
// }
//
// let t : MergeTupleMembers<[{c:string}, {d:number}]> = 1;
//
// let c = Or<[number, string]>(1, (v) : v is number=>true, (v) : v is string=>true);
// type MergeArguments<T, K extends string = "whatever"> =
//     {
//         [Key in K]: T extends (first: infer A) => void ? A :
//         MergeOnePlus<T, K>
//     }[K];
//
// type MergeOnePlus<T, K extends string> =
//     {
//         [Key in K]: T extends (first: infer A, ...args: infer U) => void ? A & MergeArguments<(...args: U) => void, K> :
//         never
//     }[K];
//
// type IntoSignature<T extends unknown[]> = (...args: T) => void;
//
// type MergeTupleMembers<T extends unknown[]> = MergeArguments<IntoSignature<T>>;
//
// type SomeTuple = [{ x: 1 }, { y: 2 }, { z: 3 }];
//
// type Merged = MergeTupleMembers<SomeTuple>;