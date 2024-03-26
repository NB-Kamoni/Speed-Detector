document.getElementById('speedForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const speed = parseInt(document.getElementById('speedInput').value);
    const speedLimit = 70;
    const demeritPointsPerKmOverLimit = 1;
    const pointsThresholdForSuspension = 12;
    
    let demeritPoints = 0;
  
    if (speed > speedLimit) {
      const kmOverLimit = speed - speedLimit;
      demeritPoints = Math.floor(kmOverLimit / 5) * demeritPointsPerKmOverLimit;
    }
  
    let resultMessage = '';
    if (demeritPoints > 0) {
      resultMessage = `Points: ${demeritPoints}`;
      if (demeritPoints >= pointsThresholdForSuspension) {
        resultMessage += ' (License suspended)';
      }
    } else {
      resultMessage = 'Ok';
    }
  
    document.getElementById('result').textContent = resultMessage;
  });
  