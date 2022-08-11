const sekunden = document.getElementById('sek-zeiger')
const minuten = document.getElementById('min-zeiger')
const stunden = document.getElementById('std-zeiger')

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;

    console.log(hours)
    console.log(minutes)
    console.log(seconds)

    sekunden.style.transform ='rotate(' + (seconds * timeInterval) + 'deg)' 
    minuten.style.transform ='rotate(' + (minutes * timeInterval + seconds /10) + 'deg)' 
    stunden.style.transform ='rotate(' + (hours * 30 + minutes / 2) + 'deg)' 

}

setInterval (getTime, 100)