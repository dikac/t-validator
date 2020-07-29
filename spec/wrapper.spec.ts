import Callback from "../dist/callback";
import ValidatableType from "@dikac/t-type/validatable/type-standard";
import TypeString from "@dikac/t-type/validatable/string/type";
import Wrapper from "../dist/wrapper";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = new Wrapper(new Callback((value)=>ValidatableType(value,'string')));

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


