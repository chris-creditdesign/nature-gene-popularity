function Goomba (data) {
		this.totalWidth = data.width ? data.width : 630;
		this.totalHeight = data.height ? data.height : 450;
		this.margin = data.margin ? data.margin : {'top': 20, 'left': 60, 'bottom': 40, 'right': 20};
		this.width = this.totalWidth - this.margin.left - this.margin.right;
		this.height = this.totalHeight - this.margin.top - this.margin.bottom;
		this.data = data.data;
		this.target = data.target ? data.target : "body";
}

export default Goomba;