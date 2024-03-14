
function pintar(color){
  let ele = document.getElementById('ele1')
  ele.style.backgroundColor = color;
}
pintar("green");


function pintar2(){
  ele.style.backgroundColor = 'yellow';
}

let ele = document.getElementById('ele1') 
ele.addEventListener("click", pintar2);


