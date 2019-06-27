const secHand= document.querySelector('.sec-hand');
const minHand= document.querySelector('.min-hand');
const hourHand= document.querySelector('.hour-hand');
const pivot= document.querySelector('.pivot');


const secDigit = document.getElementsByClassName("sec")[0];
const minDigit = document.getElementsByClassName("min")[0];
const hourDigit = document.getElementsByClassName("hour")[0];
const ampm= document.getElementsByClassName("ampm")[0];

function setTime(){
    const now= new Date();

    let sec= now.getSeconds();
    const secDegree= ((sec/60)*360)+90;
    secHand.style.transform= `rotate(${secDegree}deg)`;
    pivot.style.transform= `rotate(${secDegree}deg)`;
    sec= (sec < 10 ? '0' : '') + sec;
    secDigit.innerText= sec;
    
    let min= now.getMinutes();
    const minDegree= ((min/60)*360) + ((sec/60)*6) +90;
    minHand.style.transform= `rotate(${minDegree}deg)`;
    min= (min < 10 ? '0' : '') + min;
    minDigit.innerText= min;
    
    const hour= now.getHours();
    const hourDegree= ((hour/12)*360) + ((min/60)*30) +90;
    hourHand.style.transform= `rotate(${hourDegree}deg)`;
    let hourData= hour%12;
    hourData= (hourData < 10 ? '0' : '') + hourData;
    hourDigit.innerText= hourData;

    if(hour>12)
        ampm.innerText= "PM";
    else
        ampm.innerText="AM";
}

setTime();

setInterval(setTime, 1000);

setTime();