// HelloCanvas.js
function main() {
	// get "canvas" element
	var canvas = document.getElementById('canvas');

	// get the canvas rendering context
	var ctx = canvas.getContext('2d');
	if (!ctx) {
		console.log('Failed to get the rendering context for canvas');
		return;
	}

	// clear the canvas
	ctx.fillStyle = 'rgba(0, 0, 255, 1.0)';
	ctx.fillRect(10, 10, 400, 400);
}
