const buttonNo = document.querySelector("#buttonNo");
const buttonYes = document.querySelector("#buttonYes")
const buttonExtra = document.querySelector("#buttonExtra");

const answer = document.querySelector("#answer");

let maxWidth = 81;
let maxHeight = 60;


buttonNo.addEventListener("mouseenter",()=>{
            buttonNo.classList.add("button_random_position");
            buttonExtra.classList.add("buttonExtra_active");
            let width = (Math.random()*maxWidth);
            let randomWidth = width + "%"
            buttonNo.style.left = randomWidth;
            let height = (Math.random()*maxHeight -1);
            let randomHeight = height + "%";
            buttonNo.style.top = randomHeight;
    })
    buttonYes.addEventListener("click",()=>{
        answer.textContent = "sabia que dirias que si";
        buttonNo.classList.add("button_random_disable");
    })