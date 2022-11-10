const sec = document.getElementById('seconds');
const min = document.getElementById('minutes');
const hr = document.getElementById('hours')

const getTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

}

