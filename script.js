const mainContainer = document.querySelector('#main');



function makeDiv() {
    var contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    contentDiv.addEventListener("mouseover", function(){
        this.classList.add("active");
    })
    mainContainer.appendChild(contentDiv);

}


for (let i=0; i<256; i++){
    makeDiv();  
}

const content = document.querySelectorAll('#content');



console.log(mainContainer);
console.log(content);

