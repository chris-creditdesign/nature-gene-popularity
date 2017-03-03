import * as _request from "d3-request";
import * as _selection from "d3-selection";
import * as _scale from "d3-scale";
import * as _array from "d3-array";
import * as _axis from  "d3-axis";
import * as _zoom from "d3-zoom";
import * as _format from "d3-format";
import * as _brush from "./lib/brush";
import completeAssign from "./helpers/complete-assign";

// Don't use Object.assign because the event property is a getter ie:
// `get event () { return event; },`
// Object.assign will compute the return value now (before any event is fired)
// so d3.event will always be null  ie.
// `var d3 = Object.assign({}, _request, _selection, _scale, _array, _axis, _zoom);`

// instead use completeAssign:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
var d3 = completeAssign({}, _request, _selection, _scale, _array, _axis, _zoom, _format, _brush);

export default d3;
