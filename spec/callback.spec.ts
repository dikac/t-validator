import Callback from "../dist/callback";
import Type from "@dikac/t-type/validatable/type";
import TypeString from "@dikac/t-type/validatable/string/type";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = new Callback((value)=>new Type(value,'string', TypeString));

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


