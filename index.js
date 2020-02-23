// remove the DOM node 'main#main':
let main = document.getElementById("main")
main.remove()

// add a 'newHeader' variable that points to node 'h1#victory'
// with "YOUR-NAME is the champion" inside
// add an h1 with an ID of "victory", where the inner HTML is the above-mentioned
let newHeader = document.createElement("h1")
newHeader.id = "victory"
let name = "Cindy"
newHeader.innerHTML = `${name} is the champion`