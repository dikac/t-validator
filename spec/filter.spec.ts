import Callback from "../dist/callback";
import Factory from "./validatable/factory";
import Filter from "../dist/filter";
import Validatable from "@dikac/t-validatable/validatable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = new Callback((value)=>new Factory(value,'string'));

let filter = new Filter(callback, function (validatable : {value:unknown} & Validatable) : {value:unknown} & Validatable & {message:string} {


    return {
        valid : validatable.valid,
        value : validatable.value,
        message : 'message'
    };
})

describe('compiler compatible', ()=>{

    let validatable = filter.validate('str');

    let boolean : boolean = validatable.valid;
    let value : any = validatable.value;
    let message : string = validatable.message;


    {
        // @ts-expect-error
        let valid : string = validatable.valid;
        let value : any = validatable.value;
        // @ts-expect-error
        let message : number = validatable.message;

    }

})

it('valid', function () {

    let validatable = filter.validate('str');
    expect(validatable.valid).toBeTrue();
    expect(validatable.value).toBe('str');
    expect(validatable.message).toBe('message');
});


it('invalid', function () {

    let validatable = filter.validate(1);
    expect(validatable.valid).toBeFalse();
    expect(validatable.value).toBe(1);
    expect(validatable.message).toBe('message');
});


