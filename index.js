// Write your code here!
let mainNode = document.querySelector('#main')
mainNode.remove()

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
const name = 'Filip'
newHeader.innerHTML = `${name} is the champion`
