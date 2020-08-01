import Validator from "../dist/validator";
import Return from "../dist/return/return";
import Instance from "../dist/parameter/instance/instance";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', ()=>{



    describe('writable', () => {

        class Test implements Validator<any, string, Instance<any, string>> {

            validate<Argument extends any>(value: Argument): Return<any, Argument, string, Instance<any, string>> {

                return <Return<any, Argument, string, Instance<any, string>>> {
                    valid : typeof value === "string",
                    value : value,
                    message : 'message'
                }
            }

        }


        let test = new Test();
        let validatable = test.validate(1);

        if(validatable.valid) {

            let boolean : boolean = validatable.valid;
            let value : string = validatable.value;
            let message : string = validatable.message;

            validatable.valid = true;
            // @ts-expect-error
            validatable.valid = false;
            validatable.value = '5';
            // @ts-expect-error
            validatable.value = 5;
            validatable.message = 'message';

        } else {

            let boolean : boolean = validatable.valid;
            // @ts-expect-error
            let value : string = validatable.value;
            let number : number = validatable.value;
            let message : string = validatable.message;

            validatable.valid = false;
            // @ts-expect-error
            validatable.valid = true;
            validatable.value = 5;
            // @ts-expect-error
            validatable.value = '5';
            validatable.message = 'message';
        }
    })


    describe('readonly', () => {

        class Test implements Validator<any, string, Readonly<Instance<any, string>>> {

            validate<Argument extends any>(value: Argument): Return<any, Argument, string, Readonly<Instance<any, string>>> {

                return <Return<any, Argument, string, Instance<any, string>>> {
                    valid : typeof value === "string",
                    value : value,
                    message : 'message'
                }
            }
        }


        let test = new Test();
        let validatable = test.validate(1);

        if(validatable.valid) {

            let boolean : boolean = validatable.valid;
            let value : string = validatable.value;
            let message : string = validatable.message;
            // @ts-expect-error
            validatable.valid = true;
            // @ts-expect-error
            validatable.valid = false;
            // @ts-expect-error
            validatable.value = '5';
            // @ts-expect-error
            validatable.value = 5;
            // @ts-expect-error
            validatable.message = 'message';

        } else {

            let boolean : boolean = validatable.valid;
            // @ts-expect-error
            let value : string = validatable.value;
            let number : number = validatable.value;
            let message : string = validatable.message;
            // @ts-expect-error
            validatable.valid = false;
            // @ts-expect-error
            validatable.valid = true;
            // @ts-expect-error
            validatable.value = 5;
            // @ts-expect-error
            validatable.value = '5';
            // @ts-expect-error
            validatable.message = 'message';
        }
    })


});
