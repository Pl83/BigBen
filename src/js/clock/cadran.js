function DrawCadran(contextCadran, radius) {
    contextCadran.beginPath();
    contextCadran.arc(0, 0, radius, 0, 2*Math.PI);
    contextCadran.fillStyle = 'white';
    contextCadran.fill();
    contextCadran.strokeStyle = 'grey';
    contextCadran.lineWidth = radius*0.1;
    contextCadran.stroke();
    contextCadran.beginPath();
    contextCadran.arc(0, 0, radius*0.03, 0, 2*Math.PI);
    contextCadran.fillStyle = 'black';
    contextCadran.fill();
}

export default DrawCadran;