import Callback from "../dist/callback";
import ValidatableType from "@dikac/t-type/validatable/type-standard";
import Filter from "../dist/filter";
import Construct from "../dist/return/return";
import Instance from "../dist/parameter/instance/instance";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = new Callback(
    (value)=><Construct<any, any, string, Instance<string, string>>>ValidatableType(value, 'string')
);


let filter = new Filter<any, { data : string }, Instance<string, string>>(callback,
    function (validatable : Construct<any, any, string, Instance<string, string>>
) : Construct<any, any, { data : string }, Instance<string, string>> {

    if(validatable.valid) {

        return {
            valid : validatable.valid,
            value : {data : validatable.value},
            message : 'message'
        };

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
    expect(validatable.valid).toBeFalse();
    expect(validatable.value).toBe(1);
    expect(validatable.message).toBe('message');
});


