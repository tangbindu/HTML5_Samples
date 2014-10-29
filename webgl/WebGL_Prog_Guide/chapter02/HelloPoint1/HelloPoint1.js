// HelloPoint1.js

// vertex shader
var vs = 
	'void main() {\n' +
	'	gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' +
	'	gl_PointSize = 10.0;\n' +
	'}\n';

var fs =
	'void main() {\n' +
	'	gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
	'}\n';

function main() {
	// get "canvas" element
	var canvas = document.getElementById('webgl');

	// get the webgl rendering context
	var gl = canvas.getContext('experimental-webgl');
	if (!gl) {
		console.log('Failed to get the rendering context for webgl');
		return;
	}

	if (!initShaders(gl, vs, fs)) {
		console.log('Failed to initialize shaders');
		return;
	}

	// clear the canvas
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	gl.drawArrays(gl.POINTS, 0, 1);
}
