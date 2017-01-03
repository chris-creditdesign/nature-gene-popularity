function updateAll() {
	var that = this;
	var zooming = true;

	this.updateSVG()
		.updateText()
		.updateAxis();

	// Throttle the showHideText function
	setTimeout(function () {
		if (zooming) {
			that.showHideText();
		}
	}, 500);

}

export default updateAll;