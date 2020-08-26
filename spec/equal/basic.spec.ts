import EqualMessage from "../../dist/validatable/string/equal";
import Equal from "../../dist/equal";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('valid', function () {

    let validator = new Equal(1,  EqualMessage)

    let equal = validator.validate(1);

    expect(equal.valid).toBe(true);
    expect(equal.value).toBe(1);
    expect(typeof equal.message).toBe("string");

});

it('invalid', function () {

    let validator = new Equal(1,  EqualMessage)

    let equal = validator.validate(2);

    expect<boolean>(equal.valid).toBe(false);
    expect(equal.value).toBe(2);
    expect(typeof equal.message).toBe("string");

});
