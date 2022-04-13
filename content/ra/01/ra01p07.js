(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1000,
	height: 550,
	fps: 12,
	color: "#999999",
	webfonts: {},
	manifest: [
		{src:"images/Bitmap3.jpg", id:"Bitmap3"},
		{src:"images/texture.jpg", id:"texture"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1110,624);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.instruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAsQgKgFgEgIQgFgJABgLQgBgaARgRQANgPATAAQARAAAKAKQALALAAASQAAAOgHAOQgGAOgMAHQgMAHgMAAQgLAAgIgEgAgGgfQgGADgFAHQgFAHgCAJQgDAHAAAHQAAANAGAHQAHAHAJAAQAFAAADgCQAFgCAFgEIAIgKIAFgMQACgGAAgIQAAgNgHgHQgGgHgKAAQgFAAgGAEg");
	this.shape.setTransform(395.3,520.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgEgKgBgLQAAgNAIgPQAHgOAKgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgLAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_1.setTransform(385.2,520.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnA4QgJgLAAgSQAAgRAIgMQAHgPAKgGQAKgIALABQAPAAAJARIALgzIAPAAIgaB/IgPAAIADgOQgLAQgPAAQgOAAgJgJgAgMgPQgEACgFAHQgFAGgDAHQgCAKAAAHQgBAJACAGQACAGAFADQAFAEAGAAQALAAAGgLQANgPAAgWQgBgJgFgGQgGgHgHAAQgGAAgFADg");
	this.shape_2.setTransform(375.8,518.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_3.setTransform(368.6,518.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAuIgQhbIAQAAIAIAxIADAcIAMgXIAdg2IARAAIg0Bbg");
	this.shape_4.setTransform(362.7,520.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAuIgCg1IAAgTIgJAUIgYA0IgRAAIgJhbIAPAAIAEAqIABAVIABALIAFgOIAFgNIAXgvIAPAAIADAtIABAcIAPgfIAUgqIAQAAIguBbg");
	this.shape_5.setTransform(346.7,520.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAHgOALgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAGAGQAFAHAJAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgKAAgJgEgAgKgcQgJAHgDAOIAxAAIABgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_6.setTransform(334.2,520.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_7.setTransform(327.6,518.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAuIgQhbIAQAAIAIAxIADAcIAMgXIAdg2IARAAIg0Bbg");
	this.shape_8.setTransform(321.7,520.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAsQgKgFgEgIQgEgJAAgLQgBgaARgRQAMgPAUAAQARAAALAKQAJALABASQAAAOgHAOQgGAOgMAHQgNAHgLAAQgKAAgJgEgAgGgfQgGADgFAHQgFAHgCAJQgDAHAAAHQAAANAGAHQAHAHAJAAQAFAAADgCQAFgCAFgEIAHgKIAGgMQACgGAAgIQAAgNgHgHQgGgHgKAAQgFAAgGAEg");
	this.shape_9.setTransform(306.3,520.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSA8QgFgEAAgGIADgPIALg0IgMAAIACgMIANAAIAFgXIAQgLIgIAiIARAAIgEAMIgPAAIgIAyIgDAMQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQACABACABIAIgBIgCAMIgJACQgKAAgFgEg");
	this.shape_10.setTransform(299.4,519);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSA8QgFgEAAgGIADgPIALg0IgNAAIADgMIANAAIAFgXIAQgLIgHAiIAQAAIgEAMIgPAAIgJAyIgCAMQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQACABACABIAIgBIgCAMIgJACQgJAAgGgEg");
	this.shape_11.setTransform(289.4,519);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAnQgKgKAAgSQABgNAFgPQAHgPALgHQALgIANAAQAPAAAIAIQAJAJAAAOIgPABQgBgJgFgFQgFgFgHAAQgIAAgHAGQgIAGgDAMQgFALAAALQABAMAFAGQAFAGAIAAQAFAAAIgGQAHgGAEgMIAQACQgGARgLAJQgLAIgNAAQgOAAgKgJg");
	this.shape_12.setTransform(282.1,520.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAFAGQAHAHAIAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgLAAgIgEgAgKgcQgJAHgDAOIAyAAIAAgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_13.setTransform(272.2,520.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_14.setTransform(265.6,518.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgEgKgBgLQAAgNAIgPQAGgOAMgHQALgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgMAKgOAAQgLAAgIgEgAgKgcQgIAHgFAOIAzAAIAAgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_15.setTransform(258.2,520.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnA5QgOgKAAgZIARgBIAAAEQAAAHAEAHQADAGAIAEQAIADALAAQANAAAIgHQAIgHAAgIQAAgHgEgEQgEgGgTgIQgOgFgGgDQgIgGgEgGQgFgHAAgIQAAgLAGgHQAFgJALgEQAKgEALAAQAQAAALAFQALAGAFAIQAFAJAAAIIAAACIgRACIgBgIQgCgGgEgDQgDgEgHgCQgGgCgIAAQgMAAgIAFQgGAGAAAIQAAAEACAEQADADAGAFIAUAKIATAHQAHAFAEAHQAEAGAAAJQAAAKgHAJQgGAIgLAFQgLAFgNAAQgWAAgOgJg");
	this.shape_16.setTransform(247.6,518.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,0,0,3).p("EAyEAaWIAADtMhkHAAAIAAjtMBkHAAAMAAAg4YMhkHAAAMAAAA4Y");
	this.shape_17.setTransform(320.5,338.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC00").s().p("EgyDAB2IAAjrMBkHAAAIAADrg");
	this.shape_18.setTransform(320.5,518.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,145,643,386.7);


(lib.Turb_basecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.instruction("synched",0);
	this.instance.setTransform(320.4,265.6,1,1,0,0,0,320.4,265.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("EgyBgcHMBkDAAAMAAAA4PMhkDAAAg");
	this.shape.setTransform(320.5,326.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

	// Layer 1
	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(0.3,146.6,0.577,0.577);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,145,642.9,386.7);


(lib.Turb_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.instruction("synched",0);
	this.instance.setTransform(320.4,265.6,1,1,0,0,0,320.4,265.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(0.3,146.6,0.577,0.577);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,145,642.9,386.7);


// stage content:
(lib.ra01p07 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0});

	// timeline functions:
	this.frame_0 = function() {
		/*   Video Template  v1.0 (Jun 2015)
			 Designed for DreamSky Player v4.1+ or Aurora Html5 Player v1.0+
		 	 All rights reserved.
		*/
		
		// Interactive
		
		var normalData = new Object();
		
		// Timeline variables and Functions
		this.outputData = "";
		
		this.saveTemplateData  = function ()
		{
		
			parent.pageControllerAPI.setPrivateData(this.outputData);
		}
		
		this.init  = function(param)
		{
			this.outputData = param;
		}
		
		this.start = function (param) {
			normalData = param;	
			parent.pageControllerAPI.templateReady();
		}
	}
	this.frame_73 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
		
		
		this.btn1.addEventListener("click", btn1Handler.bind(this));
		
		function btn1Handler()
		{          
				pageControllerAPI.showVideo({
		                    title: "Takeoff",
		                    url: "01/video/takeoff.mp4"
		                }); 
		
		}
	}
	this.frame_79 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(73).call(this.frame_73).wait(6).call(this.frame_79).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(80));

	// Layer 1
	this.instance = new lib.Turb_basecopy("single",0);
	this.instance.setTransform(499.6,192.6,1,1,0,0,0,320,256);

	this.btn1 = new lib.Turb_base();
	this.btn1.setTransform(499.6,192.6,1,1,0,0,0,320,256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{mode:"single",loop:undefined}}]}).to({state:[{t:this.instance,p:{mode:"synched",loop:false}}]},68).to({state:[{t:this.btn1}]},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;