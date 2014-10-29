// HelloWebGL.js
function main() {
	// get "canvas" element
	var canvas = document.getElementById('webgl');

	// get the webgl rendering context
	var gl = canvas.getContext('experimental-webgl');
	if (!gl) {
		console.log('Failed to get the rendering context for webgl');
		return;
	}

	// clear the canvas
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}
