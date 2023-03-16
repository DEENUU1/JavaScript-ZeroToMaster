function convertToSeconds(hours, minutes) {
    let hoursToSeconds = (hours * 60) * 60;
    let minutesToSeconds = minutes * 60;
    console.log(hoursToSeconds + minutesToSeconds); 
  }
  
  function convertToHours(minutes) {
    let minutesToHours = minutes / 60;
    console.log(minutesToHours);
  }
  
  convertToSeconds(1, 30);
  convertToHours(120);