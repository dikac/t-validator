import Equal from "../../dist/equal";
import EqualMessage from "../../dist/validatable/string/equal";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('implicit', function () {

    let validator = new Equal(1,  EqualMessage)

    let equal = validator.validate(2);

    if(equal.valid) {


        let number : number = equal.value;
        let unknown : unknown = equal.value;

    } else {

        let number : number = equal.value;
        let unknown : unknown = equal.value;
    }
});

describe('explicit partial', function () {

    let validator = new Equal<number>(1,  EqualMessage)

    let equal = validator.validate(2);

    if(equal.valid) {

        let specific : 2 = equal.value;
        let number : number = equal.value;
        let unknown : unknown = equal.value;

    } else {
        // @ts-expect-error
        let specific : 1 = equal.value;
        let number : number = equal.value;
        let unknown : unknown = equal.value;
    }

});

describe('explicit full', function () {

    let validator = new Equal<number, 1>(1,  EqualMessage)

    let equal = validator.validate(2);

    if(equal.valid) {

        let specific : 1 = equal.value;
        let number : number = equal.value;
        let unknown : unknown = equal.value;

    } else {

        let specific : 2 = equal.value;
        let number : number = equal.value;
        let unknown : unknown = equal.value;
    }

});
