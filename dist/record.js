// import Validator from "./validator";
// import Validatable from "@dikac/t-validatable/validatable";
// import RecordObject from "@dikac/t-object/record/recursive/record";
// import RecordMap from "@dikac/t-object/record/recursive/map";
// import ToValue from "./object/to-value";
// import ToValidatable from "./object/to-validatable";
// import Validate from "./object/record/validate";
// import RecordValid from "@dikac/t-validatable/record/recursive/valid";
// import Mixin from "@dikac/t-object/merge";
// import Argument from "./infer/argument";
// import Return from "./infer/return";
// import Value from "@dikac/t-object/record/infer/value";
//
//
// export default class Record<
//     Container extends RecordObject<PropertyKey, Validator<any>>
//     > implements Validator<
//     RecordMap<Argument<Container>, Container>,
//     RecordMap<Return<Container>, Container> & Validatable
//     >
// {
//
//     constructor(
//         public validators : Container
//     ) {
//
//         this.guardProperty(validators);
//     }
//
//     protected guardProperty(object : object) {
//
//         if('valid' in object) {
//
//             throw new Error(`property "valid" is reserved`);
//         }
//     }
//
//     validate(value: RecordMap<Argument<Container>, Container>) : RecordMap<Return<Container>, Container> & Validatable {
//
//         let results = Validate(this.validators, value);
//
//         let validatable = {valid : RecordValid(results)};
//
//         return <RecordMap<Return<Container>, Container> & Validatable>Mixin(results, validatable);
//     }
// }
//
//
//
//# sourceMappingURL=record.js.map