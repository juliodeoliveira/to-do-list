var outter = document.querySelector("div#output")
var userText = document.querySelector("input#user")
var items = document.querySelector("input#check")

function add() {
   identification++
   outter.innerHTML += `<br><input type="checkbox" name="check" id="check"> ${userText.value} `

   userText.value = ""
   
}
function remove() {
   

   var screen = window.confirm('Todas as terefas serão apagadas!')
   if (screen == true) {
      outter.innerHTML = ""
   }
}