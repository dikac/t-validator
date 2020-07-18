import Callback from "../dist/callback";
import Factory from "./validatable/factory";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let callback = new Callback((value)=>new Factory(value,'string'));

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


