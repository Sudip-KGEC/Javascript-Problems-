// create alarm clock


function setAlarm(hours , minutes , secconds) {

    let alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(secconds);

    console.log("Alarm set for: " + alarmTime.toLocaleTimeString());
  
    let currentTime = new Date();
  
    let timeToAlarm = alarmTime - currentTime;
  
    if (timeToAlarm < 0) {
      console.log("Alarm time has already passed for today. Setting for tomorrow.");
      timeToAlarm += 24 * 60 * 60 * 1000; 
    }

    setTimeout(() => {
      console.log("Alarm ringing! Time to wake up!");
    }, timeToAlarm);

}


setAlarm(20, 2, 0);