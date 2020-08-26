import Equal from "../../../dist/validatable/equal";
import EqualMessage from "../../../dist/validatable/string/equal";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('implicit', function () {

    let equal = Equal(1, 2, EqualMessage)

    if(equal.valid) {

        // @ts-expect-error
        let number : number = equal.value;
        let unknown : unknown = equal.value;

    } else {
        // @ts-expect-error
        let number : number = equal.value;
        let unknown : unknown = equal.value;
    }

});

describe('explicit partial', function () {

    let equal = Equal<number>(1, 2, EqualMessage)

    if(equal.valid) {

        // @ts-expect-error
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

    let equal = Equal<number, 1, 2>(1, 2, EqualMessage)

    if(equal.valid) {


        let specific : 2 = equal.value;
        let number : number = equal.value;
        let unknown : unknown = equal.value;

    } else {

        let specific : 1 = equal.value;
        let number : number = equal.value;
        let unknown : unknown = equal.value;
    }

});
