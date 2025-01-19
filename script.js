function updateClock() {
    const now = new Date();

    const hours = now.getHours()
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = (hours * 30) + (minutes * 0.5);
    const minuteAngle = (minutes * 6) + (seconds * 0.1);
    const secondAngle = seconds * 6;

    document.querySelector(".pointer.hour").style.transform = `rotate(${hourAngle}deg)`;
    document.querySelector(".pointer.min").style.transform = `rotate(${minuteAngle}deg)`;
    document.querySelector(".pointer.sec").style.transform = `rotate(${secondAngle}deg)`;

    document.querySelectorAll(".pointer.hour .pointer-item").forEach((item) => {
        item.textContent = hours.toString().padStart(2, "0");
    })

    document.querySelectorAll(".pointer.min .pointer-item").forEach((item) => {
        item.textContent = minutes.toString().padStart(2, "0");
    })

    document.querySelectorAll(".pointer.sec .pointer-item").forEach((item) => {
        item.textContent = seconds.toString().padStart(2, "0");
    })
}

setInterval(updateClock, 1000);

updateClock();