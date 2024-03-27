function drawHand(contextCadran, pos, length, width) {
    contextCadran.beginPath();
    contextCadran.lineWidth = width;
    contextCadran.lineCap = "round";
    contextCadran.strokeStyle = "grey";
    contextCadran.moveTo(0,0);
    contextCadran.rotate(pos);
    contextCadran.lineTo(0, -length);
    contextCadran.stroke();
    contextCadran.rotate(-pos);
}

export default drawHand;