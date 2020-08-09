import Callback from "../dist/callback";
import Wrapper from "../dist/wrapper";
import Validatable from "../dist/validatable/validatable";
import ReturnSimple from "../dist/validatable/simple";
import ValidatorSimple from "../dist/simple";
import TestString from "./test-string";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


let callback = <ValidatorSimple<unknown, string, Validatable<unknown, string>>>new Wrapper( <ValidatorSimple<unknown, string, Validatable<unknown, string>>>new Callback(
    function <Argument extends unknown> (value : Argument) : ReturnSimple<unknown, Argument, string, Validatable<unknown, string>> {
        return {
            value : value,
            valid : typeof value === "string",
            message : 'string'
        } as ReturnSimple<unknown, Argument, string, Validatable<unknown, string>>
    }
));



describe('compiler compatibility', ()=>{

    describe('callback', ()=>{

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

    describe('type', ()=>{

        let callback = new Wrapper(new TestString());

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


