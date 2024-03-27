function drawHorizontalBars(context, startX, width, startY, spacing, count, lineWidth, lineColor) {
    for (let i = 0; i < count; i++) {
        let y = startY + i * spacing; // Calculate the Y position for each bar
        context.beginPath();
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.rect(startX, y, width, 20);
        context.stroke();
        context.closePath();
    }
}

export default drawHorizontalBars;