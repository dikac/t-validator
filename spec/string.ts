// import ValidatableType from "@dikac/t-validatable/type/wrapper";

//
// export default class StringType extends ValidatableType<string> {
//
//     constructor(data, private _message : string) {
//
//         super(data, (value : any) : value is string =>  { return  typeof value ==="string"});
//     }
//
//     protected getMessage(data: any, valid: boolean): string {
//         return valid + '-' + this._message;
//     }
// }

export class Validator {

    validator(value : any) : Validatable {

        return new Validatable(value);
    }
}

export class Validatable {

    constructor(
        public value : string
    ) {
    }

    get message() : string {

        return this.valid ? 'valid' : 'invalid';
    }

    get valid () : boolean {

        return true;
    }
}
