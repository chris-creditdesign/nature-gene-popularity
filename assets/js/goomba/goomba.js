function Goomba (data) {
		this.totalWidth = data.width ? data.width : 630;
		this.totalHeight = data.height ? data.height : 450;
		this.margin = data.margin ? data.margin : {'top': 54, 'left': 96, 'bottom': 54, 'right': 96};
		this.width = this.totalWidth - this.margin.left - this.margin.right;
		this.height = this.totalHeight - this.margin.top - this.margin.bottom;
		this.data = data.data;
		this.target = data.target ? data.target : "body";
		this.duration = 1500;
		this.delay = 100;
		this.year = "1980";
}

export default Goomba;