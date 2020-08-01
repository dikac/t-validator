import Callback from "../dist/callback";
import Construct from "../dist/return/return";
import ValidatableType from "@dikac/t-type/validatable/type-standard";
import Instance from "../dist/parameter/instance/instance";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = new Callback(<Argument extends any>(value : Argument)=><Construct<any, Argument, string, Instance<string, string>>>ValidatableType(value, 'string'));


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


