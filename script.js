var fidelity = 96;

const mainContainer = document.querySelector('#main');
const setBtn = document.querySelector('#setBtn');


function makeDiv() {
    var contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    contentDiv.addEventListener("mouseover", function(){
        this.classList.add("active");
    })
    mainContainer.appendChild(contentDiv);

}




const content = document.querySelectorAll(".content");

setBtn.addEventListener("click", function(){
    let fidelity = prompt("Enter a number between 1 and 100", "96");
        if(fidelity < 1 || fidelity > 100 || fidelity == NaN){
            alert("Invalid input")
            location.reload();
        }
        else{
            console.log(fidelity);
            document.querySelectorAll(".content").forEach(content => {content.style.width = fidelity/9.6});
            }
            
    } )

for (let i=0; i<fidelity*fidelity; i++){
        makeDiv();  
    }



console.log(mainContainer);
console.log(content);
console.log(fidelity);

