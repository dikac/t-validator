import ValidatorSimple from "../dist/simple";
import ReturnSimple from "../dist/validatable/simple";
import Instance from "../dist/validatable/instance";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', ()=>{


    describe('writable', () => {

        class Test implements ValidatorSimple<unknown, string, Instance<unknown, string>> {

            validate<Argument extends unknown>(value: Argument): ReturnSimple<unknown, Argument, string, Instance<unknown, string>> {

                return <ReturnSimple<unknown, Argument, string, Instance<unknown, string>>> {
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
    });

    describe('type', () => {

        class Test implements ValidatorSimple<unknown, object, Instance<unknown, string>> {

            validate<Argument extends unknown>(value: Argument): ReturnSimple<unknown, Argument, object, Instance<unknown, string>> {

                return <ReturnSimple<unknown, Argument, object, Instance<unknown, string>>> {
                    valid : typeof value === "object",
                    value : value,
                    message : 'message'
                }
            }

        }


        let test = new Test();

        describe('typed', () => {

            let validatable = test.validate(test);

            if(validatable.valid) {

                let value : object = validatable.value;
                let exact : Test = validatable.value;

                let boolean : boolean = validatable.valid;
                let message : string = validatable.message;

            } else {

                let boolean : boolean = validatable.valid;

                let value : object = validatable.value;

                let number : Test = validatable.value;

                let message : string = validatable.message;
            }
        });

        describe('unknown', () => {

            let validatable = test.validate(<unknown>test);

            if(validatable.valid) {

                // @ts-expect-error
                let string : string = validatable.value;

                let value : object = validatable.value;
                // @ts-expect-error
                let exact : Test = validatable.value;

                let boolean : boolean = validatable.valid;

                let message : string = validatable.message;

            } else {

                // @ts-expect-error
                let string : string = validatable.value;

                let boolean : boolean = validatable.valid;

                // @ts-expect-error
                let value : object = validatable.value;

                // @ts-expect-error
                let number : Test = validatable.value;

                let message : string = validatable.message;
            }
        });

    });


    describe('readonly', () => {

        class Test implements ValidatorSimple<unknown, string, Readonly<Instance<unknown, string>>> {

            validate<Argument extends unknown>(value: Argument): ReturnSimple<unknown, Argument, string, Readonly<Instance<unknown, string>>> {

                return <ReturnSimple<unknown, Argument, string, Instance<unknown, string>>> {
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
