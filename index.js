// PROBLEMA: Na hora de adicionar, os outros itens são desmarcados. SOLUÇÃO: Adicionar os itens que foram marcados em uma lista e assim, verificar, se foi marcado antes, recebe valor checked.

var outter = document.querySelector("div#output")
var userText = document.querySelector("input#user")
var items = document.querySelector("input#check")

function add() {

   outter.innerHTML += `<br><input type="checkbox" name="check" id="check"> ${userText.value} `

   userText.value = ""
   
}
function remove() {
   

   var screen = window.confirm('Todas as terefas serão apagadas!')
   if (screen == true) {
      outter.innerHTML = ""
   }
}