const buttons = document.querySelectorAll(".buttons")
const buttonNo = document.querySelector("#buttonNo");
const buttonExtra = document.querySelector("#buttonExtra");

const answer = document.querySelector("#answer");

let maxWidth = 81;
let maxHeight = 60;


buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        //No button
        if(button.id === "buttonNo"){
            buttonNo.classList.add("button_random_position");
            buttonExtra.classList.add("buttonExtra_active");
            let width = (Math.random()*maxWidth);
            let randomWidth = width + "%"
            buttonNo.style.left = randomWidth;
            let height = (Math.random()*maxHeight -1);
            let randomHeight = height + "%";
            buttonNo.style.top = randomHeight;
        }   //Yes button
        else{
            answer.textContent = "sabia que dirias que si";
        }
    })
})