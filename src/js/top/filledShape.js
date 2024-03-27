function drawFilledShape(points, fillColor, strokeColor = null, lineWidth = 0) {
    const context = topPart.getContext("2d");
    context.beginPath();
    context.moveTo(points[0][0], points[0][1]);

    for (let i = 1; i < points.length; i++) {
        context.lineTo(points[i][0], points[i][1]);
    }

    context.fillStyle = fillColor;
    context.fill();

    if (strokeColor) {
        context.strokeStyle = strokeColor;
        context.lineWidth = lineWidth;
        context.stroke();
    }

    context.closePath();
}

export default drawFilledShape;