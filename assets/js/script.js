var timerEl = document.getElementById('timeleft');
var startEl = document.querySelector("#start");

// function countdown() {
//     var timeLeft = 75;
  
//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function () {
//       if (timeLeft > 1) {
//         timerEl.textContent = 'Time left: ' + timeLeft;
//         timeLeft--;
//       } else if (timeLeft === 1) {
//         timerEl.textContent = 'Time left: ' + timeLeft;
//         timeLeft--;
//       } else {
//         clearInterval(timeInterval);
//       }
//     }, 1000);
// }

startEl.addEventListener("click", function(){
    var timeLeft = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = 'Time left: ' + timeLeft;
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = 'Time left: ' + timeLeft;
        timeLeft--;
      } else {
        clearInterval(timeInterval);
      }
    }, 1000);
});