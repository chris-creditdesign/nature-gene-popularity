function Goomba (data) {
		this.totalWidth = data.width ? data.width : 630;
		this.totalHeight = data.height ? data.height : 400;
		this.margin = data.margin ? data.margin : {'top': 0, 'left': 30, 'bottom': 30, 'right': 10};
		this.width = this.totalWidth - this.margin.left - this.margin.right;
		this.height = this.totalHeight - this.margin.top - this.margin.bottom;
		this.data = data.data;
		this.target = data.target ? data.target : "body";
		this.expanded = false;
		this.activeChromosome = 0;
}

export default Goomba;