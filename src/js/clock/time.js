import drawHand from "./hand.js";

function DrawTime(contextCadran, radius){
    const now = new Date();
    let second = now.getSeconds();
    second=(second*Math.PI/30);
    drawHand(contextCadran, second, radius*0.9, radius*0.02);
    let minute = now.getMinutes();
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(contextCadran, minute, radius*0.8, radius*0.07);
    let hour = now.getHours();
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(contextCadran, hour, radius*0.5, radius*0.07);
}

export default DrawTime;