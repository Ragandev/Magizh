var stepOne = document.querySelector(`.step-1`);
var stepTwo = document.querySelector(`.step-2`);
var stepThree = document.querySelector(`.step-3`);
var stepTwoTwo = document.querySelector(`.step-2-2`);
var cartSec = document.querySelector(`.cart-item-sec`);
var billSec = document.querySelector(`.bill-sec`);
var paySec = document.querySelector(`.pay-sec`);

function step1(){
    cartSec.style.display = `block`;    
    billSec.style.display = `none`;
    paySec.style.display = `none`;
}
function step2(){
    cartSec.style.display = `none`;
    billSec.style.display = `block`;
    paySec.style.display = `none`;
}
function step3(){
    cartSec.style.display = `none`;
    billSec.style.display = `none`;
    paySec.style.display = `block`;
}

stepOne.addEventListener("click", function(){
    step1();
})
stepTwo.addEventListener("click", function(){
    step2();
})
stepTwoTwo.addEventListener("click", function(){
    step2();
})
stepThree.addEventListener("click", function(){
    step3();
})