import drawFilledShape from './filledShape.js';

function drawStrokedRectangles(startX, startY, endX, endY, interval, count, strokeColor, lineWidth) {
    for (let i = 0; i < count; i++) {
        const x = startX + i * interval;
        drawFilledShape([[x, startY], [x, endY], [x + 10, endY], [x + 10, startY]], null, strokeColor, lineWidth);
    }
}

export default drawStrokedRectangles;