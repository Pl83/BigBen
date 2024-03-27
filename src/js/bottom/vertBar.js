function drawVerticalBars(context, startX, endX, startY, endY, lineWidth, lineColor) {
    for (let x = startX; x <= endX; x += 20) { // Increment by 20 for each bar set
        context.beginPath();
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.moveTo(x + 0.5, endY);
        context.lineTo(x + 0.5, startY);
        context.lineTo(x + 10.5, startY);
        context.lineTo(x + 10.5, endY);
        context.stroke();
        context.closePath();
    }
}

export default drawVerticalBars;