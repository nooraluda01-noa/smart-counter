let decreaseBtn = document.querySelector(".btn-decrease")
let resetBtn = document.querySelector(".btn-reset")
let increaseBtn = document.querySelector(".btn-increase")

let valueNumber = document.getElementById("value")
let count = 0 
 function checkColor(){
    if(count === 0){
        valueNumber.style.color="#102a43"
    }else if(count >0){
        valueNumber.style.color="green"
    }else{
        valueNumber.style.color="red"
    }
 }
decreaseBtn.addEventListener('click',function(){
     count--
     valueNumber.textContent = count
    checkColor()
})
resetBtn.addEventListener('click',function(){
    count =0
    valueNumber.textContent=0
    checkColor()
})
increaseBtn.addEventListener('click',function(){
    count++
    valueNumber.textContent = count
    checkColor()
})

