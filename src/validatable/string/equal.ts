import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Sentences from "@dikac/t-string/message/sentences";
import SafeCast from "@dikac/t-string/safe-cast";

export default function Equal(
    object : Validatable & Value<[unknown, unknown]>
) : string {

    const sentence = new Sentences(object.valid);

    sentence.subject.push(`'${SafeCast(object.value[0])}'`);

    sentence.reject = ['is not'];
    sentence.accept = ['is'];
    sentence.expect = ['equal to', `'${SafeCast(object.value[1])}'`];
    return sentence.message;
}
