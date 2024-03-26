// Adds an event listener to the form submit event
document.getElementById('speedForm').addEventListener('submit', function(event) {
    event.preventDefault();
     // Gets the input value
    const speed = parseInt(document.getElementById('speedInput').value);
    const speedLimit = 70;
    const demeritPointsPerKmOverLimit = 1;
    const pointsThresholdForSuspension = 12;
    
    let demeritPoints = 0;
    // Calculates demerit points if speed is above the limit
    if (speed > speedLimit) {
      const kmOverLimit = speed - speedLimit;
      demeritPoints = Math.floor(kmOverLimit / 5) * demeritPointsPerKmOverLimit;
    }
    // Generates status based on demerit points
    let resultMessage = '';
    if (demeritPoints > 0) {
      resultMessage = `Dimerit Points: ${demeritPoints}`;
      if (demeritPoints >= pointsThresholdForSuspension) {
        resultMessage += 'Status: (License suspended)';
      }
    } else {
      resultMessage = 'Status: Ok';
    }
  
    document.getElementById('result').textContent = resultMessage;
  });

  //  Resets the grades for new grading 
function refreshPage() {
    window.location.reload();
}
  