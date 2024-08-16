function updateCountdown() {
    const today = new Date();
    const vacationDate = new Date(today.getFullYear(), 8, 21);
    const timeDifference = vacationDate - today;

    const dayNumberElement = document.getElementById('day-number');
    const dayLabelElement = document.getElementById('day-label');
    const countdownRest = document.getElementById('rest');

    if (timeDifference > 0) {
        const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

        dayNumberElement.textContent = daysRemaining;
        
        let restText = '';
        
        if (hoursRemaining > 0 || daysRemaining > 0) {
            restText += `${hoursRemaining}H `;
        }
        if (minutesRemaining > 0 || hoursRemaining > 0 || daysRemaining > 0) {
            restText += `${minutesRemaining}m `;
        }
        
        restText += `${secondsRemaining}s`;

        countdownRest.textContent = restText;
    } else {
        dayNumberElement.textContent = '0';
        dayLabelElement.textContent = '';
        countdownRest.textContent = 'As férias já começaram!';
    }
}

setInterval(updateCountdown, 1000);
