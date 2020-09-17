import BooleanEqual from "@dikac/t-boolean/equal";
import Callback from "./callback";
import ReadonlyMerge from "./readonly-merge";
export default function Equal(value, type, message) {
    const bs = new Callback([type, value], (values) => BooleanEqual(...values), message);
    return new ReadonlyMerge({ value: value }, bs, bs);
}
//# sourceMappingURL=equal.js.map