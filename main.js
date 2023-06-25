const counter = document.querySelector(".counter");
const frontBar = document.querySelector(".front-bar");

let n = 0;

function gogo(){
    
    counter.innerHTML = n + "%";
    frontBar.style.width = n + "%";
    n++
    if(n<101){
        setTimeout(gogo, 10);
    }
  
}
gogo()