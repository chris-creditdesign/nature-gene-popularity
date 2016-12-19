var collisionDetection = function (elem, index, array) {
	// Check all subsequent elements
	// until they are out of reach of this element
	// if they are in reach - set visibility to hidden
	// Only bother checking if this element is visible
	// This should probably be throttled...

	let thisBox = elem.getBBox();
	let rightEdge = thisBox.x + thisBox.width;

	if (!elem.hasAttribute("class")) {
		for (let n = index + 1; n < array.length; n++) {

			let nextBox = array[n].getBBox();
			let leftEdge = nextBox.x;

			if (leftEdge < rightEdge) {
				array[n].setAttribute("class", "hide-svg-text");
			} else {
				break;
			}
		}
		
	}
};

export default collisionDetection;