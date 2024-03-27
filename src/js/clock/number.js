import numberToRoman from './toRoman.js';

function DrawNumbers(contextCadran, radius) {
    contextCadran.font = radius*0.15 + "px arial";
    contextCadran.textBaseline="middle";
    contextCadran.textAlign="center";
    for(let num = 1; num < 13; num++){
        let ang = num * Math.PI / 6;
        contextCadran.rotate(ang);
        contextCadran.translate(0, -radius*0.85);
        contextCadran.rotate(-ang);
        contextCadran.fillText(numberToRoman(num), 0, 0);
        contextCadran.rotate(ang);
        contextCadran.translate(0, radius*0.85);
        contextCadran.rotate(-ang);
    }
}


export default DrawNumbers;