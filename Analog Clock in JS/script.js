setInterval(setClock, 1000); //run set clock every 1s

//get our html elements
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const body = document.querySelector('body');


function setClock(){
    const currentDate = new Date();     //get system date
    const secondsRatio = currentDate.getSeconds()/60;  //get ratio of seconds angle to 60s 
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;  //get ratio of minutes angle w.r.t secondsRatio 
    const hoursRatio = (minutesRatio + currentDate.getHours())/12;    ///get ratio of hours angle w.r.t minutesRatio

    //set rotations for each hand
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

//set rotation function
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

//change BG function
function changeBG(element){
    element.style.setProperty('--hue', Math.floor(Math.random() * 50) + 300);
    element.style.setProperty('--hue2', Math.floor(Math.random() * 50) + 170);
}

setInterval(changeBG, 1000, body); //run change BG with 'body' arg every 1s
setClock(); //so we set our clock immediately on run