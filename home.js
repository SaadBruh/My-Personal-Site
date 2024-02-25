let button = document.getElementById("button-1")
let botton = document.getElementById("button-2")

let change = "Sweetest"


function may(){
 button.innerText = change
 botton.innerText = change
 

}

function saad(){
    button.innerText = change
    botton.innerText = change
 }

change.onclick = revert()

function revert(){
 change.innerText = button
 change.innerText = botton
}
