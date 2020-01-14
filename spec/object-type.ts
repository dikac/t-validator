import ValidatableType from "@dikac/t-validatable/message/type";


export default class ObjectType extends ValidatableType<string> {

    constructor(data) {

        super(data, (value : any) : value is string =>  { return  typeof value ==="object"});
    }

    protected getMessage(data: any, valid: boolean): string {
        return valid + "";
    }
}
