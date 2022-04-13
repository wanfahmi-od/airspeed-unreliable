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


(lib.point_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape.setTransform(-8.5,-20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_1.setTransform(-17.1,-26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_2.setTransform(-29,-26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_3.setTransform(-37.5,-26.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAeBAIgrhAIgWATIAAAtIgRAAIAAh/IARAAIAAA/IA+g/IAYAAIg0A1IA2BKg");
	this.shape_4.setTransform(-45.4,-26.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAJAEAEAIQAGAIACALQAEAMAAARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMAAAeQABAfAHALQAHAKAKAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgKAAgGAJg");
	this.shape_5.setTransform(-62.1,-26.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_6.setTransform(-72.7,-26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAIgJQAGgIAOgLQATgRAHgJQAIgKgBgJQAAgJgGgHQgHgGgLAAQgJAAgHAHQgHAHAAAMIgQgCQABgSALgKQAMgJAQAAQASAAALAKQALAKAAAQQAAAHgDAIQgDAHgIAHQgHAIgRAOIgQARQgEAEgDAEIA9AAIAAAPg");
	this.shape_7.setTransform(-82.2,-26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_8.setTransform(-96.5,-22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_9.setTransform(-103.1,-26.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_10.setTransform(-110.1,-24.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_11.setTransform(-117.5,-26.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_12.setTransform(-125.1,-24.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_13.setTransform(-137.5,-24.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_14.setTransform(-147,-26.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAYAuIgUgdIgEgIIgXAlIgTAAIAiguIgggtIAUAAIAOAWIAGAKIAGgKIAQgWIASAAIgfAsIAiAvg");
	this.shape_15.setTransform(-153.5,-24.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_16.setTransform(-163.1,-24.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_17.setTransform(-170.3,-24.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_18.setTransform(-178.8,-23);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_19.setTransform(-188.8,-23);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_20.setTransform(-199.1,-24.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAPIgJgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_21.setTransform(663.1,-48.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_22.setTransform(655.1,-46.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAIgIQAHgJAAgRQAAgSgHgIQgIgJgLAAQgJAAgHAJg");
	this.shape_23.setTransform(639.8,-48.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_24.setTransform(630.1,-46.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_25.setTransform(620.1,-46.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_26.setTransform(610.4,-45.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_27.setTransform(600.6,-46.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_28.setTransform(593.9,-46.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_29.setTransform(588.2,-48.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_30.setTransform(581.1,-46.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_31.setTransform(566.1,-46.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_32.setTransform(556.1,-46.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_33.setTransform(541.1,-46.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_34.setTransform(534.2,-48.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_35.setTransform(524.7,-48.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_36.setTransform(520.1,-48.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_37.setTransform(513.1,-46.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_38.setTransform(503.6,-46.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_39.setTransform(494.1,-46.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_40.setTransform(486.9,-46.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_41.setTransform(472.8,-48.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_42.setTransform(466.1,-48.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_43.setTransform(459.1,-46.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_44.setTransform(449.1,-46.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQAKAAAIAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_45.setTransform(439.2,-48.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_46.setTransform(429.6,-46.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_47.setTransform(414.5,-48.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_48.setTransform(403.6,-48.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAVA7QgHgJAAgRQAAgOAGgKQAHgJAOAAQAMAAAIAIQAIAJAAAQQAAARgIAJQgIAIgMAAQgMAAgIgIgAAfAPQgEAFAAAOQAAAMAEAGQAEAFAGAAQAGAAAEgFQAEgGAAgNQAAgNgEgFQgEgFgGAAQgGAAgEAFgAgoBDIBEiFIANAAIhECFgAg8gHQgIgJAAgRQAAgOAHgKQAHgJANAAQAMAAAIAIQAIAJAAARQAAAQgIAJQgIAHgMAAQgLAAgIgHgAgygyQgEAFAAANQAAANAEAFQAEAFAGAAQAGAAAEgFQAEgFAAgOQAAgMgEgFQgEgFgGAAQgGAAgEAFg");
	this.shape_49.setTransform(384.1,-48.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_50.setTransform(371.1,-48.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_51.setTransform(363.7,-43);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADANAGAHQAHAFAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADAAQAIABAIgGQAIgGAAgKQAAgJgGgGQgGgFgHAAQgJAAgGAFQgHAGgBAMIgQgDQADgQAKgJQAKgIAQgBQAIAAAJAFQAJAFAFAHQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_52.setTransform(356.1,-48.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIgBgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARABAMAMQALAJAAATQAAARgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_53.setTransform(346.2,-48.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgIQgIAIABARQAAARAHAJQAHAJAJAAQAKAAAIgIQAGgJAAgRQAAgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_54.setTransform(330.8,-48.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_55.setTransform(321.1,-46.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_56.setTransform(311.1,-46.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_57.setTransform(296.1,-46.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgIQgIAIABARQAAARAHAJQAHAJAJAAQAKAAAIgIQAGgJAAgRQAAgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_58.setTransform(285.8,-48.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_59.setTransform(276.1,-46.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_60.setTransform(268.7,-48.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_61.setTransform(264.2,-48.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_62.setTransform(259.7,-48.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_63.setTransform(254.7,-48.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_64.setTransform(247.1,-46.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQAKAAAIAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_65.setTransform(232.2,-48.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_66.setTransform(222.9,-46.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_67.setTransform(215.7,-48.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_68.setTransform(211.2,-48.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_69.setTransform(204.4,-45.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgIAHgJAAQgJAAgHgHgAgJgJQgEAEAAAFQAAAGAEAEQAEAEAFAAQAFAAAFgEQAEgEAAgGQAAgFgEgEQgFgEgFAAQgFAAgEAEg");
	this.shape_70.setTransform(190.5,-52.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJADAPIgQABQgDgJgDgEQgGgHgKAAQgGAAgFAEQgIAGgEAKQgEAKgBAUQAGgJAJgEQAHgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgQABQgHAIAAANQAAAIAEAHQADAIAGAEQAGADAFAAQALAAAGgIQAIgIgBgOQABgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_71.setTransform(181.9,-48.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgaA7QgLgIAAgPIAQACQABAHAEAEQAGAEAKAAQAJAAAGgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAOAAIAABPQABAVgFAKQgFAJgJAFQgJAFgNAAQgRAAgJgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_72.setTransform(166.7,-45);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_73.setTransform(156.9,-46.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_74.setTransform(150,-48.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_75.setTransform(145.5,-48.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_76.setTransform(140.5,-48.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_77.setTransform(132.9,-46.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_78.setTransform(123.4,-46.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_79.setTransform(111.5,-48.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQACgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_80.setTransform(103.9,-46.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQAKAAAIAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_81.setTransform(94,-48.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_82.setTransform(86.5,-48.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgIAAgHAJg");
	this.shape_83.setTransform(73.6,-48.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_84.setTransform(63.9,-46.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_85.setTransform(57,-48.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_86.setTransform(47.5,-46.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_87.setTransform(37.7,-46.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_88.setTransform(28.9,-46.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_89.setTransform(21.5,-48.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_90.setTransform(13.9,-46.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_91.setTransform(3.6,-48.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAGAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgcBbg");
	this.shape_92.setTransform(-12.6,-46.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_93.setTransform(-24.1,-46.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_94.setTransform(-31.3,-46.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_95.setTransform(-39.3,-46.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_96.setTransform(-54.1,-46.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_97.setTransform(-64,-48.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_98.setTransform(-71.5,-48.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgIAOQAFgCACgEQABgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgEAGQgDAGgFADg");
	this.shape_99.setTransform(-81.6,-41.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_100.setTransform(-89.1,-46.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_101.setTransform(-96.1,-48.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgIQgHAIAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_102.setTransform(-102.8,-48.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_103.setTransform(-113.1,-46.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_104.setTransform(-120.5,-48.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_105.setTransform(-133.1,-46.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAVBAIAAg7QABgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQAKAAAIAFQAIAEADAHQADAHABAMIAAA7g");
	this.shape_106.setTransform(-143,-48.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_107.setTransform(-150.5,-48.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgKgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_108.setTransform(-163.3,-45);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_109.setTransform(-173.1,-46.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_110.setTransform(-180,-48.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_111.setTransform(-186.6,-46.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAARADAHQADAIAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_112.setTransform(-197.6,-48.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-60.4,908.2,46.2);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape.setTransform(212.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAhBAIAAg8IhBAAIAAA8IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_1.setTransform(203.5,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAIAAALQAAAOgJAKQgJAHgSADQAGADAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgGQAAgJgGgGQgHgFgOAAIgnAAg");
	this.shape_2.setTransform(191,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeA2QgPAIgPAAQgRAAgPgIQgOgIgHgQQgIgQAAgRQAAgSAIgQQAHgQAOgIQAPgIARAAQAQAAAOAJQAPAIAIAPQAHAQAAASQAAAOgFANQgEANgLAJQAMAIALAEIgGAMQgOgFgNgLgAgfgpQgMAMAAAaQAAAXAMAOQAMANATAAQAHAAAIgDQgHgFgIgCIADgNQAPAFAKAIQAOgOAAgaQABgPgGgMQgFgMgLgGQgKgHgLAAQgTAAgMAOg");
	this.shape_3.setTransform(177,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_4.setTransform(159.9,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgFQgEgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQALAAAHADQAIAFADAHQAEAHgBAMIAAA7g");
	this.shape_5.setTransform(150,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_6.setTransform(142.5,18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQAEgEAKAAIAPACIgCAOIgKgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_7.setTransform(132.9,17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_8.setTransform(124.9,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_9.setTransform(112.7,19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_10.setTransform(103.9,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_11.setTransform(96.5,18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAJgJQAHgIAAgRQAAgSgHgJQgIgJgJAAQgKAAgHAKg");
	this.shape_12.setTransform(89.2,21.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_13.setTransform(78.9,19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgEgFQgFgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQALAAAHADQAIAFADAHQAEAHgBAMIAAA7g");
	this.shape_14.setTransform(69,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_15.setTransform(59.7,19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_16.setTransform(47.5,18);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQAKAAAIADQAIAFADAHQADAHAAAMIAAA7g");
	this.shape_17.setTransform(40,17.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgKgOAAgRQAAgNAEgMQAFgLAJgGQAJgGAMAAQAQAAAKANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgIgJgKAAQgIAAgIAJg");
	this.shape_18.setTransform(29.7,21.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_19.setTransform(23,17.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_20.setTransform(18.9,17.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQAEgEAKAAIAPACIgCAOIgKgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_21.setTransform(14.9,17.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_22.setTransform(6.9,19.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_23.setTransform(-0.5,17.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_24.setTransform(-13.1,19.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_25.setTransform(-22.3,19.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_26.setTransform(-32.1,19.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_27.setTransform(-42.1,19.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_28.setTransform(-54.5,19.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_29.setTransform(-64.3,19.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_30.setTransform(-73.1,19.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQAEgEAKAAIAPACIgDAOIgJgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_31.setTransform(-80.1,17.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_32.setTransform(-85.3,19.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_33.setTransform(-94.1,19.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGABQAKACAGAFQAHAEAEAIQAEAIAAAJQAAARgLAJQgKAMgcAAIgeAAIAAA0gAgegBIAeAAQARAAAHgHQAHgGAAgLQAAgIgEgGQgEgFgHgCIgQgBIgeAAg");
	this.shape_34.setTransform(-104.7,17.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_35.setTransform(-121.1,19.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQAKAAAIADQAIAFADAHQADAHAAAMIAAA7g");
	this.shape_36.setTransform(-131,17.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_37.setTransform(-138.5,18);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_38.setTransform(-151.1,19.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_39.setTransform(-158,17.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_40.setTransform(-170.1,19.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_41.setTransform(-177.1,17.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgIgJgBQgJABgIAIg");
	this.shape_42.setTransform(-183.8,17.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_43.setTransform(-194.1,19.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_44.setTransform(-201.5,18);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_45.setTransform(679.6,-4.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_46.setTransform(669.9,-2.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMABAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_47.setTransform(659.9,-2.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAKAGQAJAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_48.setTransform(650.2,-0.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_49.setTransform(640.4,-2.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_50.setTransform(633.7,-2.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_51.setTransform(628,-4.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_52.setTransform(620,-4.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_53.setTransform(604.9,-2.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_54.setTransform(597.9,-4.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_55.setTransform(591.2,-4.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_56.setTransform(580.9,-2.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_57.setTransform(574,-4.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_58.setTransform(569.9,-4.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_59.setTransform(562.9,-2.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_60.setTransform(555.7,-2.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_61.setTransform(546.9,-2.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAAQADAJQADAHAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_62.setTransform(535.4,-4.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_63.setTransform(519,-4.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_64.setTransform(511.5,-4.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_65.setTransform(507,-4.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAfBAIgbhgIgEgQIgCAQIgbBgIgSAAIgih/IARAAIAUBTIAFAaIAGgYIAYhVIATAAIASBAQAIAYACAVIAHgcIAUhRIARAAIgjB/g");
	this.shape_66.setTransform(496.5,-4.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_67.setTransform(480.5,-4.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_68.setTransform(473,-4.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgFAJgJAFQgKAFgMAAQgRAAgKgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_69.setTransform(462.7,-0.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_70.setTransform(456,-4.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_71.setTransform(451.9,-4.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_72.setTransform(444.8,-4.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_73.setTransform(428.9,-2.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_74.setTransform(419,-4.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_75.setTransform(411.5,-4.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_76.setTransform(398.6,-4.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_77.setTransform(388.9,-2.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_78.setTransform(379.4,-2.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_79.setTransform(369.9,-2.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_80.setTransform(354.6,-4.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_81.setTransform(344.9,-2.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_82.setTransform(334.9,-2.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_83.setTransform(319.9,-2.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_84.setTransform(309.9,-2.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_85.setTransform(303,-4.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_86.setTransform(298.5,-4.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_87.setTransform(290.9,-2.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_88.setTransform(281.7,-2.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_89.setTransform(275,-4.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_90.setTransform(267.6,-4.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_91.setTransform(257.9,-2.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_92.setTransform(251,-4.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_93.setTransform(238.6,-4.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_94.setTransform(228.9,-2.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_95.setTransform(218.9,-2.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAKAGQAJAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_96.setTransform(209.2,-0.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_97.setTransform(199.4,-2.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_98.setTransform(192.7,-2.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_99.setTransform(187,-4.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADABAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_100.setTransform(179.9,-2.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_101.setTransform(164.9,-2.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_102.setTransform(157.9,-4.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_103.setTransform(151.2,-4.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_104.setTransform(140.9,-2.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_105.setTransform(134,-4.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_106.setTransform(129.9,-4.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_107.setTransform(122.9,-2.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_108.setTransform(115.7,-2.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_109.setTransform(101.9,-2.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_110.setTransform(86.9,-2.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_111.setTransform(76.9,-2.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_112.setTransform(70,-4.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_113.setTransform(60.5,-2.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_114.setTransform(50.7,-2.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_115.setTransform(41.9,-2.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_116.setTransform(34.5,-4.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_117.setTransform(26.9,-2.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgIQgIAIABARQAAARAHAJQAIAJAIAAQAKAAAIgIQAGgJAAgRQAAgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_118.setTransform(16.6,-4.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_119.setTransform(2.5,-0.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_120.setTransform(-4.1,-4.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_121.setTransform(-8.1,-4.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_122.setTransform(-15.1,-2.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_123.setTransform(-22,-4.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_124.setTransform(-26.5,-4.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_125.setTransform(-31,-4.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_126.setTransform(-38.1,-2.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_127.setTransform(-45,-4.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_128.setTransform(-54.5,-4.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_129.setTransform(-62.1,-2.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_130.setTransform(-72.1,-2.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_131.setTransform(-87.4,-4.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_132.setTransform(-94.1,-4.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_133.setTransform(-101.1,-2.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_134.setTransform(-111.1,-2.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_135.setTransform(-120.3,-2.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_136.setTransform(-136.6,-2.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_137.setTransform(-148.1,-2.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_138.setTransform(-155.3,-2.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_139.setTransform(-163.3,-2.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_140.setTransform(-178.1,-2.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAVBAIAAg7QABgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQAKAAAIAFQAIAEADAHQADAHABAMIAAA7g");
	this.shape_141.setTransform(-188,-4.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_142.setTransform(-198.5,-4.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_143.setTransform(677.5,-20.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_144.setTransform(672.5,-26.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_145.setTransform(665.4,-24.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_146.setTransform(659,-26.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_147.setTransform(654.9,-26.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABHIAjgjIAUAAIgiAhIAmA6g");
	this.shape_148.setTransform(649,-26.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_149.setTransform(639.7,-24.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_150.setTransform(629.9,-24.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgMAPAAQALAAAHADQAIAEADAIQAEAHAAAMIAAA7g");
	this.shape_151.setTransform(620,-26.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQgBgRQAAgTAIgQQAIgOAOgIQAOgIAPAAQAUAAANAKQANAKAFASIgQADQgFgOgJgGQgIgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAFANAJAFQALAHAKAAQAOAAAKgJQAKgIADgQIASAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_152.setTransform(608.6,-26.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_153.setTransform(594.9,-26.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_154.setTransform(587.9,-24.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_155.setTransform(575.5,-24.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_156.setTransform(565.7,-24.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_157.setTransform(556.9,-24.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_158.setTransform(545.4,-26.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgXAHIAAgOIAvAAIAAAOg");
	this.shape_159.setTransform(536,-24.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_160.setTransform(527.9,-24.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_161.setTransform(517.9,-24.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_162.setTransform(506.4,-26.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_163.setTransform(489.9,-24.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_164.setTransform(482.9,-26.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_165.setTransform(476.2,-26.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_166.setTransform(465.9,-24.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_167.setTransform(459,-26.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_168.setTransform(454.9,-26.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_169.setTransform(447.9,-24.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_170.setTransform(440.7,-24.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_171.setTransform(431.9,-24.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAIQADAIAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEAMQgFALgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_172.setTransform(420.4,-26.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAASAHAJQAIAJAIAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_173.setTransform(403.6,-26.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_174.setTransform(393.9,-24.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_175.setTransform(383.9,-24.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_176.setTransform(374.2,-23);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_177.setTransform(364.4,-24.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_178.setTransform(357.7,-24.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_179.setTransform(352,-26.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgOAnIgTAAIAxh/IARAAIA1B/gAgHgZIgPAkIAqAAIgOgiIgHgbQgCANgEAMg");
	this.shape_180.setTransform(344,-26.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_181.setTransform(328.9,-24.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQAKAAAIADQAIAEADAIQADAHAAAMIAAA7g");
	this.shape_182.setTransform(319,-26.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_183.setTransform(311.5,-26.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_184.setTransform(299.5,-22.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_185.setTransform(290.2,-26.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAASAIAJQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_186.setTransform(274.6,-26.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_187.setTransform(264.9,-24.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAGAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgeBbg");
	this.shape_188.setTransform(253.4,-24.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_189.setTransform(241.9,-24.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_190.setTransform(234.9,-26.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_191.setTransform(230.9,-26.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_192.setTransform(223.9,-24.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQAEgEAKAAIAPACIgDANIgJgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_193.setTransform(216.9,-26.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_194.setTransform(204.4,-24.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_195.setTransform(192.5,-24.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_196.setTransform(179.9,-24.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_197.setTransform(172.5,-26.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_198.setTransform(168,-26.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_199.setTransform(158.9,-26.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_200.setTransform(154.9,-26.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_201.setTransform(147.9,-24.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_202.setTransform(138.7,-24.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_203.setTransform(128.9,-24.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_204.setTransform(121.7,-24.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_205.setTransform(107.9,-24.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_206.setTransform(100.9,-26.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_207.setTransform(94.2,-26.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_208.setTransform(83.9,-24.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_209.setTransform(77,-26.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_210.setTransform(72.9,-26.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_211.setTransform(65.9,-24.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_212.setTransform(58.7,-24.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_213.setTransform(49.9,-24.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAIQADAIAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEAMQgFALgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_214.setTransform(38.4,-26.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAASAIAJQAHAJAJAAQAKAAAHgJQAIgIAAgSQAAgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_215.setTransform(21.6,-26.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_216.setTransform(11.9,-24.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_217.setTransform(1.9,-24.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_218.setTransform(-7.8,-23);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_219.setTransform(-17.6,-24.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_220.setTransform(-24.3,-24.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_221.setTransform(-30,-26.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_222.setTransform(-38,-26.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_223.setTransform(-53.1,-24.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgMAPAAQAKAAAIADQAIAEADAIQAEAHAAAMIAAA7g");
	this.shape_224.setTransform(-63,-26.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_225.setTransform(-70.5,-26.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAIAJAIAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_226.setTransform(-83.4,-26.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_227.setTransform(-93.1,-24.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_228.setTransform(-100.5,-26.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_229.setTransform(-108.1,-24.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_230.setTransform(-115.1,-26.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgGAAgHgDQgHgDgDgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAJAAAIgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_231.setTransform(-121.8,-23);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_232.setTransform(-134.5,-24.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_233.setTransform(-147.1,-24.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_234.setTransform(-156.3,-24.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_235.setTransform(-172.6,-24.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_236.setTransform(-184.1,-24.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_237.setTransform(-191.3,-24.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_238.setTransform(-199.3,-24.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_239.setTransform(689.6,-46.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_240.setTransform(679.6,-48.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_241.setTransform(669.1,-48.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_242.setTransform(656.5,-43);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_243.setTransform(648.9,-46.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_244.setTransform(638.9,-46.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_245.setTransform(631.7,-46.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_246.setTransform(622.9,-46.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_247.setTransform(610.9,-48.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_248.setTransform(603.9,-46.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_249.setTransform(593.9,-46.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_250.setTransform(587,-48.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_251.setTransform(577.5,-46.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_252.setTransform(567.7,-46.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_253.setTransform(558.9,-46.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_254.setTransform(551.5,-48.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_255.setTransform(538.9,-46.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_256.setTransform(529,-48.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_257.setTransform(521.5,-48.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_258.setTransform(508.9,-46.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_259.setTransform(502,-48.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQAKAAAIAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_260.setTransform(495,-48.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_261.setTransform(487.5,-48.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_262.setTransform(483,-48.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAGAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_263.setTransform(474.4,-46.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_264.setTransform(457.9,-46.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_265.setTransform(447.9,-46.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_266.setTransform(441,-48.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_267.setTransform(436.5,-48.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_268.setTransform(432,-48.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgIAAgHAJg");
	this.shape_269.setTransform(424.6,-48.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_270.setTransform(414.9,-46.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_271.setTransform(404.9,-46.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_272.setTransform(395.7,-46.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_273.setTransform(380.9,-46.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_274.setTransform(373.9,-48.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgIQgHAIAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_275.setTransform(367.2,-48.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_276.setTransform(356.9,-46.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_277.setTransform(350,-48.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_278.setTransform(345.9,-48.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_279.setTransform(338.9,-46.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_280.setTransform(331.7,-46.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_281.setTransform(322.9,-46.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_282.setTransform(312.9,-46.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_283.setTransform(297.6,-48.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_284.setTransform(287.9,-46.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_285.setTransform(277.9,-46.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAFgHAHgEQAGgDAHAAQANAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIABgRQgBgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_286.setTransform(268.2,-45.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_287.setTransform(258.4,-46.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_288.setTransform(251.7,-46.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_289.setTransform(246,-48.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_290.setTransform(238.9,-46.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_291.setTransform(223.9,-46.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_292.setTransform(213.9,-46.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_293.setTransform(199.4,-46.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_294.setTransform(192.7,-46.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_295.setTransform(183.9,-46.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_296.setTransform(176.5,-48.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_297.setTransform(168.9,-46.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_298.setTransform(158.9,-46.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_299.setTransform(148.9,-46.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_300.setTransform(139.7,-46.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_301.setTransform(129.9,-46.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_302.setTransform(119.9,-46.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgcBbg");
	this.shape_303.setTransform(103.4,-46.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_304.setTransform(91.9,-46.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_305.setTransform(84.7,-46.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_306.setTransform(76.7,-46.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_307.setTransform(64.5,-48.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQAKAAAIAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_308.setTransform(57,-48.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_309.setTransform(46.7,-45);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_310.setTransform(40,-48.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_311.setTransform(35.9,-48.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgCAPIgKgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_312.setTransform(31.9,-48.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_313.setTransform(18.9,-46.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQAKAAAIAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_314.setTransform(9,-48.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_315.setTransform(1.5,-48.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgIAOQAFgCACgEQABgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgEAGQgDAGgFADg");
	this.shape_316.setTransform(-8.6,-41.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_317.setTransform(-16.1,-46.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_318.setTransform(-23.1,-48.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAFgHAHgEQAGgDAHAAQANAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIABgRQgBgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_319.setTransform(-29.8,-45.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_320.setTransform(-42.5,-46.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_321.setTransform(-55.1,-46.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AAYAuIgUgdIgEgIIgXAlIgTAAIAiguIgggtIAUAAIAOAWIAGAKIAGgKIAQgWIASAAIgfAsIAiAvg");
	this.shape_322.setTransform(-64.5,-46.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_323.setTransform(-74.1,-46.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQAAgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgFAJgJAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_324.setTransform(-89.3,-45);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_325.setTransform(-99.1,-46.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_326.setTransform(-106,-48.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgdBbg");
	this.shape_327.setTransform(-114.6,-46.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_328.setTransform(-126.1,-46.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_329.setTransform(-133.1,-48.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_330.setTransform(-137.1,-48.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_331.setTransform(-144.1,-46.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAPIgJgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_332.setTransform(-151.1,-48.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_333.setTransform(-164.1,-46.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_334.setTransform(-174,-48.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_335.setTransform(-181.5,-48.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_336.setTransform(-194.1,-46.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_337.setTransform(-201.5,-48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-60.4,908.2,90.4);


(lib.point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,5);


(lib.hl3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AlTmjIKnAAIAANHIqnAAg");
	this.shape.setTransform(34,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,73,89);


(lib.hl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AvTmjIenAAIAANHI+nAAg");
	this.shape.setTransform(98,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,201,89);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("A3CjvMAuFAAAIAAHfMguFAAAg");
	this.shape.setTransform(147.5,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,300,53);


(lib.chart_usablefuel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgGAAgKQAAgJAGgJQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAEAIAEQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape.setTransform(-212.9,294.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_1.setTransform(-224.8,294.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_2.setTransform(-233.2,294.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeBAIgrhAIgWATIAAAtIgRAAIAAh/IARAAIAAA/IA+g/IAYAAIg0A0IA2BLg");
	this.shape_3.setTransform(-241.2,294.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_4.setTransform(-213.7,267.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_5.setTransform(-224.6,267.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVA7QgHgJAAgRQAAgOAGgKQAHgJAOAAQAMAAAIAIQAIAJAAAQQAAARgIAJQgIAIgMAAQgMAAgIgIgAAfAPQgEAFAAAOQAAAMAEAGQAEAFAGAAQAGAAAEgFQAEgGAAgNQAAgNgEgFQgEgFgGAAQgGAAgEAFgAgoBDIBEiFIANAAIhECFgAg8gHQgIgJAAgRQAAgOAHgKQAHgJANAAQAMAAAIAIQAIAJAAARQAAAQgIAJQgIAHgMAAQgLAAgIgHgAgygyQgEAFAAANQAAANAEAFQAEAFAGAAQAGAAAEgFQAEgFAAgOQAAgMgEgFQgEgFgGAAQgGAAgEAFg");
	this.shape_6.setTransform(-239.1,267.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_7.setTransform(-187.7,240.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_8.setTransform(-198.7,240.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_9.setTransform(-208.8,240.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAhBAIAAg9IhBAAIAAA9IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_10.setTransform(-225.3,240.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQgBgRQAAgUAIgOQAIgQAOgHQAOgIAPAAQAUAAANAKQANAJAFATIgRAEQgEgOgIgHQgJgGgNgBQgNAAgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFALAKAHQAKAFAJABQAPgBAKgHQAKgJADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_11.setTransform(-238.2,240.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_12.setTransform(-250.3,240.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_13.setTransform(-258.3,240.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGACQAKABAGAEQAHAFAEAIQADAIABAKQgBAQgJAKQgLALgcgBIgeAAIAAA1gAgegCIAeAAQASAAAGgFQAHgHAAgLQAAgIgEgGQgEgFgHgDIgQgBIgeAAg");
	this.shape_14.setTransform(-266.5,240.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgOIA4hSIAOAAIAABSIARAAIAAAOIgRAAIAAAfgAgcATIAnAAIAAg5g");
	this.shape_15.setTransform(226,294.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_16.setTransform(218.8,300.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQAAgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAFAIADALQADAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_17.setTransform(211.2,294.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_18.setTransform(201.2,294.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_19.setTransform(190.6,294.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMAAARQABAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_20.setTransform(221.2,267.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_21.setTransform(213.8,273.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_22.setTransform(205.6,267.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMATgFAXQgFARgBATg");
	this.shape_23.setTransform(196.3,267.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKAAQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_24.setTransform(216.3,240.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_25.setTransform(208.8,246.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKAAQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_26.setTransform(201.3,240.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_27.setTransform(156.6,294.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_28.setTransform(149.8,300.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_29.setTransform(142.2,294.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgHAGgFAKQgEAKAAAUQAFgJAIgEQAIgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgPABQgIAIAAANQAAAIAEAHQADAIAGAEQAHADAEAAQAKAAAHgIQAIgIAAgOQAAgNgIgIQgHgFgKAAQgJAAgHAFg");
	this.shape_30.setTransform(132.2,294.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_31.setTransform(121.6,294.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgOIA5hSIAMAAIAABSIASAAIAAAOIgSAAIAAAfgAgcATIAnAAIAAg5g");
	this.shape_32.setTransform(152,267.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_33.setTransform(144.8,273.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMATgFAXQgFARgBATg");
	this.shape_34.setTransform(137.3,267.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJACAPIgQABQgDgJgDgEQgHgHgJAAQgFAAgGAEQgHAGgFAKQgFAKAAAUQAGgJAJgEQAHgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgLAAQgTAAgMgOgAgQABQgHAIAAANQAAAIADAHQAEAIAGAEQAHADAEAAQALAAAGgIQAIgIgBgOQABgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_35.setTransform(127.2,267.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKAAQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_36.setTransform(147.3,240.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_37.setTransform(139.8,246.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKAAQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_38.setTransform(132.3,240.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_39.setTransform(87.6,294.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_40.setTransform(80.8,300.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAIAEAGAIQAEAIAEALQACAMABARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_41.setTransform(73.2,294.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJACAPIgQABQgDgJgDgEQgHgHgJAAQgGAAgFAEQgHAGgFAKQgEAKgBAUQAGgJAJgEQAIgEAHAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgQABQgHAIAAANQAAAIAEAHQADAIAGAEQAGADAFAAQALAAAGgIQAIgIgBgOQABgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_42.setTransform(63.2,294.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_43.setTransform(52.6,294.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_44.setTransform(83.2,267.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_45.setTransform(75.8,273.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgHQAIgIAAgLQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADABQAIAAAIgGQAIgFAAgLQAAgJgGgFQgGgHgHABQgJgBgGAHQgHAFgBAMIgQgDQADgQAKgIQAKgJAQAAQAIgBAJAFQAJAFAFAHQAEAIAAAJQAAAIgEAHQgFAHgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_46.setTransform(68.2,267.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQAMgPATAAQAPAAAKAIQAKAJABAPIgPABQgDgJgDgEQgGgHgKAAQgGAAgFAEQgIAGgEAKQgFAKABAUQAFgJAIgEQAJgEAHAAQAQAAALALQALAKAAASQAAANgFAKQgGAKgJAGQgJAFgLAAQgTAAgMgOgAgPABQgIAIAAANQAAAIADAHQAEAIAGAEQAGADAFAAQAKAAAIgIQAGgIABgOQgBgNgGgIQgIgFgKAAQgJAAgHAFg");
	this.shape_47.setTransform(58.2,267.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKAAQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_48.setTransform(78.3,240.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_49.setTransform(70.8,246.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKAAQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_50.setTransform(63.3,240.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_51.setTransform(19.2,294.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_52.setTransform(11.8,300.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_53.setTransform(4.2,294.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAKBAIAAgfIg1AAIAAgOIA4hSIAOAAIAABSIARAAIAAAOIgRAAIAAAfgAgbATIAlAAIAAg5g");
	this.shape_54.setTransform(-6,294.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_55.setTransform(-16.4,294.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMATgFAXQgFARgBATg");
	this.shape_56.setTransform(14.3,267.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_57.setTransform(6.8,273.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_58.setTransform(-0.8,267.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_59.setTransform(-10.7,267.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKAAQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_60.setTransform(9.3,240.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgIAIIAAgQIARAAIAAAQg");
	this.shape_61.setTransform(1.8,246.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKAAQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_62.setTransform(-5.7,240.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_63.setTransform(-49.8,294.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_64.setTransform(-57.2,300.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_65.setTransform(-64.8,294.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgHQAIgIAAgLQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADABQAIAAAIgGQAIgFAAgLQAAgJgGgFQgGgHgHABQgJgBgGAHQgHAFgBAMIgQgDQADgQAKgIQAKgJAQAAQAIgBAJAFQAJAFAFAHQAEAIAAAJQAAAIgEAHQgFAHgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_66.setTransform(-74.8,294.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_67.setTransform(-85.4,294.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKAAgJQABgJgHgHQgHgGgKAAQgKAAgHAHQgGAHgBAMIgQgCQACgSAKgKQAMgJAQAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARQgEAEgDAEIA9AAIAAAPg");
	this.shape_68.setTransform(-54.9,267.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_69.setTransform(-62.2,273.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_70.setTransform(-69.7,267.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_71.setTransform(-79.7,267.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQAAgVAEgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAFAIAEALQACAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_72.setTransform(-59.8,240.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_73.setTransform(-67.2,246.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKAAQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_74.setTransform(-74.7,240.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_75.setTransform(-118.7,294.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_76.setTransform(-126.2,300.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMATgFAXQgFARgBATg");
	this.shape_77.setTransform(-133.7,294.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKAAgJQABgJgHgHQgHgGgKAAQgKAAgHAHQgHAHAAAMIgQgCQACgSALgKQAKgJARAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgRARQgDAEgDAEIA9AAIAAAPg");
	this.shape_78.setTransform(-143.9,294.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_79.setTransform(-154.4,294.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJACAPIgQABQgDgJgDgEQgGgHgKAAQgFAAgGAEQgHAGgFAKQgFAKAAAUQAGgJAIgEQAJgEAHAAQAQAAALALQALAKAAASQAAANgFAKQgGAKgJAGQgJAFgLAAQgTAAgMgOgAgPABQgIAIAAANQAAAIADAHQAEAIAGAEQAHADAEAAQAKAAAIgIQAGgIAAgOQAAgNgGgIQgIgFgKAAQgJAAgHAFg");
	this.shape_80.setTransform(-123.8,267.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_81.setTransform(-131.2,273.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMAAARQABAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_82.setTransform(-138.8,267.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_83.setTransform(-148.7,267.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMABARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMgBAeQABAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_84.setTransform(-128.8,240.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_85.setTransform(-136.2,246.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKAAQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_86.setTransform(-143.7,240.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgMIgOgaIALAAQAPAWAIAWQAHAUAAATQAAAXgJAWQgKAWgLARg");
	this.shape_87.setTransform(-330,290);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIADALQAEAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_88.setTransform(-338.3,288.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAHgJQAIgKgBgJQAAgJgGgHQgHgGgKAAQgKAAgHAHQgGAHgBAMIgQgCQACgSAKgKQAMgJAQAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARQgFAEgCAEIA9AAIAAAPg");
	this.shape_89.setTransform(-348.4,288.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgGAqIAAgjIgjAAIAAgNIAjAAIAAgjIANAAIAAAjIAjAAIAAANIgjAAIAAAjg");
	this.shape_90.setTransform(-358.5,288.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIAEALQADAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_91.setTransform(-368.8,288.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgOIA5hSIAMAAIAABSIASAAIAAAOIgSAAIAAAfgAgcATIAnAAIAAg5g");
	this.shape_92.setTransform(-379,288.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_93.setTransform(-388.9,288.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_94.setTransform(-400.5,288.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_95.setTransform(-412.7,288.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgIBAIgxh/IASAAIAhBcQAFALABAKIAGgVIAjhcIARAAIgyB/g");
	this.shape_96.setTransform(-425.8,288.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgUQAIgWAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_97.setTransform(-434.5,290);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgLIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape_98.setTransform(-322.8,267.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_99.setTransform(-332.6,266.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAeBAIgbhgIgDgPIgDAPIgbBgIgRAAIgih/IARAAIAUBSIAFAbIAGgYIAZhVIASAAIASA/QAIAYACAWIAHgcIAUhRIARAAIgjB/g");
	this.shape_100.setTransform(-347.5,266.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgfA6QgOgKgIgOQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAJQAOAIAIAPQAHAPAAASQAAATgIAQQgIAPgOAJQgPAHgQAAQgRAAgOgIgAgdgmQgNAMAAAbQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgMgKgGQgLgHgMAAQgQAAgNANg");
	this.shape_101.setTransform(-363,266.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_102.setTransform(-376.3,266.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAJAAALQAAANgJAJQgJAIgSADQAGADAEADQAHAGAHALIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgFQAAgKgGgGQgHgFgOAAIgnAAg");
	this.shape_103.setTransform(-393.9,266.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgZIgPAkIAqAAIgNgiIgHgbQgDANgEAMg");
	this.shape_104.setTransform(-407,266.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_105.setTransform(-418.8,266.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAEQgDgJgFgGQgEgGgIgDQgIgEgKAAQgJAAgJAEQgIADgFAHQgGAFgDAHQgFAMAAANQAAAQAGAMQAGALAMAGQALAGALAAQALAAAKgFQALgDAFgGIAAgXIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_106.setTransform(-432.1,266.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_107.setTransform(-441.8,267.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgdA3QgLgLgBgPIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIgBgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARABAMAMQALAJAAATQAAARgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_108.setTransform(-346.5,244.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_109.setTransform(-357.2,243.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgFgEgGQgFgIAAgJQAAgJAGgJQAFgJALgDQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAALIgQACQgCgNgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAHAFADQAFAFASAFQAVAEAIAEQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_110.setTransform(-372.6,244);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGACQAKABAGAEQAHAFAEAIQAEAIAAAKQAAAQgLAKQgKAKgcABIgeAAIAAA0gAgegCIAeAAQARAAAHgFQAHgHAAgLQAAgIgEgGQgEgGgHgCIgQgBIgeAAg");
	this.shape_111.setTransform(-384.2,244);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOghIgHgbQgCAMgFANg");
	this.shape_112.setTransform(-396.5,244);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_113.setTransform(-407.2,244);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_114.setTransform(-417.7,244);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgHQgFgIAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_115.setTransform(-212.9,212.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_116.setTransform(-224.8,212.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_117.setTransform(-233.2,212.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAeBAIgrhAIgWAUIAAAsIgRAAIAAh/IARAAIAAA/IA+g/IAYAAIg0A0IA2BLg");
	this.shape_118.setTransform(-241.2,212.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_119.setTransform(-213.7,185.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_120.setTransform(-224.6,185.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAVA7QgHgJAAgRQAAgOAGgKQAHgJAOAAQAMAAAIAIQAIAJAAAQQAAARgIAJQgIAIgMAAQgMAAgIgIgAAfAPQgEAFAAAOQAAAMAEAGQAEAFAGAAQAGAAAEgFQAEgGAAgNQAAgNgEgFQgEgFgGAAQgGAAgEAFgAgoBDIBEiFIANAAIhECFgAg8gHQgIgJAAgRQAAgOAHgKQAHgJANAAQAMAAAIAIQAIAJAAARQAAAQgIAJQgIAHgMAAQgLAAgIgHgAgygyQgEAFAAANQAAANAEAFQAEAFAGAAQAGAAAEgFQAEgFAAgOQAAgMgEgFQgEgFgGAAQgGAAgEAFg");
	this.shape_121.setTransform(-239.1,185.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_122.setTransform(-187.7,158.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_123.setTransform(-198.7,158.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_124.setTransform(-208.8,158.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAhBAIAAg9IhBAAIAAA9IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_125.setTransform(-225.3,158.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQgBgRQAAgUAIgOQAIgQAOgHQAOgIAPAAQAUAAANAKQANAKAFARIgRAFQgEgOgIgHQgJgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFALAKAHQAKAFAJAAQAPAAAKgHQAKgJADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_126.setTransform(-238.2,158.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_127.setTransform(-250.3,158.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_128.setTransform(-258.3,158.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGACQAKABAGAEQAHAFAEAIQADAIABAKQgBAQgJAKQgLALgcgBIgeAAIAAA1gAgegCIAeAAQASAAAGgFQAHgHAAgLQAAgIgEgGQgEgGgHgCIgQgBIgeAAg");
	this.shape_129.setTransform(-266.5,158.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAGAIACALQAEAMAAARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMAAAeQABAfAHALQAHAKAKAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgKAAgGAJg");
	this.shape_130.setTransform(218.7,212.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_131.setTransform(208.7,212.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_132.setTransform(198.1,212.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAKBAIAAgfIg1AAIAAgOIA5hSIAMAAIAABSIASAAIAAAOIgSAAIAAAfgAgbATIAlAAIAAg5g");
	this.shape_133.setTransform(221,185.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_134.setTransform(213.8,191.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADABQAIAAAIgGQAIgGAAgKQAAgJgGgFQgGgHgHABQgJgBgGAHQgHAFgBAMIgQgDQADgQAKgJQAKgIAQgBQAIAAAJAFQAJAFAFAHQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_135.setTransform(206.2,185.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgIAGgEAKQgEAKAAAUQAFgJAJgEQAHgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgQABQgHAIAAANQAAAIAEAHQADAIAGAEQAHADAEAAQAKAAAHgIQAIgIAAgOQAAgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_136.setTransform(196.2,185.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_137.setTransform(216.3,158.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_138.setTransform(208.8,164.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJABAPIgPABQgCgJgEgEQgGgHgKAAQgFAAgGAEQgIAGgEAKQgFAKABAUQAFgJAIgEQAJgEAHAAQAQAAALALQALAKAAASQAAANgFAKQgGAKgJAGQgJAFgLAAQgTAAgMgOgAgPABQgIAIAAANQAAAIADAHQAEAIAGAEQAGADAFAAQAKAAAIgIQAGgIAAgOQAAgNgGgIQgIgFgKAAQgJAAgHAFg");
	this.shape_139.setTransform(201.2,158.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_140.setTransform(149.7,212.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMATgFAYQgFAQgBATg");
	this.shape_141.setTransform(139.8,212.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_142.setTransform(129.1,212.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_143.setTransform(151.6,185.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_144.setTransform(144.8,191.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAJAEAFAIQAFAIADALQACAMAAARQAAAWgEAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_145.setTransform(137.2,185.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJACAPIgQABQgDgJgDgEQgHgHgJAAQgFAAgGAEQgHAGgFAKQgFAKAAAUQAGgJAJgEQAHgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgLAAQgTAAgMgOgAgQABQgHAIAAANQAAAIADAHQAEAIAGAEQAHADAEAAQALAAAGgIQAIgIgBgOQABgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_146.setTransform(127.2,185.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_147.setTransform(147.3,158.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_148.setTransform(139.8,164.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgHAGgFAKQgEAKAAAUQAFgJAIgEQAIgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgPABQgIAIAAANQAAAIAEAHQADAIAGAEQAHADAEAAQAKAAAHgIQAIgIAAgOQAAgNgIgIQgHgFgKAAQgJAAgHAFg");
	this.shape_149.setTransform(132.2,158.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAFAIADALQADAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_150.setTransform(80.7,212.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMATgFAYQgFAQgBATg");
	this.shape_151.setTransform(70.8,212.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_152.setTransform(60.1,212.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMATgFAYQgFAQgBATg");
	this.shape_153.setTransform(83.3,185.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_154.setTransform(75.8,191.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgHAGgFAKQgFAKABAUQAFgJAIgEQAJgEAHAAQAPAAAMALQALAKAAASQAAANgFAKQgGAKgJAGQgJAFgLAAQgSAAgNgOgAgPABQgIAIAAANQAAAIADAHQAEAIAGAEQAGADAFAAQAKAAAIgIQAGgIABgOQgBgNgGgIQgIgFgKAAQgJAAgHAFg");
	this.shape_155.setTransform(68.2,185.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_156.setTransform(58.3,185.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMABARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMgBAeQABAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_157.setTransform(78.2,158.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_158.setTransform(70.8,164.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJACAPIgQABQgDgJgDgEQgHgHgJAAQgGAAgFAEQgHAGgFAKQgEAKgBAUQAGgJAJgEQAIgEAHAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgQABQgHAIAAANQAAAIAEAHQADAIAGAEQAGADAFAAQALAAAGgIQAIgIgBgOQABgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_159.setTransform(63.2,158.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAGAIACALQAEAMAAARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMAAAeQABAfAHALQAHAKAKAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgKAAgGAJg");
	this.shape_160.setTransform(11.7,212.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgHAGgFAKQgEAKAAAUQAFgJAIgEQAIgEAIAAQAPAAAMALQALAKAAASQAAANgFAKQgFAKgKAGQgJAFgMAAQgRAAgNgOgAgQABQgHAIAAANQAAAIAEAHQADAIAGAEQAHADAEAAQAKAAAHgIQAIgIAAgOQAAgNgIgIQgHgFgLAAQgIAAgIAFg");
	this.shape_161.setTransform(1.7,212.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_162.setTransform(-8.9,212.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAIgJQAGgIAOgLQATgRAHgJQAIgKgBgJQAAgJgGgHQgHgGgLAAQgJAAgHAHQgHAHAAAMIgQgCQABgSALgKQAMgJAQAAQASAAALAKQALAKAAAQQAAAHgDAIQgDAHgIAHQgHAIgRAOIgQARIgHAIIA9AAIAAAPg");
	this.shape_163.setTransform(14.1,185.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_164.setTransform(6.8,191.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADABQAIAAAIgGQAIgGAAgKQAAgJgGgFQgGgHgHABQgJgBgGAHQgHAFgBAMIgQgDQADgQAKgJQAKgIAQgBQAIAAAJAFQAJAFAFAHQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_165.setTransform(-0.8,185.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_166.setTransform(-10.7,185.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIAEALQADAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_167.setTransform(9.2,158.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgIAIIAAgQIARAAIAAAQg");
	this.shape_168.setTransform(1.8,164.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJABAPIgPABQgDgJgDgEQgGgHgKAAQgGAAgFAEQgIAGgEAKQgFAKABAUQAFgJAIgEQAJgEAHAAQAQAAALALQALAKAAASQAAANgFAKQgGAKgJAGQgJAFgLAAQgTAAgMgOgAgPABQgIAIAAANQAAAIADAHQAEAIAGAEQAGADAFAAQAKAAAIgIQAGgIAAgOQAAgNgGgIQgIgFgKAAQgJAAgHAFg");
	this.shape_169.setTransform(-5.8,158.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_170.setTransform(-57.3,212.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgOIA4hSIANAAIAABSIASAAIAAAOIgSAAIAAAfgAgcATIAnAAIAAg5g");
	this.shape_171.setTransform(-67.5,212.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_172.setTransform(-77.9,212.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgOIA5hSIAMAAIAABSIASAAIAAAOIgSAAIAAAfgAgcATIAnAAIAAg5g");
	this.shape_173.setTransform(-55,185.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_174.setTransform(-62.2,191.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_175.setTransform(-69.8,185.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgOIA4hSIAOAAIAABSIARAAIAAAOIgRAAIAAAfgAgcATIAnAAIAAg5g");
	this.shape_176.setTransform(-80,185.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_177.setTransform(-59.7,158.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_178.setTransform(-67.2,164.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_179.setTransform(-74.7,158.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_180.setTransform(-126.3,212.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADABQAIAAAIgGQAIgGAAgKQAAgJgGgFQgGgHgHABQgJgBgGAHQgHAFgBAMIgQgDQADgQAKgJQAKgIAQgBQAIAAAJAFQAJAFAFAHQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_181.setTransform(-136.3,212.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_182.setTransform(-146.9,212.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_183.setTransform(-124.4,185.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_184.setTransform(-131.2,191.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_185.setTransform(-138.7,185.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAKBAIAAgfIg1AAIAAgOIA4hSIAOAAIAABSIARAAIAAAOIgRAAIAAAfgAgbATIAlAAIAAg5g");
	this.shape_186.setTransform(-149,185.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_187.setTransform(-128.7,158.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_188.setTransform(-136.2,164.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_189.setTransform(-143.7,158.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgQQgBgNgGgMIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape_190.setTransform(-330,196.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIADALQAEAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_191.setTransform(-338.3,195.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADANAGAHQAHAFAJAAQAKAAAHgIQAIgHAAgMQAAgLgHgHQgHgHgLAAQgDAAgGACIABgMIADAAQAIAAAIgFQAIgFAAgLQAAgJgGgGQgGgFgHgBQgJABgGAFQgHAGgBAMIgQgDQADgQAKgJQAKgJAQABQAIAAAJAEQAJAEAFAJQAEAHAAAJQAAAJgEAGQgFAHgIAEQALADAGAGQAHAJAAAMQAAARgNALQgMANgRAAQgRAAgLgLg");
	this.shape_192.setTransform(-348.3,195.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgGAqIAAgjIgjAAIAAgNIAjAAIAAgjIANAAIAAAjIAjAAIAAANIgjAAIAAAjg");
	this.shape_193.setTransform(-358.5,195.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIAEALQADAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_194.setTransform(-368.8,195.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgPIA5hRIAMAAIAABRIASAAIAAAPIgSAAIAAAfgAgcASIAnAAIAAg3g");
	this.shape_195.setTransform(-379,195.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_196.setTransform(-388.9,195.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_197.setTransform(-400.5,195.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAIAAALQAAAOgJAKQgJAHgSADQAGADAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgGQAAgJgGgGQgHgFgOAAIgnAAg");
	this.shape_198.setTransform(-412.7,195.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgIBAIgxh/IASAAIAhBcQAFALABAKIAGgVIAjhcIARAAIgyB/g");
	this.shape_199.setTransform(-425.8,195.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBAOQgEAQAAAPQAAApAZArg");
	this.shape_200.setTransform(-434.5,196.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgMIgOgaIALAAQAPAWAIAWQAHAUAAATQAAAXgJAWQgKAWgLARg");
	this.shape_201.setTransform(-300.3,174.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAQAMAAAHACQAJABAGAEQAHAFAEAIQADAIABAKQAAAQgKAKQgLALgbgBIgfAAIAAA1gAgegCIAfAAQAQAAAHgFQAHgHAAgLQAAgIgEgGQgEgGgHgCIgPgBIgfAAg");
	this.shape_202.setTransform(-309.2,173);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAAQADAJQADAHAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_203.setTransform(-322,173.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_204.setTransform(-339.4,173);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOghIgHgcQgCANgFANg");
	this.shape_205.setTransform(-352.5,173);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_206.setTransform(-364.3,173);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgbA6QgPgIgIgPQgIgQAAgTQAAgQAIgRQAIgQAOgIQAPgIARAAQAOAAAMAFQALAEAGAIQAHAIADANIgPAFQgDgLgFgFQgEgGgIgDQgIgDgKAAQgJAAgJADQgIAEgFAFQgGAHgDAGQgFAMAAANQAAAQAGAMQAGAMAMAFQALAGALAAQALAAAKgEQALgEAFgFIAAgZIgmAAIAAgNIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_207.setTransform(-377.6,173);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgUQAIgWAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_208.setTransform(-387.3,174.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAATQAAARgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_209.setTransform(-400.5,173.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_210.setTransform(-416.6,173);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGACQAKABAGAEQAHAFAEAIQAEAIAAAKQgBAQgJAKQgLALgcgBIgeAAIAAA1gAgegCIAeAAQASAAAGgFQAHgHAAgLQAAgIgEgGQgEgGgHgCIgQgBIgeAAg");
	this.shape_211.setTransform(-428.2,173);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgHgYIgPAjIAqAAIgOghIgHgcQgCANgEANg");
	this.shape_212.setTransform(-440.5,173);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_213.setTransform(-451.2,173);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_214.setTransform(-461.7,173);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_215.setTransform(-212.9,131.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_216.setTransform(-224.8,131.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_217.setTransform(-233.2,131.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAeBAIgrhAIgWATIAAAtIgRAAIAAh/IARAAIAAA/IA+g/IAYAAIg0A1IA2BKg");
	this.shape_218.setTransform(-241.2,131.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_219.setTransform(-213.7,104);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_220.setTransform(-224.6,104.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AAVA7QgHgJAAgRQAAgOAGgKQAHgJAOAAQAMAAAIAIQAIAJAAAQQAAARgIAJQgIAIgMAAQgMAAgIgIgAAfAPQgEAFAAAOQAAAMAEAGQAEAFAGAAQAGAAAEgFQAEgGAAgNQAAgNgEgFQgEgFgGAAQgGAAgEAFgAgoBDIBEiFIANAAIhECFgAg8gHQgIgJAAgRQAAgOAHgKQAHgJANAAQAMAAAIAIQAIAJAAARQAAAQgIAJQgIAHgMAAQgLAAgIgHgAgygyQgEAFAAANQAAANAEAFQAEAFAGAAQAGAAAEgFQAEgFAAgOQAAgMgEgFQgEgFgGAAQgGAAgEAFg");
	this.shape_221.setTransform(-239.1,104.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_222.setTransform(-187.7,77.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_223.setTransform(-198.7,77.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_224.setTransform(-208.8,77.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAhBAIAAg8IhBAAIAAA8IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_225.setTransform(-225.3,77.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQgBgRQAAgTAIgQQAIgOAOgIQAOgIAPAAQAUAAANAKQANAKAFASIgRADQgEgOgIgGQgJgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAFANAKAFQAKAHAJAAQAPAAAKgJQAKgIADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_226.setTransform(-238.2,77.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_227.setTransform(-250.3,77.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_228.setTransform(-258.3,77.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGABQAKACAGAFQAHAEAEAIQADAIABAJQgBARgJAJQgLALgcAAIgeAAIAAA1gAgegBIAeAAQASAAAGgHQAHgGAAgLQAAgIgEgGQgEgFgHgCIgQgBIgeAAg");
	this.shape_229.setTransform(-266.5,77.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAGAIACALQAEAMAAARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMAAAeQABAfAHALQAHAKAKAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgKAAgGAJg");
	this.shape_230.setTransform(218.7,131.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_231.setTransform(208.1,131);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAIgJQAGgIAOgLQATgRAHgJQAIgKgBgJQAAgJgGgHQgHgGgLAAQgJAAgHAHQgHAHAAAMIgQgCQABgSALgKQAMgJAQAAQASAAALAKQALAKAAAQQAAAHgDAIQgDAHgIAHQgHAIgRAOIgQARQgEAEgDAEIA9AAIAAAPg");
	this.shape_232.setTransform(198.6,131);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_233.setTransform(221.2,104.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_234.setTransform(213.8,109.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKAAgJQABgJgHgHQgHgGgKAAQgKAAgHAHQgGAHgBAMIgQgCQACgSAKgKQAMgJAQAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARIgHAIIA9AAIAAAPg");
	this.shape_235.setTransform(206.1,104);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgIAGgEAKQgEAKAAAUQAFgJAJgEQAHgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgQABQgHAIAAANQAAAIAEAHQADAIAGAEQAHADAEAAQAKAAAHgIQAIgIAAgOQAAgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_236.setTransform(196.2,104.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIAEALQADAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_237.setTransform(216.2,77.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape_238.setTransform(208.8,82.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJABAPIgPABQgCgJgEgEQgGgHgKAAQgFAAgGAEQgIAGgEAKQgFAKABAUQAFgJAIgEQAJgEAHAAQAQAAALALQALAKAAASQAAANgFAKQgGAKgJAGQgJAFgLAAQgTAAgMgOgAgPABQgIAIAAANQAAAIADAHQAEAIAGAEQAGADAFAAQAKAAAIgIQAGgIAAgOQAAgNgGgIQgIgFgKAAQgJAAgHAFg");
	this.shape_239.setTransform(201.2,77.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_240.setTransform(149.7,131.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_241.setTransform(139.7,131.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_242.setTransform(129.1,131);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_243.setTransform(152.3,104.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_244.setTransform(144.8,109.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_245.setTransform(137.2,104.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_246.setTransform(127.3,104.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQAAgVAEgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAFAIQAEAIAEALQACAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_247.setTransform(147.2,77.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape_248.setTransform(139.8,82.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgHAGgFAKQgEAKAAAUQAFgJAIgEQAIgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgPABQgIAIAAANQAAAIAEAHQADAIAGAEQAHADAEAAQAKAAAHgIQAIgIAAgOQAAgNgIgIQgHgFgKAAQgJAAgHAFg");
	this.shape_249.setTransform(132.2,77.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAFAIADALQADAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_250.setTransform(80.7,131.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_251.setTransform(70.7,131.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_252.setTransform(60.1,131);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgIQAIgHAAgMQAAgKgHgIQgHgHgLAAQgDAAgGACIABgMIADAAQAIAAAIgFQAIgGAAgKQAAgJgGgGQgGgFgHgBQgJABgGAFQgHAGgBAMIgQgDQADgQAKgIQAKgKAQABQAIAAAJAEQAJAEAFAJQAEAHAAAJQAAAJgEAGQgFAHgIAEQALADAGAGQAHAJAAAMQAAARgNALQgMANgRAAQgRAAgLgLg");
	this.shape_253.setTransform(83.2,104.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape_254.setTransform(75.8,109.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgHAGgFAKQgFAKABAUQAFgJAIgEQAJgEAHAAQAPAAAMALQALAKAAASQAAANgFAKQgGAKgJAGQgJAFgLAAQgSAAgNgOgAgPABQgIAIAAANQAAAIADAHQAEAIAGAEQAGADAFAAQAKAAAIgIQAGgIABgOQgBgNgGgIQgIgFgKAAQgJAAgHAFg");
	this.shape_255.setTransform(68.2,104.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_256.setTransform(58.3,104.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_257.setTransform(78.3,77.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_258.setTransform(70.8,82.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_259.setTransform(63.3,77.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAGAIACALQAEAMAAARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMAAAeQABAfAHALQAHAKAKAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgKAAgGAJg");
	this.shape_260.setTransform(11.7,131.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_261.setTransform(1.7,131.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_262.setTransform(-8.9,131);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMAAARQABAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_263.setTransform(14.2,104.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_264.setTransform(6.8,109.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgIQAIgHAAgMQAAgKgHgIQgHgHgLAAQgDAAgGACIABgMIADAAQAIAAAIgFQAIgGAAgKQAAgJgGgGQgGgFgHgBQgJABgGAFQgHAGgBAMIgQgDQADgQAKgIQAKgKAQABQAIAAAJAEQAJAEAFAJQAEAHAAAJQAAAJgEAGQgFAHgIAEQALADAGAGQAHAJAAAMQAAARgNALQgMANgRAAQgRAAgLgLg");
	this.shape_265.setTransform(-0.8,104.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_266.setTransform(-10.7,104.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_267.setTransform(9.3,77.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgIAJIAAgQIARAAIAAAQg");
	this.shape_268.setTransform(1.8,82.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_269.setTransform(-5.7,77.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_270.setTransform(-57.3,131.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJACAPIgQABQgDgJgDgEQgHgHgJAAQgGAAgFAEQgHAGgFAKQgEAKgBAUQAGgJAJgEQAIgEAHAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgQABQgHAIAAANQAAAIAEAHQADAIAGAEQAGADAFAAQALAAAGgIQAIgIgBgOQABgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_271.setTransform(-67.3,131.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_272.setTransform(-77.9,131);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgPIA5hRIAMAAIAABRIASAAIAAAPIgSAAIAAAfgAgcASIAnAAIAAg3g");
	this.shape_273.setTransform(-55,104.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_274.setTransform(-62.2,109.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_275.setTransform(-69.8,104.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgPIA4hRIAOAAIAABRIARAAIAAAPIgRAAIAAAfgAgcASIAnAAIAAg3g");
	this.shape_276.setTransform(-80,104.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQAAgVAEgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAFAIAEALQACAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_277.setTransform(-59.8,77.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape_278.setTransform(-67.2,82.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_279.setTransform(-74.7,77.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_280.setTransform(-126.3,131.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_281.setTransform(-136.2,131.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_282.setTransform(-146.9,131);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_283.setTransform(-123.7,104.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape_284.setTransform(-131.2,109.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_285.setTransform(-138.7,104.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AAKBAIAAgfIg1AAIAAgPIA4hRIAOAAIAABRIARAAIAAAPIgRAAIAAAfgAgbASIAlAAIAAg3g");
	this.shape_286.setTransform(-149,104.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_287.setTransform(-128.7,77.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_288.setTransform(-136.2,82.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgPIA4hRIANAAIAABRIASAAIAAAPIgSAAIAAAfgAgcASIAnAAIAAg3g");
	this.shape_289.setTransform(-144,77.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgMIgOgaIALAAQAPAWAIAWQAHAUAAATQAAAXgJAWQgKAWgLARg");
	this.shape_290.setTransform(-330,115.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIADALQAEAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_291.setTransform(-338.3,113.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAATQAAARgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_292.setTransform(-348.2,113.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgGAqIAAgjIgjAAIAAgNIAjAAIAAgjIANAAIAAAjIAjAAIAAANIgjAAIAAAjg");
	this.shape_293.setTransform(-358.5,113.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIAEALQADAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_294.setTransform(-368.8,113.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgOIA5hSIAMAAIAABSIASAAIAAAOIgSAAIAAAfgAgcATIAnAAIAAg5g");
	this.shape_295.setTransform(-379,113.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_296.setTransform(-388.9,113.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_297.setTransform(-400.5,113.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_298.setTransform(-412.7,113.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgIBAIgxh/IASAAIAhBcQAFALABAKIAGgVIAjhcIARAAIgyB/g");
	this.shape_299.setTransform(-425.8,113.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgUQAIgWAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_300.setTransform(-434.5,115.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgLIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape_301.setTransform(-300.3,93.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAQAMAAAHABQAJACAGAFQAHAEAEAIQADAIABAJQAAARgKAJQgLALgbAAIgfAAIAAA1gAgegBIAfAAQAQAAAHgHQAHgGAAgLQAAgIgEgGQgEgFgHgCIgPgBIgfAAg");
	this.shape_302.setTransform(-309.2,91.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAIQADAIAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEAMQgFALgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_303.setTransform(-322,91.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAJAAALQAAANgJAJQgJAIgSADQAGADAEADQAHAGAHALIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgFQAAgKgGgGQgHgFgOAAIgnAAg");
	this.shape_304.setTransform(-339.4,91.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_305.setTransform(-352.5,91.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_306.setTransform(-364.3,91.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAEQgDgJgFgGQgEgGgIgDQgIgEgKAAQgJAAgJAEQgIADgFAHQgGAFgDAHQgFAMAAANQAAAQAGAMQAGALAMAGQALAGALAAQALAAAKgFQALgDAFgGIAAgXIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_307.setTransform(-377.6,91.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_308.setTransform(-387.3,93.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_309.setTransform(-401.2,91.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQAAQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_310.setTransform(-416.6,91.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGABQAKACAGAFQAHAEAEAIQAEAIAAAJQgBARgJAJQgLALgcAAIgeAAIAAA1gAgegBIAeAAQASAAAGgHQAHgGAAgLQAAgIgEgGQgEgFgHgCIgQgBIgeAAg");
	this.shape_311.setTransform(-428.2,91.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgHgZIgPAkIAqAAIgOgiIgHgbQgCANgEAMg");
	this.shape_312.setTransform(-440.5,91.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_313.setTransform(-451.2,91.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_314.setTransform(-461.7,91.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgKALgEQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQAAQgCgLgHgHQgIgGgOAAQgOAAgHAGQgHAFAAAIQAAAHAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_315.setTransform(-212.9,49.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_316.setTransform(-224.8,49.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_317.setTransform(-233.2,49.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AAeBAIgrhAIgWATIAAAtIgRAAIAAh/IARAAIAAA/IA+g/IAYAAIg0A1IA2BKg");
	this.shape_318.setTransform(-241.2,49.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_319.setTransform(-213.7,22);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_320.setTransform(-224.6,22.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAVA7QgHgJAAgRQAAgOAGgKQAHgJAOAAQAMAAAIAIQAIAJAAAQQAAARgIAJQgIAIgMAAQgMAAgIgIgAAfAPQgEAFAAAOQAAAMAEAGQAEAFAGAAQAGAAAEgFQAEgGAAgNQAAgNgEgFQgEgFgGAAQgGAAgEAFgAgoBDIBEiFIANAAIhECFgAg8gHQgIgJAAgRQAAgOAHgKQAHgJANAAQAMAAAIAIQAIAJAAARQAAAQgIAJQgIAHgMAAQgLAAgIgHgAgygyQgEAFAAANQAAANAEAFQAEAFAGAAQAGAAAEgFQAEgFAAgOQAAgMgEgFQgEgFgGAAQgGAAgEAFg");
	this.shape_321.setTransform(-239.1,22.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_322.setTransform(-187.7,-4.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_323.setTransform(-198.7,-4.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_324.setTransform(-208.8,-4.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AAhBAIAAg9IhBAAIAAA9IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_325.setTransform(-225.3,-4.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQgBgRQAAgUAIgPQAIgOAOgIQAOgIAPAAQAUAAANAKQANAJAFATIgRADQgEgNgIgHQgJgGgNgBQgNAAgKAHQgKAIgEAMQgEAMAAAMQAAAPAFAMQAFANAKAFQAKAHAJAAQAPgBAKgHQAKgJADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_326.setTransform(-238.2,-4.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_327.setTransform(-250.3,-4.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_328.setTransform(-258.3,-4.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGABQAKACAGAFQAHAEAEAIQADAIABAJQgBARgJAJQgLALgcAAIgeAAIAAA1gAgegBIAeAAQASgBAGgGQAHgGAAgLQAAgIgEgGQgEgFgHgCIgQgBIgeAAg");
	this.shape_329.setTransform(-266.5,-4.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAGAIACALQAEAMAAARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMAAAeQABAfAHALQAHAKAKAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgKAAgGAJg");
	this.shape_330.setTransform(218.7,49.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgIQAIgHAAgLQAAgLgHgHQgHgIgLAAQgDAAgGACIABgMIADABQAIgBAIgFQAIgGAAgKQAAgJgGgFQgGgHgHAAQgJAAgGAHQgHAFgBAMIgQgDQADgQAKgIQAKgKAQABQAIgBAJAFQAJAEAFAJQAEAHAAAJQAAAJgEAGQgFAHgIAEQALADAGAGQAHAJAAAMQAAARgNALQgMAMgRAAQgRABgLgLg");
	this.shape_331.setTransform(208.7,49.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAIgJQAGgIAOgLQATgRAHgJQAIgKgBgJQAAgJgGgHQgHgGgLAAQgJAAgHAHQgHAHAAAMIgQgCQABgSALgKQAMgJAQAAQASAAALAKQALAKAAAQQAAAHgDAIQgDAHgIAHQgHAIgRAOIgQARQgEAEgDAEIA9AAIAAAPg");
	this.shape_332.setTransform(198.6,49);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_333.setTransform(221.2,22.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_334.setTransform(213.8,27.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_335.setTransform(206.2,22.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgdA2QgLgJgBgRIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgPQAAgNgHgGQgIgHgKgBQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgIALAAQARAAAMALQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_336.setTransform(196.3,22.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgdA2QgLgJgBgRIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgPQAAgNgHgGQgIgHgKgBQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgIALAAQARAAAMALQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_337.setTransform(216.3,-4.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape_338.setTransform(208.8,0.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJABAPIgPABQgCgJgEgEQgGgHgKAAQgFAAgGAEQgIAGgEAKQgFAKABAUQAFgJAIgEQAJgEAHAAQAQAAALALQALAKAAASQAAANgFAKQgGAKgJAGQgJAFgLAAQgTAAgMgOgAgPABQgIAIAAANQAAAIADAHQAEAIAGAEQAGADAFAAQAKAAAIgIQAGgIAAgOQAAgNgGgIQgIgFgKAAQgJAAgHAFg");
	this.shape_339.setTransform(201.2,-4.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_340.setTransform(149.7,49.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_341.setTransform(139.1,49);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKAAgJQABgJgHgHQgHgGgKAAQgKAAgHAHQgGAHgBAMIgQgCQACgSAKgKQAMgJAQAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARIgHAIIA9AAIAAAPg");
	this.shape_342.setTransform(129.6,49);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_343.setTransform(152.2,22.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_344.setTransform(144.8,27.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJACAPIgQABQgDgJgDgEQgGgHgKAAQgFAAgGAEQgHAGgFAKQgFAKAAAUQAGgJAIgEQAJgEAHAAQAQAAALALQALAKAAASQAAANgFAKQgGAKgJAGQgJAFgLAAQgTAAgMgOgAgPABQgIAIAAANQAAAIADAHQAEAIAGAEQAHADAEAAQAKAAAIgIQAGgIAAgOQAAgNgGgIQgIgFgKAAQgJAAgHAFg");
	this.shape_345.setTransform(137.2,22.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgdA2QgLgJgBgRIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgPQAAgNgHgGQgIgHgKgBQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgIALAAQARAAAMALQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_346.setTransform(127.3,22.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQAAgVAEgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAFAIQAEAIAEALQACAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_347.setTransform(147.2,-4.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape_348.setTransform(139.8,0.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgHAGgFAKQgEAKAAAUQAFgJAIgEQAIgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgPABQgIAIAAANQAAAIAEAHQADAIAGAEQAHADAEAAQAKAAAHgIQAIgIAAgOQAAgNgIgIQgHgFgKAAQgJAAgHAFg");
	this.shape_349.setTransform(132.2,-4.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAFAIADALQADAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_350.setTransform(80.7,49.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_351.setTransform(70.1,49);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKABgJQAAgJgHgHQgHgGgKAAQgKAAgHAHQgGAHgBAMIgQgCQABgSAMgKQAKgJARAAQASAAALAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgRARIgGAIIA9AAIAAAPg");
	this.shape_352.setTransform(60.6,49);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_353.setTransform(83.2,22.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape_354.setTransform(75.8,27.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgIQAIgHAAgLQAAgLgHgIQgHgHgLAAQgDAAgGACIABgMIADABQAIgBAIgFQAIgGAAgKQAAgJgGgFQgGgHgHAAQgJAAgGAHQgHAFgBAMIgQgDQADgQAKgIQAKgKAQABQAIgBAJAFQAJAEAFAJQAEAHAAAJQAAAJgEAGQgFAHgIAEQALADAGAGQAHAJAAAMQAAARgNALQgMAMgRAAQgRABgLgLg");
	this.shape_355.setTransform(68.2,22.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgdA2QgLgJgBgRIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgPQAAgNgHgGQgIgHgKgBQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgIALAAQARAAAMALQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_356.setTransform(58.3,22.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMABARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMgBAeQABAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_357.setTransform(78.2,-4.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_358.setTransform(70.8,0.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJACAPIgQABQgDgJgDgEQgHgHgJAAQgGAAgFAEQgHAGgFAKQgEAKgBAUQAGgJAJgEQAIgEAHAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgQABQgHAIAAANQAAAIAEAHQADAIAGAEQAGADAFAAQALAAAGgIQAIgIgBgOQABgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_359.setTransform(63.2,-4.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAGAIACALQAEAMAAARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMAAAeQABAfAHALQAHAKAKAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgKAAgGAJg");
	this.shape_360.setTransform(11.7,49.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMABARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMgBAeQABAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_361.setTransform(1.7,49.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAIgJQAGgIAOgLQATgRAHgJQAIgKgBgJQAAgJgGgHQgHgGgLAAQgJAAgHAHQgHAHAAAMIgQgCQABgSALgKQAMgJAQAAQASAAALAKQALAKAAAQQAAAHgDAIQgDAHgIAHQgHAIgRAOIgQARQgEAEgDAEIA9AAIAAAPg");
	this.shape_362.setTransform(-8.4,49);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgHAGgFAKQgFAKABAUQAFgJAIgEQAJgEAHAAQAPAAAMALQALAKAAASQAAANgFAKQgGAKgJAGQgJAFgMAAQgRAAgNgOgAgPABQgIAIAAANQAAAIADAHQAEAIAGAEQAGADAFAAQAKAAAIgIQAGgIABgOQgBgNgGgIQgIgFgKAAQgJAAgHAFg");
	this.shape_363.setTransform(14.2,22.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_364.setTransform(6.8,27.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAJAEAFAIQAEAIADALQAEAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_365.setTransform(-0.8,22.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgdA2QgLgJgBgRIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgPQAAgNgHgGQgIgHgKgBQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgIALAAQARAAAMALQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_366.setTransform(-10.7,22.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgdA2QgLgJgBgRIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgPQAAgNgHgGQgIgHgKgBQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgIALAAQARAAAMALQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_367.setTransform(9.3,-4.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgIAJIAAgQIARAAIAAAQg");
	this.shape_368.setTransform(1.8,0.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgdA2QgLgJgBgRIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgPQAAgNgHgGQgIgHgKgBQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgIALAAQARAAAMALQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_369.setTransform(-5.7,-4.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_370.setTransform(-57.3,49.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_371.setTransform(-67.3,49.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_372.setTransform(-77.9,49);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIADALQAEAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_373.setTransform(-54.8,22.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_374.setTransform(-62.2,27.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgWA/QAAgPAGgWQAFgWALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAWQgFARgBATg");
	this.shape_375.setTransform(-69.7,22.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgPIA4hRIAOAAIAABRIARAAIAAAPIgRAAIAAAfgAgcASIAnAAIAAg3g");
	this.shape_376.setTransform(-80,22.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQAAgVAEgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAFAIAEALQACAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_377.setTransform(-59.8,-4.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape_378.setTransform(-67.2,0.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgdA2QgLgJgBgRIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgPQAAgNgHgGQgIgHgKgBQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgIALAAQARAAAMALQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_379.setTransform(-74.7,-4.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_380.setTransform(-126.3,49.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgWA/QAAgPAGgWQAFgWALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAWQgFARgBATg");
	this.shape_381.setTransform(-136.2,49.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_382.setTransform(-146.9,49);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgPIA4hRIAOAAIAABRIARAAIAAAPIgRAAIAAAfgAgcASIAnAAIAAg3g");
	this.shape_383.setTransform(-124,22.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape_384.setTransform(-131.2,27.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgIQAIgHAAgLQAAgLgHgIQgHgHgLAAQgDAAgGACIABgMIADABQAIgBAIgFQAIgGAAgKQAAgJgGgFQgGgHgHAAQgJAAgGAHQgHAFgBAMIgQgDQADgQAKgIQAKgKAQABQAIgBAJAFQAJAEAFAJQAEAHAAAJQAAAJgEAGQgFAHgIAEQALADAGAGQAHAJAAAMQAAARgNALQgMAMgRAAQgRABgLgLg");
	this.shape_385.setTransform(-138.8,22.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AAKBAIAAgfIg1AAIAAgPIA4hRIAOAAIAABRIARAAIAAAPIgRAAIAAAfgAgbASIAlAAIAAg3g");
	this.shape_386.setTransform(-149,22.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMAAARQABAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_387.setTransform(219.4,-32.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_388.setTransform(209.4,-32.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_389.setTransform(198.8,-32.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQAAgVAEgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAFAIQAEAIAEALQACAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_390.setTransform(149.9,-32.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_391.setTransform(140,-32.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_392.setTransform(129.3,-32.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMABARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMgBAeQABAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_393.setTransform(80.9,-32.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIgBgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARABAMAMQALAJAAATQAAARgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_394.setTransform(71,-32.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_395.setTransform(60.3,-32.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIAEALQADAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_396.setTransform(11.9,-32.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADANAGAHQAHAFAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADAAQAIABAIgGQAIgGAAgKQAAgJgGgGQgGgFgHAAQgJAAgGAFQgHAGgBAMIgQgDQADgQAKgJQAKgIAQgBQAIAAAJAFQAJAFAFAHQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_397.setTransform(1.9,-32.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_398.setTransform(-8.7,-32.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAIAEAGAIQAEAIAEALQACAMAAARQAAAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_399.setTransform(-57.7,-32.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_400.setTransform(-68.4,-32.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_401.setTransform(-77,-32.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgQQgBgNgGgMIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape_402.setTransform(111,-57.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAOAAAJAEQAJAEAFAIQAFAIAAAJQAAAJgEAGQgFAIgJAFQAMACAGAHQAGAIAAALQAAAKgEAHQgDAJgGADQgGAEgIADQgJACgMAAgAgeAxIAeAAIAMgBQAGgBAEgDQADgCADgFQADgEAAgHQAAgGgEgGQgEgFgGgDQgHgBgKAAIgeAAgAgegJIAcAAQAJABAFgCQAHgCADgFQADgEAAgHQAAgGgDgFQgDgFgGgCQgFgCgMABIgaAAg");
	this.shape_403.setTransform(102,-59.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_404.setTransform(91.1,-59.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAFAIAEALQACAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_405.setTransform(75.8,-59.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQAAgVAEgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAFAIAEALQACAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_406.setTransform(65.8,-59.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAJAEAFAIQAFAIADALQACAMAAARQAAAWgEAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_407.setTransform(55.8,-59.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_408.setTransform(45.1,-59.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBAOQgEAQAAAPQAAApAZArg");
	this.shape_409.setTransform(38,-57.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_410.setTransform(24.7,-59.2);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AAhBAIAAg8IhBAAIAAA8IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_411.setTransform(12.7,-59.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAFQgDgKgFgGQgEgFgIgEQgIgEgKAAQgJAAgJAEQgIAEgFAGQgGAFgDAHQgFAMAAANQAAAQAGAMQAGALAMAGQALAGALAAQALAAAKgFQALgDAFgGIAAgXIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_412.setTransform(-0.9,-59.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_413.setTransform(-10.2,-59.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_414.setTransform(-18.6,-59.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AAeBAIgbhgIgDgPIgCAPIgbBgIgSAAIgih/IARAAIAUBSIAFAbIAGgYIAZhVIASAAIASA/QAIAYACAWIAHgcIAUhRIARAAIgjB/g");
	this.shape_415.setTransform(-33.3,-59.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_416.setTransform(-236.6,-45.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgfA6QgOgKgIgOQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAJQAOAIAIAPQAHAPAAASQAAATgIAQQgIAPgOAJQgPAHgQAAQgRAAgOgIgAgdgmQgNAMAAAbQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgMgKgGQgLgHgMAAQgQAAgNANg");
	this.shape_417.setTransform(-250,-45.3);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_418.setTransform(-259.5,-45.3);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_419.setTransform(-267.5,-45.3);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_420.setTransform(-275.5,-45.3);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_421.setTransform(-284.1,-45.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgfA6QgOgKgIgOQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAJQAOAIAIAPQAHAPAAASQAAATgIAQQgIAPgOAJQgPAHgQAAQgRAAgOgIgAgdgmQgNAMAAAbQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgMgKgGQgLgHgMAAQgQAAgNANg");
	this.shape_422.setTransform(-297,-45.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGABQAKACAGAFQAHAEAEAIQADAIABAJQgBARgJAJQgLALgcAAIgeAAIAAA1gAgegBIAeAAQASAAAGgHQAHgGAAgLQAAgIgEgGQgEgFgHgCIgQgBIgeAAg");
	this.shape_423.setTransform(-309.7,-45.3);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAJAAALQAAANgJAJQgJAIgSADQAGADAEADQAHAGAHALIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgFQAAgKgGgGQgHgFgOAAIgnAAg");
	this.shape_424.setTransform(-327,-45.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAxh/IARAAIA1B/gAgHgZIgPAkIAqAAIgOgiIgHgbQgCANgEAMg");
	this.shape_425.setTransform(-340,-45.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_426.setTransform(-351.8,-45.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAEQgDgJgFgGQgEgGgIgDQgIgEgKAAQgJAAgJAEQgIADgFAHQgGAFgDAHQgFAMAAANQAAAQAGAMQAGALAMAGQALAGALAAQALAAAKgFQALgDAFgGIAAgXIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_427.setTransform(-365.1,-45.3);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgXBCIAjiDIAMAAIgjCDg");
	this.shape_428.setTransform(-374.5,-45.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGABQAKACAGAFQAHAEAEAIQAEAIAAAJQgBARgJAJQgLALgcAAIgeAAIAAA1gAgegBIAeAAQASAAAGgHQAHgGAAgLQAAgIgEgGQgEgFgHgCIgQgBIgeAAg");
	this.shape_429.setTransform(-382.7,-45.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgHgZIgPAkIAqAAIgOgiIgHgbQgCANgEAMg");
	this.shape_430.setTransform(-395,-45.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_431.setTransform(-405.7,-45.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_432.setTransform(-416.2,-45.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_433.setTransform(17.8,-85.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AAhBAIAAg8IhBAAIAAA8IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_434.setTransform(5.8,-85.2);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgQAIgRQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAFQgDgKgFgGQgEgFgIgEQgIgDgKAAQgJAAgJADQgIAEgFAFQgGAGgDAHQgFAMAAANQAAAQAGAMQAGALAMAGQALAGALAAQALAAAKgEQALgFAFgEIAAgYIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_435.setTransform(-7.8,-85.2);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_436.setTransform(-17.1,-85.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_437.setTransform(-24.4,-85.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAANIg7AAIAAA7g");
	this.shape_438.setTransform(-34.9,-85.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_439.setTransform(-49.7,-85.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_440.setTransform(-60.8,-85.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgIBAIgxh/IASAAIAhBcQAFALABAKIAGgVIAjhcIARAAIgyB/g");
	this.shape_441.setTransform(-73.1,-85.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_442.setTransform(-84.8,-85.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_443.setTransform(-95.7,-85.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAIAAALQAAAOgJAKQgJAHgSACQAGADAEAEQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgGQAAgJgGgGQgHgFgOAAIgnAAg");
	this.shape_444.setTransform(-112,-85.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgfA6QgOgKgIgPQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAJQAOAIAIAPQAHAPAAASQAAATgIAQQgIAPgOAJQgPAHgQAAQgRAAgOgIgAgdgmQgNAMAAAcQAAAXAMANQANANARAAQATAAAMgNQANgOAAgYQAAgOgGgMQgFgMgKgGQgLgHgMABQgQAAgNAMg");
	this.shape_445.setTransform(-126,-85.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAANIg7AAIAAA7g");
	this.shape_446.setTransform(-138.2,-85.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_447.setTransform(-154.1,-85.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgLgBgMIAQgCQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgEgHgDQgKgEgEgHQgFgHAAgJQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAHAAAIQAAAGAFAEQAFAFASAFQAVAEAIAEQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_448.setTransform(-165.7,-85.2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgVIAAhIIARAAIAABIQAAASADAHQADAIAIAFQAHAEALAAQARAAAIgJQAIgIAAgZIAAhIIARAAIAABIQAAAUgEAMQgFALgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_449.setTransform(-178.2,-85.1);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAIAAALQAAAOgJAKQgJAHgSACQAGADAEAEQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgGQAAgJgGgGQgHgFgOAAIgnAAg");
	this.shape_450.setTransform(-190.6,-85.2);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AAhBAIAAg8IhBAAIAAA8IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_451.setTransform(-204.1,-85.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_452.setTransform(-216.1,-85.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_453.setTransform(-231.4,-85.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_454.setTransform(-242.7,-85.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgLgBgMIAQgCQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgEgHgDQgKgEgEgHQgFgHAAgJQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAHAAAIQAAAGAFAEQAFAFASAFQAVAEAIAEQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_455.setTransform(-255,-85.2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgdA2QgLgJgBgRIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgPQAAgNgHgGQgIgHgKgBQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgIALAAQARAAAMALQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_456.setTransform(-128.7,-4.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_457.setTransform(-136.2,0.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgPIA4hRIANAAIAABRIASAAIAAAPIgSAAIAAAfgAgcASIAnAAIAAg3g");
	this.shape_458.setTransform(-144,-4.9);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAIAEAGAIQAEAIAEALQACAMAAARQAAAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_459.setTransform(-131.1,-32.3);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AgbA5QgJgIgCgQIAPgBQACALAFAFQAGAEAIAAQAFAAAGgDQAFgDAEgGQADgFADgKQACgJAAgKIAAgDQgFAHgIAFQgIAFgIAAQgQAAgLgMQgLgKAAgTQAAgTAMgMQALgMASAAQAKAAALAHQAKAGAGANQAFAMAAAYQAAAXgFAPQgGAOgKAIQgLAHgMAAQgPAAgKgIgAgRgqQgIAIAAAOQAAAMAIAIQAHAGAKAAQAKAAAHgGQAHgIAAgNQAAgOgHgIQgHgIgKAAQgJAAgIAJg");
	this.shape_460.setTransform(-141.1,-32.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AgUBUQAYgqAAgqQAAgPgDgQQgBgNgGgNIgOgaIALAAQAPAWAIAWQAHAUAAATQAAAXgJAWQgKAXgLAQg");
	this.shape_461.setTransform(-330,33.4);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIADALQAEAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_462.setTransform(-338.3,31.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_463.setTransform(-348.2,31.7);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgGAqIAAgjIgjAAIAAgNIAjAAIAAgjIANAAIAAAjIAjAAIAAANIgjAAIAAAjg");
	this.shape_464.setTransform(-358.5,31.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIAEALQADAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_465.setTransform(-368.8,31.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgOIA5hSIAMAAIAABSIASAAIAAAOIgSAAIAAAfgAgcATIAnAAIAAg5g");
	this.shape_466.setTransform(-379,31.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_467.setTransform(-388.9,31.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_468.setTransform(-400.5,31.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAKQgJAHgSACQAGADAEAEQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_469.setTransform(-412.7,31.6);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgIBAIgxh/IASAAIAhBcQAFALABAKIAGgVIAjhcIARAAIgyB/g");
	this.shape_470.setTransform(-425.8,31.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AAJBUQgLgQgJgXQgJgWAAgXQAAgTAHgUQAIgWAOgWIAMAAIgOAaQgGAMgBAOQgEAQAAAPQAAAqAZAqg");
	this.shape_471.setTransform(-434.5,33.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgUBUQAYgqAAgqQAAgPgDgRQgBgNgGgLIgOgbIALAAQAPAWAIAXQAHASAAAUQAAAXgJAWQgKAWgLARg");
	this.shape_472.setTransform(-292.9,11.3);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGABQAKACAGAFQAHAEAEAIQAEAIAAAKQAAAQgLAJQgKALgcAAIgeAAIAAA1gAgegBIAeAAQARgBAHgFQAHgHAAgLQAAgIgEgGQgEgFgHgCIgQgBIgeAAg");
	this.shape_473.setTransform(-301.8,9.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAJQADAHAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEAMQgFALgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_474.setTransform(-314.7,9.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAJAAALQAAANgJAJQgJAIgSADQAGADAEADQAHAGAHALIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgGAAgFQAAgKgGgGQgHgFgOgBIgnAAg");
	this.shape_475.setTransform(-332.1,9.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AApBAIgPgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgIgZIgOAkIAqAAIgNgiIgHgbQgDANgFAMg");
	this.shape_476.setTransform(-345.1,9.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_477.setTransform(-356.9,9.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgbA6QgPgIgIgPQgIgQAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAEQgDgJgFgGQgEgGgIgDQgIgDgKgBQgJABgJADQgIADgFAHQgGAFgDAHQgFAMAAANQAAARAGALQAGAMAMAFQALAGALAAQALAAAKgFQALgDAFgGIAAgXIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_478.setTransform(-370.2,9.5);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgUAHgSQAIgXAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAAqAZAqg");
	this.shape_479.setTransform(-379.9,11.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAQAMAAAHABQAJACAHAFQAGAEAEAIQAEAIgBAKQABAQgLAJQgKALgbAAIggAAIAAA1gAgfgBIAgAAQARgBAGgFQAHgHAAgLQAAgIgEgGQgEgFgGgCIgQgBIggAAg");
	this.shape_480.setTransform(-393.5,9.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAJQADAHAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEAMQgFALgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_481.setTransform(-406.3,9.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgKALgEQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQAAQgCgLgHgHQgIgGgOAAQgOAAgHAGQgHAFAAAIQAAAHAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_482.setTransform(-423.9,9.5);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGABQAKACAGAFQAHAEAEAIQAEAIAAAKQAAAQgLAJQgKALgcAAIgeAAIAAA1gAgegBIAeAAQARgBAHgFQAHgHAAgLQAAgIgEgGQgEgFgHgCIgQgBIgeAAg");
	this.shape_483.setTransform(-435.5,9.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_484.setTransform(-447.8,9.5);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_485.setTransform(-458.5,9.5);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAoIA7AAIAAANIg7AAIAAA6g");
	this.shape_486.setTransform(-469,9.5);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgLIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape_487.setTransform(-8.6,-103.4);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_488.setTransform(-17.3,-105.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_489.setTransform(-28,-105.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIAEALQADAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_490.setTransform(-43.9,-105.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIADALQAEAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_491.setTransform(-53.9,-105.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAJAEAEAIQAGAIACALQAEAMAAARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMAAAeQABAfAHALQAHAKAKAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgKAAgGAJg");
	this.shape_492.setTransform(-63.9,-105.1);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_493.setTransform(-73.8,-105);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_494.setTransform(-81.6,-103.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgOAnIgSAAIAyh/IAQAAIA1B/gAgIgZIgNAkIApAAIgNgiIgHgbQgDANgFAMg");
	this.shape_495.setTransform(-94.8,-105.2);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_496.setTransform(-106.6,-105.2);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAJAAALQAAANgJAJQgJAIgSADQAGADAEADQAHAGAHALIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgFQAAgKgGgGQgHgFgOAAIgnAAg");
	this.shape_497.setTransform(-118.8,-105.2);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AApBAIgPgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgIgZIgOAkIAqAAIgNgiIgHgbQgDANgFAMg");
	this.shape_498.setTransform(-131.8,-105.2);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_499.setTransform(-145.9,-105.2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_500.setTransform(-157.2,-105.2);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_501.setTransform(-169.8,-105.2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_502.setTransform(-178.6,-105.2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgOAAIglhsIAABsIgQAAIAAh/IAZAAIAfBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_503.setTransform(-188.7,-105.2);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAJAAALQAAANgJAJQgJAIgSADQAGADAEADQAHAGAHALIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgFQAAgKgGgGQgHgFgOAAIgnAAg");
	this.shape_504.setTransform(-202.1,-105.2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_505.setTransform(-215,-105.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_506.setTransform(-226.7,-105.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#000000").ss(1,0,0,3).p("AYLxsIAAkPIqyAAIAAEPIqyAAIAAkPIKyAAEAt2gV6Iq3AAIgCAAEAt0gRsIq1AAIgCAAIAAkOIqygBEAi9gRsIqyAAIAAEOIKyAAgEAt2gV6IgCEOIAAEOIAAEPIACAAIADAAIKtAAIAAEOIqtAAIgDAAIgCAAIq1AAIgCAAIAAkOIACAAIK1AAIAAEOEA4mgRsIAAkOIqtAAIgDAAEA4mgRsIqtAAIgDAAIgCAAEA4mgaJIAAEOEA4mgaJIqwAAMg1/AAAIAAEOIAAEPIxqAAIAAEOIRqAAIAAkOIKwAAIAAEOIAAEPIKyAAIAAEOIqyAAIAAkOIqwAAIAAkPEg4lgaJIAAnFMBxLAAAIAAHFEA4mgNeIAAEPEA4mgE9IAAEOIqtAAEA4mgNeIqtAAIgDAAIgCAAIq1AAIgCAAIAAEPIqyAAIAAkPIqyAAIAAEPIKyAAIAAEOIKyAAEAt0gE9IAAEOIAAENIAAEOIq1AAEAt0AHwIAAEOIq3AAIAAkOEA4mADeIAAEOIqtAAEA4mAHwIAAEOIqtAAEAt5ADeIKtAAEA4mgAvIAAENEAi9gAvIAAkOAYLk9IAAEOIKyAAIAAENIqyAAIAAkNIqyAAIqyAAIAAENIKyAAIAAEOIqyAAIAAkOIqwAAIAAEOIKwAAAYLDeIAAEOIKyAAIAAkOIK3AAAYLHwIAAEOIKyAAIAAEPIqyAAIAAEOIKyAAIAAkOIK3AAIAAEOIq1AAEAi9AYyIAAEPIqyAAIAAEOIKyAAIAAkOIK3AAIAAEOIq1AAEAi9AYyIAAkOAYLdBIAAkPIKyAAAYLUkIAAEOIqyAAIAAEPIAAEOIqyAAIAAkOIKyAAIKyAAEA4mAQNIAAEOIqtAAEA4mAYyIAAEPIAAEOIqtAAEA4mAUkIAAEOIqtAAEAt0AYyIAAEPEAt0AUkIAAEOIq3AAEAt5AdBIKtAAEAt5AQNIKtAAAYLQNIAAkPIqyAAIAAEPIAAEOIqyAAIAAkOIKyAAgEAt0AL+IAAEPEA4mAL+IAAEPEAt0gAvIq3AAEA4mgRsIAAEOEg4lgRsIAAodACn17IqwAAAoJ6JMgwcAAAEg4lgRsIeyAAANZk9IAAEOIAAENIKyAAACnk9IAAEOIqwAAIAAkOACnHwIAAEOIqwAAIAAkOANZHwIAAEOIqyAAIAAEPIqwAAIAAEOIKwAAANZteIqyAAIqwAAAoJpPIAAEOIxqAAIAAAAIAAkOIAAkPA5zk9IAAEOIRqAAA5zDeIAAEOI+yAAIAAspA5zHwIAAEOIRqAAA5zHsIRqAAAoJDeIxqAAIAAkNAoJDeIAAkNAoJpPIxqAAAoJdBIAAkPIAAkOA5zQNIAAEOI+yAAIAAsrA5zdBIAAkPIRqAAA5zUkIAAEOEgZzAhPIRqAAIKwAAAoJdBIxqAAIAAEOI+yAAIAAsrAoJdBIAAEOAoJQNIxqAAIAAkPA5zUbIRqAAANZUkIAAEOIqyAAIAAEPIqwAAACnUkIAAEOIqwAAAoJQNIAAkPAoJlBIKwAAA5zlBI+yAAIAAsrANZxsIAAEOEAYLAhPIqyAAAYLUbIqyAAAYLHsIqyAAAYLlBIqyAAANZxsIKyAA");
	this.shape_507.setTransform(-118.7,95);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("rgba(255,255,255,0.6)").s().p("A5zdsIAAAAI+yAAIAAsrIeyAAIRqAAIAAEOIxqAAIAAkOIAAEOIAAEPIAAEOIAAkOIRqAAIAAEOgA5zZeIAAkPIRqAAIAAEPgA5zZegAoJVPgA5zVPgA5zQ4IAAAAIAAkOIAAEOI+yAAIAAsrIeyAAIRqAAIAAEOIxqAAIAAkOIAAEOIRqAAIAAEPIxqAAIAAkPIAAEPIRqAAIAAEOgA5zMqgA5zEKIAAgBIAAkMIAAEMI+yAAIAAspIeyAAIAAEPIAAEOIRqAAIAAENgAoJgDIxqAAIAAkOIAAkPIRqAAIAAEPIxqAAIRqAAIAAEOgA5zoggA5zokIAAAAI+yAAIAAsrIeyAAI+yAAIAAodMAwcAAAMA1/AAAIKwAAIAAEOIAAABIqtAAIgDAAIADAAIKtAAIAAEOIqtAAIgDAAIgCAAIACkOIq3AAIgCAAIACAAIK3AAIgCEOIq1AAIgCAAIAAkOIqygBIKyABIAAEOIqyAAIAAkPIqyAAIKyAAIAAEPIqyAAIAAkPIqyAAIqwAAIAAkOIAAEOIKwAAIAAEPIqwAAIAAkPIAAEPIxqAAIAAEOIRqAAIAAEPIxqAAIRqAAIAAEOgA5zokIAAkOgA5zsyIAAkPgA5zxBIAAkOIRqAAIAAEOgACn1PIAAkPIKyAAIAAEPgAoJ1PgEAt2gZdgANZ5egAoJ5eg");
	this.shape_508.setTransform(-118.7,117.7);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("rgba(255,255,255,0.702)").s().p("EAt2ADiMg1/AAAMgwcAAAIAAnDMBxLAAAIAAHDg");
	this.shape_509.setTransform(-118.7,-95.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("rgba(255,255,255,0.502)").s().p("AVrZeIgDAAIgCAAIAAkOIAAkPIq3AAIAAkOIAAEOIqwAAIAAkOIAAEOIqyAAIAAkOIAAEOIqyAAIAAkOIAAEOIKyAAIAAEPIAAkPIKyAAIAAEPIqyAAIKyAAIAAEOIqyAAIAAkOIqyAAIAAkPIAAEPIqyAAIKyAAIAAEOIqyAAIAAkOIAAkPIAAkOIKyAAIKyAAIKyAAIKwAAIACAAIK1AAIACAAIADAAIKtAAIAAEOIqtAAIKtAAIAAEPIqtAAIKtAAIAAEOgAVmRBIAAkOgA1lRBIqyAAgAVmZeIq1AAIgCAAIAAkOIK3AAIAAEOgAKvZeIqwAAIAAkOIKwAAIAAEOgA1lZeIAAkOIKyAAIAAEOgAKvVQIAAkPIK3AAIAAEPgAgBVQIAAkPIKwAAIAAEPgAgBVQgAqzVQgAgBRBgA1lRBgAVrMqIgDAAIgCAAIAAkOIq3AAIAAkPIAAEPIqwAAIKwAAIAAEOIqwAAIAAkOIAAkPIKwAAIAAkNIAAENIqwAAIAAkNIAAENIqyAAIKyAAIAAEPIqyAAIAAkPIAAEPIqyAAIAAkPIKyAAIAAkNIKyAAIKwAAIACAAIK1AAIACAAIADAAIKtAAIAAENIqtAAIKtAAIAAEPIqtAAIKtAAIAAEOgAVmIcIAAkPIq3AAIK3AAgAVmENIAAkNgAKxMqIgCAAIAAkOIK3AAIAAEOgAgBMqIqyAAIAAkOIKyAAIAAEOgA1lMqIAAkOIKyAAIAAEOgA1lMqIqyAAIAAkOIAAkPIKyAAIAAEPIqyAAIKyAAIAAEOgAqzIcgA1lIcgAgBENgAgBENgA1lENIAAkNIKyAAIAAENgEggXAENIAAkNIKyAAIAAENgA1lAAgAVrgDIgDAAIgCAAIAAkOIq3AAIqwAAIAAkPIqyAAIKyAAIAAEPIKwAAIAAEOIqwAAIAAkOIqyAAIKyAAIAAEOIqyAAIAAkOIAAEOIqyAAIAAkOIKyAAIAAkPIAAkOIAAEOIqyAAIAAkOIAAEOIKyAAIAAEPIqyAAIAAkPIqyAAIAAkOIKyAAIKyAAIKyAAIKwAAIACAAIK1AAIACAAIADAAIKtAAIAAEOIqtAAIKtAAIAAEPIqtAAIKtAAIAAEOgAVmkRIAAkPIq3AAIAAkOIAAEOIqwAAIKwAAIAAEPIAAkPIK3AAgAVmogIAAkOgAgBogIAAkOgAKxgDIgCAAIAAkOIK3AAIAAEOgA1lgDIqyAAIAAkOIAAkPIKyAAIAAEPIqyAAIKyAAIAAEOgAgBkRgA1lkRgEAgYgIggAKvoggAqzoggAVrsyIgDAAIgCAAIAAkOIq1AAIgCAAIAAkPIACAAIK1AAIAAEPIACAAIADAAIKtAAIAAEOgAKxsyIgCAAIAAkOIACAAIK1AAIAAEOgAgBsyIAAkOIAAkPIKwAAIAAEPIqwAAIKwAAIAAEOgAqzsyIAAkOIAAkPIKyAAIAAEPIqyAAIKyAAIAAEOgAqzsyIqyAAIAAkOIKyAAIAAEOgA1lsyIqyAAIAAkOIAAkPIKyAAIAAEPIqyAAIKyAAIAAEOgAVrxAIgDAAIgCAAIAAkPIACAAIADAAIKtAAIAAEPgA1lxAIAAkPIqyAAIAAkOIKyAAIKyAAIKyAAIKwAAIACAAIK1AAIACAAIADAAIKtAAIAAEOIqtAAIgDAAIgCAAIAAkOIAAEOIq1AAIgCAAIAAkOIAAEOIqwAAIAAkOIAAEOIqyAAIAAkOIAAEOIqyAAIAAkOIAAEOIKyAAIAAEPgA1lxAgAVm1PgAKv1PgAqz1PgAqz1PgA1l1Pg");
	this.shape_510.setTransform(36.3,144.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-482,-118.8,726.5,427.6);


(lib.point_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-29.2,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape.setTransform(212.2,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAOAAAJAEQAJAEAFAIQAFAIAAAJQAAAJgEAGQgFAIgJAFQAMACAGAHQAGAIAAALQAAAJgEAIQgDAJgGADQgGAEgIADQgJACgMAAgAgeAxIAeAAIAMgBQAGgBAEgDQADgCADgFQADgEAAgHQAAgGgEgGQgEgFgGgCQgHgCgKAAIgeAAgAgegJIAcAAQAJAAAFgBQAHgCADgFQADgEAAgHQAAgHgDgEQgDgFgGgCQgFgBgMAAIgaAAg");
	this.shape_1.setTransform(200.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_2.setTransform(189.6,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIADALQAEAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_3.setTransform(174.3,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAGAIACALQAEAMAAARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMAAAeQABAfAHALQAHAKAKAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgKAAgGAJg");
	this.shape_4.setTransform(164.3,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMABARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMgBAeQABAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_5.setTransform(154.3,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIAOQAFgCACgEQABgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgEAGQgDAGgGADg");
	this.shape_6.setTransform(146.8,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIAEALQADAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_7.setTransform(139.3,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_8.setTransform(129.3,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_9.setTransform(118.6,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIAuIAAgSIAQAAIAAASgAgIgbIAAgSIAQAAIAAASg");
	this.shape_10.setTransform(106.9,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_11.setTransform(101.9,1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQAKAAAIADQAIAEADAIQADAHAAAMIAAA7g");
	this.shape_12.setTransform(94.3,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQAAgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_13.setTransform(84,5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_14.setTransform(77.3,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_15.setTransform(70.3,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAeBAIgbhgIgDgPIgCAPIgbBgIgSAAIgih/IARAAIAUBSIAFAbIAGgYIAZhVIASAAIASA/QAIAYACAWIAHgcIAUhRIARAAIgjB/g");
	this.shape_16.setTransform(57.2,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_17.setTransform(41.2,1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_18.setTransform(33.6,3.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_19.setTransform(23.6,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_20.setTransform(16.4,3.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAIAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_21.setTransform(10.4,3.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_22.setTransform(1.6,3.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQgBgRQAAgTAIgQQAIgOAOgIQAOgIAPAAQAUAAANAKQANAKAFASIgQADQgFgOgJgGQgIgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAFANAJAFQALAHAKAAQAOAAAKgJQAKgIADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_23.setTransform(-9.7,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-10.4,252.2,24.1);


(lib.point_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-29.2,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAQAMAAAHABQAJACAGAFQAHAEAEAIQADAIABAJQAAARgKAJQgLALgbAAIggAAIAAA1gAgfgBIAgAAQAQAAAHgHQAHgGAAgLQAAgIgEgGQgEgFgHgCIgPgBIggAAg");
	this.shape.setTransform(161.6,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAIQADAIAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEAMQgFALgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_1.setTransform(148.8,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_2.setTransform(135,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIABAPIAAATQgBAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_3.setTransform(126.3,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_4.setTransform(116.3,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAEQgDgJgFgGQgEgGgIgDQgIgEgKAAQgJAAgJAEQgIADgFAHQgGAFgDAHQgFAMAAANQAAAQAGAMQAGALAMAGQALAGALAAQALAAAKgFQALgDAFgGIAAgXIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_5.setTransform(104.2,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAASAIAJQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_6.setTransform(87,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_7.setTransform(77.3,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_8.setTransform(67.3,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGABQAKACAGAFQAHAEAEAIQAEAIAAAJQgBARgJAJQgLALgcAAIgeAAIAAA1gAgegBIAeAAQASAAAGgHQAHgGAAgLQAAgIgEgGQgEgFgHgCIgQgBIgeAAg");
	this.shape_9.setTransform(52,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAIQADAIAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEAMQgFALgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_10.setTransform(39.1,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_11.setTransform(23.1,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAKAGQAJAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_12.setTransform(13.9,4.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_13.setTransform(3.6,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_14.setTransform(-3.4,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_15.setTransform(-10.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-10.4,201.2,24.1);


(lib.point_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-40.9,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape.setTransform(150.5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQAEgEAKAAIAPACIgDANIgJgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_1.setTransform(145.9,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA0QgMgQgBgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAFAIAEALQACAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_2.setTransform(132.9,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQAAgVAEgOQAFgOAJgIQAKgHAMAAQAKAAAIAEQAIAEAEAIQAFAIAEALQACAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_3.setTransform(122.9,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAJAEAFAIQAFAIADALQACAMAAARQAAAWgEAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_4.setTransform(112.9,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_5.setTransform(103,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAHIAAgOIAvAAIAAAOg");
	this.shape_6.setTransform(90,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQACgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_7.setTransform(76.9,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_8.setTransform(66.9,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_9.setTransform(59.7,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AApBAIgPgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgIgZIgOAkIAqAAIgNgiIgHgbQgDANgFAMg");
	this.shape_10.setTransform(50,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_11.setTransform(37.9,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_12.setTransform(30.9,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_13.setTransform(20.9,3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_14.setTransform(14,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_15.setTransform(4.5,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_16.setTransform(-5.3,3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_17.setTransform(-14.1,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_18.setTransform(-22.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-10.4,198.6,24.1);


// stage content:
(lib.ra01p13 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0,s2:123,s3:228});

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
	this.frame_122 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_227 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_255 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(122).call(this.frame_122).wait(105).call(this.frame_227).wait(28).call(this.frame_255).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(256));

	// t5
	this.instance = new lib.point_5("synched",0);
	this.instance.setTransform(252,91.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(236).to({_off:false},0).to({alpha:1},5).wait(15));

	// hl
	this.instance_1 = new lib.hl3("synched",0);
	this.instance_1.setTransform(688,255,1,1,0,0,0,34,42);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(213).to({_off:false},0).to({alpha:1},5).wait(38));

	// t4
	this.instance_2 = new lib.point_4("synched",0);
	this.instance_2.setTransform(169.2,82.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(213).to({_off:false},0).to({alpha:1},5).wait(12).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(20));

	// hl
	this.instance_3 = new lib.hl2("synched",0);
	this.instance_3.setTransform(234,256,1,1,0,0,0,98,42);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(170).to({_off:false},0).to({alpha:1},5).wait(81));

	// t3
	this.instance_4 = new lib.point_3("synched",0);
	this.instance_4.setTransform(169.2,56.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(170).to({_off:false},0).to({alpha:1},5).wait(55).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(20));

	// hl
	this.instance_5 = new lib.hl("synched",0);
	this.instance_5.setTransform(499.5,137,1,1,0,0,0,147.5,24);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(129).to({_off:false},0).to({alpha:1},5).wait(122));

	// t2
	this.instance_6 = new lib.point_2("synched",0);
	this.instance_6.setTransform(180.9,31.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(129).to({_off:false},0).to({alpha:1},5).wait(96).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(20));

	// table
	this.instance_7 = new lib.chart_usablefuel("synched",0);
	this.instance_7.setTransform(618.6,233.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95).to({_off:false},0).to({alpha:1},6).wait(155));

	// t1
	this.instance_8 = new lib.point_1("synched",0);
	this.instance_8.setTransform(252,71.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(124).to({startPosition:0},0).to({alpha:0},5).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;