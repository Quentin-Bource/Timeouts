  let i = 0;
  const txt = 'Prout';
  let speed = 1000;

function prout() {
  let newTxt = document.getElementById("demo")
  console.log(newTxt)
  if (i < txt.length) {
    newTxt.innerHTML += txt[i];
    i++;
  }
  else if (i == txt.length){
    newTxt.textContent = "";
    i = 0;
  } 
  setTimeout(prout, speed)
}
prout()



