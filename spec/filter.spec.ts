import Callback from "../dist/callback";
import Filter from "../dist/filter";
import Construct from "../dist/validatable/simple";
import Validatable from "../dist/validatable/validatable";
import ReturnSimple from "../dist/validatable/simple";
import ValidatorSimple from "../dist/simple";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = new Callback(function <Argument extends unknown> (value : Argument) : ReturnSimple<unknown, Argument, string, Validatable<unknown, string>> {
    return {
        value : value,
        valid : typeof value === "string",
        message : 'string'
    } as ReturnSimple<unknown, Argument, string, Validatable<unknown, string>>
});


let filter = new Filter<any, { data : string }, Validatable<string, string>>(<ValidatorSimple<unknown, string, Validatable<unknown, string>>>callback,
    function <Argument extends any> (
        validatable : Construct<any, any, string, Validatable<string, string>>
    ) : Construct<any, Argument, { data : string }, Validatable<{ data : string }, string>> {

    if(validatable.valid) {

        return {
            valid : validatable.valid,
            value : {data : validatable.value},
            message : 'message'
        } as Construct<any, Argument, { data : string }, Validatable<{ data : string }, string>> ;

    } else {

        return {
            valid : validatable.valid,
            value : validatable.value,
            message : 'message'
        };
    }

});

let valid = filter.validate('str');
if(valid.valid) {

    valid.value.data;
}

describe('compiler compatibility', ()=>{

    let validatable = filter.validate(1);

    if(validatable.valid) {

        let boolean : boolean = validatable.valid;
        let value : { data : string } = validatable.value;
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
})

it('valid', function () {

    let validatable = filter.validate('str');

    if(validatable.valid) {

        expect(validatable.valid).toBeTrue();
        expect(validatable.value.data).toBe('str');
        expect(validatable.message).toBe('message');

    } else {

        fail('validatable should valid');
    }

});


it('invalid', function () {

    let validatable = filter.validate(1);

    if(validatable.valid) {

        fail('validatable should not valid');

        expect(validatable.valid).toBeFalse();
        expect(validatable.value).toBe({data:''});
        expect(validatable.message).toBe('message');

    } else {

        expect(validatable.valid).toBeFalse();
        expect(validatable.value).toBe(1);
        expect(validatable.message).toBe('message');

    }

});


