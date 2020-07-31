import Callback from "../dist/callback";
import ValidatableType from "@dikac/t-type/validatable/type-standard";
import Wrapper from "../dist/wrapper";
import Construct from "../dist/return/construct";
import Message from "@dikac/t-message/message";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = new Wrapper(new Callback((value)=><Construct<any, any, string, Message<string>>>ValidatableType(value, 'string')));


describe('compiler compatibility', ()=>{

    let validatable = callback.validate(1);

    if(validatable.valid) {

        let boolean : boolean = validatable.valid;
        let value : string = validatable.value;
        let message : string = validatable.message;

    } else {

        let boolean : boolean = validatable.valid;
        // @ts-expect-error
        let value : string = validatable.value;
        let number : number = validatable.value;
        let message : string = validatable.message;
    }


    {
        // @ts-expect-error
        let valid : string = validatable.valid;
        let value : any = validatable.value;
        // @ts-expect-error
        let message : number = validatable.message;
    }
});


it('valid', function () {

    let validatable = callback.validate('str');

    expect(validatable.valid).toBeTrue();
    expect(validatable.value).toBe('str');
});


it('invalid', function () {

    let validatable = callback.validate(1);
    expect(validatable.valid).toBeFalse();
    expect(validatable.value).toBe(1);
});


