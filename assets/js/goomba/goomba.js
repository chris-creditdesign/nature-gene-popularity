function Goomba (data) {
		this.width = data.width ? data.width : 550;
		this.height = data.height ? data.height : 400;
		this.margin = data.margin ? data.margin : {'top': 30, 'left': 30, 'bottom': 30, 'right': 40};
		this.data = data.data;
		this.target = data.target ? data.target : "body";
}

export default Goomba;