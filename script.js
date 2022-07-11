const mainContainer = document.querySelector('#main');

function makeDiv() {
var contentDiv = document.createElement('div');
contentDiv.className = 'content';
mainContainer.appendChild(contentDiv);
}
console.log(mainContainer);


for (let i=0; i<256; i++){
    makeDiv();   
}