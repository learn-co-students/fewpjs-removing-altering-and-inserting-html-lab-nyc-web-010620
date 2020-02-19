// Write your code here!



let main = document.getElementById('main')
main.remove()

let newHeader = document.createElement('h1')
newHeader.id = "victory"
document.body.appendChild(newHeader);
newHeader.innerHTML = '<h1 id="victory">KATE is the champion</h1>'