const HOURHAND=document.querySelector("#hour");
const MINUTEHAND=document.querySelector("#minute");
const SECONDHAND=document.querySelector("#second");
var date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let hrposition=(hr*360/12)+(min*(360/60)/12);
    let minposition=(min*360/60)+(sec*(360/60)/60);
    let secposition=sec*(360/60);

function run(){
    secposition=secposition+6;
    minposition=minposition+(6/60);
    hrposition=hrposition+(3/360);
    HOURHAND.style.transform="rotate(" + hrposition + "deg)";
    MINUTEHAND.style.transform="rotate(" + minposition + "deg)";
    SECONDHAND.style.transform="rotate(" + secposition + "deg)";
}

var interval=setInterval(run,1000);