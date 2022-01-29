//const value = document.getElementById('#homepage');
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const value = document.querySelector(".value");


var cnt=0;
increase.addEventListener('click', function (){
cnt++;
value.innerHTML =cnt;
document.body.style.backgroundColor="green";
}   
)
decrease.addEventListener('click', function (){
    cnt--;
    value.innerHTML =cnt;
    document.body.style.backgroundColor="red";
}   
)
