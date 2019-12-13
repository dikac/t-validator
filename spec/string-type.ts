import ValidatableType from "../dist/validatable/type";


export default class StringType extends ValidatableType<string> {

    constructor(data) {

        super(data, (value : any) : value is string =>  { return  typeof value ==="string"});
    }

    protected getMessage(data: any, valid: boolean): string {
        return valid + "";
    }
}
