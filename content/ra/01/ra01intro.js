(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1000,
	height: 550,
	fps: 12,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/b737_max_cockpit_intro_con_boeing.png", id:"b737_max_cockpit_intro_con_boeing"},
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



(lib.b737_max_cockpit_intro_con_boeing = function() {
	this.initialize(img.b737_max_cockpit_intro_con_boeing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1470,1754);


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


(lib.cockpitimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b737_max_cockpit_intro_con_boeing();
	this.instance.setTransform(-257.2,-306.9,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.2,-306.9,514.5,613.9);


(lib.bulletgrey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#21292E").s().p("AgTABIgkg+IBvA+IhqA9g");
	this.shape.setTransform(4.1,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-2.4,11.4,12.6);


(lib.point3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bulletgrey("synched",0);
	this.instance.setTransform(-24.1,84.8,1,1,0,0,0,4.9,4.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape.setTransform(398.7,86.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_1.setTransform(391.7,84.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgJQgHAJAAAPQAAARAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgIgJgBQgJABgIAIg");
	this.shape_2.setTransform(384.9,84.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghApQgIgIAAgLQgBgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAKAAQALAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_3.setTransform(374.7,86.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_4.setTransform(367.7,84.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_5.setTransform(363.7,84.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghApQgIgIAAgLQgBgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAKAAQALAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_6.setTransform(356.7,86.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_7.setTransform(347.2,86.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_8.setTransform(337.7,86.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQADgEALAAIAPABIgCAPIgKgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_9.setTransform(325.6,84.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_10.setTransform(320.7,84.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAOQAFgCACgEQABgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgDAGQgEAGgFADg");
	this.shape_11.setTransform(311.2,91.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_12.setTransform(303.7,86);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_13.setTransform(293.7,86.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_14.setTransform(286.7,84.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_15.setTransform(282.3,84.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_16.setTransform(274.7,86.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_17.setTransform(265.5,86.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_18.setTransform(258.7,84.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQABATAHAIQAIAJAIAAQAKAAAIgJQAGgIABgSQgBgRgGgJQgIgIgLgBQgIABgHAIg");
	this.shape_19.setTransform(251.4,84.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_20.setTransform(241.7,86);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_21.setTransform(234.7,84.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgOQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAATAHAIQAHAJAJAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgIgLgBQgJABgGAIg");
	this.shape_22.setTransform(222.4,84.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_23.setTransform(212.7,86.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_24.setTransform(202.7,86.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAFgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIABgRQgBgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_25.setTransform(193,87.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_26.setTransform(183.1,86.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAIAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_27.setTransform(176.4,86);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_28.setTransform(170.7,84.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_29.setTransform(163.7,86.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_30.setTransform(148.7,86.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_31.setTransform(141.7,84.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgJQgHAJAAAPQAAARAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgIgJgBQgJABgIAIg");
	this.shape_32.setTransform(134.9,84.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_33.setTransform(124.7,86.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_34.setTransform(117.7,84.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_35.setTransform(113.7,84.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_36.setTransform(106.7,86.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_37.setTransform(99.4,86);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_38.setTransform(85.7,86.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQABgEAAgQQgLAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgFAJgJAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_39.setTransform(70.4,87.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_40.setTransform(60.7,86);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_41.setTransform(53.7,84.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_42.setTransform(47.3,88);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQAEgEAKAAIAPABIgCAPIgKgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_43.setTransform(40.6,84.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_44.setTransform(35.7,84.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_45.setTransform(31.3,84.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_46.setTransform(23.7,86);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_47.setTransform(13.7,86.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJAAAQQgBATAIAIQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgIgLgBQgIABgIAIg");
	this.shape_48.setTransform(3.4,84.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_49.setTransform(-3.7,84.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,72.5,658.9,24.1);


(lib.point2_indent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bulletgrey("synched",0);
	this.instance.setTransform(25.9,73.4,1,1,0,0,0,4.9,4.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape.setTransform(583.7,74);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_1.setTransform(573.7,74.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_2.setTransform(566.7,72.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_3.setTransform(562.3,72.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_4.setTransform(557.7,72.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgNQAAgPAFgJQAEgLAKgHQAJgFALgBQAHAAAHAEQAGAEAFAGIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAASAIAIQAHAJAJAAQAKAAAHgIQAIgJAAgSQAAgRgIgIQgHgKgLABQgIgBgIAKg");
	this.shape_5.setTransform(550.4,72.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_6.setTransform(540.7,74);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_7.setTransform(530.7,74.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_8.setTransform(521.5,74.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgNQAAgPAFgJQAFgLAJgHQAJgFALgBQAHAAAHAEQAGAEAFAGIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAASAIAIQAHAJAJAAQAKAAAHgIQAIgJAAgSQAAgRgIgIQgHgKgLABQgIgBgIAKg");
	this.shape_9.setTransform(506.4,72.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_10.setTransform(496.7,74.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_11.setTransform(486.7,74.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAKAGQAJAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_12.setTransform(477,75.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_13.setTransform(467.1,74.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_14.setTransform(460.4,74);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_15.setTransform(454.7,72.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADgBAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_16.setTransform(447.7,74.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_17.setTransform(432.7,74.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_18.setTransform(425.7,72.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJAAAIAEQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgKgJABQgJgBgIAKg");
	this.shape_19.setTransform(418.9,72.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_20.setTransform(408.7,74.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_21.setTransform(401.7,72.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_22.setTransform(397.7,72.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_23.setTransform(390.7,74.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_24.setTransform(383.4,74);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_25.setTransform(374.7,74);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_26.setTransform(364.6,74.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_27.setTransform(349.7,74);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADgBAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_28.setTransform(339.7,74.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAGQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgOAOAAQAKABAIAEQAIADADAIQADAHABAMIAAA7g");
	this.shape_29.setTransform(324.7,72.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_30.setTransform(317.3,72.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_31.setTransform(312.7,72.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgeBbg");
	this.shape_32.setTransform(304.2,74.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgNQAAgPAFgJQAFgLAJgHQAJgFALgBQAHAAAGAEQAHAEAFAGIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABASAHAIQAIAJAIAAQAKAAAIgIQAGgJABgSQgBgRgGgIQgIgKgLABQgIgBgHAKg");
	this.shape_33.setTransform(287.4,72.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_34.setTransform(277.7,74.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_35.setTransform(270.3,72.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_36.setTransform(262.7,74.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgsIAAgTIAPAAIAAATg");
	this.shape_37.setTransform(255.7,72.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_38.setTransform(249.5,74.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_39.setTransform(239.7,74.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_40.setTransform(230.1,74.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_41.setTransform(221.1,74.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_42.setTransform(211.7,74.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_43.setTransform(197.1,74.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_44.setTransform(190.3,72.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAIAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_45.setTransform(185.4,74);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_46.setTransform(176.7,74.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_47.setTransform(169.7,72.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_48.setTransform(162.7,74.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_49.setTransform(147.7,74.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgGADgDAGQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgOAOAAQALABAHAEQAIADADAIQAEAHgBAMIAAA7g");
	this.shape_50.setTransform(137.7,72.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_51.setTransform(130.3,72.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgKgOAAgRQAAgNAEgMQAFgLAJgGQAJgGAMAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgIgJgKAAQgIAAgIAJg");
	this.shape_52.setTransform(117.4,75.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_53.setTransform(107.7,74);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_54.setTransform(100.7,72.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFACgIQACgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAOAAIAABPQABAVgFAKQgFAJgJAFQgJAFgNAAQgRAAgJgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_55.setTransform(93.4,75.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQACgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_56.setTransform(83.7,74.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_57.setTransform(73.7,74);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_58.setTransform(63.7,74.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgOAAIgkhrIAABrIgRAAIAAh/IAaAAIAeBaIAEASIAHgUIAfhYIAXAAIAAB/g");
	this.shape_59.setTransform(51.2,72.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.4,60.5,581.8,24.1);


(lib.point1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bulletgrey("synched",0);
	this.instance.setTransform(-29,55.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape.setTransform(706.3,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_1.setTransform(696.3,62.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_2.setTransform(689.4,60.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_3.setTransform(684.9,60.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_4.setTransform(680.4,60.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgIAAgHAJg");
	this.shape_5.setTransform(673,60.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_6.setTransform(663.3,62);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_7.setTransform(653.3,62.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_8.setTransform(644.1,62.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQgBgSgHgIQgHgJgLAAQgJAAgHAJg");
	this.shape_9.setTransform(629,60.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_10.setTransform(619.3,62.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_11.setTransform(609.3,62.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_12.setTransform(599.6,63.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_13.setTransform(589.8,62.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_14.setTransform(583.1,62);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_15.setTransform(577.4,60.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_16.setTransform(570.3,62.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_17.setTransform(555.3,62.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_18.setTransform(548.3,60.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgIQgHAIAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_19.setTransform(541.6,60.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_20.setTransform(531.3,62.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_21.setTransform(524.4,60.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_22.setTransform(520.3,60.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgJAAgHAHg");
	this.shape_23.setTransform(513.3,62.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_24.setTransform(506.1,62);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_25.setTransform(497.3,62);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_26.setTransform(487.3,62.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_27.setTransform(472.3,62);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_28.setTransform(462.3,62.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgGAGgEQADgEALAAIAPABIgCAPIgKgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_29.setTransform(450.3,60.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_30.setTransform(442.3,62.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_31.setTransform(427.8,62.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_32.setTransform(420.9,60.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_33.setTransform(414.1,62.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMABAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_34.setTransform(404.3,62.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgGAGgEQADgEALAAIAPABIgCAPIgKgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_35.setTransform(397.3,60.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgGAGgEQAEgEAKAAIAPABIgCAPIgKgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_36.setTransform(392.6,60.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_37.setTransform(384.7,62.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABIIAjglIAUAAIgiAhIAmA7g");
	this.shape_38.setTransform(370.8,60.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_39.setTransform(361.5,62.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_40.setTransform(351.7,62.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgIAAgHAJg");
	this.shape_41.setTransform(341.4,60.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_42.setTransform(329.3,60.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQAKAAAIAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_43.setTransform(321.7,60.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgKgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_44.setTransform(311.4,63.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_45.setTransform(304.7,60.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_46.setTransform(300.7,60.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgGAGgEQAEgEAKAAIAPABIgDAPIgJgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_47.setTransform(296.6,60.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_48.setTransform(283.4,60.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_49.setTransform(273.7,62);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACAEAFQADAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_50.setTransform(263.7,62.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_51.setTransform(249.1,62.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_52.setTransform(239.7,62);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_53.setTransform(229.7,62.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_54.setTransform(222.7,60.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_55.setTransform(218.3,60.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_56.setTransform(210.7,62.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_57.setTransform(201.5,62.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_58.setTransform(194.7,60.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_59.setTransform(187.4,60.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_60.setTransform(177.7,62);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_61.setTransform(170.7,60.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_62.setTransform(158.7,62.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_63.setTransform(151.7,60.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgIQgHAIAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_64.setTransform(144.9,60.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_65.setTransform(137.7,60.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_66.setTransform(131.1,62.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_67.setTransform(122.1,62.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_68.setTransform(112.7,62.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAFgHAHgEQAGgDAHAAQANAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIABgRQgBgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_69.setTransform(103,63.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgbA7QgKgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgSAAgLgOQgLgOABgRQgBgNAFgMQAFgLAJgGQAKgGALAAQAPAAALANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgLgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_70.setTransform(87.4,63.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_71.setTransform(77.7,62);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_72.setTransform(70.7,60.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgoAuIAAgNIA6hCIgSABIgkAAIAAgNIBKAAIAAAKIgwA6IgKAKIAUAAIApAAIAAANg");
	this.shape_73.setTransform(64.2,62.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_74.setTransform(57.7,60.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_75.setTransform(50.7,62);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAKAAAGgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQABAVgFAKQgEAJgKAFQgKAFgMAAQgQAAgKgHgAgQgrQgHAIgBARQABASAHAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_76.setTransform(40.4,63.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_77.setTransform(30.7,62.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_78.setTransform(21.5,62.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_79.setTransform(11.7,62.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAKQgJAHgSACQAGADAEAEQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_80.setTransform(0.8,60.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,48.5,828.6,24.1);


(lib.introbackground_Generic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#263746").s().p("EhOHAGqIAAtUMCcPAAAIAALgIAAB0g");
	this.shape.setTransform(0,-204.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhOHAq+MAAAhV7MCcPAAAMAAABV7g");

	// cockpit
	this.instance = new lib.cockpitimg("synched",0);
	this.instance.setTransform(275.3,21.1);
	this.instance.alpha = 0.078;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Blue BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEBEB").s().p("EhOHAq+MAACg0UIgCAAMAAAghnMCcPAAAMAAABV7g");

	this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-275,1000,550);


// stage content:
(lib.ra01intro = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0});

	// timeline functions:
	this.frame_0 = function() {
		/*   Normal Template  v1.0 (Jun 2015)
			 Designed for DreamSky Player v4.1+ or Aurora Html5 Player v1.0+
		 	 All rights reserved.
		*/
		
		var normalData = new Object();
		
		// Timeline variables and Functions
		this.outputData = "";
		this.saveTemplateData  = function (){
		
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
	this.frame_216 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(216).call(this.frame_216).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(217));

	// t3
	this.instance = new lib.point3("synched",0);
	this.instance.setTransform(210.2,228.6,1,1,0,0,0,97,12.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(162).to({_off:false},0).to({alpha:1},5).wait(50));

	// t2
	this.instance_1 = new lib.point2_indent("synched",0);
	this.instance_1.setTransform(160.2,190.6,1,1,0,0,0,97,12.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(106).to({_off:false},0).to({alpha:1},5).wait(106));

	// t1
	this.instance_2 = new lib.point1("synched",0);
	this.instance_2.setTransform(246.8,152.6,1,1,0,0,0,133.6,12.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({alpha:1},5).wait(188));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3E5F9").s().p("AgBBDQgGgDgCgFQgCgFAAgQIAAg5IgNAAIAAgOIANAAIAAgaIAQgKIAAAkIARAAIAAAOIgRAAIAAA6IABAKQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIAHgBIADAQIgNABQgKAAgDgDg");
	this.shape.setTransform(387.5,87.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3E5F9").s().p("AAYA1IAAg9QAAgMgCgEQgCgGgFgDQgFgDgHAAQgKgBgIAIQgIAHAAAUIAAA3IgSAAIAAhmIAQAAIAAAPQAMgRATAAQAKAAAIADQAHADAEAFQAEAGACAIIABARIAAA+g");
	this.shape_1.setTransform(379,89.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3E5F9").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_2.setTransform(367.9,89.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3E5F9").s().p("AA0A1IAAhAQAAgKgBgFQgCgEgEgDQgFgDgGAAQgLgBgHAIQgHAHAAAQIAAA7IgQAAIAAhCQAAgLgEgHQgFgFgJAAQgIAAgGADQgGAEgDAIQgDAHAAAOIAAA1IgSAAIAAhmIAQAAIAAAPQAFgJAIgEQAIgEALAAQALAAAIAEQAFAFADAJQAMgSAUAAQAPAAAJAIQAIAIAAATIAABFg");
	this.shape_3.setTransform(354.1,89.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3E5F9").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_4.setTransform(340.2,89.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E5F9").s().p("AgeBBQgLgIAAgRIARADQABAHAFAEQAHAFALAAQAKAAAHgFQAHgFACgIQABgGAAgRQgLAOgQAAQgVAAgMgQQgLgPAAgUQAAgPAFgMQAFgNALgGQAKgIANABQARgBAMAQIAAgNIAQAAIAABXQAAAZgFAKQgFAKgKAGQgLAFgOAAQgSAAgMgIgAgSgwQgIAJAAATQAAAUAIAIQAIAJAKAAQAMAAAIgJQAJgIAAgTQAAgUgJgJQgIgKgMAAQgKAAgIAKg");
	this.shape_5.setTransform(328.8,91.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3E5F9").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_6.setTransform(317.9,89.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3E5F9").s().p("AAYA1IAAg9QAAgMgCgEQgCgGgFgDQgFgDgHAAQgKgBgIAIQgIAHAAAUIAAA3IgSAAIAAhmIAQAAIAAAPQAMgRATAAQAKAAAIADQAHADAEAFQAEAGACAIIABARIAAA+g");
	this.shape_7.setTransform(306.9,89.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3E5F9").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_8.setTransform(295.7,89.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3E5F9").s().p("AAxBHIAAh2IgpB2IgPAAIgqh4IAAB4IgSAAIAAiNIAdAAIAhBjIAFAWIAIgYIAihhIAaAAIAACNg");
	this.shape_9.setTransform(281.9,87.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3E5F9").s().p("AgWBBQgKgHgGgMQgGgMABgQQAAgQAEgKQAGgNAKgHQAKgGANAAQAHAAAIAEQAHAEAFAGIAAgzIASAAIAACNIgRAAIAAgNQgKAPgSAAQgMAAgKgHgAgRgKQgJAJABATQAAAUAIAKQAIAKAKAAQALAAAIgKQAJgJgBgUQAAgTgIgKQgIgKgMAAQgKAAgHAKg");
	this.shape_10.setTransform(262.2,87.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3E5F9").s().p("AAYA1IAAg9QAAgMgCgEQgCgGgFgDQgFgDgHAAQgKgBgIAIQgIAHAAAUIAAA3IgSAAIAAhmIAQAAIAAAPQAMgRATAAQAKAAAIADQAHADAEAFQAEAGACAIIABARIAAA+g");
	this.shape_11.setTransform(251.4,89.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3E5F9").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_12.setTransform(240.2,89.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3E5F9").s().p("AAYA1IAAg9QAAgMgCgEQgCgGgFgDQgFgDgHAAQgKgBgIAIQgIAHAAAUIAAA3IgSAAIAAhmIAQAAIAAAPQAMgRATAAQAKAAAIADQAHADAEAFQAEAGACAIIABARIAAA+g");
	this.shape_13.setTransform(223.6,89.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3E5F9").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_14.setTransform(212.5,89.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B3E5F9").s().p("AgHBHIAAhlIAPAAIAABlgAgHgyIAAgUIAPAAIAAAUg");
	this.shape_15.setTransform(204.8,87.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3E5F9").s().p("AgBBDQgGgDgCgFQgCgFAAgQIAAg5IgNAAIAAgOIANAAIAAgaIAQgKIAAAkIARAAIAAAOIgRAAIAAA6IABAKQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIAHgBIADAQIgNABQgKAAgDgDg");
	this.shape_16.setTransform(199.9,87.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3E5F9").s().p("AgHBHIAAhlIAPAAIAABlgAgHgyIAAgUIAPAAIAAAUg");
	this.shape_17.setTransform(194.8,87.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3E5F9").s().p("AAYA1IAAg9QAAgMgCgEQgCgGgFgDQgFgDgHAAQgKgBgIAIQgIAHAAAUIAAA3IgSAAIAAhmIAQAAIAAAPQAMgRATAAQAKAAAIADQAHADAEAFQAEAGACAIIABARIAAA+g");
	this.shape_18.setTransform(187,89.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B3E5F9").s().p("AgeBBQgLgIAAgRIARADQABAHAFAEQAHAFALAAQAKAAAHgFQAHgFACgIQABgGAAgRQgLAOgQAAQgVAAgMgQQgLgPAAgUQAAgPAFgMQAFgNALgGQAKgIANABQARgBAMAQIAAgNIAQAAIAABXQAAAZgFAKQgFAKgKAGQgLAFgOAAQgSAAgMgIgAgSgwQgIAJAAATQAAAUAIAIQAIAJAKAAQAMAAAIgJQAJgIAAgTQAAgUgJgJQgIgKgMAAQgKAAgIAKg");
	this.shape_19.setTransform(175.6,91.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B3E5F9").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_20.setTransform(164.8,89.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B3E5F9").s().p("AgeAoQgNgOgBgaQABgPAFgNQAGgMALgGQALgHALAAQASAAAKAJQALAIADAQIgRADQgDgLgGgFQgGgFgIAAQgMAAgJAJQgHAKgBATQABAUAHAKQAIAJALAAQALAAAGgGQAIgHABgNIARADQgCARgMALQgLAKgSAAQgTAAgMgOg");
	this.shape_21.setTransform(154.6,89.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3E5F9").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_22.setTransform(143.7,89.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B3E5F9").s().p("AAnBHIgTgeIgOgTQgFgIgCgCQgFgDgEgBIgLgBIgWAAIAABAIgTAAIAAiNIA+AAQATAAAKAEQAKADAGAKQAGAKAAAMQAAAPgKAKQgKAJgUADQAHAEAEADQAIAHAIAMIAZAngAgrgHIApAAQALAAAHgCQAIgDAEgGQADgGAAgHQAAgKgHgHQgHgGgQAAIgsAAg");
	this.shape_23.setTransform(131.6,87.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B3E5F9").s().p("AgJAQQAFgCADgFQABgFAAgHIgIAAIAAgUIASAAIAAAUQAAAJgEAHQgEAHgGAEg");
	this.shape_24.setTransform(115.3,95.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B3E5F9").s().p("AAUAzIgRg8IgDgSIgUBOIgSAAIgghlIATAAIAQA5IAGAXIAGgWIAQg6IAQAAIAQA6IAFAUIAGgUIASg6IARAAIghBlg");
	this.shape_25.setTransform(106.4,89.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B3E5F9").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_26.setTransform(93.7,89.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3E5F9").s().p("AgHBHIAAhlIAPAAIAABlgAgHgyIAAgUIAPAAIAAAUg");
	this.shape_27.setTransform(85.9,87.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B3E5F9").s().p("AgGAzIgohlIASAAIAXA8IAFAVIAGgUIAXg9IASAAIgnBlg");
	this.shape_28.setTransform(78.7,89.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B3E5F9").s().p("AgbA1IAAhmIAQAAIAAAQQAGgMAFgDQADgDAHAAQAIAAAKAFIgGAQQgHgDgGAAQgGAAgDADQgEAEgCAFQgDAKAAALIAAA1g");
	this.shape_29.setTransform(71.2,89.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B3E5F9").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_30.setTransform(61.5,89.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B3E5F9").s().p("AgHAzIgnhlIATAAIAWA8IAFAVIAGgUIAXg9IASAAIgnBlg");
	this.shape_31.setTransform(51,89.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B3E5F9").s().p("AgjA/QgQgJgHgRQgJgRAAgTQAAghATgVQATgTAdgBQAUABAPAJQARAJAIARQAIARAAAUQAAAVgJASQgIARgRAIQgPAJgTAAQgSAAgRgKgAgggrQgPAOgBAeQABAaAOAPQAOAPATAAQAVAAAOgPQAOgPAAgbQAAgQgHgNQgFgNgMgHQgLgHgOAAQgTgBgNAOg");
	this.shape_32.setTransform(38.2,87.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhSBkIAAjHIBGAAQAVAAANADQAQAEAMALQAQANAJAVQAHAVABAaQAAAVgGASQgGASgHALQgJAMgKAGQgKAHgOADQgOAEgQAAgAg3BMIArAAQASAAALgEQALgDAHgHQAKgJAFgQQAFgQAAgVQAAgfgLgRQgJgRgPgGQgLgEgWAAIgqAAg");
	this.shape_33.setTransform(878.4,56.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhJBkIAAjHICPAAIAAAYIh1AAIAAA9IBtAAIAAAWIhtAAIAABEIB5AAIAAAYg");
	this.shape_34.setTransform(858.9,56.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhJBkIAAjHICPAAIAAAYIh1AAIAAA9IBtAAIAAAWIhtAAIAABEIB5AAIAAAYg");
	this.shape_35.setTransform(840.2,56.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhLBkIAAjHIBLAAQASAAALACQAPADAKAHQAKAHAGAMQAGAMAAAPQAAAagQAQQgQARgrAAIgyAAIAABSgAgxgDIAyAAQAaAAALgKQAKgKAAgRQAAgMgFgJQgHgJgKgDQgHgCgSAAIgyAAg");
	this.shape_36.setTransform(821.6,56.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgmBfQgTgIgKgQQgLgQAAgUIAZgCQACAPAGAKQAHAJANAHQAOAFAPAAQAPAAAMgEQALgFAGgHQAGgIAAgKQAAgJgGgHQgFgHgNgFQgIgDgZgHQgcgGgLgEQgOgIgHgLQgIgLAAgOQAAgPAJgNQAJgNAQgHQARgHAUAAQAUAAARAHQARAHAKAOQAJAOAAASIgZACQgCgTgMgKQgMgKgWAAQgXAAgLAJQgLAJAAAMQAAALAIAHQAIAHAeAHQAgAIAMAFQASAGAIANQAIAMAAAQQAAAQgJAOQgJAOgRAIQgRAIgWAAQgZAAgSgIg");
	this.shape_37.setTransform(802.3,56.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA3BkIgbgqIgTgcQgIgJgEgEQgGgEgGgBIgOgBIgfAAIAABZIgbAAIAAjHIBXAAQAbAAAOAGQAOAFAIAOQAIANAAARQAAAVgNAPQgOANgdAEQALAFAFAFQAMAKAKAQIAjA3gAg8gKIA5AAQAQAAAKgEQAKgEAGgIQAFgIAAgKQAAgOgKgJQgKgKgXAAIg9AAg");
	this.shape_38.setTransform(783.9,56.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMBkIAAjHIAZAAIAADHg");
	this.shape_39.setTransform(769,56.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AA/BkIgXg9IhSAAIgWA9IgcAAIBNjHIAaAAIBSDHgAgMgnIgWA4IBCAAIgVg1IgNgqQgDAUgHATg");
	this.shape_40.setTransform(755.7,56.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhJBkIAAjHICPAAIAAAYIh1AAIAAA9IBtAAIAAAWIhtAAIAABEIB5AAIAAAYg");
	this.shape_41.setTransform(731.1,56.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag9BkIAAjHIAbAAIAACvIBgAAIAAAYg");
	this.shape_42.setTransform(714.2,56.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhKBkIAAjHIBKAAQAWAAAOAGQAOAGAIANQAHANAAAOQAAAMgHAMQgHALgOAHQATAFAJALQAKANAAASQAAAOgGAMQgGAMgJAGQgIAHgNADQgOAEgTAAgAgwBMIAwAAIASgBQAJgBAHgEQAGgEAEgHQAEgIAAgJQAAgMgGgIQgGgIgKgDQgKgEgRAAIgvAAgAgwgOIAsAAQAPAAAIgDQAKgDAFgHQAFgHAAgKQAAgKgEgIQgFgHgJgDQgJgDgUAAIgoAAg");
	this.shape_43.setTransform(696.8,56.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AA/BkIgXg9IhSAAIgWA9IgcAAIBNjHIAaAAIBSDHgAgMgnIgWA4IBCAAIgVg1IgNgqQgDAUgHATg");
	this.shape_44.setTransform(677.8,56.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgMBkIAAjHIAZAAIAADHg");
	this.shape_45.setTransform(664.6,56.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag9BkIAAjHIAbAAIAACvIBgAAIAAAYg");
	this.shape_46.setTransform(653.5,56.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhJBkIAAjHICPAAIAAAYIh1AAIAAA9IBtAAIAAAWIhtAAIAABEIB5AAIAAAYg");
	this.shape_47.setTransform(636.1,56.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AA3BkIgbgqIgTgcQgIgJgEgEQgGgEgGgBIgOgBIgfAAIAABZIgbAAIAAjHIBXAAQAbAAAOAGQAOAFAIAOQAIANAAARQAAAVgNAPQgOANgdAEQALAFAFAFQAMAKAKAQIAjA3gAg8gKIA5AAQAQAAAKgEQAKgEAGgIQAFgIAAgKQAAgOgKgJQgKgKgXAAIg9AAg");
	this.shape_48.setTransform(617.3,56.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AA/BkIgXg9IhSAAIgWA9IgcAAIBNjHIAaAAIBSDHgAgMgnIgWA4IBCAAIgVg1IgNgqQgDAUgHATg");
	this.shape_49.setTransform(590.6,56.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgrBbQgYgNgMgYQgMgYAAgeQAAgbAMgZQAMgZAXgNQAXgMAcAAQAWAAARAHQASAHAKANQAKAMAFAUIgYAHQgEgPgHgJQgHgJgMgFQgNgFgPAAQgQAAgNAFQgOAGgIAJQgIAJgEALQgIASAAAVQAAAaAJASQAJASASAIQASAJASAAQARAAAQgGQARgHAIgIIAAglIg7AAIAAgVIBVgBIAABJQgUAPgUAIQgVAIgWAAQgbAAgZgMg");
	this.shape_50.setTransform(564,56.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAzBkIhnicIAACcIgZAAIAAjHIAbAAIBnCcIAAicIAZAAIAADHg");
	this.shape_51.setTransform(543.1,56.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgMBkIAAjHIAZAAIAADHg");
	this.shape_52.setTransform(529.2,56.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAzBkIhnicIAACcIgZAAIAAjHIAbAAIBnCcIAAicIAZAAIAADHg");
	this.shape_53.setTransform(515.1,56.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMBkIAAjHIAZAAIAADHg");
	this.shape_54.setTransform(501.2,56.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("ABFBkIAAimIg6CmIgWAAIg5ipIAACpIgaAAIAAjHIAnAAIAwCMIAIAeIALggIAviKIAkAAIAADHg");
	this.shape_55.setTransform(485.6,56.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AA3BkIgbgqIgTgcQgIgJgEgEQgGgEgGgBIgOgBIgfAAIAABZIgbAAIAAjHIBXAAQAbAAAOAGQAOAFAIAOQAIANAAARQAAAVgNAPQgOANgdAEQALAFAFAFQAMAKAKAQIAjA3gAg8gKIA5AAQAQAAAKgEQAKgEAGgIQAFgIAAgKQAAgOgKgJQgKgKgXAAIg9AAg");
	this.shape_56.setTransform(464.8,56.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhJBkIAAjHICPAAIAAAYIh1AAIAAA9IBtAAIAAAWIhtAAIAABEIB5AAIAAAYg");
	this.shape_57.setTransform(444.7,56.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgMBkIAAivIhCAAIAAgYICdAAIAAAYIhDAAIAACvg");
	this.shape_58.setTransform(426.6,56.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhJBkIAAjHICPAAIAAAYIh1AAIAAA9IBtAAIAAAWIhtAAIAABEIB5AAIAAAYg");
	this.shape_59.setTransform(409,56.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhSBkIAAjHIBGAAQAVAAANADQAQAEAMALQAQANAJAVQAHAVABAaQAAAVgGASQgFASgJALQgIAMgKAGQgKAHgOADQgOAEgQAAgAg3BMIArAAQASAAALgEQALgDAHgHQAJgJAGgQQAFgQAAgVQAAgfgLgRQgJgRgPgGQgLgEgWAAIgqAAg");
	this.shape_60.setTransform(389.6,56.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgkAMIAAgXIBJAAIAAAXg");
	this.shape_61.setTransform(366.7,59.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AhJBkIAAjHICPAAIAAAYIh1AAIAAA9IBtAAIAAAWIhtAAIAABEIB5AAIAAAYg");
	this.shape_62.setTransform(345.2,56.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ag9BkIAAjHIAaAAIAACvIBhAAIAAAYg");
	this.shape_63.setTransform(328.3,56.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhKBkIAAjHIBKAAQAWAAAOAGQAOAGAIANQAHANAAAOQAAAMgHAMQgHALgOAHQATAFAJALQAKANAAASQAAAOgGAMQgGAMgJAGQgIAHgNADQgOAEgTAAgAgwBMIAwAAIASgBQAJgBAHgEQAGgEAEgHQAEgIAAgJQAAgMgGgIQgGgIgKgDQgKgEgRAAIgvAAgAgwgOIAsAAQAPAAAIgDQAKgDAFgHQAFgHAAgKQAAgKgEgIQgFgHgJgDQgJgDgUAAIgoAAg");
	this.shape_64.setTransform(310.9,56.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AA/BkIgXg9IhSAAIgWA9IgcAAIBNjHIAaAAIBSDHgAgMgnIgWA4IBCAAIgVg1IgNgqQgDAUgHATg");
	this.shape_65.setTransform(291.9,56.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgMBkIAAjHIAZAAIAADHg");
	this.shape_66.setTransform(278.7,56.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Ag9BkIAAjHIAaAAIAACvIBhAAIAAAYg");
	this.shape_67.setTransform(267.5,56.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhJBkIAAjHICPAAIAAAYIh1AAIAAA9IBtAAIAAAWIhtAAIAABEIB5AAIAAAYg");
	this.shape_68.setTransform(250.2,56.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AA3BkIgbgqIgTgcQgIgJgEgEQgGgEgGgBIgOgBIgfAAIAABZIgbAAIAAjHIBXAAQAbAAAOAGQAOAFAIAOQAIANAAARQAAAVgNAPQgOANgdAEQALAFAFAFQAMAKAKAQIAjA3gAg8gKIA5AAQAQAAAKgEQAKgEAGgIQAFgIAAgKQAAgOgKgJQgKgKgXAAIg9AAg");
	this.shape_69.setTransform(231.3,56.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAzBkIhnicIAACcIgZAAIAAjHIAbAAIBnCcIAAicIAZAAIAADHg");
	this.shape_70.setTransform(210.1,56.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgsBcQgSgKgIgSQgHgTAAgfIAAhzIAaAAIAAByQAAAaAFANQAFAMAMAHQAMAGARAAQAbAAAMgNQANgNAAgmIAAhyIAaAAIAABzQAAAdgGASQgHASgSAMQgSAKgdABQgagBgSgJg");
	this.shape_71.setTransform(190,57.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhRBkIAAjHIBEAAQAWAAAMADQASAEAMALQAQANAHAVQAJAVgBAaQAAAVgFASQgFASgJALQgIAMgKAGQgKAHgOADQgOAEgQAAgAg3BMIArAAQARAAAMgEQAMgDAGgHQAKgJAFgQQAFgQAAgVQAAgfgKgRQgLgRgPgGQgKgEgWAAIgqAAg");
	this.shape_72.setTransform(162.4,56.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AhJBkIAAjHICPAAIAAAYIh1AAIAAA9IBtAAIAAAWIhtAAIAABEIB5AAIAAAYg");
	this.shape_73.setTransform(142.9,56.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhJBkIAAjHICPAAIAAAYIh1AAIAAA9IBtAAIAAAWIhtAAIAABEIB5AAIAAAYg");
	this.shape_74.setTransform(124.2,56.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhLBkIAAjHIBLAAQATAAAKACQAPADAKAHQAKAHAGAMQAGAMAAAPQAAAagQAQQgRARgqAAIgxAAIAABSgAgwgDIAyAAQAZAAALgKQALgKAAgRQAAgMgHgJQgGgJgLgDQgGgCgSAAIgxAAg");
	this.shape_75.setTransform(105.6,56.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgmBfQgTgIgKgQQgLgQAAgUIAZgCQACAPAGAKQAHAJANAHQAOAFAPAAQAPAAAMgEQALgFAGgHQAGgIAAgKQAAgJgGgHQgFgHgNgFQgIgDgZgHQgcgGgLgEQgOgIgHgLQgIgLAAgOQAAgPAJgNQAJgNAQgHQARgHAUAAQAUAAARAHQARAHAKAOQAJAOAAASIgZACQgCgTgMgKQgMgKgWAAQgXAAgLAJQgLAJAAAMQAAALAIAHQAIAHAeAHQAgAIAMAFQASAGAIANQAIAMAAAQQAAAQgJAOQgJAOgRAIQgRAIgWAAQgZAAgSgIg");
	this.shape_76.setTransform(86.3,56.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AA3BkIgbgqIgTgcQgIgJgEgEQgGgEgGgBIgOgBIgfAAIAABZIgbAAIAAjHIBXAAQAbAAAOAGQAOAFAIAOQAIANAAARQAAAVgNAPQgOANgdAEQALAFAFAFQAMAKAKAQIAjA3gAg8gKIA5AAQAQAAAKgEQAKgEAGgIQAFgIAAgKQAAgOgKgJQgKgKgXAAIg9AAg");
	this.shape_77.setTransform(67.9,56.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgMBkIAAjHIAZAAIAADHg");
	this.shape_78.setTransform(53,56.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AA/BkIgXg9IhSAAIgWA9IgcAAIBNjHIAaAAIBSDHgAgMgnIgWA4IBCAAIgVg1IgNgqQgDAUgHATg");
	this.shape_79.setTransform(39.7,56.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgIAuIAAgSIAQAAIAAASgAgIgbIAAgSIAQAAIAAASg");
	this.shape_80.setTransform(261,149.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_81.setTransform(253.8,149.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_82.setTransform(244.8,149.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_83.setTransform(235.3,149.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_84.setTransform(226.2,149.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_85.setTransform(216.8,149.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_86.setTransform(210.4,147.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgOQAAgOAFgJQAFgMAJgFQAJgHALABQAHAAAHADQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAATAIAIQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgIgLgBQgIABgIAIg");
	this.shape_87.setTransform(203.1,147.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_88.setTransform(191.4,147.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_89.setTransform(187.4,147.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_90.setTransform(183.4,147.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgdBbg");
	this.shape_91.setTransform(174.9,149.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_92.setTransform(158.4,149.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAPA0IAGAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgdBbg");
	this.shape_93.setTransform(146.9,149.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_94.setTransform(130.4,149.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_95.setTransform(120.4,149.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_96.setTransform(110.8,149.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_97.setTransform(101.8,149.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_98.setTransform(92.4,149.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_99.setTransform(85.4,147.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_100.setTransform(73.8,149.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_101.setTransform(67.4,147.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgFQgEgGgKAAQgFAAgGAEQgGAEgDAGQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQALAAAHADQAIAFADAHQAEAHgBAMIAAA7g");
	this.shape_102.setTransform(60.4,147.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgBA8QgFgCgCgEQgBgFAAgPIAAgzIgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_103.setTransform(53,147.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_104.setTransform(40.4,149.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_105.setTransform(33,147.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(217));

	// bg
	this.instance_3 = new lib.introbackground_Generic("synched",0);
	this.instance_3.setTransform(500,275);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(217));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;