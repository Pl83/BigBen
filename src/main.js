import drawHorizontalBars from "./js/bottom/horizBar.js";
import drawVerticalBars from "./js/bottom/vertBar.js";
import drawFilledShape from "./js/top/filledShape.js";
import drawStrokedRectangles from "./js/top/filledRect.js";
import DrawCadran from "./js/clock/cadran.js";
import DrawNumbers from "./js/clock/number.js";
import DrawTime from "./js/clock/time.js";


//Canvas pour la partie supérieur de l'horloge
const topPart = document.getElementById("topPart");

// Drawing the large burlywood rectangle
drawFilledShape([[0, 150], [0, 120], [125, 120], [125, 150]], "burlywood");

// Drawing the stroked rectangles
drawStrokedRectangles(16.5, 150, 26.5, 120, 20, 5, "rgb(197, 155, 101)", 5);

// Drawing the blue trapezoid
drawFilledShape([[0, 120], [25, 85], [100, 85], [125, 120]], "blue");

// Drawing the upper burlywood rectangle
drawFilledShape([[25, 85], [25, 50], [100, 50], [100, 85]], "burlywood");

// Drawing the stroked rectangles on the upper part
drawStrokedRectangles(36.5, 85, 46.5, 50, 20, 3, "rgb(197, 155, 101)", 5);

// Drawing the top blue triangle
drawFilledShape([[25, 50], [62.5, 0], [100, 50]], "blue");

// Cavans pour le cadran 

const cadran = document.getElementById("cadran");
const contextCadran = cadran.getContext("2d");
let radius = cadran.height / 2;
contextCadran.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000); 

function drawClock() {
    DrawCadran(contextCadran, radius);
    DrawNumbers(contextCadran, radius);
    DrawTime(contextCadran, radius);
}


// Canvas pour la partie inférieur de l'horloge

const bottomPart = document.getElementById("bottomPart");
const contextBottom = bottomPart.getContext("2d");

const lineColor = "rgb(197, 155, 101)";
const lineWidth = 5;

// Draw vertical bars
drawVerticalBars(contextBottom, 16.5, 96.5, 0, 400, lineWidth, lineColor);

// Draw horizontal bars
drawHorizontalBars(contextBottom, 0, 125, 20, 100, 4, lineWidth, lineColor);