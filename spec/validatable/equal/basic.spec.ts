import Equal from "../../../dist/validatable/equal";
import EqualMessage from "../../../dist/validatable/string/equal";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('valid', function () {

    let equal = Equal(1, 1, EqualMessage)

    expect(equal.valid).toBe(true);
    expect(equal.value).toBe(1);
    expect(typeof equal.message).toBe("string");

});

it('invalid', function () {

    let equal = Equal(1, 2, EqualMessage)

    expect(equal.valid).toBe(false);
    expect(equal.value).toBe(1);
    expect(typeof equal.message).toBe("string");

});
