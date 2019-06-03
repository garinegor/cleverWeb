class Marker  {
    constructor(id, side, x, y, z) {
        this.id = id;
        this.side = side;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    addObject(markerId, mmMarkerSide, left, top) {
      not_expand();

      var marker;
      addMarkerToList(markerId);
      marker = generateArucoMarker(4, 4, "4x4_1000", markerId);

      var scale = calculateScaleFactor(marker, mmMarkerSide);

      marker.set({
        id: markerId,
        side: mmMarkerSide,
        left: left,
        top: top,
        scaleX: scale,
        scaleY: scale,
        z: 0,
        main: false
      });

      canvas.add(marker);

      return marker;
    }

    generateObject(width, height, dictName, id) {
      console.log('Generate ArUco marker ' + dictName + ' ' + id);

      var bytes = dict[dictName][id];
      var bits = [];
      var bitsCount = width * height;

      // Parse marker's bytes
      for (var byte of bytes) {
        var start = bitsCount - bits.length;
        for (var i = Math.min(7, start - 1); i >= 0; i--) {
          bits.push((byte >> i) & 1);
        }
      }
      var marker = [];

      // Background rect
      var backRect = new fabric.Rect({
        left: 0,
        top: 0,
        originX: 'left',
        originY: 'top',
        width: width + 2,
        height: height + 2,
        fill: 'black'
      });
      marker.push(backRect);

      // "Pixels"
      for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
          var color = bits[i * height + j] ? 'white' : 'black';
          var pixel = new fabric.Rect({
            left: j + 1,
            top: i + 1,
            originX: 'left',
            originY: 'top',
            width: 1,
            height: 1,
            fill: color,
            hasBorders: false
          });
          marker.push(pixel);
        }
      }
      // generate group object
      var group = new fabric.Group(marker, {
        width: width + 2,
        height: height + 2,
        originX: 'left',
        originY: 'top',
        transparentCorners: false,
        lockScalingFlip: true
      }).setCoords().setControlsVisibility({
        'ml': false,
        'mt': false,
        'mr': false,
        'mb': false
      });

      return group;
    }

    generateSVG(width, height, id) {
    var bytes = dict["4x4_1000"][id];
	var bits = [];
	var bitsCount = width *  height;

	// Parse marker's bytes
	for (var byte of bytes) {
		var start = bitsCount - bits.length;
		for (var i = Math.min(7, start - 1); i >= 0; i--) {
			bits.push((byte >> i) & 1);
		}
	}

	var svg = $('<svg/>').attr({
		viewBox: '0 0 ' + (width + 2) + ' ' + (height + 2),
		xmlns: 'http://www.w3.org/2000/svg',
		'shape-rendering': 'crispEdges' // disable anti-aliasing to avoid little gaps between rects
	});

	// Background rect
	$('<rect/>').attr({
		x: 0,
		y: 0,
		width: width + 2,
		height: height + 2,
		fill: 'black'
	}).appendTo(svg);

	// "Pixels"
	for (var i = 0; i < height; i++) {
		for (var j = 0; j < width; j++) {
			var color = bits[i * height + j] ? 'white' : 'black';
			var pixel = $('<rect/>').attr({
				width: 1,
				height: 1,
				x: j + 1,
				y: i + 1,
				fill: color
			});
			pixel.appendTo(svg);
		}
	}

	return svg;
    }
}