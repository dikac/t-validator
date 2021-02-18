import Equal from "../../../dist/validatable/string/equal";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});


it(`true`, () => {
    expect(Equal({value:['a', 'a'], valid:true})).toBe("'a' is equal to 'a'.");
    expect(Equal({value:[null, ''], valid:true})).toBe("'' is equal to ''.");
});

it(`false`, () => {
    expect(Equal({value:[{}, {}], valid:false})).toBe("'[object Object]' is not equal to '[object Object]'.");
    expect(Equal({value:[1, 1], valid:false})).toBe("'1' is not equal to '1'.");
});
