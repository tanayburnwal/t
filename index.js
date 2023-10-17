let counter=0
const heading=document.getElementById('heading1');
const value=document.getElementById('value');
const button=document.getElementById('btn');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
button.addEventListener('click',increase);
function increase(){
    counter++;
    value.innerHTML=counter;
}
button2.addEventListener('click',decrease);
function decrease(){
    counter--;
    value.innerHTML=counter;
}
 button3.addEventListener('click',reset);
 function reset(){
     counter=0;
     value.innerHTML=counter;
}