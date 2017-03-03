function Goomba (data) {
		this.totalWidth = data.width ? data.width : 630;
		this.totalHeight = data.height ? data.height : 450;
		this.margin = data.margin ? data.margin : {'top': 0, 'left': 50, 'mid': 60, 'bottom': 40, 'right': 10};
		this.brushHeight = data.brushHeight ? data.brushHeight : 50;
		this.handleWidth = data.handleWidth ? data.handleWidth : 10;
		this.width = this.totalWidth - this.margin.left - this.margin.right;
		this.height = this.totalHeight - this.margin.top - this.margin.mid - this.brushHeight - this.margin.bottom;
		this.data = data.data;
		this.target = data.target ? data.target : "body";
		this.expanded = false;
		this.activeChromosome = "1";
}

export default Goomba;