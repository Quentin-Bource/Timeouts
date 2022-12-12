
  let temps = 50
  const timerElement = document.getElementById("timer")
    let i = 1
    

  function timerTemps() {
    timerElement.innerText = temps
    temps++
    if (temps == i * 60 && i == 1) {
    
    alert (i + " minute s'est écoulée");

    i++}
    
    else if (temps == i * 60 && i != 1)
{
    alert (i + "minutes se sont écoulées")
    i++}
  }

  setInterval(timerTemps, 300)