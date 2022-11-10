const sec = document.getElementById('seconds');
const min = document.getElementById('minutes');
const hr = document.getElementById('hours')

const getTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;

    sec.style.transform = 'rotate(' + (seconds * timeInterval)+ 'deg)'
    min.style.transform = 'rotate(' + (minutes * timeInterval + seconds / 10 )+ 'deg)'
    hr.style.transform = 'rotate(' + (hours * 30 + minutes / 2)+ 'deg)'

    console.log(minutes + timeInterval);
}

setInterval(getTime, 100)
