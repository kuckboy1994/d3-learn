function D3netchart () {
	if (typeof arguments[0].elId === 'undefined') {
		console.error('Missing Parameters "elId"');
		return;
	} else {
		this.dom = document.getElementById(arguments[0].elId);
		if (this.dom === null) {
			console.error('Not Find Id ['+arguments[0].elId+'] Element');
		}
	}
	this.title = {
		text: '',
		color: '#3c6c50',
		fontSize: '20px',
		fontWeight: 'bold'
	};
	this.backgroundColor = '#171b20';
	this.lineColor = '#1a2a28';
	this.originBoll = {
		backgroundColor: '#1d232a',
		color: '#38664b',
		borderColor: '#38664b',
		borderWidth: 4,
	};
	this.childBoll = {
		backgroundColor: '#59ce9e',
		color: '#59ce9e',
	};
	this.grandsonBoll = {
		backgroundColor: '#56dad5',
		color: '#56dad5',
	};
	this.width = 1200;  //画布的宽度
	this.height = 900;   //画布的高度
	this.innerRadius = 180;
	this.outerRadius = 320;
	this.init.apply(this, arguments)
}

D3netchart.prototype = {
	init: function (options) {
		var self = this;
		for (var k in options) {
			self[k] = options[k];
		}
		this.dom.style.backgroundColor = this.backgroundColor;
		this.dataCompute();
		self.createSVG();
		self.createInnerCircle();
		self.createOuterCircle();
		self.createRadiationLine();
		self.createOrigin();
		
		self.createOuterBoll();
		self.createInnerBoll();
	},
	dataCompute: function () {
		var childData = []
			grandsonData = []
			lineData = [];
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].title) {
				childData.push(this.data[i].title);
			} else {
				childData.push('');
			}

			if (this.data[i].child) {
				grandsonData.push(this.data[i].child);
				lineData.push(320);
			} else {
				grandsonData.push({});
				lineData.push(180);
			}
		}

		this.childData = childData;
		this.grandsonData = grandsonData;
		this.lineData = lineData;
	},
	createSVG: function () {
		this.svg = d3.select("#"+this.elId)	//选择文档中的body元素
			.append("svg")					//添加一个svg元素
			.attr("preserveAspectRatio", "xMidYMid meet")
			.attr("viewBox", "0 0 "+this.width+" "+this.height);
	},
	createInnerCircle: function () {
		this.svg.selectAll('#' + this.elId + ' .circle_line_2')
				.data([this.innerRadius])
				.enter()
				.append('circle')
				.attr('class', 'circle_line_2')
				.attr('cx', this.width/2)
				.attr('cy', this.height/2)
				.attr('r', function (d, i) {
					return d;
				})
				.attr('fill', 'none')
				.attr('stroke', this.lineColor)
				.attr('stroke-width', 3);
	},
	createOuterCircle: function () {
		this.svg.selectAll('#' + this.elId + ' .circle_line_3')
				.data([this.outerRadius])
				.enter()
				.append('circle')
				.attr('class', 'circle_line_3')
				.attr('cx', this.width/2)
				.attr('cy', this.height/2)
				.attr('r', function (d, i) {
					return d;
				})
				.attr('fill', 'none')
				.attr('stroke', this.lineColor)
				.attr('stroke-width', 3);
	},
	createRadiationLine: function () {
		var self = this;
		self.svg.selectAll('.d3_line')
			.data(self.lineData)
			.enter()
			.append('line')
			.attr('class', 'd3_line')
			.attr('x1', self.width/2)
			.attr('y1', self.height/2)
			.attr('x2', function (d, i) {
				return self.width/2 + d * Math.sin(Math.PI*2*i/self.lineData.length);
			})
			.attr('y2', function (d, i) {
				return self.height/2 - d * Math.cos(Math.PI*2*i/self.lineData.length);
			})
			.attr('stroke', self.lineColor)
			.attr('stroke-width', 2);
	},
	createOrigin: function () {
		var self = this;
		self.svg.selectAll('#' + self.elId + '.d3_boll_1')
			.data([self.title.text])
			.enter()
			.append('circle')
			.attr('class', 'd3_boll_1')
			.attr('cx', self.width/2)
			.attr('cy', self.height/2)
			.attr('r', 70)
			.attr('fill', this.originBoll.backgroundColor)
			.attr('stroke', this.originBoll.borderColor)
			.attr('stroke-width', this.originBoll.borderWidth);

		self.svg.selectAll('d3_boll_1_text')
			.data([self.title.text])
			.enter()
			.append('text')
			.attr('class', 'd3_boll_1_text')
			.attr("x", function(d,i){
				return self.width/2;
			})
			.attr("y",function(d){
				return self.height/2;
			})
			.text(function (d) {
				return d;
			})
			.attr('font-size', '20px')
			.attr('fill', this.originBoll.color)
			.attr('text-anchor', 'middle');
	},
	createInnerBoll: function () {
		var self = this;
		self.svg.selectAll('.d3_boll_2')
			.data(self.childData)
			.enter()
			.append('circle')
			.attr('class', 'd3_boll_2')
			.attr('cx', function (d, i) {
				return self.width/2 + 180 * Math.sin(Math.PI*2*i/self.childData.length);
			})
			.attr('cy', function (d, i) {
				return self.height/2 - 180 * Math.cos(Math.PI*2*i/self.childData.length);
			})
			.attr('r', 30)
			.attr('fill', self.childBoll.backgroundColor);

		self.svg.selectAll('d3_boll_2_text')
			.data(self.childData)
			.enter()
			.append('text')
			.attr('class', 'd3_boll_2_text')
			.attr("x", function(d,i){
				var temp = Math.sin(Math.PI*2*i/self.childData.length);
				if (temp < 0.0001 && temp > -0.0001) {
					return self.width/2 + 180 * temp;
				} else if (temp > 0) {
					return self.width/2 + 180 * temp + 40;
				} else if (temp < 0) {
					return self.width/2 + 180 * temp - 40;
				}
			})
			.attr("y",function(d,i){
				if (Math.abs(Math.cos(Math.PI*2*i/self.childData.length)) === 1) {
					return self.height/2 + 5 - 230 * Math.cos(Math.PI*2*i/self.childData.length);
				}
				return self.height/2 + 5 - 180 * Math.cos(Math.PI*2*i/self.childData.length);
			})
			.attr('title', function (d, i) {
				return d;
			})
			.text(function (d) {
				return d;
			})
			.attr('text-anchor', function (d, i) {
				var temp = Math.sin(Math.PI*2*i/self.childData.length);
				if (temp < 0.0001 && temp > -0.0001) {
					return 'middle';
				} else if (temp > 0) {
					return 'start';
				} else if (temp < 0) {
					return 'end';
				}
			})
			.attr('fill', this.childBoll.color);
	},
	createOuterBoll: function () {
		var self = this;
		self.svg.selectAll('.d3_boll_3')
			.data(self.grandsonData)
			.enter()
			.append('circle')
			.attr('class', 'd3_boll_3')
			.attr('cx', function (d, i) {
				return self.width/2 + 320 * Math.sin(Math.PI*2*i/self.grandsonData.length);
			})
			.attr('cy', function (d, i) {
				return self.height/2 - 320 * Math.cos(Math.PI*2*i/self.grandsonData.length);
			})
			.attr('r', 30)
			.attr('fill', function (d) {
				if (d.subtitle) {
					return self.grandsonBoll.backgroundColor;
				} else {
					return 'none';
				}
			});

		self.svg.selectAll('d3_boll_3_text')
			.data(self.grandsonData)
			.enter()
			.append('text')
			.attr('class', 'd3_boll_3_text')
			.attr("x", function(d,i){
				var temp = Math.sin(Math.PI*2*i/self.grandsonData.length);
				if (temp < 0.0001 && temp > -0.0001) {
					return self.width/2 + 320 * temp;
				} else if (temp > 0) {
					return self.width/2 + 320 * temp + 40;
				} else if (temp < 0) {
					return self.width/2 + 320 * temp - 40;
				}
			})
			.attr("y",function(d,i){
				if (Math.abs(Math.cos(Math.PI*2*i/self.grandsonData.length)) === 1) {
					return self.height/2 + 5 - 370 * Math.cos(Math.PI*2*i/self.grandsonData.length);
				}
				return self.height/2 + 5 - 320 * Math.cos(Math.PI*2*i/self.grandsonData.length);
			})
			.text(function (d, i){
				if (d.subtitle) {
					self.svg.selectAll('d3_boll_3_text_span')
						.data(d.subtitle)
						.enter()
						.append('text')
						.attr('class', 'd3_boll_3_text_span')
						.text(function (d, i) {
							return d;
						})
						.attr('x', function (dd, ii) {
							var temp = Math.sin(Math.PI*2*i/self.grandsonData.length);
							if (temp < 0.0001 && temp > -0.0001) {
								return self.width/2 + 320 * temp;
							} else if (temp > 0) {
								return self.width/2 + 320 * temp + 40;
							} else if (temp < 0) {
								return self.width/2 + 320 * temp - 40;
							}
						})
						.attr('y', function (dd, ii) {
							if (Math.cos(Math.PI*2*i/self.grandsonData.length) === 1) {
								return self.height/2 + 5 - 370 * Math.cos(Math.PI*2*i/self.grandsonData.length) - (ii+1) * 20;
							}
							if (Math.cos(Math.PI*2*i/self.grandsonData.length) === -1) {
								return self.height/2 + 5 - 370 * Math.cos(Math.PI*2*i/self.grandsonData.length) + (ii+1) * 20;
							}
								return self.height/2 + 5 - 320 * Math.cos(Math.PI*2*i/self.grandsonData.length) - (ii+1) * 20;
						})
						.attr('text-anchor', function (dd, ii) {
							var temp = Math.sin(Math.PI*2*i/self.grandsonData.length);
							if (temp < 0.0001 && temp > -0.0001) {
								return 'middle';
							} else if (temp > 0) {
								return 'start';
							} else if (temp < 0) {
								return 'end';
							}
						})
						.attr('fill', self.grandsonBoll.color);
				}
				return d.title;
			})
			.attr('text-anchor', function (d, i) {
				var temp = Math.sin(Math.PI*2*i/self.grandsonData.length);
				if (temp < 0.0001 && temp > -0.0001) {
					return 'middle';
				} else if (temp > 0) {
					return 'start';
				} else if (temp < 0) {
					return 'end';
				}
			})
			.attr('fill', this.grandsonBoll.color);
	}
}