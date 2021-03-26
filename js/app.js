
let dayEl = document.querySelector(".day")
let HourEl = document.querySelector(".hour")
let minEl = document.querySelector(".min")
let secEl = document.querySelector(".sec")

let dateEl = document.querySelector(".date")
let timeEl = document.querySelector(".time")
let submitEl = document.querySelector("button")



function getTimeDifference(start, end){
    let milliseconds = Math.floor(end - start)
    let seconds = Math.floor(milliseconds / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    let days = Math.floor(hours/24)
    
    
    hours = hours - (days * 24)
    minutes = minutes - (days * 24 * 60) - (hours * 60)
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60)
    return {
        days,
        hours,
        minutes,
        seconds,
    }
}

var countDown = setInterval(function(){
const startDate = new Date();
const endDate = new Date(`${setDate}, ${setTime}`) 
let timeDifferenceObj = getTimeDifference(startDate,endDate)

dayEl.firstChild.textContent = timeDifferenceObj.days.toLocaleString(undefined,{minimumIntegerDigits: 2});
HourEl.firstChild.textContent = timeDifferenceObj.hours.toLocaleString(undefined,{minimumIntegerDigits: 2});
minEl.firstChild.textContent = timeDifferenceObj.minutes.toLocaleString(undefined,{minimumIntegerDigits: 2});
secEl.firstChild.textContent = timeDifferenceObj.seconds.toLocaleString(undefined,{minimumIntegerDigits: 2});

if(dayEl.firstChild.textContent == 00 && HourEl.firstChild.textContent == 00 && minEl.firstChild.textContent == 00 && secEl.firstChild.textContent == 00){
    clearInterval(countDown)
}


},1000)
let setDate;
let setTime;

submitEl.addEventListener("click",function(){
    setTime = timeEl.value;
    setDate = dateEl.value;
})



