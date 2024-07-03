const counterEL = document.querySelector(".counter")

const BarEL = document.querySelector(".loading-bar-front")

let idx = 0;

updateNum()

function updateNum(){
    counterEL.innerText = idx + "%"

    BarEL.style.width = idx +  "%"
    idx++
    if(idx < 101){
        setTimeout(updateNum, 20)
    }
}