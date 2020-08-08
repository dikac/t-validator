import Simple from "../dist/simple";
import Validator from "../dist/validator";
import Validatable from "../dist/validatable/instance";
import BaseInfer from "../dist/base/infer";
import TypeInfer from "../dist/type/infer";
import OverloadInfer from "../dist/overload/infer";
import ExtendInfer from "../dist/extend/infer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});



describe('compiler compatibility', () => {

    let simple : Simple<unknown, number, Validatable<unknown, string>>;
    let validator : Validator<unknown, number, Validatable<unknown, string, false>, Validatable<number, string, true>>;


    let base : BaseInfer<Simple<unknown, number, Validatable<unknown, string>>> = <unknown> 1;
    let type : TypeInfer<Simple<unknown, number, Validatable<unknown, string>>> = 1;
    let overload1 : OverloadInfer<Simple<unknown, number, Validatable<unknown, string>>> = {value:1, valid:true, message:'message'};
    let overload2 : OverloadInfer<Simple<unknown, number, Validatable<unknown, string>>> = {value:<unknown>1, valid:false, message:'message'};

    let extend1 : ExtendInfer<Simple<unknown, number, Validatable<unknown, string>>> = {value:1, valid:true, message:'message'};
    // @ts-expect-error
    let extend2 : ExtendInfer<Simple<unknown, number, Validatable<unknown, string>>> = {value:<unknown>1, valid:true, message:'message'};

});
