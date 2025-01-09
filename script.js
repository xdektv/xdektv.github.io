function updateClock() {
    const options = { 
        timeZone: 'Europe/Warsaw', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
    };
    const now = new Date().toLocaleTimeString('pl-PL', options);
    document.getElementById('clock').textContent = `for me it is: ${now}`;
}

setInterval(updateClock, 1000);
updateClock();