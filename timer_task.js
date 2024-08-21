// function start(params) {
    
// }
let timer ;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
    timer = setInterval(function() {
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }

        // Display the timer
        console.log(
            (hours < 10 ? "0" : "") + hours + ":" + 
            (minutes < 10 ? "0" : "") + minutes + ":" + 
            (seconds < 10 ? "0" : "") + seconds
        );
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timerDisplay").innerHTML = "00:00:00";
}

// Example usage:
// startTimer(); // Start the timer
// stopTimer();  // Stop the timer
// resetTimer(); // Reset the timer
